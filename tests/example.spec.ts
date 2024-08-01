import { test, expect } from "@playwright/test";

test("basic test", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  const title = await page.title();
  // Test
  expect(title).toBe(
    "Fast and reliable end-to-end testing for modern web apps | Playwright"
  );
});
