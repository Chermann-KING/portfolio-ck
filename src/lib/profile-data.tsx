import { UserProfile } from "@/types";
import { Github, Linkedin, Instagram } from "lucide-react";

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
      yearsExperience: "3+",
      projectsCount: "12+",
      clientsCount: "6+",
    },
    skills: skillsData,
    social: [
      {
        icon: <Github size={30} />,
        platform: "Github",
        url: "https://github.com/Chermann-KING",
      },
      {
        icon: <Linkedin size={30} />,
        platform: "Linkedin",
        url: "https://www.linkedin.com/in/hermann-moussavou/",
      },
      {
        icon: <Instagram size={30} />,
        platform: "Instagram",
        url: "https://www.instagram.com/chermann_king/",
      },
    ],
  };
}
