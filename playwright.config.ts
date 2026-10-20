import { defineConfig, devices } from "@playwright/test";

// reason: port dédié, distinct de `pnpm dev` (3000), pour ne jamais tester le serveur de dev par erreur.
const DEFAULT_E2E_PORT = 3100;
const PORT = Number(process.env.E2E_PORT ?? DEFAULT_E2E_PORT);
const BASE_URL = `http://localhost:${PORT}`;
const BUILD_AND_START_TIMEOUT_MS = 180_000;

export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  use: {
    baseURL: BASE_URL,
    trace: "on-first-retry",
  },
  webServer: {
    // reason: la doc Next.js recommande de tester contre le build de production.
    command: `pnpm build && pnpm start --port ${PORT}`,
    url: BASE_URL,
    reuseExistingServer: !process.env.CI,
    timeout: BUILD_AND_START_TIMEOUT_MS,
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
});
