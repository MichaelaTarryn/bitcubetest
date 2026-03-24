// @ts-check
import { test, expect } from '@playwright/test';

//test('The greatest factorial calculator! Header check', async ({ page }) => {
//  await page.goto('https://qainterview.pythonanywhere.com/');

  // Expect a title "to contain" a substring.
//  await expect(page).toHaveTitle(/factorial/);
//});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test.describe('navigation', () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto('https://qainterview.pythonanywhere.com/');
  })


test('main navigation to QA interview.pythonanywhere', async ({ page }) => {
    // 
    await expect(page).toHaveURL('https://qainterview.pythonanywhere.com/');
  });
});

test('Validation of 12', async ({ page }) => {
      await page.goto('https://qainterview.pythonanywhere.com/');

      //Enter 12
      await page.fill('#number','12');
      
      //trigger caluclator
      await page.click('#getFactorial');
    // 
    await expect(page.locator('#resultDiv')).toHaveText('The factorial of 12 is: 479001600');
  });