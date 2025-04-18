"use client";

import Image from "next/image";
import { Card } from "./ui/Card";

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
  return (
    <Card>
      <section className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Projets</h2>
          <button
            // Emplacement pour une fonctionnalité future
            onClick={() => {
              // TODO: Ajouter une fonctionnalité pour afficher tous les projets
              console.log("Afficher tous les projets");
            }}
            className={
              "text-xl text-gray-400 hover:text-gray-300 transition-colors"
            }
          >
            Tout voir
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden"
            >
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-medium">{item.title}</h3>
                  <p className="text-gray-200 text-sm">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Card>
  );
}
