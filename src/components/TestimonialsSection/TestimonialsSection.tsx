"use client";

import React, { FC, useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";
import { Card } from "../ui/Card";
import Image from "next/image";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export const TestimonialsSection: FC<TestimonialsSectionProps> = ({
  testimonials,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Créer un tableau étendu pour le défilement continu
  // On ajoute les premières cartes à la fin et les dernières cartes au début
  const extendedTestimonials = [
    ...testimonials.slice(-3), // Ajouter les 3 derniers éléments au début
    ...testimonials,
    ...testimonials.slice(0, 3), // Ajouter les 3 premiers éléments à la fin
  ];

  // Calculer le nombre de cartes à afficher en fonction de la largeur de l'écran
  const getVisibleCards = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth < 640) return 1; // Mobile
    if (window.innerWidth < 1024) return 2; // Tablette
    return 3; // Desktop
  };

  const [visibleCards, setVisibleCards] = useState(getVisibleCards());

  // Mettre à jour le nombre de cartes visibles lors du redimensionnement
  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(getVisibleCards());
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Appel initial
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Gérer le défilement automatique
  useEffect(() => {
    if (isPaused || isTransitioning) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 3000); // Défilement toutes les 3 secondes

    return () => clearInterval(interval);
  }, [isPaused, isTransitioning, testimonials.length]);

  // Gérer le retour infini quand on atteint les extrémités
  useEffect(() => {
    if (currentIndex >= testimonials.length + 3) {
      // Si on a dépassé les éléments ajoutés à la fin, revenir instantanément au début réel
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex(3); // Position après les 3 éléments ajoutés au début
        setIsTransitioning(false);
      }, 500); // Temps correspondant à la durée de la transition CSS
    } else if (currentIndex < 3) {
      // Si on est avant les éléments ajoutés au début, aller instantanément à la fin réelle
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex(testimonials.length + 2); // Position avant les 3 éléments ajoutés à la fin
        setIsTransitioning(false);
      }, 500);
    }
  }, [currentIndex, testimonials.length]);

  // Le déplacement nécessaire pour centrer l'élément courant
  const offsetPercentage = (currentIndex * 100) / visibleCards;

  return (
    <Card>
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          Ce qu&apos;ils disent de moi
        </h2>
        <div
          ref={containerRef}
          className="relative overflow-hidden mt-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${offsetPercentage}%)`,
              transitionDuration: isTransitioning ? "0ms" : "500ms",
            }}
          >
            {extendedTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-none w-full sm:w-1/2 lg:w-1/3 px-4"
                style={{ minWidth: `${100 / visibleCards}%` }}
              >
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="flex items-center mb-4">
                    {testimonial.image ? (
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="rounded-full mr-4"
                      />
                    ) : (
                      <div className="w-12 h-12 min-w-12 min-h-12 rounded-full bg-gray-300 dark:bg-gray-600 mr-4 flex items-center justify-center">
                        <span className="text-xl font-semibold text-gray-600 dark:text-gray-300">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                    )}
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {testimonial.role} chez {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300 dark:text-gray-600"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 italic">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicateurs de navigation (optionnel) */}
        <div className="flex justify-center mt-4 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index + 3)} // +3 pour tenir compte des éléments ajoutés au début
              className={`w-2 h-2 rounded-full transition-colors ${
                currentIndex - 3 === index || // Tenir compte du décalage
                (currentIndex >= testimonials.length + 3 && index === 0) || // Quand on revient au début
                (currentIndex < 3 && index === testimonials.length - 1) // Quand on est à la fin
                  ? "bg-primary"
                  : "bg-gray-300 dark:bg-gray-600"
              }`}
              aria-label={`Aller au témoignage ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </Card>
  );
};
