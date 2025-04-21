"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { BackButton } from "@/components/ui/BackButton";
import { useRef } from "react";

interface FormData {
  name: string;
  email: string;
  company?: string;
  message: string;
  honeypot?: string; // Champ honeypot pour détecter les bots
}

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState<string>("");
  const formRef = useRef<HTMLFormElement>(null);
  const submitTimeRef = useRef<number>(Date.now());
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    message: "",
    honeypot: "", // Champ invisible pour les bots
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Protection contre les soumissions trop rapides (moins de 3 secondes)
    const timeSinceMount = Date.now() - submitTimeRef.current;
    if (timeSinceMount < 3000) {
      setError(
        "Veuillez patienter quelques secondes avant de soumettre le formulaire."
      );
      return;
    }

    // Vérification du honeypot
    if (formData.honeypot) {
      setError("Une erreur est survenue.");
      return;
    }

    // Validation côté client
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setError("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    // Validation de l'email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      setError("Veuillez entrer une adresse email valide.");
      return;
    }

    // Validation de la longueur des champs
    if (
      formData.name.length > 100 ||
      formData.email.length > 100 ||
      (formData.company && formData.company.length > 100) ||
      formData.message.length > 5000
    ) {
      setError(
        "Un ou plusieurs champs dépassent la longueur maximale autorisée."
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // TODO: Ajout d'un token CSRF
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          company: formData.company?.trim(),
          message: formData.message.trim(),
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(
          data.error || "Une erreur est survenue lors de l'envoi du message."
        );
      }

      setShowSuccess(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
        honeypot: "",
      });
      if (formRef.current) formRef.current.reset();
    } catch (error) {
      console.error("Erreur:", error);
      setError(
        error instanceof Error ? error.message : "Une erreur est survenue."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="container mx-auto py-12 px-4">
      <BackButton href="/" label="Retour à l'accueil" />

      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Prenons contact</h1>
          <p className="text-xl text-muted-foreground">
            Discutons de votre projet et voyons comment je peux vous aider à le
            réaliser.
          </p>
        </div>

        <Card className="p-6">
          {showSuccess ? (
            <div className="text-center space-y-4 py-8">
              <h2 className="text-2xl font-semibold text-primary">
                Message envoyé avec succès !
              </h2>
              <p className="text-muted-foreground">
                Merci pour votre message. Je vous répondrai dans les plus brefs
                délais.
              </p>
              <Button
                onClick={() => setShowSuccess(false)}
                variant="outline"
                className="mt-4"
              >
                Envoyer un autre message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} ref={formRef} className="space-y-6">
              {error && (
                <div className="p-4 text-red-500 bg-red-50 dark:bg-red-950 rounded-md">
                  {error}
                </div>
              )}

              <div className="space-y-2">
                <label htmlFor="name" className="block font-medium">
                  Nom complet <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  maxLength={100}
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full p-2 rounded-md border border-border bg-background"
                  placeholder="John Doe"
                  autoComplete="name"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block font-medium">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  maxLength={100}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full p-2 rounded-md border border-border bg-background"
                  placeholder="john@example.com"
                  autoComplete="email"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="block font-medium">
                  Entreprise
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  maxLength={100}
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="w-full p-2 rounded-md border border-border bg-background"
                  placeholder="Votre entreprise (optionnel)"
                  autoComplete="organization"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block font-medium">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  maxLength={5000}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full p-2 rounded-md border border-border bg-background min-h-[150px]"
                  placeholder="Décrivez votre projet ou votre besoin..."
                />
              </div>

              {/* Champ honeypot invisible */}
              <div className="hidden">
                <input
                  type="text"
                  name="honeypot"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.honeypot}
                  onChange={(e) =>
                    setFormData({ ...formData, honeypot: e.target.value })
                  }
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-md inline-flex items-center justify-center font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
              </button>
            </form>
          )}
        </Card>
      </div>
    </main>
  );
}
