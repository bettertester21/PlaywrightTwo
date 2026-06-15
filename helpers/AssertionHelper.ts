import { expect, Locator } from '@playwright/test';

export class AssertionHelper {

  static async verifyText(
    locator: Locator,
    expectedText: string
  ) {
    await expect(locator).toContainText(expectedText);
  }

  static async verifyVisible(
    locator: Locator
  ) {
    await expect(locator).toBeVisible();
  }

  static async verifyHidden(
    locator: Locator
  ) {
    await expect(locator).toBeHidden();
  }

  static async verifyEnabled(
    locator: Locator
  ) {
    await expect(locator).toBeEnabled();
  }
}