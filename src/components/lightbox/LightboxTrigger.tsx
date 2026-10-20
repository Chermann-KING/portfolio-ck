"use client";

import type { ReactNode } from "react";
import { Maximize2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLightbox } from "./LightboxProvider";

const ENLARGE_LABEL_PREFIX = "Agrandir l'image";
const ICON_SIZE = 18;

interface LightboxTriggerProps {
  index: number;
  caption: string;
  className?: string;
  children: ReactNode;
}

/** Bouton natif autour d'une miniature : un clic ou Entrée ouvre la visionneuse sur cette image. */
export function LightboxTrigger({ index, caption, className, children }: LightboxTriggerProps) {
  const { open } = useLightbox();

  return (
    <button
      type="button"
      onClick={() => open(index)}
      aria-label={`${ENLARGE_LABEL_PREFIX} : ${caption}`}
      className={cn(
        "group relative block w-full cursor-zoom-in overflow-hidden",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className,
      )}
    >
      {children}
      <span
        aria-hidden="true"
        className={cn(
          "absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full",
          "bg-background/80 text-foreground shadow-md opacity-0 transition-opacity",
          "group-hover:opacity-100 group-focus-visible:opacity-100",
        )}
      >
        <Maximize2 size={ICON_SIZE} />
      </span>
    </button>
  );
}
