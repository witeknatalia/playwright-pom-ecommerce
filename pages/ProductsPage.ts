import { type Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductsPage extends BasePage {
  private readonly searchInput: Locator;
  private readonly searchButton: Locator;
  private readonly productCards: Locator;
  private readonly productName: Locator;
  private readonly addToCartButton: Locator;
  private readonly allProductsTitle: Locator;
  private readonly searchedProductsTitle: Locator;

  constructor(page: import('@playwright/test').Page) {
    super(page);
    this.searchInput = page.locator('#search_product');
    this.searchButton = page.locator('#submit_search');
    this.productCards = page.locator('.features_items .col-sm-4');
    this.productName = page.locator('.productinfo p');
    this.addToCartButton = page.locator('.add-to-cart');
    this.allProductsTitle = page.locator('.title', { hasText: 'All Products' });
    this.searchedProductsTitle = page.locator('.title', { hasText: 'Searched Products' });
  }

  async open() {
    await this.navigate('/products');
  }

  async searchForProduct(term: string) {
    await this.searchInput.fill(term);
    await this.searchButton.click();
  }

  async getProductNames(): Promise<string[]> {
    return this.productCards.locator('.productinfo p').allTextContents();
  }

  async getProductCount(): Promise<number> {
    return this.productCards.count();
  }

  async viewProduct(index: number) {
    await this.productCards.nth(index).getByText('View Product').click();
  }

  async addProductToCart(index: number) {
    const card = this.productCards.nth(index);
    await card.hover();
    await card.locator(this.addToCartButton).first().click();
  }

  get allProductsHeading() {
    return this.allProductsTitle;
  }

  get searchedProductsHeading() {
    return this.searchedProductsTitle;
  }
}
