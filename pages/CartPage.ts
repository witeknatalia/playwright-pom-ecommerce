import { type Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {
  private readonly cartItems: Locator;

  constructor(page: import('@playwright/test').Page) {
    super(page);
    this.cartItems = page.locator('#cart_info_table tbody tr');
  }

  async open() {
    await this.navigate('/view_cart');
  }

  async getItemCount(): Promise<number> {
    return this.cartItems.count();
  }
}
