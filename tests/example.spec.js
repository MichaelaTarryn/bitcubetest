// @ts-nocheck
import { test, expect } from '@playwright/test';
import { type } from 'node:os';

test('The greatest factorial calculator! Header check', async ({ page }) => {
 await page.goto('https://qainterview.pythonanywhere.com/');

 await expect(page.locator('h1')).toHaveText('The greatest factorial calculator!')
});

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

  test('Emputy string', async ({ page }) => {
      await page.goto('https://qainterview.pythonanywhere.com/');
      
      //trigger caluclator
      await page.click('#getFactorial');
    // 
    await expect(page.locator('#resultDiv')).toHaveText('Please enter an integer');
  });

  test('Buttons styling check ', async ({ page }) => {
      await page.goto('https://qainterview.pythonanywhere.com/');

     const button = page.locator('#getFactorial')

        await expect(button).toHaveCSS('font-size','18px');
  });

   test('error message styling', async ({ page }) => {
      await page.goto('https://qainterview.pythonanywhere.com/');
      
      //trigger caluclator
      await page.click('#getFactorial');

      const error = page.locator('#resultDiv')

      await expect(error).toBeVisible()
      await expect(error).toHaveCSS('color','rgb(255, 0, 0)')
    // 
    await expect(error).toHaveText('Please enter an integer');


  });
//it working it just the link are wrong for privacy and term
   test('Links', async ({ page }) => {
    await page.goto('https://qainterview.pythonanywhere.com/');
      
    await page.getByText('About').click()
    await expect(page).toHaveURL('https://qainterview.pythonanywhere.com/about');

    await page.goBack()

    await page.getByText('privacy').click()

    await expect(page).toHaveURL('https://qainterview.pythonanywhere.com/privacy');

    await page.goBack()

    await page.getByText('terms and conditions').click()

    await expect(page).toHaveURL('https://qainterview.pythonanywhere.com/terms');
    await page.goBack()

  });