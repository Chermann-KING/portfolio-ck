import React from "react";
import { Card } from "./ui/Card";
import { AlignJustify } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export default function Header() {
  return (
    <header>
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
          <button className="font-semibold">
            <AlignJustify />
          </button>
        </div>
      </Card>
    </header>
  );
}
