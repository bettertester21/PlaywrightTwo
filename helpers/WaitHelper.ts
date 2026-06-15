import { Locator, Page } from '@playwright/test';

export class WaitHelper {

  static async waitForElement(locator: Locator) {
    await locator.waitFor({
      state: 'visible'
    });
  }

  static async waitForPageLoad(page: Page) {
    await page.waitForLoadState('networkidle');
  }

  static async waitForURL(page: Page, url: string) {
    await page.waitForURL(url);
  }
}