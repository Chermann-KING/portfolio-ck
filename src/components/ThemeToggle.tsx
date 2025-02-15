"use client";

import { FC } from "react";
import { useTheme } from "@/lib/providers";
import { Moon, Sun } from "lucide-react";

export const ThemeToggle: FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="rounded-full bg-background-card flex items-center justify-center transition-colors hover:bg-gray-700"
    >
      {theme === "dark" ? <Sun /> : <Moon />}
    </button>
  );
};
