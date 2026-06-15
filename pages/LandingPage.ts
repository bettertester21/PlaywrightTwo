import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LandingPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async navigate(url: string) {
    await this.page.goto(url);
    await this.waitForPageLoad();
  }

  async clickStoreMenu() {
    await this.click('#menu-item-1227');
  }

  async clickAccountMenu() {
    await this.click('#menu-item-1237');
  }
}