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
  isHighlighted: boolean;
}

const projects: Project[] = [
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
      "Les principaux défis techniques incluaient la mise en place d'une architecture modulaire robuste, la gestion d'un catalogue de produits complexe avec des images responsives, et l'implémentation d'un système de panier sophistiqué. La gestion des assets multimédias pour différentes tailles d'écran et l'optimisation des performances ont également été des aspects cruciaux du développement.",
    technologies: ["Angular", "TypeScript", "Tailwind CSS", "JSON Server"],
    duration: "58 heures 32 minutes",
    role: "Développeur Full Stack",
    team: "Frontend Mentor",
    keyPoints: [
      "Architecture modulaire avec séparation claire des responsabilités",
      "Interface responsive avec support mobile, tablette et desktop",
      "Système de catégorisation des produits audio",
      "Gestion avancée du panier d'achat",
      "Design system personnalisé",
      "Backend mock avec JSON Server",
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
    isHighlighted: false,
  },
  {
    slug: "dictionaire",
    title: "Dictionaire",
    shortDescription:
      "Dictionnaire d'anglais en ligne avec une interface moderne et intuitive",
    context:
      "Ce projet est né de la nécessité de créer un dictionnaire d'anglais accessible et facile à utiliser. L'objectif était de fournir une interface moderne qui permet aux utilisateurs de rechercher rapidement des définitions et d'accéder à des exemples pertinents.",
    challenges:
      "L'un des principaux défis était de créer une expérience utilisateur fluide tout en gérant une large base de données de mots et de définitions. La mise en place d'une recherche instantanée performante et la gestion du cache côté client ont été des aspects cruciaux du développement.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
    duration: "56 heures 40 minutes",
    role: "Développeur Frontend & Designer UI/UX",
    team: "Frontend Mentor",
    keyPoints: [
      "Interface utilisateur intuitive et responsive",
      "Recherche instantanée avec suggestions",
      "Mode sombre/clair",
      "Plus de 100,000 mots dans la base de données",
    ],
    coverImage: "/images/projects/keyboard/eng-dico-api-light.png",
    gallery: [
      {
        url: "/images/projects/keyboard/search.jpg",
        caption: "Interface de recherche",
      },
      {
        url: "/images/projects/keyboard/details.jpg",
        caption: "Page de détails d'un mot",
      },
    ],
    liveUrl: "https://dictionary-web-app-brown-nu.vercel.app/",
    githubUrl: "https://github.com/Chermann-KING/dictionary-web-app",
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
      "Les principaux défis techniques incluaient la création d'une architecture d'information claire pour présenter les 7 missions principales de l'entreprise (compliance, due diligence, arbitrage international, etc.), la mise en place d'une interface professionnelle qui inspire confiance aux investisseurs internationaux, et l'optimisation du référencement pour le marché africain. La présentation de l'équipe de consultants seniors et la mise en valeur des publications spécialisées (SISSA, blog) ont également été des aspects cruciaux de l'intégration.",
    technologies: ["WordPress", "HTML5", "CSS3", "JavaScript", "Elementor"],
    duration: "45 heures 20 minutes",
    role: "Intégrateur Web & Consultant en Communication Digitale",
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
    isHighlighted: true,
  },
];

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const project = projects.find((p) => p.slug === slug);
  return project || null;
}

export async function getAllProjects(): Promise<Project[]> {
  return projects;
}

export async function getHighlightedProjects(): Promise<Project[]> {
  return projects.filter((project) => project.isHighlighted).slice(0, 3);
}
