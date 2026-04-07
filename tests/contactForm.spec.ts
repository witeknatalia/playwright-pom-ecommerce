import { test, expect } from '@playwright/test';
import { ContactUsPage } from '../pages/ContactUsPage';

test.describe('Contact Form Submission', () => {
  test('should submit the contact form and display success message', async ({ page }) => {
    const contactUsPage = new ContactUsPage(page);
    await contactUsPage.open();

    await contactUsPage.fillForm(
      'John Doe',
      'john@example.com',
      'Test Subject',
      'This is a test message.'
    );

    page.on('dialog', (dialog) => dialog.accept());
    await contactUsPage.submit();

    await expect(contactUsPage.successAlert).toBeVisible();
    await expect(contactUsPage.successAlert).toContainText('Success! Your details have been submitted successfully.');
  });
});
