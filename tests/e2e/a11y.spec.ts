import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const PROJECT_PATH = "/projects/ifumb";
const WCAG_TAGS = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"];

test.describe("accessibilité — page projet", () => {
  test("aucune violation WCAG 2.2 AA, visionneuse fermée", async ({ page }) => {
    await page.goto(PROJECT_PATH);
    const { violations } = await new AxeBuilder({ page }).withTags(WCAG_TAGS).analyze();

    expect(violations).toEqual([]);
  });

  test("aucune violation WCAG 2.2 AA, visionneuse ouverte", async ({ page }) => {
    await page.goto(PROJECT_PATH);
    await page.getByRole("button", { name: "Agrandir l'image : IFUMB" }).click();
    await expect(page.getByRole("dialog")).toBeVisible();

    const { violations } = await new AxeBuilder({ page })
      .include("dialog")
      .withTags(WCAG_TAGS)
      .analyze();

    expect(violations).toEqual([]);
  });
});
