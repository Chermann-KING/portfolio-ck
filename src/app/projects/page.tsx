import { getAllProjects } from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { BackButton } from "@/components/ui/BackButton";

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <main className="container mx-auto py-12 px-4">
      <BackButton href="/" label="Retour à l'accueil" />

      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold">Mes Projets</h1>
          <p className="text-xl text-muted-foreground mt-2">
            Découvrez mes réalisations et expériences professionnelles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}
