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
    slug: "dictionaire",
    title: "Dictionaire",
    shortDescription:
      "Dictionnaire d'anglais en ligne avec une interface moderne et intuitive",
    context:
      "Ce projet est né de la nécessité de créer un dictionnaire d'anglais accessible et facile à utiliser. L'objectif était de fournir une interface moderne qui permet aux utilisateurs de rechercher rapidement des définitions et d'accéder à des exemples pertinents.",
    challenges:
      "L'un des principaux défis était de créer une expérience utilisateur fluide tout en gérant une large base de données de mots et de définitions. La mise en place d'une recherche instantanée performante et la gestion du cache côté client ont été des aspects cruciaux du développement.",
    technologies: ["React", "TypeScript", "MongoDB", "Tailwind CSS", "Next.js"],
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
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React", "JSON"],
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
