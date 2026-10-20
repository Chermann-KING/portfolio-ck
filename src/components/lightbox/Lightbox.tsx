"use client";

import Image from "next/image";
import type { KeyboardEvent, MouseEvent } from "react";
import { cn } from "@/lib/utils";
import { LightboxControls } from "./LightboxControls";
import { nextIndex, previousIndex, type LightboxImage } from "./lightbox-images";
import { useModalDialog } from "./useModalDialog";

const NAVIGATION_KEYS = { previous: "ArrowLeft", next: "ArrowRight" } as const;

export interface LightboxProps {
  images: readonly LightboxImage[];
  index: number;
  label: string;
  onIndexChange: (index: number) => void;
  onClose: () => void;
}

export function Lightbox({ images, index, label, onIndexChange, onClose }: LightboxProps) {
  const dialogRef = useModalDialog();
  const image = images[index];
  const hasNavigation = images.length > 1;
  const showPrevious = () => onIndexChange(previousIndex(index, images.length));
  const showNext = () => onIndexChange(nextIndex(index, images.length));

  const handleKeyDown = (event: KeyboardEvent<HTMLDialogElement>) => {
    if (!hasNavigation) return;
    if (event.key === NAVIGATION_KEYS.previous) showPrevious();
    if (event.key === NAVIGATION_KEYS.next) showNext();
  };

  // reason: un clic sur le fond (le <dialog> lui-même, hors contenu) ferme ; Échap reste l'équivalent clavier.
  const closeOnBackdrop = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) dialogRef.current?.close();
  };

  return (
    <dialog
      ref={dialogRef}
      aria-label={label}
      onClose={onClose}
      onKeyDown={handleKeyDown}
      onClick={closeOnBackdrop}
      className={cn(
        "fixed inset-0 m-0 h-full max-h-none w-full max-w-none bg-transparent p-4 sm:p-12",
        "flex items-center justify-center backdrop:bg-lightbox-backdrop/90",
        "motion-safe:animate-lightbox-in",
      )}
    >
      <LightboxFigure image={image} position={index + 1} total={images.length} />
      <LightboxControls
        hasNavigation={hasNavigation}
        onClose={() => dialogRef.current?.close()}
        onPrevious={showPrevious}
        onNext={showNext}
      />
    </dialog>
  );
}

interface LightboxFigureProps {
  image: LightboxImage;
  position: number;
  total: number;
}

function LightboxFigure({ image, position, total }: LightboxFigureProps) {
  return (
    <figure className="flex max-h-full w-full max-w-6xl flex-col items-center gap-3">
      <div className="relative h-[75vh] w-full">
        <Image src={image.url} alt={image.caption} fill sizes="90vw" className="object-contain" />
      </div>
      <figcaption className="flex w-full items-baseline justify-between gap-4 text-sm text-lightbox-foreground">
        <span>{image.caption}</span>
        <span aria-hidden="true" className="shrink-0 tabular-nums text-lightbox-foreground/70">
          {position} / {total}
        </span>
        <span aria-live="polite" className="sr-only">
          Image {position} sur {total}
        </span>
      </figcaption>
    </figure>
  );
}
