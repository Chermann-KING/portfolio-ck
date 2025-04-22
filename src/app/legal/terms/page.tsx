import { Card } from "@/components/ui/Card";
import { BackButton } from "@/components/ui/BackButton";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Conditions d'utilisation | Hermann MOUSSAVOU",
  description:
    "Conditions d'utilisation du portfolio de Hermann MOUSSAVOU, développeur Full Stack.",
  noIndex: true,
});

export default function TermsPage() {
  return (
    <main className="container mx-auto py-12 px-4">
      <BackButton href="/" label="Retour à l'accueil" />

      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Conditions d&apos;utilisation</h1>
          <p className="text-xl text-muted-foreground">
            Dernière mise à jour :{" "}
            {new Date().toLocaleDateString("fr-FR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        <Card className="p-6 space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">
              1. Acceptation des conditions
            </h2>
            <p>
              En accédant et en utilisant ce site web, vous acceptez d&apos;être
              lié par les présentes conditions d&apos;utilisation. Si vous
              n&apos;acceptez pas ces conditions, veuillez ne pas utiliser ce
              site.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">
              2. Propriété intellectuelle
            </h2>
            <p>
              Tout le contenu de ce site (textes, images, code source, etc.) est
              protégé par les droits de propriété intellectuelle et appartient à
              Hermann MOUSSAVOU. Toute reproduction ou utilisation non autorisée
              est strictement interdite.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">3. Utilisation du site</h2>
            <p>Vous vous engagez à :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Utiliser le site de manière légale et respectueuse</li>
              <li>Ne pas tenter de compromettre la sécurité du site</li>
              <li>Ne pas utiliser le site à des fins malveillantes</li>
              <li>Respecter les droits de propriété intellectuelle</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">4. Formulaire de contact</h2>
            <p>
              En utilisant notre formulaire de contact, vous vous engagez à
              fournir des informations exactes et à ne pas envoyer de contenu
              malveillant ou illégal.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">
              5. Limitation de responsabilité
            </h2>
            <p>
              Hermann MOUSSAVOU ne peut être tenu responsable des dommages
              directs ou indirects résultant de l&apos;utilisation ou de
              l&apos;impossibilité d&apos;utiliser ce site.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">6. Modifications</h2>
            <p>
              Nous nous réservons le droit de modifier ces conditions à tout
              moment. Les modifications prendront effet dès leur publication sur
              le site.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">7. Droit applicable</h2>
            <p>
              Ces conditions sont régies par le droit belge. Tout litige sera
              soumis à la juridiction exclusive des tribunaux de Charleroi.
            </p>
          </section>
        </Card>
      </div>
    </main>
  );
}
