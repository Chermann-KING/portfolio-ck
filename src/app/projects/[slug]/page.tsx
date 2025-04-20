import { notFound } from "next/navigation";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { BackButton } from "@/components/ui/BackButton";
import { getProjectBySlug } from "@/lib/projects";

// Marquer la page comme dynamique
export const dynamic = "force-dynamic";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  if (!params?.slug) {
    notFound();
  }

  const project = await getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="container mx-auto py-12 px-4">
      <BackButton href="/projects" label="Retour aux projets" />

      {/* En-tête du projet */}
      <div className="space-y-6 mb-12">
        <div className="flex justify-between items-start gap-8">
          <div>
            <h1 className="text-4xl font-bold">{project.title}</h1>
            <p className="text-xl text-muted-foreground mt-2">
              {project.shortDescription}
            </p>
          </div>
          <div className="flex gap-4">
            {project.liveUrl && (
              <Button className="w-[142px] min-w-[142px]" asChild>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Voir le projet
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button
                variant="outline"
                className="w-[142px] min-w-[142px]"
                asChild
              >
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code source
                </a>
              </Button>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      {/* Aperçu du projet */}
      <Card className="mb-12 overflow-hidden">
        {project.coverImage && (
          <div className="relative h-[500px] w-full">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              className="object-cover"
              priority
            />
          </div>
        )}
      </Card>

      {/* Contenu principal */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          {/* Contexte du projet */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Contexte du projet</h2>
            <div className="prose dark:prose-invert max-w-none">
              {project.context}
            </div>
          </section>

          {/* Défis techniques */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Défis techniques</h2>
            <div className="prose dark:prose-invert max-w-none">
              {project.challenges}
            </div>
          </section>

          {/* Galerie */}
          {project.gallery && project.gallery.length > 0 && (
            <section>
              <h2 className="text-2xl font-semibold mb-4">Galerie</h2>
              <div className="grid grid-cols-2 gap-4">
                {project.gallery.map((image, index) => (
                  <div key={index} className="relative aspect-video">
                    <Image
                      src={image.url}
                      alt={image.caption || ""}
                      fill
                      sizes="(max-width: 768px) 50vw, 33vw"
                      className="object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Informations clés */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Informations clés</h3>
            <dl className="space-y-4">
              <div>
                <dt className="text-sm text-muted-foreground">
                  Durée du projet (WakaTime)
                </dt>
                <dd className="text-base">{project.duration}</dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">Rôle</dt>
                <dd className="text-base">{project.role}</dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">Client</dt>
                <dd className="text-base">{project.team}</dd>
              </div>
            </dl>
          </Card>

          {/* Points clés */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Points clés</h3>
            <ul className="space-y-2">
              {project.keyPoints.map((point, index) => (
                <li key={index} className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </main>
  );
}
