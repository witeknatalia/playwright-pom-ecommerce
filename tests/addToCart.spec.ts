import { test, expect } from '@playwright/test';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';

test.describe('Add to Cart', () => {
  test('should add two products and verify cart has two items', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    await productsPage.open();

    await productsPage.addProductToCart(0);
    await page.getByRole('button', { name: 'Continue Shopping' }).click();

    await productsPage.addProductToCart(1);
    await page.getByRole('link', { name: 'View Cart' }).click();

    const cartPage = new CartPage(page);
    const itemCount = await cartPage.getItemCount();
    expect(itemCount).toBe(2);
  });
});
