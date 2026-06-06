import { test, expect } from '@playwright/test';
const baseURL = 'https://jmzager.netlify.app/'; 

test('has title', async ({ page }) => {
  await page.goto(baseURL);

  await expect(page).toHaveScreenshot( 'screenshot.png', {fullPage: true,
          animations: "disabled",
          maxDiffPixelRatio: 0.3,
          maxDiffPixels: 100,
          threshold: 0.3,})
});

