// @ts-check
import { test, expect } from '@playwright/test';

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

//recheck
test.skip('Negative amount', async ({ page }) => {
      await page.goto('https://qainterview.pythonanywhere.com/');

      //Enter 12
      await page.fill('#number','-1000000');
      
      //trigger caluclator
      await page.click('#getFactorial');
    // 
    await expect(page.locator('#resultDiv')).toHaveText('Please enter an integer');
  });
//sendhelp
test('Button styling check ', async ({ page }) => {
      await page.goto('https://qainterview.pythonanywhere.com/');

     const button = page.locator('#getFactorial')

     await button.hover({force:true})

     await page.dispatchEvent('#getFactorial','mouseover')
      
    await expect(button).toHaveCSS('background-color','#47a447');
  });
//sendhelp
  test('Buttons styling check ', async ({ page }) => {
      await page.goto('https://qainterview.pythonanywhere.com/');

     const button = page.locator('#btn')

    //  await button.hover({force:true})

    //  await page.dispatchEvent('#btn','mouseover')
      
    await expect(button).toHaveAttribute('style','display-block');
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