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
}

const projects: Project[] = [
  {
    slug: "keyboard",
    title: "Keyboard",
    shortDescription:
      "Dictionnaire d'anglais en ligne avec une interface moderne et intuitive",
    context:
      "Ce projet est né de la nécessité de créer un dictionnaire d'anglais accessible et facile à utiliser. L'objectif était de fournir une interface moderne qui permet aux utilisateurs de rechercher rapidement des définitions et d'accéder à des exemples pertinents.",
    challenges:
      "L'un des principaux défis était de créer une expérience utilisateur fluide tout en gérant une large base de données de mots et de définitions. La mise en place d'une recherche instantanée performante et la gestion du cache côté client ont été des aspects cruciaux du développement.",
    technologies: ["React", "TypeScript", "MongoDB", "Tailwind CSS", "Next.js"],
    duration: "6 mois",
    role: "Développeur Frontend & Designer UI/UX",
    team: "Challenge Frontend Mentor",
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
  },
];

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const project = projects.find((p) => p.slug === slug);
  return project || null;
}

export async function getAllProjects(): Promise<Project[]> {
  return projects;
}
