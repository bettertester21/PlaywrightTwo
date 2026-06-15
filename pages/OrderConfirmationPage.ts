import { expect, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class OrderConfirmationPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async verifyOrderSuccess() {
    await expect(
      this.locator('text=Thank you. Your order has been received.')
    ).toBeVisible({ timeout: 10000 });
  }
}