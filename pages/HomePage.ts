import { type Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  private readonly productsLink: Locator;
  private readonly cartLink: Locator;
  private readonly signupLoginLink: Locator;
  private readonly testCasesLink: Locator;
  private readonly contactUsLink: Locator;

  constructor(page: import('@playwright/test').Page) {
    super(page);
    this.productsLink = page.getByRole('link', { name: ' Products' });
    this.cartLink = page.getByRole('link', { name: ' Cart' });
    this.signupLoginLink = page.getByRole('link', { name: ' Signup / Login' });
    this.testCasesLink = page.getByRole('link', { name: ' Test Cases' });
    this.contactUsLink = page.getByRole('link', { name: ' Contact us' });
  }

  async open() {
    await this.navigate('/');
  }

  async goToProducts() {
    await this.productsLink.click();
  }

  async goToCart() {
    await this.cartLink.click();
  }

  async goToSignupLogin() {
    await this.signupLoginLink.click();
  }

  async goToTestCases() {
    await this.testCasesLink.click();
  }

  async goToContactUs() {
    await this.contactUsLink.click();
  }
}
