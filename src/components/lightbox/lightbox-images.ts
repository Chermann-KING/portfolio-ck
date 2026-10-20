import type { Project } from "@/lib/projects";

export interface LightboxImage {
  readonly url: string;
  readonly caption: string;
}

type LightboxSource = Pick<Project, "title" | "coverImage" | "gallery">;

/** La couverture ouvre toujours la visionneuse sur la première image. */
export const COVER_INDEX = 0;
/** Les images de galerie suivent la couverture dans la visionneuse. */
export const GALLERY_OFFSET = 1;

const NAVIGATION_STEP = 1;

/** Couverture puis galerie, chaque image légendée (titre du projet à défaut). */
export function buildLightboxImages(project: LightboxSource): LightboxImage[] {
  const cover = { url: project.coverImage, caption: project.title };
  const gallery = (project.gallery ?? []).map((image) => ({
    url: image.url,
    caption: image.caption ?? project.title,
  }));
  return [cover, ...gallery];
}

/** Ramène un index dans [0, length[ : la navigation boucle aux deux extrémités. */
function wrapIndex(index: number, length: number): number {
  return ((index % length) + length) % length;
}

export function nextIndex(index: number, length: number): number {
  return wrapIndex(index + NAVIGATION_STEP, length);
}

export function previousIndex(index: number, length: number): number {
  return wrapIndex(index - NAVIGATION_STEP, length);
}
