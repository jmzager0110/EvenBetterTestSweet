import { test, expect } from '@playwright/test';
import { contactlinks, projectLinks } from '../../utils/helpers/links';
const baseURL = 'https://jmzager.netlify.app/';

test('has title', async ({ page }) => {
  await page.goto(baseURL);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Jessica Zager/);
});

test('links', async ({ page }) => {
  await page.goto(baseURL);

  // Update with for loop for imported utility
  //Update page with individual class identifiers
  await page.locator('.nav-link.scrollto').getByText("Skills").click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Skills' })).toBeVisible();
});

test('link(s) responses', async ({request}) => {
    try {
    
    const response = await request.get(baseURL);
    expect(response.status(), `Expected 200 but got ${response.status()}`).toBe(200);

    // Optionally check content type
    const contentType = response.headers()['content-type'] || '';
    expect(contentType).toContain('text/html');

    // Optionally check body contains expected text
    const body = await response.text();
    expect(body).toContain('Example Domain');

    console.log(`✅ Link ${baseURL} is reachable and returned 200 OK`);
  } catch (error) {
    console.error(`❌ Failed to fetch ${baseURL}:`, error);
    throw error; // Fail the test
  }
})