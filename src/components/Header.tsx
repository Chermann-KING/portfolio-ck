"use client";

import React, { useState, useRef, useEffect } from "react";
import { Card } from "./ui/Card";
import { AlignJustify } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import Link from "next/link";

const menuItems = [
  { name: "CV", href: "/resume" },
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
    <header className="relative">
      <Card className="flex justify-between items-center gap-4 text-xl">
        <h2 className="text-text-secondary dark:text-gray-400">
          Développeur
          <span className="text-text-primary dark:text-white font-semibold">
            {" "}
            FullStack
          </span>
        </h2>
        <div className="flex gap-4">
          <ThemeToggle />
          <button
            ref={buttonRef}
            className="font-semibold relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Menu principal"
          >
            <AlignJustify />
          </button>
        </div>
      </Card>

      {/* Menu contextuel */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-background border border-border z-50"
        >
          <div className="py-1">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
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
