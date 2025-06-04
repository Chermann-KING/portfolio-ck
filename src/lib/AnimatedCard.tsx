"use client";

// import { Card } from "@/components/ui/Card";
import React, { useEffect, useRef, useState } from "react";

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Délai d'animation en ms
  direction?: "up" | "down" | "left" | "right"; // Direction de l'animation
}

export const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Définir les propriétés de transformation basées sur la direction
  const getTransformValue = () => {
    switch (direction) {
      case "up":
        return "translateY(50px)";
      case "down":
        return "translateY(-50px)";
      case "left":
        return "translateX(50px)";
      case "right":
        return "translateX(-50px)";
      default:
        return "translateY(50px)";
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Quand l'élément entre dans la vue
        if (entry.isIntersecting) {
          // Ajouter un délai avant de déclencher l'animation si nécessaire
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          // Arrêter d'observer une fois visible
          observer.unobserve(entry.target);
        }
      },
      {
        // Options de l'intersection observer
        threshold: 0.1, // Déclencher quand au moins 10% de l'élément est visible
        rootMargin: "0px 0px -50px 0px", // Déclencher un peu avant que l'élément soit complètement visible
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-700 ${
        isVisible
          ? "opacity-100 transform translate-y-0 translate-x-0"
          : `opacity-0 transform ${getTransformValue()}`
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={className}>{children}</div>
    </div>
  );
};
