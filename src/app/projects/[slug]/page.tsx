import { notFound } from "next/navigation";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { BackButton } from "@/components/ui/BackButton";
import { getProjectBySlug, getAllProjects } from "@/lib/projects";
import { constructMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const dynamicParams = true;

type PageParams = {
  slug: string;
};

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  if (!slug) {
    return constructMetadata({
      title: "Projet non trouvé",
      description: "Le projet que vous recherchez n'existe pas.",
      noIndex: true,
    });
  }

  const project = await getProjectBySlug(slug);

  if (!project) {
    return constructMetadata({
      title: "Projet non trouvé",
      description: "Le projet que vous recherchez n'existe pas.",
      noIndex: true,
    });
  }

  return constructMetadata({
    title: `${project.title} - Projet | Hermann MOUSSAVOU`,
    description: project.shortDescription,
    image: project.coverImage,
    canonical: `/projects/${project.slug}`,
    type: "article",
  });
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  if (!slug) {
    notFound();
  }

  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="container mx-auto py-6 sm:py-8 lg:py-12 px-3 sm:px-4">
      <BackButton href="/projects" label="Retour aux projets" />

      {/* En-tête du projet */}
      <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-4 lg:gap-8">
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              {project.title}
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mt-2">
              {project.shortDescription}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            {project.liveUrl && (
              <Button className="w-full sm:w-[142px] sm:min-w-[142px]" asChild>
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
                className="w-full sm:w-[142px] sm:min-w-[142px]"
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

        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="default" className="text-xs sm:text-sm">
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      {/* Aperçu du projet */}
      <Card className="mb-8 sm:mb-12 overflow-hidden p-0">
        {project.coverImage && (
          <div className="relative h-[250px] sm:h-[400px] lg:h-[500px] w-full">
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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
        <div className="lg:col-span-2 space-y-8 sm:space-y-12">
          {/* Contexte du projet */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
              Contexte du projet
            </h2>
            <div className="prose prose-sm sm:prose dark:prose-invert max-w-none">
              {project.context}
            </div>
          </section>

          {/* Défis techniques */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
              Défis techniques
            </h2>
            <div className="prose prose-sm sm:prose dark:prose-invert max-w-none">
              {project.challenges}
            </div>
          </section>

          {/* Galerie */}
          {project.gallery && project.gallery.length > 0 && (
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
                Galerie
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {project.gallery.map((image, index) => (
                  <div key={index} className="relative aspect-video">
                    <Image
                      src={image.url}
                      alt={image.caption || ""}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                      className="object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6 sm:space-y-8">
          {/* Informations clés */}
          <Card className="p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
              Informations clés
            </h3>
            <dl className="space-y-3 sm:space-y-4">
              <div>
                <dt className="text-sm text-muted-foreground">
                  Durée du projet (WakaTime)
                </dt>
                <dd className="text-sm sm:text-base">{project.duration}</dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">Rôle</dt>
                <dd className="text-sm sm:text-base">{project.role}</dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">Client</dt>
                <dd className="text-sm sm:text-base">{project.team}</dd>
              </div>
            </dl>
          </Card>

          {/* Points clés */}
          <Card className="p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
              Points clés
            </h3>
            <ul className="space-y-2">
              {project.keyPoints.map((point, index) => (
                <li key={index} className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span className="text-sm sm:text-base">{point}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </main>
  );
}
