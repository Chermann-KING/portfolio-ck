"use client";

import { FC } from "react";
import { useTheme } from "@/lib/providers";
import { Moon, Sun } from "lucide-react";

export const ThemeToggle: FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="rounded-full bg-background-card dark:bg-background-card-dark flex items-center justify-center p-2 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      {theme === "dark" ? <Sun className="text-white" /> : <Moon />}
    </button>
  );
};
