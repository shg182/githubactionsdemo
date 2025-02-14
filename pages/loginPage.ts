import { Locator, Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  //readonly loginError: Locator;
  readonly loggedInText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.getByLabel('Username');
    this.passwordInput = page.getByLabel('Password')
    this.loginButton = page.getByRole('button', { name: ' Login' });
    //this.loginError = page.locator('.flash.error');
    this.loggedInText = page.locator('h2:has-text("Welcome to the Secure Area")');
  }

  async login() {
    //console.log("user name "+ process.env.MYUSERNAME, "password "+process.env.PASSWORD!);
    await this.usernameInput.fill(process.env.USERNAME!);
    await this.passwordInput.fill(process.env.PASSWORD!);
    await this.loginButton.click();
  }

  async verifyLogin() {
    await this.loggedInText.isVisible();  // Assert if user is logged in
  }

  async getError() {
   // return await this.loginError.textContent();
  }
}
