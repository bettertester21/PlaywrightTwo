import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class StorePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async searchProduct(productName: string) {
    await this.fill('#woocommerce-product-search-field-0', productName);
    await this.page.keyboard.press('Enter');
  }

  async addProductToCart(productName: string) {
    const product = this.locator(`text=${productName}`);

    //await product.waitFor();

    await this.locator('a:has-text("Add to cart")').first().click();
  }

  async goToCart() {
    await this.click('a[title="View cart"]');
  }
}