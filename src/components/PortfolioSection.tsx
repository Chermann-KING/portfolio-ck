"use client";

import Image from "next/image";
import Link from "next/link";
import { Card } from "./ui/Card";

const portfolioItems = [
  {
    id: "1",
    title: "English dictionary",
    imageUrl: "/images/projects/keyboard/eng-dico-api-light.png",
    category: "Web App",
    slug: "dictionaire",
  },
  {
    id: "2",
    title: "Invoices",
    imageUrl: "/images/projects/invoices/invoices-app-light.png",
    category: "Web App",
    slug: "factures",
  },
  {
    id: "3",
    title: "Learn algorithms",
    imageUrl: "/images/projects/algorithm/algorithm-learn-app-light.png",
    category: "Web App",
    slug: "algorithme-apprentissage",
  },
];

export function PortfolioSection() {
  return (
    <Card>
      <section className="py-4 space-y-4">
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
          {portfolioItems.map((item) => (
            <Link href={`/projects/${item.slug}`} key={item.id}>
              <div className="group relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 33vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-medium">{item.title}</h3>
                    <p className="text-gray-200 text-sm">{item.category}</p>
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
