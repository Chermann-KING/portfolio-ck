"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatedCard } from "@/lib/AnimatedCard";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { getHighlightedProjects } from "@/lib/projects";
import { useEffect, useState } from "react";
import type { Project } from "@/lib/projects";

export function PortfolioSection() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    getHighlightedProjects().then(setProjects);
  }, []);

  return (
    <AnimatedCard direction="up" delay={200}>
      <section className="space-y-6 sm:space-y-8">
        {/* En-tête */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6">
          <div className="space-y-2">
            <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase flex items-center gap-2">
              <span className="w-6 h-px bg-muted-foreground inline-block" />
              Réalisations
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-foreground">
              On travaille <em className="not-italic text-secondary">ensemble ?</em>
            </h2>
          </div>
          <Button variant="outline" asChild className="w-full sm:w-auto">
            <Link href="/projects" className="flex items-center gap-2">
              Tout voir
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* Grille */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {projects.map((project) => (
            <Link href={`/projects/${project.slug}`} key={project.slug}>
              <div className="group relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                    <h3 className="text-white font-medium text-sm sm:text-base">
                      {project.title}
                    </h3>
                    <p className="text-gray-200 text-xs sm:text-sm">
                      {project.team}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </AnimatedCard>
  );
}
