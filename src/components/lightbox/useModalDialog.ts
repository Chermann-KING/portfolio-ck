"use client";

import { useEffect, useRef } from "react";

/**
 * Ouvre le <dialog> en mode modal dès le montage (focus piégé, Échap natif), bloque le défilement
 * de la page, puis rend le focus à l'élément déclencheur au démontage.
 */
export function useModalDialog() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const trigger = document.activeElement;
    const rootStyle = document.documentElement.style;
    const previousOverflow = rootStyle.overflow;

    dialog.showModal();
    rootStyle.overflow = "hidden";

    return () => {
      rootStyle.overflow = previousOverflow;
      if (trigger instanceof HTMLElement) trigger.focus();
    };
  }, []);

  return dialogRef;
}
