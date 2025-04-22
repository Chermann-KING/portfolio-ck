import { Card } from "@/components/ui/Card";
import { BackButton } from "@/components/ui/BackButton";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Mentions légales | Hermann MOUSSAVOU",
  description:
    "Mentions légales du portfolio de Hermann MOUSSAVOU, développeur Full Stack.",
  noIndex: true,
});

export default function LegalNoticePage() {
  return (
    <main className="container mx-auto py-12 px-4">
      <BackButton href="/" label="Retour à l'accueil" />

      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Mentions légales</h1>
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
            <h2 className="text-2xl font-semibold">1. Éditeur du site</h2>
            <div className="space-y-2">
              <p>
                <strong>Nom :</strong> Hermann MOUSSAVOU
              </p>
              <p>
                <strong>Adresse :</strong> Charleroi, Belgique
              </p>
              <p>
                <strong>Email :</strong> Contact via le formulaire de contact
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">2. Hébergement</h2>
            <div className="space-y-2">
              <p>
                <strong>Hébergeur :</strong> Vercel Inc.
              </p>
              <p>
                <strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA
                91789, États-Unis
              </p>
              <p>
                <strong>Site web :</strong> https://vercel.com
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">
              3. Propriété intellectuelle
            </h2>
            <p>
              L&apos;ensemble de ce site relève de la législation belge et
              internationale sur le droit d&apos;auteur et la propriété
              intellectuelle. Tous les droits de reproduction sont réservés, y
              compris pour les documents téléchargeables et les représentations
              iconographiques et photographiques.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">
              4. Protection des données personnelles
            </h2>
            <p>
              Conformément à la loi &quot;Informatique et Libertés&quot; du 6
              janvier 1978 modifiée et au Règlement Général sur la Protection
              des Données (RGPD), vous disposez d&apos;un droit d&apos;accès, de
              rectification et de suppression des données vous concernant.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">5. Cookies</h2>
            <p>
              Ce site utilise des cookies pour améliorer l&apos;expérience
              utilisateur. En naviguant sur ce site, vous acceptez leur
              utilisation. Pour plus d&apos;informations, consultez notre
              politique de confidentialité.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">6. Liens externes</h2>
            <p>
              Ce site peut contenir des liens vers des sites externes. Hermann
              MOUSSAVOU n&apos;est pas responsable du contenu des sites externes
              vers lesquels des liens sont établis.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">7. Crédits</h2>
            <div className="space-y-2">
              <p>
                <strong>Design et développement :</strong> Hermann MOUSSAVOU
              </p>
              <p>
                <strong>Technologies utilisées :</strong> Next.js, React,
                TypeScript, Tailwind CSS
              </p>
              <p>
                <strong>Icônes :</strong> Lucide Icons
              </p>
            </div>
          </section>
        </Card>
      </div>
    </main>
  );
}
