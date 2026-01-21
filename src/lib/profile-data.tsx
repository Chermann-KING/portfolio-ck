import { UserProfile } from "@/types";
import {
  GitHubIcon,
  LinkedInIcon,
  InstagramIcon,
} from "@/components/icons/BrandIcons";

// Date de début de carrière
const CAREER_START_DATE = new Date("2018-03-01");

// Calcule les années d'expérience depuis une date donnée
function getYearsOfExperience(startDate: Date): string {
  const now = new Date();
  const years = Math.floor(
    (now.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25),
  );
  return `${years}+`;
}

// Données des compétences
const skillsData = {
  "Front-end": [
    "React",
    "Next.js",
    "Angular",
    "Ionic",
    "TypeScript",
    "TailwindCSS",
    "SCSS",
  ],
  "Back-end": [
    "Node.js",
    "Express",
    "NestJS",
    "SQL",
    "PostgreSQL",
    "Sequelize",
    "MongoDB",
  ],
  Autres: [
    "Git",
    "Agile/Scrum",
    "Graphic Design",
    "UX/UI",
    "Figma",
    "Postman",
    "WordPress",
  ],
};

export async function getProfileData(): Promise<UserProfile> {
  // !En temps normal, ça doit être récupérée d'une API
  return {
    name: "Hermann MOUSSAVOU",
    location: {
      address: "Charleroi, Belgique",
      imgMap: "/images/location-light-2.png",
    },
    bio: "Développeur full-stack passionné et innovant, combinant une expertise avancée en front-end avec des compétences solides en back-end. Impliqué dans des projets innovants, je conçois des applications web performantes et scalables. Curieux, créatif, résolument collaboratif et orienté solutions, je suis déterminé à transformer vos idées en produits numériques de qualité.",
    avatar: "/images/ck-class.png",
    stats: {
      yearsExperience: getYearsOfExperience(CAREER_START_DATE),
      projectsCount: "12+",
      clientsCount: "6+",
    },
    skills: skillsData,
    social: [
      {
        icon: <GitHubIcon size={30} />,
        platform: "Github",
        url: "https://github.com/Chermann-KING",
      },
      {
        icon: <LinkedInIcon size={30} />,
        platform: "Linkedin",
        url: "https://www.linkedin.com/in/hermann-moussavou/",
      },
      {
        icon: <InstagramIcon size={30} />,
        platform: "Instagram",
        url: "https://www.instagram.com/chermann_king/",
      },
    ],
  };
}
