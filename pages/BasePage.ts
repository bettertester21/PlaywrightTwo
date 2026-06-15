import { Locator, Page } from '@playwright/test';

export class BasePage {
  constructor(protected page: Page) {}

  locator(selector: string): Locator {
    return this.page.locator(selector);
  }

  async click(selector: string) {
    await this.locator(selector).click();
  }

  async fill(selector: string, value: string) {
    await this.page.locator(selector).fill(value);
  }

  async getText(selector: string) {
    return await this.page.locator(selector).textContent();
  }

  async waitForPageLoad() {
    await this.page.waitForLoadState('networkidle');
  }

  async setHiddenSelectValue(selector: string, label: string) {
    await this.locator(selector).evaluate((select, params) => {
      const { labelValue, selectorValue } = params as { labelValue: string; selectorValue: string };
      const element = select as HTMLSelectElement;
      const normalize = (value: string | null | undefined) =>
        value?.toString().trim().toLowerCase() || '';
      const target = normalize(labelValue);
      const option = Array.from(element.options).find(opt => {
        const label = normalize(opt.label);
        const text = normalize(opt.text);
        const value = normalize(opt.value);
        return (
          value === target ||
          label === target ||
          text === target ||
          (target && label.includes(target)) ||
          (target && text.includes(target)) ||
          (target && value.includes(target))
        );
      });
      if (!option) {
        throw new Error(`Option '${labelValue}' not found for selector ${selectorValue}`);
      }
      element.value = option.value;
      element.dispatchEvent(new Event('change', { bubbles: true }));
    }, { labelValue: label, selectorValue: selector });
  }
}