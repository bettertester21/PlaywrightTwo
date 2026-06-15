import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckoutPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // private async setHiddenSelectValue(selector: string, label: string) {
  //   await this.locator(selector).evaluate((select, params) => {
  //     const { labelValue, selectorValue } = params as { labelValue: string; selectorValue: string };
  //     const element = select as HTMLSelectElement;
  //     const normalize = (value: string | null | undefined) =>
  //       value?.toString().trim().toLowerCase() || '';
  //     const target = normalize(labelValue);
  //     const option = Array.from(element.options).find(opt => {
  //       const label = normalize(opt.label);
  //       const text = normalize(opt.text);
  //       const value = normalize(opt.value);
  //       return (
  //         value === target ||
  //         label === target ||
  //         text === target ||
  //         (target && label.includes(target)) ||
  //         (target && text.includes(target)) ||
  //         (target && value.includes(target))
  //       );
  //     });
  //     if (!option) {
  //       throw new Error(`Option '${labelValue}' not found for selector ${selectorValue}`);
  //     }
  //     element.value = option.value;
  //     element.dispatchEvent(new Event('change', { bubbles: true }));
  //   }, { labelValue: label, selectorValue: selector });
  // }

  async fillBillingDetails(data: any) {
    await this.fill('#billing_first_name', data.firstName);

    if (data.company) {
      await this.fill('#billing_company', data.company);
    }

    if (data.country) {
      await this.setHiddenSelectValue('#billing_country', data.country);
    }

    await this.fill('#billing_last_name', data.lastName);

    await this.fill('#billing_address_1', data.addressLine1);

    if (data.addressLine2) {
      await this.fill('#billing_address_2', data.addressLine2);
    }

    await this.fill('#billing_city', data.city);

    if (data.state) {
      await this.setHiddenSelectValue('#billing_state', data.state);
    }

    await this.fill('#billing_postcode', data.zipCode);

    if (data.phone) {
      await this.fill('#billing_phone', data.phone);
    }

    await this.fill('#billing_email', data.email);
  }

  async placeOrder() {
    await this.click('#place_order');
  }
}