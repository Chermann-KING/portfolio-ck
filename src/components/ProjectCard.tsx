import Image from "next/image";
import Link from "next/link";
import { Card } from "./ui/Card";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link href={`/projects/${project.slug}`}>
      <Card className="group overflow-hidden">
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-6 space-y-2">
          <div className="flex justify-between items-start gap-4">
            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <span className="text-sm text-muted-foreground">
              {project.team}
            </span>
          </div>
          <p className="text-muted-foreground line-clamp-2">
            {project.shortDescription}
          </p>
        </div>
      </Card>
    </Link>
  );
};
