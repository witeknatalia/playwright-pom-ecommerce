import { type Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class ContactUsPage extends BasePage {
  private readonly nameInput: Locator;
  private readonly emailInput: Locator;
  private readonly subjectInput: Locator;
  private readonly messageInput: Locator;
  private readonly submitButton: Locator;
  private readonly successMessage: Locator;

  constructor(page: import('@playwright/test').Page) {
    super(page);
    this.nameInput = page.getByPlaceholder('Name');
    this.emailInput = page.getByPlaceholder('Email', { exact: true });
    this.subjectInput = page.getByPlaceholder('Subject');
    this.messageInput = page.getByPlaceholder('Your Message Here');
    this.submitButton = page.getByRole('button', { name: 'Submit' });
    this.successMessage = page.locator('.contact-form .alert-success');
  }

  async open() {
    await this.navigate('/contact_us');
  }

  async fillForm(name: string, email: string, subject: string, message: string) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.subjectInput.fill(subject);
    await this.messageInput.fill(message);
  }

  async submit() {
    await this.submitButton.click();
  }

  get successAlert() {
    return this.successMessage;
  }
}
