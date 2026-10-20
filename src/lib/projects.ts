export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  context: string;
  challenges: string;
  technologies: string[];
  duration: string;
  role: string;
  team: string;
  keyPoints: string[];
  coverImage: string;
  gallery?: {
    url: string;
    caption?: string;
  }[];
  liveUrl?: string;
  githubUrl?: string;
  /** Un projet non public n'apparaît nulle part : liste, accueil, sitemap ni URL directe. */
  isPublic: boolean;
  isHighlighted: boolean;
}

const projects: Project[] = [
  {
    slug: "nzonzi-studio",
    title: "NZONZI Studio",
    shortDescription:
      "Refonte complète du site d'un studio créatif afro-caribéen : vitrine bilingue, boutique en ligne, lecture de manga et back-office sur mesure",
    context:
      "NZONZI Studio est un studio créatif basé à Bruxelles (animation 2D, branding, écriture, formations et édition du manga MIWA). Son ancien site WordPress ne convertissait pas : il présentait le studio sans guider les visiteurs vers une demande de devis, une inscription ou un achat. J'ai mené la refonte de bout en bout, de la recherche UX et de l'accompagnement sur les textes jusqu'à la mise en production, avec un objectif clair : transformer le site en outil d'acquisition pour chacune des activités du studio.",
    challenges:
      "Le site devait servir quatre publics très différents (marques et éditeurs, apprenants, lecteurs, acheteurs) sans perdre en clarté. Il fallait aussi donner au studio une autonomie complète sur son contenu : accueil, portfolio, produits, témoignages et chapitres du manga se gèrent depuis un back-office avec des rôles distincts. Côté technique, les points sensibles étaient le paiement Stripe avec gestion de stock et livraison de fichiers numériques, la mesure des conversions publicitaires sur cinq plateformes respectueuse du consentement, et la sécurité des formulaires publics.",
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "PostgreSQL",
      "Prisma",
      "Auth.js",
      "Stripe",
      "next-intl",
      "Vercel",
    ],
    duration: "Juillet – septembre 2026",
    role: "Recherche UX/UI, accompagnement copywriting, développement Full Stack & DevOps",
    team: "NZONZI Studio",
    keyPoints: [
      "Parcours de conversion par public : devis Studio, formations, édition, boutique",
      "Site bilingue français/anglais avec SEO natif (canonical, hreflang, OpenGraph)",
      "Boutique Stripe Checkout avec gestion de stock et liens de téléchargement sécurisés",
      "Lecteur en ligne des chapitres du manga MIWA",
      "Back-office sur mesure avec rôles superadmin, admin et éditeur",
      "Suivi des conversions Meta, Google, TikTok, Pinterest et LinkedIn avec Consent Mode v2",
      "Formulaires protégés : limitation de débit, anti-bot et validation stricte des entrées",
      "Clean Architecture, tests unitaires (Vitest) et parcours critiques en E2E (Playwright)",
    ],
    coverImage: "/images/projects/nzonzi-studio/home.png",
    gallery: [
      {
        url: "/images/projects/nzonzi-studio/portfolio.png",
        caption: "Portfolio filtrable, géré depuis le back-office",
      },
      {
        url: "/images/projects/nzonzi-studio/edition.png",
        caption:
          "Page Édition : parcours éditeur pour l'acquisition des droits de MIWA",
      },
      {
        url: "/images/projects/nzonzi-studio/miwa.png",
        caption: "Lecture en ligne des chapitres du manga MIWA",
      },
      {
        url: "/images/projects/nzonzi-studio/studio.png",
        caption: "Page de service Animation 2D avec demande de devis intégrée",
      },
    ],
    liveUrl: "https://nzonzi-studio.com/fr",
    isPublic: true,
    isHighlighted: true,
  },

  {
    slug: "vienecheckin",
    title: "VieneCheckIn",
    shortDescription:
      "SaaS de gestion des présences pour entreprises, avec pointage géolocalisé et vérification faciale",
    context:
      "VieneCheckIn est un produit développé au sein de CompanyViene pour être commercialisé auprès d'entreprises, à commencer par Libreville au Gabon. Il répond à un problème concret des services RH : garantir qu'un pointage correspond bien à la bonne personne, au bon endroit et au bon moment. Chaque entreprise cliente dispose de son propre espace, avec ses sites, ses employés et ses règles de présence.",
    challenges:
      "Le cœur du produit est l'intégrité du pointage : l'employé doit se trouver dans la zone définie par son entreprise (géorepérage GPS) et son identité est confirmée par une vérification faciale via le widget VieneID. Il fallait aussi isoler strictement les données de chaque entreprise cliente et proposer trois niveaux d'accès (super administrateur, administrateur d'entreprise, employé). Côté expérience, la priorité était un pointage rapide sur mobile et une configuration des sites simple pour les administrateurs, avec carte interactive et recherche d'adresse.",
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "PostgreSQL",
      "Prisma",
      "Auth.js",
      "Leaflet",
      "Cloudinary",
    ],
    duration: "Janvier – juin 2026",
    role: "Recherche UX/UI & développeur Full Stack",
    team: "CompanyViene",
    keyPoints: [
      "Architecture multi-entreprises avec isolation stricte des données",
      "Pointage validé par géorepérage GPS et précision de position affichée",
      "Vérification d'identité par reconnaissance faciale (intégration du widget VieneID)",
      "Trois niveaux d'accès : super administrateur, administrateur d'entreprise, employé",
      "Carte interactive Leaflet et autocomplétion d'adresse via OpenStreetMap, sans clé d'API",
      "Limitation de débit sur la connexion, le pointage et l'envoi de photos",
      "Clean Architecture et validation Zod de toutes les entrées côté serveur",
    ],
    coverImage: "/images/projects/vienecheckin/cover.png",
    gallery: [
      {
        url: "/images/projects/vienecheckin/checkin-mobile.png",
        caption:
          "Pointage sur mobile avec géorepérage et vérification faciale, suivi en direct par les RH",
      },
      {
        url: "/images/projects/vienecheckin/reports.png",
        caption:
          "Rapports mensuels : heures, jours travaillés et taux de validité par employé",
      },
      {
        url: "/images/projects/vienecheckin/planning.png",
        caption: "Planning des affectations par site",
      },
      {
        url: "/images/projects/vienecheckin/sites.png",
        caption: "Sites de travail et rayon de géorepérage de chacun",
      },
      {
        url: "/images/projects/vienecheckin/super-companies.png",
        caption: "Espace éditeur : gestion des entreprises clientes du SaaS",
      },
      {
        url: "/images/projects/vienecheckin/super-analytics.png",
        caption: "Analytiques globales de la plateforme, par entreprise",
      },
    ],
    isPublic: true,
    isHighlighted: true,
  },
  {
    slug: "i18n-chat",
    title: "i18n-chat",
    shortDescription:
      "Plateforme d'envoi de messages multilingues pour une institution publique : un message rédigé une fois, livré traduit par e-mail, SMS ou WhatsApp",
    context:
      "Ce projet est parti d'un besoin précis d'une entité publique fédérale : communiquer avec des citoyens qui ne parlent pas tous la même langue. Les agents rédigent un message une seule fois, à partir d'un modèle ou en texte libre, et la plateforme le traduit puis le livre à chaque destinataire dans sa langue préférée, sur le canal de son choix. J'ai conduit le projet seul, de l'analyse fonctionnelle à l'infrastructure de déploiement.",
    challenges:
      "Le contexte public imposait un haut niveau d'exigence sur la protection des données : coordonnées chiffrées en base (AES-256-GCM), suppression automatique des données des destinataires anonymes après 30 jours, et journal d'audit immuable de toutes les actions. Il fallait aussi fiabiliser l'envoi en masse avec une file d'attente, gérer les modèles WhatsApp soumis à l'approbation de Meta, et rendre le fournisseur de traduction interchangeable (LibreTranslate auto-hébergé ou ModernMT). Enfin, la plateforme devait pouvoir être installée aussi bien sur les serveurs de l'institution que dans le cloud.",
    technologies: [
      "NestJS",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "BullMQ",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
    ],
    duration: "Mars – juin 2026",
    role: "Recherche UX/UI, développement Full Stack & DevOps",
    team: "Entité publique fédérale",
    keyPoints: [
      "Assistant d'envoi en 4 étapes, à partir d'un modèle ou d'un texte libre",
      "Traduction automatique avec fournisseur interchangeable (LibreTranslate, ModernMT)",
      "Livraison par e-mail, SMS et WhatsApp, avec suivi de chaque message",
      "Modèles à variables, traduits par langue, et gestion des modèles WhatsApp approuvés par Meta",
      "Import de destinataires en lot par fichier CSV",
      "Rôles administrateur, expéditeur et lecteur, avec journal d'audit immuable",
      "Chiffrement des coordonnées et purge automatique conforme au RGPD",
      "Déploiement sur site (Docker Compose) ou dans le cloud (Kubernetes), CI GitHub Actions",
    ],
    coverImage: "/images/projects/i18n-chat/cover.png",
    gallery: [
      {
        url: "/images/projects/i18n-chat/template-detail.png",
        caption:
          "Modèle à variables et ses traductions, ici en arabe avec affichage de droite à gauche",
      },
      {
        url: "/images/projects/i18n-chat/delivered-emails.png",
        caption: "Un même envoi reçu par chaque destinataire dans sa langue",
      },
      {
        url: "/images/projects/i18n-chat/dispatch-detail.png",
        caption: "Suivi d'un envoi : canal, langue et statut de chaque message",
      },
      {
        url: "/images/projects/i18n-chat/wizard.png",
        caption: "Assistant d'envoi en quatre étapes",
      },
      {
        url: "/images/projects/i18n-chat/recipients.png",
        caption: "Destinataires, langue préférée et canaux de contact",
      },
    ],
    githubUrl: "https://github.com/Chermann-KING/i18n-chat",
    isPublic: true,
    isHighlighted: true,
  },
  {
    slug: "ciaei-semen-africa",
    title: "CIAEI",
    shortDescription:
      "Site officiel et back-office complet d'une conférence internationale à Libreville : inscriptions, billetterie multi-paiement, appel à contributions et sponsoring",
    context:
      "La Conférence Internationale Afrique-Europe sur l'Insolvabilité (10-11 décembre 2026, Université Internationale de Libreville – Berthe & Jean) est co-organisée par Semen Africa Consulting, le Fonds Scientifique Jean Bastin et l'Université Internationale de Libreville – Berthe & Jean. Après avoir réalisé la refonte du site institutionnel de Semen Africa Consulting, j'ai été chargé de construire de zéro la plateforme dédiée à cet événement : un site vitrine bilingue et un back-office permettant à l'équipe organisatrice de gérer elle-même inscriptions, billetterie, contributions scientifiques et demandes de sponsoring, sans dépendre d'un développeur au quotidien.",
    challenges:
      "La billetterie devait accepter aussi bien le paiement par carte (Stripe) que le Mobile Money sur place (Airtel Money, Moov Money), avec génération de billets à QR code, check-in le jour J et politique de remboursement configurable par l'équipe. Le back-office devait répartir les responsabilités entre cinq rôles (direction, édition de contenu, comité scientifique, accueil) avec une authentification à deux facteurs (TOTP) sur les comptes administrateurs. Deux points plus subtils ont nécessité un vrai travail d'UX avec la cliente en cours de projet : les demandes de lettre d'invitation visa et de sponsoring pouvaient être reçues sans jamais remonter clairement à l'équipe, et certaines listes admin devenaient difficiles à exploiter une fois remplies de données réelles (statuts peu lisibles, absence de recherche, de filtre ou de pagination) — corrigés au fil des retours terrain plutôt que devinés à l'avance.",
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Auth.js",
      "Stripe",
      "next-intl",
      "Upstash Redis",
      "Vercel",
    ],
    duration: "Depuis septembre 2026",
    role: "Recherche UX/UI, développement Full Stack & DevOps",
    team: "Semen Africa Consulting",
    keyPoints: [
      "Back-office à 5 rôles (SUPER_ADMIN, ADMIN, EDITOR, SCIENTIFIC_COMMITTEE, CHECKIN_STAFF) avec permissions par section et 2FA TOTP",
      "Billetterie : paiement carte (Stripe) et Mobile Money sur place (Airtel/Moov), billets QR code, check-in jour J, remboursement configurable",
      "Formules tarifaires Étudiant / Professionnel / VIP et demandes de lettre d'invitation visa",
      "Appel à contributions scientifiques et demandes de sponsoring avec suivi interne par statut",
      "Site bilingue français/anglais (next-intl) et accessibilité WCAG 2.2 AA vérifiée en continu (Playwright + axe-core)",
      "Clean Architecture stricte et développement piloté par les tests (Vitest, Playwright)",
      "Versionnement automatique par Conventional Commits (release-please) et déploiement continu Vercel + Neon",
    ],
    coverImage: "/images/projects/ciaei/home-hero.png",
    gallery: [
      {
        url: "/images/projects/ciaei/programme-hero.png",
        caption: "Programme de la conférence",
      },
      {
        url: "/images/projects/ciaei/inscription-hero.png",
        caption: "Parcours d'inscription et de billetterie",
      },
      {
        url: "/images/projects/ciaei/admin-inscriptions-hero.png",
        caption: "Back-office : liste des inscriptions, vue tableau ou grille",
      },
      {
        url: "/images/projects/ciaei/admin-contributions-hero.png",
        caption: "Back-office : suivi des contributions scientifiques reçues",
      },
    ],
    liveUrl: "https://ciaei.semen-africa.com",
    isPublic: true,
    isHighlighted: false,
  },
  {
    slug: "projet-x",
    title: "Projet-X",
    shortDescription:
      "Application mobile de mise en relation entre clients et artisans vérifiés en Afrique francophone, en pilote au Gabon",
    context:
      "Le marché de l'artisanat en Afrique francophone souffre d'un manque de transparence sur les prix, d'une absence de garantie de qualité et d'un manque de confiance dans les transactions. Projet-X y répond avec une plateforme qui intègre la confiance dès la conception : profils d'artisans vérifiés, devis formalisés, avis et portfolio. Le pilote couvre 12 métiers au Gabon (plomberie, électricité, maçonnerie, climatisation, etc.). J'en assure la conception et le développement de bout en bout.",
    challenges:
      "L'application réunit trois espaces aux besoins très différents : le client qui cherche, compare et demande un devis ; l'artisan qui s'inscrit, fait vérifier son profil et gère ses devis et son agenda ; l'administrateur qui valide les profils et modère les signalements. Il fallait aussi penser le produit pour le marché visé : six langues dont l'arabe et le swahili, numéros de téléphone locaux, et un modèle économique par abonnement pour les artisans, avec paiement Mobile Money prévu.",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "NativeWind",
      "TanStack Query",
      "Zustand",
      "i18next",
    ],
    duration: "Depuis juillet 2026",
    role: "Recherche UX/UI, développement Full Stack & DevOps",
    team: "Projet personnel",
    keyPoints: [
      "Trois espaces : client, artisan et administrateur",
      "Inscription des artisans en plusieurs étapes avec validation manuelle des profils",
      "Recherche d'artisans, demande de devis, messagerie et avis",
      "Agenda et gestion des devis côté artisan",
      "Abonnements artisans (gratuit, standard, premium) en francs CFA",
      "Interface disponible en six langues : français, anglais, espagnol, portugais, arabe et swahili",
      "Clean Architecture, tests unitaires (Jest) et tests E2E (Playwright)",
    ],
    coverImage: "/images/projects/projet-x/onboarding.png",
    isPublic: true,
    isHighlighted: true,
  },
  {
    slug: "oypunu",
    title: "O'Ypunu",
    shortDescription:
      "Dictionnaire social et collaboratif des langues africaines, disponible sur le web et sur mobile",
    context:
      "O'Ypunu est né de la volonté de préserver et de faire vivre les langues africaines, à commencer par le yipunu du Gabon. La plateforme combine un dictionnaire collaboratif, où chacun peut proposer des mots, leur sens et leur prononciation, avec les fonctionnalités d'un réseau social : communautés linguistiques, messagerie en temps réel et profils. J'ai conçu et développé l'ensemble du produit : l'API, l'application web et l'application mobile.",
    challenges:
      "Un dictionnaire ouvert aux contributions doit rester fiable : chaque proposition passe par un circuit de modération, avec historique des révisions. Il fallait aussi rendre la contribution simple, même pour un public peu habitué aux outils numériques : l'ajout d'un mot se fait en trois étapes guidées, avec enregistrement audio de la prononciation directement depuis le téléphone. Côté technique, la messagerie en temps réel et le partage de mots dans les conversations reposent sur Socket.io et Redis.",
    technologies: [
      "Angular",
      "NestJS",
      "React Native",
      "Expo",
      "TypeScript",
      "MongoDB",
      "Redis",
      "Socket.io",
      "Tailwind CSS",
      "Cloudinary",
    ],
    duration: "Juin 2025 – août 2026",
    role: "Concepteur & développeur Full Stack (API, web et mobile)",
    team: "Projet personnel",
    keyPoints: [
      "Dictionnaire collaboratif avec recherche, filtres, étymologie et prononciations audio",
      "Contribution guidée en trois étapes, avec enregistrement audio depuis le mobile",
      "Modération des contributions et historique des révisions",
      "Communautés linguistiques publiques ou privées",
      "Messagerie en temps réel avec partage de mots et indicateurs de présence",
      "Tableau de bord d'administration et gestion des rôles",
      "Application web (Angular), application mobile (Expo) et API (NestJS)",
    ],
    coverImage: "/images/projects/oypunu/home.png",
    gallery: [
      {
        url: "/images/projects/oypunu/contribution-light.png",
        caption:
          "Ajout d'un mot en trois étapes sur mobile : mot, prononciation, définition",
      },
      {
        url: "/images/projects/oypunu/contribution-dark.png",
        caption: "Le même parcours en mode sombre",
      },
    ],
    isPublic: false,
    isHighlighted: false,
  },
  {
    slug: "ifumb",
    title: "IFUMB",
    shortDescription:
      "Réseau généalogique pensé pour les cultures africaines et afro-descendantes : unions multiples, identité culturelle et collaboration familiale",
    context:
      "Les outils de généalogie classiques modélisent mal les réalités familiales africaines : unions multiples, parents inconnus, appartenance à une tribu, un clan ou une ethnie. IFUMB permet de construire son arbre en tenant compte de ces réalités, de l'enrichir à plusieurs et de relier des arbres entre eux. Après une première version en React et NestJS, j'ai mené la migration complète de l'application vers Next.js 16, en Clean Architecture.",
    challenges:
      "La migration devait se faire sur la base de données de production partagée avec l'ancienne application, sans jamais la mettre en danger : écritures désactivables, tests exécutés sur une base isolée et migrations reprises à l'identique. Sur le plan fonctionnel, les difficultés venaient de la modélisation des liens de parenté (unions multiples, lignées, ancêtres communs), de la collaboration sur un même arbre avec un circuit de propositions et de validation, et de la fusion de branches entre arbres liés.",
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "PostgreSQL",
      "Prisma",
      "Auth.js",
      "Supabase",
      "Playwright",
    ],
    duration: "Mars 2026 – aujourd'hui",
    role: "Concepteur & développeur Full Stack",
    team: "Projet personnel",
    keyPoints: [
      "Graphe familial interactif, vue des lignées, chemin de parenté et ancêtres communs",
      "Gestion des unions multiples, des parents inconnus et de l'identité culturelle",
      "Collaboration sur un arbre : invitations, propositions de modifications et validation",
      "Suggestions et demandes de connexion entre arbres, fusion de branches",
      "Exploration des arbres publics et recherche de membres",
      "Migration vers Next.js 16 menée sur la base de production, sans risque pour les données existantes",
      "Couverture de tests du domaine supérieure à 90 %, tests E2E avec contrôle d'accessibilité",
    ],
    coverImage: "/images/projects/ifumb/cover.png",
    gallery: [
      {
        url: "/images/projects/ifumb/kinship.png",
        caption:
          "Chemin de parenté calculé entre deux membres, à travers une union polygame",
      },
      {
        url: "/images/projects/ifumb/ancestors.png",
        caption: "Recherche des ancêtres communs",
      },
      {
        url: "/images/projects/ifumb/member.png",
        caption: "Fiche membre : clan, culture et région d'origine",
      },
      {
        url: "/images/projects/ifumb/pending.png",
        caption: "Propositions d'un collaborateur en attente de validation",
      },
      {
        url: "/images/projects/ifumb/history.png",
        caption: "Journal des modifications de l'arbre",
      },
      {
        url: "/images/projects/ifumb/explore.png",
        caption: "Exploration des arbres publics par culture",
      },
    ],
    liveUrl: "https://ifumb-nu.vercel.app/",
    isPublic: true,
    isHighlighted: false,
  },
  {
    slug: "kaaaki",
    title: "Kaaaki",
    shortDescription:
      "Application mobile de suivi de livraison en temps réel pour commerces et livreurs, pensée pour le Gabon et conçue pour fonctionner hors ligne",
    context:
      "Kaaaki met en relation des commerces et des livreurs, salariés ou indépendants, pour gérer et suivre les livraisons en temps réel. Le commerce crée et assigne une livraison, et le livreur fait avancer son statut et partage sa position. Conçue d'abord pour le contexte gabonais, l'application est prévue pour s'étendre à d'autres pays africains.",
    challenges:
      "Le réseau mobile n'étant pas toujours fiable, l'application fonctionne entièrement hors ligne : chaque action est enregistrée localement puis synchronisée avec le serveur dès que la connexion revient. Le modèle métier devait aussi refléter le terrain : un livreur indépendant peut travailler pour plusieurs commerces en même temps, et chaque étape de la livraison est horodatée et géolocalisée pour servir de preuve en cas de litige.",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "SQLite",
      "Drizzle ORM",
      "Zod",
      "Jest",
      "Maestro",
    ],
    duration: "Depuis septembre 2026",
    role: "Concepteur & développeur mobile",
    team: "Projet personnel",
    keyPoints: [
      "Deux rôles : gérant de commerce et livreur",
      "Fonctionnement hors ligne complet avec synchronisation différée",
      "Statuts de livraison horodatés et positions GPS enregistrées",
      "Connexion des livreurs par téléphone et code PIN, affiliation à plusieurs commerces",
      "Interface multilingue",
      "Clean Architecture et développement piloté par les tests (TDD)",
    ],
    coverImage: "/images/projects/kaaaki/cover.png",
    isPublic: false,
    isHighlighted: false,
  },
  {
    slug: "personal-finance",
    title: "Finance Personnelle",
    shortDescription:
      "Application web complète de gestion financière permettant le suivi des dépenses, la gestion de budget et l'épargne",
    context:
      "Ce projet est né du besoin de créer une solution complète de gestion financière personnelle. L'objectif était de développer une application qui permet aux utilisateurs de suivre leurs dépenses, gérer leurs budgets, et atteindre leurs objectifs d'épargne de manière intuitive et sécurisée.",
    challenges:
      "Les principaux défis techniques incluaient la mise en place d'un système d'authentification robuste, la gestion en temps réel des transactions financières, et la création d'une interface utilisateur intuitive pour visualiser les données financières complexes. La sécurisation des données sensibles et la performance de l'application avec une grande quantité de transactions ont également été des aspects cruciaux.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Tailwind CSS",
    ],
    duration: "135 heures 39 minutes",
    role: "Développeur Full Stack",
    team: "Frontend Mentor",
    keyPoints: [
      "Système d'authentification sécurisé avec JWT",
      "Suivi en temps réel des transactions et du solde",
      "Gestion de budget par catégorie",
      "Système de pots d'épargne avec objectifs",
      "Interface responsive et moderne",
      "Visualisation des données financières",
      "Gestion des factures et paiements récurrents",
    ],
    coverImage: "/images/projects/personal-finance/overview.png",
    gallery: [
      {
        url: "/images/projects/personal-finance/transactions.png",
        caption: "Interface de gestion des transactions",
      },

      {
        url: "/images/projects/personal-finance/budgets.png",
        caption: "Suivi des budgets par catégorie",
      },
      {
        url: "/images/projects/personal-finance/pots.png",
        caption: "Gestion des pots d'épargne",
      },
      {
        url: "/images/projects/personal-finance/currenting-bills.png",
        caption: "Gestion des factures et paiements récurrents",
      },
    ],
    liveUrl: "https://personal-finance-app-two.vercel.app",
    githubUrl: "https://github.com/Chermann-KING/personal-finance-app",
    isPublic: true,
    isHighlighted: true,
  },
  {
    slug: "companyviene",
    title: "CompanyViene",
    shortDescription:
      "Site vitrine corporate multilingue moderne pour une entreprise d'ingénierie et de digitalisation avec interface responsive et fonctionnalités avancées",
    context:
      "Ce projet est né du besoin de créer une présence web professionnelle pour CompanyViene, une entreprise spécialisée dans l'ingénierie et la digitalisation. L'objectif était de développer un site vitrine moderne, multilingue (français/anglais) qui reflète le professionnalisme de l'entreprise tout en offrant une expérience utilisateur exceptionnelle. Le site devait présenter les services, permettre la prise de contact et s'adapter parfaitement aux standards internationaux.",
    challenges:
      "Les principaux défis techniques incluaient la mise en place d'un système d'internationalisation robuste avec Next.js 15, la gestion du routing dynamique multilingue avec des URLs SEO-friendly, l'intégration des APIs externes (Google Maps, système de mail), et la résolution des problèmes de compatibilité avec la dernière version de Next.js. La configuration du déploiement sur Vercel avec gestion des variables d'environnement et l'optimisation des performances ont également été des aspects cruciaux.",
    technologies: [
      "Next.js 15",
      "React 19",
      "TypeScript 5",
      "Tailwind CSS 3",
      "next-intl",
      "Google Maps API",
      "Upstash Redis",
      "Nodemailer 6",
      "Zod",
      "Vercel",
    ],
    duration: "41 heures 14 minutes",
    role: "Développeur Full Stack & Consultant UI/UX",
    team: "CompanyViene",
    keyPoints: [
      "Architecture Next.js 15 avec App Router et routing internationalisé",
      "Support complet multilingue (FR/EN) avec next-intl",
      "Système de navigation dynamique avec URLs localisées",
      "Interface responsive moderne avec animations et transitions",
      "Intégration Google Maps pour la localisation",
      "Formulaire de contact avec validation Zod et envoi d'emails",
      "Optimisations UI/UX avancées (spacing, typography, gradients)",
      "Déploiement automatisé sur Vercel avec CI/CD",
      "Gestion des erreurs et fallbacks robustes",
      "Architecture modulaire avec composants réutilisables",
    ],
    coverImage: "/images/projects/companyviene/home.png",
    gallery: [
      {
        url: "/images/projects/companyviene/products-services.png",
        caption: "Grille des domaines d'activités avec design moderne",
      },
      {
        url: "/images/projects/companyviene/contact-form.png",
        caption: "Formulaire de contact avec validation et envoi d'emails",
      },
      {
        url: "/images/projects/companyviene/footer.png",
        caption: "Footer responsive avec liens organisés",
      },
    ],
    liveUrl: "https://companyviene.vercel.app",
    githubUrl: "https://github.com/Chermann-KING/companyviene",
    isPublic: true,
    isHighlighted: true,
  },
  {
    slug: "factures",
    title: "Factures",
    shortDescription:
      "Application web moderne pour la gestion et le suivi des factures avec filtrage intelligent",
    context:
      "Ce projet est une application de gestion de factures développée pour permettre aux utilisateurs de suivre et gérer efficacement leurs factures. L'application offre une interface intuitive pour visualiser, filtrer et gérer différents états de facturation.",
    challenges:
      "Les principaux défis techniques incluaient la mise en place d'un système de filtrage performant, la gestion des différents états de facture (brouillon, en attente, payée), et la création d'une interface utilisateur responsive qui s'adapte à différentes tailles d'écran. La normalisation des données et la gestion d'état ont également été des aspects importants du développement.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "JSON"],
    duration: "76 heures 16 minutes",
    role: "Développeur Full Stack",
    team: "Frontend Mentor",
    keyPoints: [
      "Interface utilisateur moderne et responsive",
      "Système de filtrage par statut de facture",
      "Gestion d'état avec React Hooks",
      "Architecture TypeScript robuste",
      "Design system cohérent avec Tailwind CSS",
    ],
    coverImage: "/images/projects/invoices/invoices-app-light.png",
    gallery: [
      {
        url: "/images/projects/invoices/invoices-app-filter.png",
        caption: "Liste des factures avec filtres",
      },
      {
        url: "/images/projects/invoices/invoices-app-details.png",
        caption: "Détail d'une facture",
      },
    ],
    liveUrl: "https://invoices-app-nine.vercel.app",
    githubUrl: "https://github.com/Chermann-KING/invoices-app",
    isPublic: false,
    isHighlighted: true,
  },
  {
    slug: "audiophile",
    title: "Audiophile",
    shortDescription:
      "Plateforme e-commerce spécialisée dans la vente de produits audio haut de gamme avec une expérience utilisateur immersive",
    context:
      "Ce projet est une application e-commerce moderne dédiée à la vente de produits audio premium. L'objectif était de créer une plateforme qui met en valeur les produits audio haut de gamme tout en offrant une expérience d'achat fluide et intuitive. Le projet s'inspire des meilleures pratiques du e-commerce tout en apportant une touche unique adaptée au secteur de l'audio.",
    challenges:
      "Après une première version réalisée à partir d'un défi Frontend Mentor, le projet a été entièrement modernisé en 2026 : passage d'Angular 19 à Angular 22, fonctionnement sans zone.js avec un état géré par signaux, et réorganisation en Clean Architecture par fonctionnalité (catalogue, panier, compte, commande), avec une règle de dépendance entre couches vérifiée automatiquement. Le faux backend a laissé place à une vraie API serverless sur Vercel, avec authentification par sessions stockées en base, cookie HttpOnly et limitation des tentatives de connexion.",
    technologies: [
      "Angular 22",
      "TypeScript",
      "Tailwind CSS",
      "Signals",
      "Vercel Functions",
      "Neon (PostgreSQL)",
      "Zod",
      "Vitest",
    ],
    duration: "58 heures 32 minutes, puis modernisation en octobre 2026",
    role: "Développeur Full Stack",
    team: "Frontend Mentor",
    keyPoints: [
      "Application Angular 22 sans zone.js, composants OnPush et état en signaux",
      "Clean Architecture par fonctionnalité, frontières entre couches vérifiées par ESLint",
      "API serverless (produits, commandes, utilisateurs) déployée sur Vercel",
      "Authentification par sessions en base, cookie HttpOnly et limitation des essais",
      "Panier persistant et parcours de commande avec confirmation",
      "Interface responsive mobile, tablette et desktop avec design system dédié",
      "Tests unitaires migrés de Karma vers Vitest et intégration continue sur chaque pull request",
    ],
    coverImage: "/images/projects/audiophile/home.png",
    gallery: [
      {
        url: "/images/projects/audiophile/xx99-headphone-details.png",
        caption: "Vue détaillée du produit",
      },
      {
        url: "/images/projects/audiophile/cart.png",
        caption: "Interface du panier",
      },
      {
        url: "/images/projects/audiophile/order-confirmation.png",
        caption: "Confirmation de la commande",
      },
    ],
    liveUrl: "https://audiophile-one-mu.vercel.app/",
    githubUrl: "https://github.com/Chermann-KING/audiophile",
    isPublic: true,
    isHighlighted: true,
  },
  {
    slug: "ck-garage-manager",
    title: "CK Garage Manager",
    shortDescription:
      "Application de gestion complète pour un garage automobile avec suivi des clients, véhicules et interventions",
    context:
      "Ce projet est né du besoin de moderniser la gestion d'un garage automobile. L'objectif était de créer une application web permettant de suivre efficacement les clients, leurs véhicules et les interventions techniques, tout en offrant une interface intuitive pour les utilisateurs.",
    challenges:
      "Les principaux défis ont été la conception d'une architecture robuste pour gérer les relations complexes entre clients, véhicules et interventions, ainsi que la mise en place d'une interface utilisateur intuitive permettant un accès rapide aux informations essentielles. La gestion des statuts d'interventions en temps réel et l'organisation des données ont également été des aspects cruciaux.",
    technologies: [
      "Node.js",
      "Express",
      "Supabase",
      "SQL",
      "Pug",
      "Tailwind CSS",
      "JavaScript",
      "JSON",
    ],
    duration: "9 heures 2 minutes",
    role: "Développeur Full Stack",
    team: "E6K - Technofuture TIC",
    keyPoints: [
      "Gestion complète des clients et de leurs véhicules",
      "Suivi des interventions techniques avec statuts",
      "Interface responsive et moderne avec Tailwind CSS",
      "Architecture MVC robuste",
      "Système de messages flash pour le feedback utilisateur",
      "Support du mode sombre",
      "Tri et filtrage avancés des données",
    ],
    coverImage: "/images/projects/ck-garage-manager/home.png",
    gallery: [
      {
        url: "/images/projects/ck-garage-manager/clients-list.png",
        caption: "Liste des clients avec tri par nombre de véhicules",
      },
      {
        url: "/images/projects/ck-garage-manager/interventions.png",
        caption: "Gestion des interventions techniques",
      },
      {
        url: "/images/projects/ck-garage-manager/vehicles.png",
        caption: "Suivi des véhicules par client",
      },
    ],
    liveUrl: "https://ck-garage-manager.vercel.app",
    githubUrl: "https://github.com/Chermann-KING/ck-garage-manager",
    isPublic: false,
    isHighlighted: false,
  },
  {
    slug: "semen-africa",
    title: "Semen Africa Consulting",
    shortDescription:
      "Site web corporate professionnel pour une entreprise de conseil en intelligence des affaires spécialisée dans l'accompagnement des investissements en Afrique subsaharienne",
    context:
      "Ce projet a été développé pour Semen Africa Consulting, une entreprise marocaine basée à Casablanca, spécialisée dans le conseil en intelligence des affaires. L'objectif était de créer une présence web professionnelle qui reflète l'expertise de l'entreprise dans l'accompagnement des investisseurs internationaux en Afrique subsaharienne. Le site devait présenter les multiples domaines d'expertise tout en véhiculant la crédibilité et le professionnalisme nécessaires pour ce secteur d'activité.",
    challenges:
      "Les principaux défis techniques incluaient la création d'une architecture d'information claire pour présenter les 7 missions principales de l'entreprise (compliance, due diligence, arbitrage international, etc.), la mise en place d'une interface professionnelle qui inspire confiance aux investisseurs internationaux, et l'optimisation du référencement pour le marché africain. La présentation de l'équipe de consultants seniors et la mise en valeur des publications spécialisées (SISSA, blog) ont également été des aspects cruciaux de l'intégration. En 2026, j'ai engagé la migration du site vers Next.js 16 : reconstruction fidèle des pages existantes, reprise des 7 missions et des catégories d'articles, back-office avec rôles, commentaires modérés et protégés contre le spam, en-têtes de sécurité et tests d'accessibilité automatisés.",
    technologies: [
      "WordPress",
      "Elementor",
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
    ],
    duration:
      "45 heures 20 minutes, puis migration Next.js en cours depuis septembre 2026",
    role: "Intégrateur Web & Consultant en Communication Digitale, puis développeur Full Stack",
    team: "Semen Africa Consulting",
    keyPoints: [
      "Architecture d'information structurée autour de 7 missions principales",
      "Interface corporate moderne avec navigation intuitive",
      "Présentation professionnelle de l'équipe dirigeante et des consultants",
      "Section dédiée aux publications et actualités (SISSA, blog)",
      "Domaines d'expertise spécialisés : Compliance, Due Diligence, Arbitrage, I.E & Santé",
      "Gestion des risques transversaux et intelligence économique",
      "Responsabilité sociale d'entreprise et mise en relation",
      "Informations de contact et localisation (Casablanca, Maroc)",
      "Section téléchargements pour les bulletins et rapports",
      "Optimisation SEO pour le marché des investissements africains",
      "Migration en cours vers Next.js 16 avec back-office, rôles et commentaires modérés",
    ],
    coverImage: "/images/projects/semen-africa/home.png",
    gallery: [
      {
        url: "/images/projects/semen-africa/mission.png",
        caption: "Présentation d'une des 7 missions et domaines d'expertise",
      },
      {
        url: "/images/projects/semen-africa/team.png",
        caption: "Équipe de consultants seniors et dirigeants",
      },
      {
        url: "/images/projects/semen-africa/blog.png",
        caption: "Section publications articles de blog",
      },
      {
        url: "/images/projects/semen-africa/contact.png",
        caption: "Page de contact avec localisation Casablanca",
      },
    ],
    liveUrl: "https://semen-africa.com/",
    githubUrl: undefined,
    isPublic: true,
    isHighlighted: true,
  },
  {
    slug: "sissa",
    title: "SISSA",
    shortDescription:
      "Site événementiel professionnel pour le premier sommet continental dédié aux investissements dans les systèmes de santé en Afrique, organisé à Abidjan en 2025",
    context:
      "Ce projet a été développé pour promouvoir et organiser le SISSA (Sommet sur les Investissements dans les Systèmes de Santé en Afrique) 2025, une initiative portée par Semen Africa Consulting visant à transformer les défis sanitaires du continent africain en opportunités économiques substantielles. L'objectif était de créer une plateforme web complète pour présenter cet événement majeur, faciliter les inscriptions des participants, et mettre en valeur l'approche innovante du sommet qui combine enjeux sanitaires et économiques. Le site devait refléter le caractère continental et prestigieux de l'événement tout en attirant investisseurs, professionnels de santé et décideurs africains.",
    challenges:
      "Les principaux défis techniques incluaient la création d'une identité visuelle forte pour cet événement inaugural, la mise en place d'une architecture d'information claire pour présenter les 4 piliers du sommet (Éthique, Rentabilité, Durabilité, Partenariat), et l'intégration d'un système de gestion d'événement avec agenda détaillé. La gestion des partenariats multiples, l'optimisation pour un public panafricain, et la création d'une expérience utilisateur engageante pour promouvoir la participation ont également été des aspects cruciaux du développement.",
    technologies: [
      "WordPress",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Elementor",
      "Event Management System",
    ],
    duration: "38 heures 15 minutes",
    role: "Intégrateur Web & Spécialiste Communication Événementielle",
    team: "Semen Africa Consulting",
    keyPoints: [
      "Site événementiel pour le premier sommet continental SISSA 2025",
      "Architecture basée sur 4 piliers : Éthique, Rentabilité, Durabilité, Partenariat",
      "Agenda détaillé avec 3 temps forts (3, 11 et 12 février 2025)",
      "Section partenaires avec intégration de multiples logos d'organisations",
      "Approche méthodologique : Identifier, Analyser, Transformer",
      "Focus sur la transformation des défis sanitaires en opportunités économiques",
      "Mise en valeur de la Côte d'Ivoire comme hub régional",
      "Interface moderne adaptée au public professionnel africain",
      "Historique des événements Semen Africa (2022-2024)",
      "Section dédiée aux enjeux et thématiques du sommet",
      "Optimisation SEO pour 'investissements santé Afrique'",
      "Call-to-action pour devenir partenaire de l'événement",
    ],
    coverImage: "/images/projects/sissa/home.png",
    gallery: [
      {
        url: "/images/projects/sissa/about.png",
        caption: "Présentation des enjeux et objectifs du SISSA",
      },
      {
        url: "/images/projects/sissa/partner.png",
        caption: "Écosystème de partenaires et organisations participantes",
      },
      {
        url: "/images/projects/sissa/approach.png",
        caption: "Méthodologie et approche du sommet",
      },
    ],
    liveUrl: "https://sissa.semen-africa.com/",
    githubUrl: undefined,
    isPublic: true,
    isHighlighted: true,
  },
  {
    slug: "adis-belcongo",
    title: "ADIS",
    shortDescription:
      "Site web institutionnel pour une ASBL humanitaire belgo-congolaise dédiée au développement rural intégré dans la région du Sankuru (RDC) via l'agriculture, la santé et l'éducation",
    context:
      "Ce projet a été développé pour l'ASBL ADIS-Belgique (Action pour le Développement Intégré du Sankuru), organisation créée en 2016 pour soutenir l'action d'ADIS-Congo (fondée en 1995 par François Okitafumba). L'objectif était de créer une plateforme web complète permettant de présenter cette initiative humanitaire unique qui vise à revitaliser la région du Sankuru en RDC, autrefois prospère mais aujourd'hui confrontée à l'isolement et à la malnutrition. Le site devait faciliter les dons, le recrutement de bénévoles et sensibiliser le public européen aux enjeux du développement rural africain tout en mettant en valeur l'approche intégrée sur trois piliers fondamentaux.",
    challenges:
      "Les principaux défis techniques incluaient la création d'une interface qui touche émotionnellement les visiteurs tout en restant professionnelle pour les donateurs institutionnels, l'intégration d'un système de dons sécurisé avec plusieurs options de paiement (compte ADIS et partenariat PROMA), et la présentation claire des projets concrets sur le terrain. La mise en valeur de l'histoire de l'association depuis 1995, la gestion des témoignages et l'optimisation pour un public bilingue (Belgique-Congo) ont également été des aspects cruciaux de l'intégration. Le défi était aussi de rendre tangible l'impact des actions menées dans une région isolée d'Afrique centrale.",
    technologies: [
      "WordPress",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Elementor",
      "Payment Gateway Integration",
    ],
    duration: "42 heures 30 minutes",
    role: "Intégrateur Web & Graphiste",
    team: "ADIS-Belgique",
    keyPoints: [
      "Site institutionnel pour ASBL humanitaire belgo-congolaise",
      "Architecture basée sur 3 piliers : Agriculture, Santé, Éducation",
      "Système de dons intégré avec options multiples (ADIS + PROMA)",
      "Déductibilité fiscale automatisée pour dons >40€",
      "Section bénévolat avec formulaires de candidature",
      "Présentation historique depuis 1995 (François Okitafumba)",
      "Focus sur la région du Sankuru (ex-grenier du Congo)",
      "Contacts bi-nationaux (Belgique: Vincent Boland, Congo: François Okitafumba)",
      "Interface émotionnelle avec call-to-action humanitaires",
      "Proverbe africain intégré : 'Un doigt tout seul ne peut pas ramasser un caillou'",
      "Projet ferme pilote de Lowela mis en valeur",
      "Optimisation SEO pour 'développement rural Congo'",
    ],
    coverImage: "/images/projects/adis-belcongo/home.png",
    gallery: [
      {
        url: "/images/projects/adis-belcongo/about.png",
        caption:
          "Les 3 piliers du développement : Agriculture, Santé, Éducation",
      },
      {
        url: "/images/projects/adis-belcongo/donation.png",
        caption:
          "Système de dons avec options multiples et déductibilité fiscale",
      },
      {
        url: "/images/projects/adis-belcongo/volunteer.png",
        caption: "Section bénévolat et engagement communautaire",
      },
    ],
    liveUrl: "https://adis-belcongo.org/",
    githubUrl: undefined,
    isPublic: true,
    isHighlighted: false,
  },
];

const HIGHLIGHTED_PROJECTS_LIMIT = 3;

const isPublished = (project: Project) => project.isPublic;

/** Les projets mis en avant parmi les projets publics, dans l'ordre de la liste. */
export function selectHighlightedProjects(
  source: readonly Project[],
): Project[] {
  return source
    .filter((project) => isPublished(project) && project.isHighlighted)
    .slice(0, HIGHLIGHTED_PROJECTS_LIMIT);
}

/** `null` pour un slug inconnu comme pour un projet non public : sa page n'existe pas. */
export async function getProjectBySlug(slug: string): Promise<Project | null> {
  return (
    projects.find((project) => project.slug === slug && isPublished(project)) ??
    null
  );
}

export async function getAllProjects(): Promise<Project[]> {
  return projects.filter(isPublished);
}

export async function getHighlightedProjects(): Promise<Project[]> {
  return selectHighlightedProjects(projects);
}
