import { Card } from "@/components/ui/Card";
import { BackButton } from "@/components/ui/BackButton";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Politique de confidentialité | Hermann MOUSSAVOU",
  description:
    "Politique de confidentialité du portfolio de Hermann MOUSSAVOU, développeur Full Stack.",
  noIndex: true,
});

export default function PrivacyPolicyPage() {
  return (
    <main className="container mx-auto py-12 px-4">
      <BackButton href="/" label="Retour à l'accueil" />

      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Politique de confidentialité</h1>
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
            <h2 className="text-2xl font-semibold">1. Introduction</h2>
            <p>
              Cette politique de confidentialité décrit comment Hermann
              MOUSSAVOU (&quot;nous&quot;, &quot;notre&quot; ou &quot;nos&quot;)
              collecte, utilise et protège vos informations personnelles lorsque
              vous utilisez notre site web portfolio.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">
              2. Collecte des informations
            </h2>
            <p>Nous collectons les informations suivantes :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Informations de contact (nom, email, entreprise) lorsque vous
                utilisez notre formulaire de contact
              </li>
              <li>
                Données de navigation (adresse IP, type de navigateur, pages
                visitées)
              </li>
              <li>Cookies et données similaires</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">
              3. Utilisation des informations
            </h2>
            <p>Nous utilisons vos informations pour :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Répondre à vos demandes de contact</li>
              <li>Améliorer notre site web et nos services</li>
              <li>Assurer la sécurité de notre site</li>
              <li>Respecter nos obligations légales</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">
              4. Protection des données
            </h2>
            <p>
              Nous mettons en œuvre des mesures de sécurité appropriées pour
              protéger vos informations personnelles contre tout accès,
              modification, divulgation ou destruction non autorisés.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">5. Vos droits</h2>
            <p>Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Droit d&apos;accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l&apos;effacement</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité des données</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">6. Cookies</h2>
            <p>
              Notre site utilise des cookies pour améliorer votre expérience de
              navigation. Vous pouvez configurer votre navigateur pour refuser
              les cookies ou être alerté lorsque des cookies sont envoyés.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">7. Contact</h2>
            <p>
              Pour toute question concernant cette politique de confidentialité
              ou vos données personnelles, vous pouvez nous contacter via notre
              formulaire de contact.
            </p>
          </section>
        </Card>
      </div>
    </main>
  );
}
