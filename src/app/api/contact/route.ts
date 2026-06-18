import { NextResponse } from "next/server";
import { createTransport } from "nodemailer";
import { rateLimit } from "@/lib/rate-limit";

const emailConfig = {
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
  debug: process.env.NODE_ENV !== "production",
  logger: process.env.NODE_ENV !== "production",
};

// Fallback rate limit en mémoire (best-effort quand Redis est absent)
const inMemoryStore = new Map<string, { count: number; resetAt: number }>();

function inMemoryRateLimit(
  identifier: string,
  limit = 5,
  windowMs = 3_600_000
): boolean {
  const now = Date.now();
  const entry = inMemoryStore.get(identifier);
  if (!entry || now > entry.resetAt) {
    inMemoryStore.set(identifier, { count: 1, resetAt: now + windowMs });
    return true;
  }
  if (entry.count >= limit) return false;
  entry.count++;
  return true;
}

// Sanitize pour les champs qui alimentent des en-têtes email (name, company, subject)
// Critique : supprime \r et \n pour bloquer l'email header injection
function sanitizeHeaderField(input: string, maxLength: number): string {
  return input
    .replace(/[\r\n]/g, "")           // header injection
    .replace(/[\x00-\x1F\x7F]/g, "")  // caractères de contrôle
    .replace(/[<>"'`]/g, "")           // HTML/template injection
    .trim()
    .slice(0, maxLength);
}

// Sanitize pour le corps du message (préserve les sauts de ligne légitimes)
function sanitizeMessageField(input: string, maxLength: number): string {
  return input
    .replace(/\0/g, "")                              // null bytes
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "") // contrôle sauf \n \r \t
    .replace(/[<>"'`]/g, "")                         // HTML/template injection
    .trim()
    .slice(0, maxLength);
}

const EMAIL_REGEX = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
  website?: string; // honeypot
}

const getAutoReplyTemplate = (name: string) => `
Cher(e) ${name},

Merci d'avoir pris contact avec moi. J'ai bien reçu votre message et je vous répondrai dans les plus brefs délais.

En attendant, n'hésitez pas à consulter mon portfolio pour en savoir plus sur mes réalisations.

Cordialement,
Hermann MOUSSAVOU
Développeur Fullstack
`;

const getNotificationTemplate = (data: Omit<ContactFormData, "website">) => `
Nouveau message de contact reçu :

Nom: ${data.name}
Email: ${data.email}
Entreprise: ${data.company || "Non spécifié"}

Message:
${data.message}
`;

export async function POST(request: Request) {
  try {
    // 1. Vérification Content-Type
    const contentType = request.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return NextResponse.json(
        { error: "Content-Type invalide" },
        { status: 415 }
      );
    }

    // 2. Vérification Origin (protection CSRF)
    const origin = request.headers.get("origin");
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
    if (siteUrl && origin && !origin.startsWith(siteUrl)) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    // 3. Variables d'environnement requises
    const requiredEnvVars = {
      SMTP_HOST: process.env.SMTP_HOST,
      SMTP_PORT: process.env.SMTP_PORT,
      SMTP_USER: process.env.SMTP_USER,
      SMTP_PASSWORD: process.env.SMTP_PASSWORD,
      CONTACT_EMAIL: process.env.CONTACT_EMAIL,
    };
    const missingVars = Object.entries(requiredEnvVars)
      .filter(([, v]) => !v)
      .map(([k]) => k);
    if (missingVars.length > 0) {
      console.error("Variables d'environnement manquantes:", missingVars);
      return NextResponse.json(
        { error: "Configuration serveur incomplète" },
        { status: 500 }
      );
    }

    // 4. Rate limiting (Redis en priorité, mémoire en fallback)
    const identifier =
      request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      "anonymous";
    try {
      const result = await rateLimit(identifier);
      if (!result.success) {
        return NextResponse.json(
          { error: "Trop de requêtes. Veuillez réessayer plus tard." },
          { status: 429 }
        );
      }
    } catch {
      if (!inMemoryRateLimit(identifier)) {
        return NextResponse.json(
          { error: "Trop de requêtes. Veuillez réessayer plus tard." },
          { status: 429 }
        );
      }
    }

    // 5. Parse du body
    let data: ContactFormData;
    try {
      data = await request.json();
    } catch {
      return NextResponse.json({ error: "Corps de requête invalide" }, { status: 400 });
    }

    // 6. Honeypot (champ "website" — doit rester vide)
    if (data.website) {
      // Silencieux : on simule un succès pour ne pas alerter les bots
      return NextResponse.json({ success: true });
    }

    // 7. Validation des champs requis
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: "Tous les champs requis doivent être remplis" },
        { status: 400 }
      );
    }

    // 8. Validation longueurs min/max
    if (
      data.name.trim().length < 2 ||
      data.name.length > 100 ||
      data.email.trim().length < 5 ||
      data.email.length > 100 ||
      data.message.trim().length < 10 ||
      data.message.length > 5000 ||
      (data.company && data.company.length > 100)
    ) {
      return NextResponse.json(
        { error: "Un ou plusieurs champs ne respectent pas les contraintes de longueur" },
        { status: 400 }
      );
    }

    // 9. Validation format email
    if (!EMAIL_REGEX.test(data.email.trim())) {
      return NextResponse.json(
        { error: "Format d'email invalide" },
        { status: 400 }
      );
    }

    // 10. Sanitization (après validation pour préserver les messages d'erreur précis)
    const sanitized = {
      name: sanitizeHeaderField(data.name, 100),
      email: data.email.toLowerCase().trim().slice(0, 100),
      company: data.company ? sanitizeHeaderField(data.company, 100) : undefined,
      message: sanitizeMessageField(data.message, 5000),
    };

    // 11. Vérification post-sanitization : les champs critiques ne doivent pas être vides
    if (!sanitized.name || !sanitized.message) {
      return NextResponse.json(
        { error: "Les champs contiennent des caractères non autorisés" },
        { status: 400 }
      );
    }

    // 12. Envoi email
    const transporter = createTransport(emailConfig);
    try {
      await transporter.verify();
    } catch (err) {
      console.error("Erreur de connexion SMTP:", err);
      return NextResponse.json(
        { error: "Erreur de configuration SMTP" },
        { status: 500 }
      );
    }

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL,
      subject: `Nouveau message de ${sanitized.name}`,
      text: getNotificationTemplate(sanitized),
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: sanitized.email,
      subject: "Merci pour votre message",
      text: getAutoReplyTemplate(sanitized.name),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error("Erreur contact:", {
        message: error instanceof Error ? error.message : error,
        stack: error instanceof Error ? error.stack : null,
      });
    } else {
      console.error("Erreur contact:", new Date().toISOString());
    }
    return NextResponse.json(
      { error: "Erreur lors de l'envoi du message" },
      { status: 500 }
    );
  }
}
