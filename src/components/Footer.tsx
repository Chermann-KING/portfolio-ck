import Link from "next/link";
import { Card } from "./ui/Card";

export function Footer() {
  return (
    <footer className="container mx-auto px-4 py-8 w-full flex-grow">
      <Card className="p-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Hermann MOUSSAVOU. Tous droits
              réservés.
            </p>
          </div>
          <div className="flex gap-6">
            <Link
              href="/legal/privacy-policy"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Politique de confidentialité
            </Link>
            <Link
              href="/legal/terms"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Conditions d&apos;utilisation
            </Link>
            <Link
              href="/legal/mentions-legales"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Mentions légales
            </Link>
          </div>
        </div>
      </Card>
    </footer>
  );
}
