import { describe, expect, it } from "vitest";
import {
  buildLightboxImages,
  nextIndex,
  previousIndex,
} from "@/components/lightbox/lightbox-images";

const PROJECT = {
  title: "IFUMB",
  coverImage: "/images/projects/ifumb/cover.png",
  gallery: [
    { url: "/images/projects/ifumb/kinship.png", caption: "Chemin de parenté" },
    { url: "/images/projects/ifumb/history.png" },
  ],
};

describe("buildLightboxImages", () => {
  it("place la couverture en premier, légendée par le titre du projet", () => {
    const [cover] = buildLightboxImages(PROJECT);

    expect(cover).toEqual({ url: PROJECT.coverImage, caption: "IFUMB" });
  });

  it("garde l'ordre et les légendes de la galerie après la couverture", () => {
    const images = buildLightboxImages(PROJECT);

    expect(images.map((image) => image.url)).toEqual([
      PROJECT.coverImage,
      "/images/projects/ifumb/kinship.png",
      "/images/projects/ifumb/history.png",
    ]);
    expect(images[1].caption).toBe("Chemin de parenté");
  });

  it("légende une image de galerie sans légende avec le titre du projet", () => {
    expect(buildLightboxImages(PROJECT)[2].caption).toBe("IFUMB");
  });

  it("ne contient que la couverture pour un projet sans galerie", () => {
    const images = buildLightboxImages({ ...PROJECT, gallery: undefined });

    expect(images).toHaveLength(1);
  });
});

describe("nextIndex / previousIndex", () => {
  it("avance d'une image", () => {
    expect(nextIndex(0, 3)).toBe(1);
  });

  it("revient à la première image après la dernière", () => {
    expect(nextIndex(2, 3)).toBe(0);
  });

  it("recule d'une image", () => {
    expect(previousIndex(2, 3)).toBe(1);
  });

  it("passe à la dernière image avant la première", () => {
    expect(previousIndex(0, 3)).toBe(2);
  });

  it("reste sur l'unique image d'une liste d'une seule image", () => {
    expect(nextIndex(0, 1)).toBe(0);
    expect(previousIndex(0, 1)).toBe(0);
  });
});
