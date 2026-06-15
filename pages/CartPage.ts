import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async proceedToCheckout() {
    await this.click('a.checkout-button');
  }
}