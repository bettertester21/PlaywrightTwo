import { Page } from '@playwright/test';

export class BrowserHelper {
  static async navigate(page: Page, url: string) {
    await page.goto(url, {
      waitUntil: 'networkidle'
    });
  }

  static async refresh(page: Page) {
    await page.reload();
  }

  static async goBack(page: Page) {
    await page.goBack();
  }

  static async goForward(page: Page) {
    await page.goForward();
  }

  static async getTitle(page: Page) {
    return await page.title();
  }
}