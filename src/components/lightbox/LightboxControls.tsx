"use client";

import type { ComponentType } from "react";
import { ChevronLeft, ChevronRight, X, type LucideProps } from "lucide-react";
import { cn } from "@/lib/utils";

export const LIGHTBOX_LABELS = {
  close: "Fermer",
  previous: "Image précédente",
  next: "Image suivante",
} as const;

const ICON_SIZE = 24;

interface ControlButtonProps {
  label: string;
  Icon: ComponentType<LucideProps>;
  onClick: () => void;
  className: string;
}

function ControlButton({ label, Icon, onClick, className }: ControlButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={cn(
        "absolute flex h-11 w-11 items-center justify-center rounded-full",
        "bg-background/80 text-foreground shadow-md backdrop-blur hover:bg-background",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className,
      )}
    >
      <Icon size={ICON_SIZE} aria-hidden="true" />
    </button>
  );
}

interface LightboxControlsProps {
  hasNavigation: boolean;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

export function LightboxControls({ hasNavigation, onClose, onPrevious, onNext }: LightboxControlsProps) {
  return (
    <>
      <ControlButton label={LIGHTBOX_LABELS.close} Icon={X} onClick={onClose} className="right-4 top-4" />
      {hasNavigation && (
        <>
          <ControlButton
            label={LIGHTBOX_LABELS.previous}
            Icon={ChevronLeft}
            onClick={onPrevious}
            className="left-4 top-1/2 -translate-y-1/2"
          />
          <ControlButton
            label={LIGHTBOX_LABELS.next}
            Icon={ChevronRight}
            onClick={onNext}
            className="right-4 top-1/2 -translate-y-1/2"
          />
        </>
      )}
    </>
  );
}
