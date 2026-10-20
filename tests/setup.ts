import "@testing-library/jest-dom/vitest";
import { createElement, type ImgHTMLAttributes } from "react";
import { afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";

afterEach(() => cleanup());

const FOCUSABLE_SELECTOR = "button, [href], input, select, textarea, [tabindex]";

// reason: jsdom n'implémente pas HTMLDialogElement.showModal/close ; on reproduit le contrat utile
// aux tests (attribut `open`, focus déplacé dans le dialogue, événement `close` à la fermeture).
if (!HTMLDialogElement.prototype.showModal) {
  HTMLDialogElement.prototype.showModal = function showModal(this: HTMLDialogElement) {
    this.setAttribute("open", "");
    this.querySelector<HTMLElement>(FOCUSABLE_SELECTOR)?.focus();
  };
  HTMLDialogElement.prototype.close = function close(this: HTMLDialogElement) {
    if (!this.hasAttribute("open")) return;
    this.removeAttribute("open");
    this.dispatchEvent(new Event("close"));
  };
}

type NextImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  fill?: boolean;
  preload?: boolean;
};

const NEXT_ONLY_IMAGE_PROPS: readonly string[] = ["fill", "preload"];

// reason: next/image dépend du runtime Next.js ; en test de composant une <img> suffit.
vi.mock("next/image", () => ({
  default: (props: NextImageProps) =>
    createElement(
      "img",
      Object.fromEntries(
        Object.entries(props).filter(([name]) => !NEXT_ONLY_IMAGE_PROPS.includes(name)),
      ),
    ),
}));
