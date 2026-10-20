"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { Lightbox } from "./Lightbox";
import type { LightboxImage } from "./lightbox-images";

interface LightboxContextValue {
  open: (index: number) => void;
}

const LightboxContext = createContext<LightboxContextValue | null>(null);

interface LightboxProviderProps {
  images: readonly LightboxImage[];
  label: string;
  children: ReactNode;
}

/** Partage l'ouverture de la visionneuse entre la couverture et la galerie d'une même page. */
export function LightboxProvider({ images, label, children }: LightboxProviderProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const value = useMemo(() => ({ open: setOpenIndex }), []);

  return (
    <LightboxContext.Provider value={value}>
      {children}
      {openIndex !== null && (
        <Lightbox
          images={images}
          index={openIndex}
          label={label}
          onIndexChange={setOpenIndex}
          onClose={() => setOpenIndex(null)}
        />
      )}
    </LightboxContext.Provider>
  );
}

export function useLightbox(): LightboxContextValue {
  const context = useContext(LightboxContext);
  if (!context) {
    throw new Error("useLightbox doit être utilisé dans un LightboxProvider.");
  }
  return context;
}
