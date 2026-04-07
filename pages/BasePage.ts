import { type Page, type Locator } from '@playwright/test';

export class BasePage {
  protected readonly page: Page;
  private readonly consentButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.consentButton = page.getByRole('button', { name: 'Consent' });
  }

  async navigate(path: string) {
    await this.page.goto(path);
    await this.dismissCookieConsent();
  }

  async dismissCookieConsent() {
    try {
      await this.consentButton.click({ timeout: 5000 });
    } catch {
    }
  }
}
