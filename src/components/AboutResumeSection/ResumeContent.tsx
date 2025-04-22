import { Badge } from "../ui/Badge";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

const experiences: Experience[] = [
  {
    title: "Frontend Developer",
    company: "DoctoViene",
    period: "NOV. 2023 - AUJOURD'HUI",
    description:
      "Création d'une application web de service hospitalier avec React et TypeScript. Implémentation de nouvelles fonctionnalités et gestion de projet avec méthodologie Agile SCRUM.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Formik",
      "Tailwind CSS",
      "Vercel",
    ],
  },
  {
    title: "UX/UI Designer",
    company: "DoctoViene",
    period: "AVR. 2023 - OCT 2023",
    description:
      "Design d'interface utilisateur pour une application de service hospitalier. Optimisation des flux utilisateurs et standardisation de l'information.",
    technologies: ["Figma", "Adobe XD", "Illustrator"],
  },
  {
    title: "Fullstack Developer",
    company: "O'YPUNU",
    period: "AOU. 2022 - AJOURD'HUI",
    description:
      "Création d'une Plateforme de Dictionnaire Social. Développement de nouvelles fonctionnalités et gestion de projet avec méthodologie Agile.",
    technologies: ["Angular", "Tailwind CSS", "MongoDB"],
  },
];

const ResumeContent = () => {
  return (
    <div className="space-y-8">
      {experiences.map((exp, index) => (
        <div key={index} className="space-y-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold text-text">{exp.title}</h3>
              <p className="text-muted-foreground">{exp.company}</p>
            </div>
            <span className="text-sm text-muted-foreground">{exp.period}</span>
          </div>
          <p className="text-body">{exp.description}</p>
          <div className="flex flex-wrap gap-2">
            {exp.technologies.map((tech, techIndex) => (
              <Badge key={techIndex} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResumeContent;
