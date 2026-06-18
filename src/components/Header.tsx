"use client";

import React, { useState, useRef, useEffect } from "react";
import { Card } from "./ui/Card";
import { AlignJustify } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import Link from "next/link";
import { AnimatedCard } from "@/lib/AnimatedCard";

const menuItems = [
  { name: "Services", href: "/#services" },
  { name: "Réalisations", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="relative z-50">
      <AnimatedCard direction="up" delay={100}>
        <Card className="flex justify-between items-center gap-2 sm:gap-4 p-4 sm:p-6">
          <h2 className="text-sm sm:text-lg lg:text-xl text-text-secondary dark:text-gray-400">
            <span className="hidden sm:inline">Développeur</span>
            <span className="sm:hidden">Dev</span>
            <span className="text-text-primary dark:text-white font-semibold">
              {" "}
              FullStack
            </span>
          </h2>
          <div className="flex gap-2 sm:gap-4 items-center">
            <ThemeToggle />
            <button
              ref={buttonRef}
              className="font-semibold relative p-2 sm:p-0"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Menu principal"
            >
              <AlignJustify className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </Card>
      </AnimatedCard>

      {/* Menu contextuel */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="absolute right-0 top-full mt-2 w-40 sm:w-48 rounded-md shadow-lg bg-background border border-border z-50"
        >
          <div className="py-1">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 sm:px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
