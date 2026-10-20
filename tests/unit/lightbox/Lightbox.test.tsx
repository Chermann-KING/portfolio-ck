import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LightboxProvider } from "@/components/lightbox/LightboxProvider";
import { LightboxTrigger } from "@/components/lightbox/LightboxTrigger";
import { LIGHTBOX_LABELS } from "@/components/lightbox/LightboxControls";
import type { LightboxImage } from "@/components/lightbox/lightbox-images";

const IMAGES: LightboxImage[] = [
  { url: "/cover.png", caption: "Couverture" },
  { url: "/graph.png", caption: "Graphe familial" },
  { url: "/history.png", caption: "Journal" },
];

function renderGallery(images: LightboxImage[] = IMAGES) {
  render(
    <LightboxProvider images={images} label="Images du projet">
      {images.map((image, index) => (
        <LightboxTrigger key={image.url} index={index} caption={image.caption}>
          <span>{image.caption}</span>
        </LightboxTrigger>
      ))}
    </LightboxProvider>,
  );
  return userEvent.setup();
}

const openAt = (user: ReturnType<typeof userEvent.setup>, caption: string) =>
  user.click(screen.getByRole("button", { name: `Agrandir l'image : ${caption}` }));

const dialog = () => screen.getByRole("dialog", { name: "Images du projet" });

describe("Lightbox", () => {
  it("s'ouvre sur l'image cliquée, avec sa légende et sa position", async () => {
    const user = renderGallery();
    await openAt(user, "Graphe familial");

    expect(within(dialog()).getByRole("img", { name: "Graphe familial" })).toBeInTheDocument();
    expect(within(dialog()).getByText("Image 2 sur 3")).toBeInTheDocument();
  });

  it("passe à l'image suivante puis revient à la première après la dernière", async () => {
    const user = renderGallery();
    await openAt(user, "Journal");
    await user.click(screen.getByRole("button", { name: LIGHTBOX_LABELS.next }));

    expect(within(dialog()).getByText("Image 1 sur 3")).toBeInTheDocument();
  });

  it("navigue au clavier avec les flèches gauche et droite", async () => {
    const user = renderGallery();
    await openAt(user, "Couverture");
    await user.keyboard("{ArrowLeft}");
    expect(within(dialog()).getByText("Image 3 sur 3")).toBeInTheDocument();

    await user.keyboard("{ArrowRight}");
    expect(within(dialog()).getByText("Image 1 sur 3")).toBeInTheDocument();
  });

  it("se ferme et rend le focus à la miniature qui l'a ouverte", async () => {
    const user = renderGallery();
    const trigger = screen.getByRole("button", { name: "Agrandir l'image : Journal" });
    await user.click(trigger);
    await user.click(screen.getByRole("button", { name: LIGHTBOX_LABELS.close }));

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(trigger).toHaveFocus();
  });

  it("ignore les autres touches du clavier", async () => {
    const user = renderGallery();
    await openAt(user, "Couverture");
    await user.keyboard("{ArrowDown}");

    expect(within(dialog()).getByText("Image 1 sur 3")).toBeInTheDocument();
  });

  it("se ferme sur un clic en dehors de l'image", async () => {
    const user = renderGallery();
    await openAt(user, "Couverture");
    await user.click(dialog());

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("garde le dialogue ouvert sur un clic sur l'image", async () => {
    const user = renderGallery();
    await openAt(user, "Couverture");
    await user.click(within(dialog()).getByRole("img", { name: "Couverture" }));

    expect(dialog()).toBeInTheDocument();
  });

  it("n'affiche ni ne réagit à la navigation quand il n'y a qu'une image", async () => {
    const user = renderGallery([IMAGES[0]]);
    await openAt(user, "Couverture");
    await user.keyboard("{ArrowRight}");

    expect(screen.queryByRole("button", { name: LIGHTBOX_LABELS.next })).not.toBeInTheDocument();
    expect(screen.queryByRole("button", { name: LIGHTBOX_LABELS.previous })).not.toBeInTheDocument();
    expect(within(dialog()).getByText("Image 1 sur 1")).toBeInTheDocument();
  });

  it("signale une miniature utilisée hors d'un LightboxProvider", () => {
    const renderOrphan = () =>
      render(<LightboxTrigger index={0} caption="Orpheline"><span /></LightboxTrigger>);

    expect(renderOrphan).toThrow("useLightbox doit être utilisé dans un LightboxProvider.");
  });
});
