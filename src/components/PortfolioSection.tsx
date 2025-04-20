"use client";

import Image from "next/image";
import Link from "next/link";
import { Card } from "./ui/Card";
import { getHighlightedProjects } from "@/lib/projects";
import { useEffect, useState } from "react";
import type { Project } from "@/lib/projects";

export function PortfolioSection() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    getHighlightedProjects().then(setProjects);
  }, []);

  return (
    <Card>
      <section className="p-6 space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Projets</h2>
          <Link
            href="/projects"
            className="text-xl text-muted-foreground hover:text-text transition-colors"
          >
            Tout voir
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {projects.map((project) => (
            <Link href={`/projects/${project.slug}`} key={project.slug}>
              <div className="group relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 33vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-medium">{project.title}</h3>
                    <p className="text-gray-200 text-sm">{project.team}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Card>
  );
}
