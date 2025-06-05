import { NextResponse } from "next/server";
import { createTransport } from "nodemailer";
import { rateLimit } from "@/lib/rate-limit";

// Configuration de l'email
const emailConfig = {
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
};

// Template pour l'email de confirmation
const getAutoReplyTemplate = (name: string) => `
Cher(e) ${name},

Merci d'avoir pris contact avec moi. J'ai bien reçu votre message et je vous répondrai dans les plus brefs délais.

En attendant, n'hésitez pas à consulter mon portfolio pour en savoir plus sur mes réalisations.

Cordialement,
Hermann MOUSSAVOU
Développeur Fullstack
`;

// Template pour la notification
const getNotificationTemplate = (data: ContactFormData) => `
Nouveau message de contact reçu :

Nom: ${data.name}
Email: ${data.email}
Entreprise: ${data.company || "Non spécifié"}

Message:
${data.message}
`;

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
  honeypot?: string;
}

// Fonction de nettoyage des entrées
const sanitizeInput = (input: string): string => {
  return input
    .trim()
    .replace(/[<>]/g, "") // Supprime les balises HTML basiques
    .slice(0, 5000); // Limite la longueur
};

export async function POST(request: Request) {
  try {
    // Vérification de la méthode
    if (request.method !== "POST") {
      return NextResponse.json(
        { error: "Méthode non autorisée" },
        { status: 405 }
      );
    }

    // Vérification du rate limiting
    const identifier = request.headers.get("x-forwarded-for") || "anonymous";
    const rateLimitResult = await rateLimit(identifier);

    if (!rateLimitResult.success) {
      return NextResponse.json(
        { error: "Trop de requêtes. Veuillez réessayer plus tard." },
        { status: 429 }
      );
    }

    const data: ContactFormData = await request.json();

    // Vérification du honeypot
    if (data.honeypot) {
      return NextResponse.json(
        { error: "Formulaire invalide" },
        { status: 400 }
      );
    }

    // Validation des champs requis
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: "Tous les champs requis doivent être remplis" },
        { status: 400 }
      );
    }

    // Validation de la longueur des champs
    if (
      data.name.length > 100 ||
      data.email.length > 100 ||
      (data.company && data.company.length > 100) ||
      data.message.length > 5000
    ) {
      return NextResponse.json(
        {
          error:
            "Un ou plusieurs champs dépassent la longueur maximale autorisée",
        },
        { status: 400 }
      );
    }

    // Validation de l'email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: "Format d'email invalide" },
        { status: 400 }
      );
    }

    // Nettoyage des données
    const sanitizedData = {
      name: sanitizeInput(data.name),
      email: data.email.toLowerCase().trim(),
      company: data.company ? sanitizeInput(data.company) : undefined,
      message: sanitizeInput(data.message),
    };

    const transporter = createTransport(emailConfig);

    // Envoi de l'email de notification
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL,
      subject: `Nouveau message de ${sanitizedData.name}`,
      text: getNotificationTemplate(sanitizedData),
    });

    // Envoi de l'email de confirmation
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: sanitizedData.email,
      subject: "Merci pour votre message",
      text: getAutoReplyTemplate(sanitizedData.name),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi du message" },
      { status: 500 }
    );
  }
}
