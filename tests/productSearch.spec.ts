import { test, expect } from '@playwright/test';
import { ProductsPage } from '../pages/ProductsPage';

test.describe('Product Search', () => {
  test('should display results matching the search term "Dress"', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    await productsPage.open();

    await productsPage.searchForProduct('Dress');

    await expect(productsPage.searchedProductsHeading).toBeVisible();

    const productCount = await productsPage.getProductCount();
    expect(productCount).toBeGreaterThan(0);

    const productNames = await productsPage.getProductNames();
    const matchingProducts = productNames.filter((name) =>
      name.toLowerCase().includes('dress')
    );
    expect(matchingProducts.length).toBeGreaterThan(0);
  });
});
