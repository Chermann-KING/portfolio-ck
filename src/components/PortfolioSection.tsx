// src/components/PortfolioSection.tsx
"use client";

import { useState } from "react";
import { Button } from "./ui/Button";
import Image from "next/image";

const portfolioItems = [
  {
    id: "1",
    title: "Dictionnaire d'anglais",
    imageUrl: "/images/portfolio/eng-dico-api-light.png",
    category: "Web App",
  },
  {
    id: "2",
    title: "Project 2",
    imageUrl: "/images/portfolio/invoices-app-light.png",
    category: "Web Development",
  },
  {
    id: "3",
    title: "Project 3",
    imageUrl: "/images/portfolio/algorithm-learn-app-light.png",
    category: "Mobile Development",
  },
];

export function PortfolioSection() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <section className="space-y-6 bg-background-card  rounded-2xl p-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Réalisations</h2>
        <Button variant="secondary">Tout voir</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {portfolioItems.map((item) => (
          <div
            key={item.id}
            className="relative rounded-xl overflow-hidden aspect-video bg-background-card"
          >
            <Image
              src={item.imageUrl}
              alt={item.title}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
