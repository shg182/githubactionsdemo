import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

test.describe('Login Tests', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await page.goto('/login');  // Navigate to login page
    console.log("logged in ");
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test('Valid login with correct credentials', async ({ page }) => {
    await loginPage.login();
    await loginPage.verifyLogin();
    //await page.screenshot({path: 'test-results/LoginPage/Screenshot1'});

  });

  test('Invalid login with incorrect credentials', async () => {
    await loginPage.login();
    const errorMessage = await loginPage.getError();
    await expect(errorMessage).toContain('Your username is invalid!');
  });
});
