import { expect, test } from "@playwright/test";

const PROJECT_PATH = "/projects/ifumb";
const COVER_TRIGGER = "Agrandir l'image : IFUMB";
const DIALOG_NAME = "Images du projet IFUMB";

test.describe("visionneuse d'images d'un projet", () => {
  test("s'ouvre depuis la couverture, navigue au clavier et rend le focus", async ({ page }) => {
    await page.goto(PROJECT_PATH);
    const coverTrigger = page.getByRole("button", { name: COVER_TRIGGER });
    const dialog = page.getByRole("dialog", { name: DIALOG_NAME });

    await test.step("ouvre la visionneuse sur la couverture", async () => {
      await coverTrigger.click();
      await expect(dialog).toBeVisible();
      await expect(dialog.getByText(/^1 \/ \d+$/)).toBeVisible();
    });

    await test.step("passe à l'image suivante avec la flèche droite", async () => {
      await page.keyboard.press("ArrowRight");
      await expect(dialog.getByText(/^2 \/ \d+$/)).toBeVisible();
    });

    await test.step("se ferme avec Échap et rend le focus à la couverture", async () => {
      await page.keyboard.press("Escape");
      await expect(dialog).toBeHidden();
      await expect(coverTrigger).toBeFocused();
    });
  });

  test("s'ouvre depuis une miniature de la galerie sur la bonne image", async ({ page }) => {
    await page.goto(PROJECT_PATH);
    const firstThumbnail = page
      .getByRole("list")
      .getByRole("button", { name: /^Agrandir l'image/ })
      .first();
    const caption = (await firstThumbnail.getAttribute("aria-label"))!.replace(
      "Agrandir l'image : ",
      "",
    );

    await firstThumbnail.click();
    const dialog = page.getByRole("dialog", { name: DIALOG_NAME });

    await expect(dialog.getByText(/^2 \/ \d+$/)).toBeVisible();
    await expect(dialog.getByRole("img", { name: caption })).toBeVisible();
  });

  test("se ferme avec le bouton Fermer", async ({ page }) => {
    await page.goto(PROJECT_PATH);
    await page.getByRole("button", { name: COVER_TRIGGER }).click();
    await page.getByRole("button", { name: "Fermer" }).click();

    await expect(page.getByRole("dialog")).toBeHidden();
  });
});
