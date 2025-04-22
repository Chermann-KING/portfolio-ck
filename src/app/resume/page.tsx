import { Card } from "@/components/ui/Card";
import { BackButton } from "@/components/ui/BackButton";
import { Button } from "@/components/ui/Button";
import { Download } from "lucide-react";
import { constructMetadata } from "@/lib/metadata";
import { Badge } from "@/components/ui/Badge";

export const metadata = constructMetadata({
  title: "CV | Hermann MOUSSAVOU",
  description: "CV de Hermann MOUSSAVOU, développeur Full Stack.",
});

export default function ResumePage() {
  return (
    <main className="container mx-auto py-12 px-4">
      <BackButton href="/" label="Retour à l'accueil" />

      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold">Curriculum Vitae</h1>
          <Button variant="outline" className="flex items-center gap-2" asChild>
            <a href="/cv-hermann-moussavou.pdf" download>
              <Download className="w-4 h-4" />
              Télécharger PDF
            </a>
          </Button>
        </div>

        {/* Informations personnelles */}
        <Card className="p-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Hermann MOUSSAVOU</h2>
            <p className="text-xl text-muted-foreground">
              Développeur Full Stack
            </p>
            <div className="flex flex-col sm:flex-row sm:gap-8">
              <p>📍 Charleroi, Belgique</p>
              <p>📧 Contact via le formulaire</p>
            </div>
          </div>
        </Card>

        {/* Profil */}
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Profil</h2>
          <p className="text-muted-foreground">
            Passionné par tout ce que je fais, je vise toujours à donner le
            meilleur de moi-même car je sais qu&apos;il n&apos;y a pas de
            limites sauf celles que nous nous imposons.
          </p>
          <p className="text-muted-foreground mt-2 font-semibold">
            DÉVELOPPER. ÉVALUER. TIRER DES ENSEIGNEMENTS. AMÉLIORER.
          </p>
        </Card>

        {/* Expérience Professionnelle */}
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-6">
            Expérience Professionnelle
          </h2>
          <div className="space-y-8">
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-medium">
                  DoctoViene - Développeur Frontend (Freelance)
                </h3>
                <span className="text-muted-foreground">
                  NOV. 2023 - AJOURD&apos;HUI
                </span>
              </div>
              <p className="text-muted-foreground italic mb-2">
                Création d&apos;une application web de service hospitalier
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Développement de nouvelles fonctionnalités</li>
                <li>
                  Résolution de bugs avec les outils de l&apos;écosystème React
                </li>
                <li>
                  Implémentation d&apos;un système de design fourni par le
                  designer
                </li>
                <li>
                  Partage des meilleures pratiques React (réutilisabilité & code
                  propre)
                </li>
                <li>Gestion de projet avec la méthodologie Agile SCRUM</li>
                <li>Gestion des branches avec le système de flux GitHub</li>
              </ul>
              <p className="mt-2 text-sm font-medium">
                Stack technique : React, Next.js, TypeScript, Formik, Context,
                Yup, Tailwind CSS, Vercel
              </p>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-medium">
                  DoctoViene - UX/UI Designer
                </h3>
                <span className="text-muted-foreground">
                  AVR. 2023 - OCT 2023
                </span>
              </div>
              <p className="text-muted-foreground italic mb-2">
                Design d&apos;interface utilisateur pour une application de
                service hospitalier
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Simplification des flux d&apos;information</li>
                <li>Amélioration de l&apos;accessibilité</li>
                <li>Intégration des systèmes</li>
                <li>Standardisation du système d&apos;information</li>
                <li>Optimisation de la facturation</li>
                <li>
                  Facilitation de l&apos;accès aux services pour
                  l&apos;utilisateur
                </li>
              </ul>
              <p className="mt-2 text-sm font-medium">
                Stack technique : Illustrator, Photoshop, Figma, Drive, Meet
              </p>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-medium">
                  O&apos;YPUNU - Développeur Full Stack (Personnel)
                </h3>
                <span className="text-muted-foreground">
                  AOU. 2022 - AJOURD&apos;HUI
                </span>
              </div>
              <p className="text-muted-foreground italic mb-2">
                Création d&apos;une application de dictionnaire linguistique
                social
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Recherche UX/UI</li>
                <li>Développement de nouvelles fonctionnalités</li>
                <li>Résolution de bugs avec les outils React</li>
                <li>Pratiques de code propre et réutilisable</li>
                <li>Gestion de projet avec méthodologie Agile SCRUM</li>
                <li>Gestion des branches avec GitHub Flow</li>
              </ul>
              <p className="mt-2 text-sm font-medium">
                Stack technique : Angular, Tailwind CSS, MongoDB
              </p>
            </div>

            {/* Autres expériences similaires... */}
          </div>
        </Card>

        {/* Formation */}
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Formation</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium mb-2">Certifications</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>TECHNOFUTURE TIC, CEPEGRA, EDAA</li>
                <li>LINKEDIN LEARN, UDEMY, GOOGLE</li>
                <li>
                  Diverses certifications en programmation, analyse de données,
                  maintenance, design web et animation
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Auto-formation</h3>
              <p className="text-muted-foreground">
                Apprentissage continu des nouvelles techniques de communication
                et d&apos;information sur des plateformes comme LinkedIn Learn
                et Udemy
              </p>
            </div>
          </div>
        </Card>

        {/* Compétences */}
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-6">
            Compétences Techniques
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium mb-3">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="frontend">React</Badge>
                <Badge variant="frontend">Next.js</Badge>
                <Badge variant="frontend">Angular</Badge>
                <Badge variant="frontend">Ionic</Badge>
                <Badge variant="frontend">TypeScript</Badge>
                <Badge variant="frontend">Tailwind CSS</Badge>
                <Badge variant="frontend">SCSS</Badge>
                <Badge variant="frontend">Context</Badge>
                <Badge variant="frontend">Redux</Badge>
                <Badge variant="frontend">Formik</Badge>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-3">Backend</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="backend">Node.js</Badge>
                <Badge variant="backend">Express</Badge>
                <Badge variant="backend">Nest.js</Badge>
                <Badge variant="backend">SQL</Badge>
                <Badge variant="backend">NoSQL</Badge>
                <Badge variant="backend">Sequelize</Badge>
                <Badge variant="backend">Mongoose</Badge>
                <Badge variant="backend">REST API</Badge>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-3">Design</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="other">Figma</Badge>
                <Badge variant="other">Adobe XD</Badge>
                <Badge variant="other">Photoshop</Badge>
                <Badge variant="other">Illustrator</Badge>
                <Badge variant="other">UI/UX Design</Badge>
                <Badge variant="other">Responsive Design</Badge>
                <Badge variant="other">Design System</Badge>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-3">Gestion de Projet</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="other">Méthodologie Agile SCRUM</Badge>
                <Badge variant="other">Git</Badge>
                <Badge variant="other">GitHub Flow</Badge>
                <Badge variant="other">Design Thinking</Badge>
              </div>
            </div>
          </div>
        </Card>

        {/* Langues */}
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Langues</h2>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            <li>Français - Langue maternelle</li>
            <li>Anglais - Professionnel</li>
          </ul>
        </Card>
      </div>
    </main>
  );
}
