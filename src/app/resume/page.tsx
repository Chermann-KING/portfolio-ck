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
            <a
              href="/hermann-moussavou-resume-fullstack-developer.pdf"
              download
            >
              <span className="flex items-center gap-2"><Download className="w-4 h-4" />
              Télécharger PDF</span>
            </a>
          </Button>
        </div>

        {/* Informations personnelles */}
        <Card className="p-6">
          <div className="space-y-4">
            <div>
              <p className="text-sm uppercase tracking-widest text-muted-foreground font-medium mb-1">
                Développeur Full Stack
              </p>
              <h2 className="text-3xl font-bold">Hermann MOUSSAVOU</h2>
            </div>
            <p className="text-muted-foreground">
              Passionné par tout ce que j&apos;entreprends, je m&apos;efforce
              toujours de donner le meilleur de moi-même, convaincu qu&apos;il
              n&apos;existe de limites que celles que l&apos;on s&apos;impose.
            </p>
            <p className="font-semibold tracking-wide">
              DÉVELOPPER. MESURER. APPRENDRE. RECOMMENCER.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-8 text-muted-foreground text-sm">
              <p>📍 Charleroi, Belgique</p>
              <Button variant="outline" asChild>
                <a href="/contact">✉️ Me contacter</a>
              </Button>
            </div>
          </div>
        </Card>

        {/* Expérience Professionnelle */}
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-2">
            Expérience Professionnelle
          </h2>
          <p className="text-muted-foreground text-sm mb-6">6+ années</p>
          <div className="space-y-10">
            {/* O'Ypunu */}
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1">
                <h3 className="text-lg font-semibold">
                  O&apos;Ypunu ORG — Développeur Full Stack
                </h3>
                <span className="text-muted-foreground text-sm shrink-0">
                  AOÛT 2023 - ACTUEL
                </span>
              </div>
              <p className="text-muted-foreground italic mb-3">
                Conception et développement d&apos;une plateforme sociale
                dictionnaire multilingue pour les langues africaines — 3 bases
                de code (web, mobile, API) maintenues en parallèle
              </p>
              <ul className="list-disc list-outside ml-10 space-y-1.5 text-muted-foreground text-sm">
                <li>
                  Construit un écosystème full stack complet : application web
                  Angular 19, application mobile React Native/Expo et une API
                  REST NestJS déployée sur Railway — le tout partageant une
                  architecture TypeScript unifiée
                </li>
                <li>
                  Conçu un backend de niveau entreprise avec Repository Pattern,
                  JWT + OAuth (Google, Facebook, Twitter), rotation automatique
                  des refresh tokens et RBAC à 4 niveaux (Utilisateur,
                  Contributeur, Admin, SuperAdmin)
                </li>
                <li>
                  Implémenté des fonctionnalités temps réel avec Socket.io :
                  messagerie instantanée, indicateurs de frappe, présence en
                  ligne et upload audio Cloudinary pour les enregistrements de
                  prononciation natifs
                </li>
                <li>
                  Architecture mobile Feature-First avec un design system
                  personnalisé (tokens + composants réutilisables), React Query
                  pour la gestion de l&apos;état serveur et pipeline EAS Build
                  pour la distribution Android/iOS
                </li>
                <li>
                  Optimisation des performances MongoDB avec des index
                  stratégiques et une pagination avancée atteignant un temps de
                  réponse API moyen inférieur à 200ms sur 23 modules de dépôt
                </li>
                <li>
                  Gestion de projet avec Agile SCRUM et GitHub Flow avec
                  Conventional Commits, documentation Swagger/OpenAPI et
                  couverture de tests à 85%+ sur les services critiques
                </li>
              </ul>
              <p className="mt-3 text-sm font-medium">
                Stack technique : Angular, React Native, Expo SDK, NestJS,
                TypeScript, MongoDB Atlas, Socket.io, Mongoose, Passport,
                Cloudinary, Railway, Vercel, EAS Build.
              </p>
            </div>

            {/* VieneCheckIn */}
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1">
                <h3 className="text-lg font-semibold">
                  VieneCheckIn/CompanyViene — Développeur Full Stack
                </h3>
                <span className="text-muted-foreground text-sm shrink-0">
                  JAN. 2026 - ACTUEL
                </span>
              </div>
              <p className="text-muted-foreground italic mb-3">
                Développement d&apos;une application de gestion des présences
                SaaS multi-tenant de zéro
              </p>
              <ul className="list-disc list-outside ml-10 space-y-1.5 text-muted-foreground text-sm">
                <li>
                  Intégration de la reconnaissance faciale IA via Google Gemini
                  Flash pour la vérification biométrique des pointages
                </li>
                <li>
                  Implémentation du géofencing GPS pour valider les
                  localisations des employés en temps réel
                </li>
                <li>
                  Conception et implémentation d&apos;un système RBAC à 3
                  niveaux (Super Admin, Company Admin, Employé)
                </li>
                <li>
                  Architecture Clean suivant les principes SOLID (couches
                  Domain, Application, Infrastructure, Présentation)
                </li>
                <li>
                  Isolation des données multi-tenant garantissant une sécurité
                  stricte des données par entreprise
                </li>
                <li>
                  Validation côté serveur avec Zod et authentification sécurisée
                  via NextAuth v5 (JWT + bcrypt)
                </li>
                <li>
                  Gestion de projet avec méthodologie Agile SCRUM et stratégie
                  de branches GitHub Flow
                </li>
              </ul>
              <p className="mt-3 text-sm font-medium">
                Stack technique : Next.js, React, TypeScript, Tailwind CSS,
                Prisma ORM, NextAuth, PostgreSQL, Google Gemini AI, Uploadthing,
                Vercel.
              </p>
            </div>

            {/* OkiraViene Mobile */}
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1">
                <h3 className="text-lg font-semibold">
                  OkiraViene/CompanyViene — Développeur Mobile
                </h3>
                <span className="text-muted-foreground text-sm shrink-0">
                  SEP. 2025 - ACTUEL
                </span>
              </div>
              <p className="text-muted-foreground italic mb-3">
                Développement d&apos;une plateforme mobile de gestion
                commerciale multi-secteur (restaurant, pharmacie, commerce de
                détail) de zéro
              </p>
              <ul className="list-disc list-outside ml-10 space-y-1.5 text-muted-foreground text-sm">
                <li>
                  Architecture offline-first avec base de données SQLite locale,
                  synchronisation multi-appareils intelligente et résolution
                  automatique des conflits
                </li>
                <li>
                  Système de templates commerciaux adaptatifs avec workflows
                  sectoriels, règles de validation et conformité réglementaire
                  (DGCCRF, ANSM)
                </li>
                <li>
                  Tableau de bord analytique temps réel couvrant les ventes, la
                  rotation des stocks et les KPIs de fidélité client
                </li>
                <li>
                  Mise en place du pipeline CI/CD avec GitHub Actions sur les
                  environnements Développement, Staging et Production
                </li>
                <li>
                  Gestion de projet avec méthodologie Agile SCRUM et stratégie
                  de branches GitHub Flow
                </li>
              </ul>
              <p className="mt-3 text-sm font-medium">
                Stack technique : React Native, Expo SDK, TypeScript, Expo
                Router, Zustand, SQLite, NativeWind, EAS Build.
              </p>
            </div>

            {/* OkiraLib Frontend */}
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1">
                <h3 className="text-lg font-semibold">
                  OkiraLib/CompanyViene — Développeur Frontend
                </h3>
                <span className="text-muted-foreground text-sm shrink-0">
                  JAN. 2026 - ACTUEL
                </span>
              </div>
              <p className="text-muted-foreground italic mb-3">
                Développement d&apos;un backoffice web pour la gestion du
                catalogue produits synchronisé avec l&apos;application mobile
                OkiraViene via Supabase
              </p>
              <ul className="list-disc list-outside ml-10 space-y-1.5 text-muted-foreground text-sm">
                <li>
                  Implémentation d&apos;un RBAC granulaire avec 3 rôles
                  (super_admin, content_manager, viewer) sécurisé par les
                  politiques Row Level Security de Supabase
                </li>
                <li>
                  Gestion d&apos;images cloud avec Cloudinary : upload,
                  structure de dossiers auto-slugifiée et suppression liée au
                  cycle de vie du produit
                </li>
                <li>
                  Système d&apos;audit complet traçant chaque action de
                  création, mise à jour et suppression avec diff des
                  anciennes/nouvelles valeurs
                </li>
                <li>
                  Architecture SOLID suivant les patterns Repository et couches
                  Service avec validation côté serveur Zod
                </li>
                <li>
                  Base de code prête pour l&apos;i18n avec toutes les chaînes UI
                  centralisées dans un fichier de constantes messages unique
                </li>
              </ul>
              <p className="mt-3 text-sm font-medium">
                Stack technique : Next.js, React, TypeScript, Supabase,
                NextAuth, Tailwind CSS, Zod, Cloudinary, Vercel.
              </p>
            </div>

            {/* Website CompanyViene */}
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1">
                <h3 className="text-lg font-semibold">
                  Website/CompanyViene — Développeur Frontend
                </h3>
                <span className="text-muted-foreground text-sm shrink-0">
                  AVR. 2025 - SEP. 2025
                </span>
              </div>
              <p className="text-muted-foreground italic mb-3">
                Migration complète du site officiel de l&apos;entreprise de
                WordPress/Elementor vers une application Next.js personnalisée,
                améliorant les performances et la maintenabilité
              </p>
              <ul className="list-disc list-outside ml-10 space-y-1.5 text-muted-foreground text-sm">
                <li>
                  Implémentation d&apos;un système de contact multilingue
                  sécurisé et de candidature avec upload de fichiers, validation
                  Zod, protection CSRF et reCAPTCHA v3
                </li>
                <li>
                  Limitation de débit basée sur Redis (Upstash) par IP et
                  journalisation structurée pour prévenir les abus sur les
                  formulaires publics
                </li>
                <li>
                  En-têtes de sécurité HTTP renforcés (CSP, HSTS,
                  X-Frame-Options) remplaçant les paramètres gérés par les
                  plugins WordPress
                </li>
                <li>
                  Architecture i18n avec dossier de messages dédié et middleware
                  Next.js pour le routage basé sur les locales
                </li>
                <li>
                  Déploiement et configuration sur Vercel avec gestion des
                  secrets basée sur l&apos;environnement
                </li>
              </ul>
              <p className="mt-3 text-sm font-medium">
                Stack technique : Next.js, TypeScript, Tailwind CSS, Zod,
                Upstash Redis, reCAPTCHA, Nodemailer (SMTP), next-intl, Vercel.
              </p>
            </div>

            {/* DoctoViene */}
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1">
                <h3 className="text-lg font-semibold">
                  DoctoViene/CompanyViene — Développeur Frontend
                </h3>
                <span className="text-muted-foreground text-sm shrink-0">
                  NOV. 2023 - ACTUEL
                </span>
              </div>
              <p className="text-muted-foreground italic mb-3">
                Plateforme hospitalière multi-services construite de zéro —
                modules de médecine du travail, gynécologie-obstétrique,
                certificats de naissance et déclarations d&apos;accidents du
                travail
              </p>
              <ul className="list-disc list-outside ml-10 space-y-1.5 text-muted-foreground text-sm">
                <li>
                  Système de formulaires médicaux complexes avec Formik, schémas
                  de validation Yup et état d&apos;événement piloté par contexte
                  sur tous les workflows cliniques
                </li>
                <li>
                  Génération automatisée de documents cliniques (certificats,
                  bulletins de naissance, rapports d&apos;accidents) avec
                  @reactpdf/renderer — dossiers médicaux dématérialisés
                </li>
                <li>
                  Traçabilité des patients via QR code et scan de codes-barres
                  avec react-zxing, permettant un accès instantané au dossier
                  médical au point de soins
                </li>
                <li>
                  Bibliothèque de composants UI réutilisables à partir des
                  spécifications du designer — tableaux de données standardisés,
                  sélecteurs de date et contrôles de formulaires sur tous les
                  modules hospitaliers
                </li>
                <li>
                  Gestion de projet avec méthodologie Agile SCRUM et stratégie
                  de branches GitHub Flow avec enforcement de qualité de code
                  ESLint/Prettier
                </li>
              </ul>
              <p className="mt-3 text-sm font-medium">
                Stack technique : React, Next.js, TypeScript, Formik, Formik
                Context, Yup, Tailwind CSS.
              </p>
            </div>

            {/* Semen Africa */}
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1">
                <h3 className="text-lg font-semibold">
                  Semen Africa — Intégrateur Web
                </h3>
                <span className="text-muted-foreground text-sm shrink-0">
                  MAR. 2023 - OCT. 2025
                </span>
              </div>
              <p className="text-muted-foreground italic mb-3">
                Refonte de site web — Semen Africa Consulting est un cabinet de
                conseil en intelligence économique et stratégique, spécialisé
                dans l&apos;investissement et le développement en Afrique
                subsaharienne
              </p>
              <ul className="list-disc list-outside ml-10 space-y-1.5 text-muted-foreground text-sm">
                <li>Analyse des statistiques du site</li>
                <li>Amélioration UX/UI et SEO</li>
                <li>Définition des parcours utilisateurs</li>
                <li>
                  Choix d&apos;une palette de couleurs et d&apos;une typographie
                  cohérentes
                </li>
                <li>
                  Sélection, installation et configuration du thème WordPress
                  adapté
                </li>
                <li>
                  Analyse des performances du site et ajustements si nécessaire
                </li>
              </ul>
              <p className="mt-3 text-sm font-medium">
                Stack technique : Photoshop, Figma, WordPress, Elementor,
                PlanetHoster.
              </p>
            </div>

            {/* Personal Finance App */}
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1">
                <h3 className="text-lg font-semibold">
                  Personal Finance App — Développeur Frontend
                </h3>
                <span className="text-muted-foreground text-sm shrink-0">
                  FÉV. 2024 - AVR. 2025
                </span>
              </div>
              <p className="text-muted-foreground italic mb-3">
                Tableau de bord financier de 5 pages construit à partir
                d&apos;une maquette Figma — Vue d&apos;ensemble, Transactions,
                Budgets, Pots d&apos;épargne et Factures récurrentes
              </p>
              <ul className="list-disc list-outside ml-10 space-y-1.5 text-muted-foreground text-sm">
                <li>
                  Intégration Figma pixel-perfect sur 5 pages responsives avec
                  une bibliothèque de composants réutilisables et des design
                  tokens Tailwind CSS
                </li>
                <li>
                  Gestion d&apos;état côté client avec recherche multi-critères,
                  filtrage par catégorie, 6 modes de tri et résultats paginés
                  sur le module Transactions
                </li>
                <li>
                  Module Budgets avec CRUD complet, catégories codées par
                  couleur et graphique en donut suivant les dépenses en temps
                  réel par rapport aux limites — synchronisé avec le tableau de
                  bord Vue d&apos;ensemble
                </li>
                <li>
                  Pots d&apos;épargne avec mutations de solde réactives — les
                  dépôts déduisent du solde global et les retraits le
                  restituent, maintenant la cohérence de tous les totaux entre
                  les vues
                </li>
                <li>
                  Suivi des factures récurrentes calculant le statut dû/à
                  venir/payé à partir de l&apos;historique des transactions avec
                  logique de déduplication par fournisseur
                </li>
                <li>
                  Développement axé accessibilité (HTML sémantique, navigation
                  clavier, labels ARIA) avec TypeScript strict sur 159 commits
                </li>
              </ul>
              <p className="mt-3 text-sm font-medium">
                Stack technique : Next.js 14, TypeScript 5, Tailwind CSS, Figma,
                Vercel.
              </p>
            </div>
          </div>
        </Card>

        {/* Formation */}
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-6">Formation</h2>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
              <div>
                <h3 className="font-semibold">AUTODIDACTE</h3>
                <p className="text-muted-foreground text-sm">
                  Apprentissage continu des nouvelles techniques de
                  communication et d&apos;information sur des plateformes comme
                  LinkedIn Learn et Udemy
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold">TECHNOFUTURE TIC</h3>
              <p className="text-muted-foreground text-sm">
                Développeur Full Stack
              </p>
            </div>
            <div>
              <h3 className="font-semibold">CEPEGRA</h3>
              <p className="text-muted-foreground text-sm">
                Recherche en expérience utilisateur et interface utilisateur
              </p>
            </div>
            <div>
              <h3 className="font-semibold">EDAA</h3>
              <p className="text-muted-foreground text-sm">
                Conception graphique
              </p>
            </div>
          </div>
        </Card>

        {/* Certifications */}
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
          <p className="font-medium mb-2">
            CEPEGRA, TECHNOFUTURE TIC, TECHNOCITÉ, EDAA, LINKEDIN LEARN, UDEMY,
            GOOGLE
          </p>
          <p className="text-muted-foreground text-sm">
            Diverses certifications dans des domaines tels que la programmation,
            l&apos;analyse de données, la maintenance informatique, le design
            visuel et l&apos;animation, l&apos;amélioration de l&apos;expérience
            utilisateur, la gestion d&apos;équipe, la gestion du temps et bien
            plus encore...
          </p>
        </Card>

        {/* Compétences Techniques */}
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-6">
            Compétences Techniques
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-base font-semibold mb-3 uppercase tracking-wide">
                Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="frontend">CSS</Badge>
                <Badge variant="frontend">JavaScript (ES6)</Badge>
                <Badge variant="frontend">React</Badge>
                <Badge variant="frontend">Next.js</Badge>
                <Badge variant="frontend">Angular</Badge>
                <Badge variant="frontend">Styled-Components</Badge>
                <Badge variant="frontend">Tailwind CSS</Badge>
                <Badge variant="frontend">Context</Badge>
                <Badge variant="frontend">Formik / Yup / Zod</Badge>
                <Badge variant="frontend">Git</Badge>
                <Badge variant="frontend">Flutter</Badge>
                <Badge variant="frontend">Dart</Badge>
                <Badge variant="frontend">WordPress</Badge>
                <Badge variant="frontend">Yoast SEO</Badge>
                <Badge variant="frontend">Elementor</Badge>
              </div>
            </div>

            <div>
              <h3 className="text-base font-semibold mb-3 uppercase tracking-wide">
                Backend
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="backend">Node.js</Badge>
                <Badge variant="backend">Express</Badge>
                <Badge variant="backend">Nest.js</Badge>
                <Badge variant="backend">Server Actions</Badge>
                <Badge variant="backend">SQL / SQLite / NoSQL</Badge>
                <Badge variant="backend">ORM</Badge>
                <Badge variant="backend">Firebase</Badge>
              </div>
            </div>

            <div>
              <h3 className="text-base font-semibold mb-3 uppercase tracking-wide">
                Recherche / Design UX
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="other">Interviews</Badge>
                <Badge variant="other">Persona</Badge>
                <Badge variant="other">Tests utilisateurs</Badge>
                <Badge variant="other">Carte d&apos;expérience</Badge>
                <Badge variant="other">Co-design</Badge>
                <Badge variant="other">Ateliers</Badge>
                <Badge variant="other">Proto Persona</Badge>
                <Badge variant="other">Wireframes</Badge>
                <Badge variant="other">Prototypage</Badge>
                <Badge variant="other">User Story Mapping</Badge>
              </div>
            </div>

            <div>
              <h3 className="text-base font-semibold mb-3 uppercase tracking-wide">
                Logiciels
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="other">Figma</Badge>
                <Badge variant="other">Adobe XD</Badge>
                <Badge variant="other">MarvelApp</Badge>
                <Badge variant="other">InVision</Badge>
                <Badge variant="other">Sketch</Badge>
                <Badge variant="other">Photoshop</Badge>
                <Badge variant="other">Illustrator</Badge>
                <Badge variant="other">InDesign</Badge>
                <Badge variant="other">Premiere Pro</Badge>
                <Badge variant="other">After Effects</Badge>
                <Badge variant="other">VS Code</Badge>
              </div>
            </div>

            <div>
              <h3 className="text-base font-semibold mb-3 uppercase tracking-wide">
                Gestion de Projet
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="other">SCRUM</Badge>
                <Badge variant="other">Kanban</Badge>
                <Badge variant="other">Lean UX</Badge>
                <Badge variant="other">Design Sprint</Badge>
                <Badge variant="other">Design Thinking</Badge>
                <Badge variant="other">Service Design</Badge>
                <Badge variant="other">Trello</Badge>
                <Badge variant="other">Jira</Badge>
                <Badge variant="other">Confluence</Badge>
                <Badge variant="other">GitHub</Badge>
                <Badge variant="other">Vercel</Badge>
              </div>
            </div>

            <div>
              <h3 className="text-base font-semibold mb-3 uppercase tracking-wide">
                DevOps
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="backend">GitHub Actions</Badge>
                <Badge variant="backend">CI/CD</Badge>
                <Badge variant="backend">Docker</Badge>
              </div>
            </div>

            <div>
              <h3 className="text-base font-semibold mb-3 uppercase tracking-wide">
                Autres compétences
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="other">BtoB / BtoE</Badge>
                <Badge variant="other">BtoC</Badge>
                <Badge variant="other">E-commerce</Badge>
                <Badge variant="other">Rédaction de contenu</Badge>
                <Badge variant="other">Analytics</Badge>
                <Badge variant="other">Product Ownership</Badge>
                <Badge variant="other">Gestion de projet</Badge>
                <Badge variant="other">Gamification</Badge>
              </div>
            </div>
          </div>
        </Card>

        {/* Langues */}
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Langues</h2>
          <div className="space-y-3">
            <div className="flex items-center gap-4">
              <span className="w-24 font-medium">Français</span>
              <div className="flex gap-1">
                {Array.from({ length: 10 }).map((_, i) => (
                  <span
                    key={i}
                    className={
                      i < 10
                        ? "w-3 h-3 rounded-full bg-foreground"
                        : "w-3 h-3 rounded-full bg-muted"
                    }
                  />
                ))}
              </div>
              <span className="text-muted-foreground text-sm">
                Langue maternelle
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-24 font-medium">Anglais</span>
              <div className="flex gap-1">
                {Array.from({ length: 10 }).map((_, i) => (
                  <span
                    key={i}
                    className={
                      i < 4
                        ? "w-3 h-3 rounded-full bg-foreground"
                        : "w-3 h-3 rounded-full bg-muted"
                    }
                  />
                ))}
              </div>
              <span className="text-muted-foreground text-sm">
                Professionnel
              </span>
            </div>
          </div>
        </Card>
      </div>
    </main>
  );
}
