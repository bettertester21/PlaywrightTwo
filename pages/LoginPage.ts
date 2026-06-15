import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

// export class LoginPage {
//   readonly page: Page;

//   constructor(page: Page) {
//     this.page = page;
//   }

//   async login(username: string, password: string) {
//     await this.page.locator('#username').fill(username);
//     await this.page.locator('#password').fill(password);

//     await this.page.locator(
//       'button[name="login"]'
//     ).click();
//   }
// }

export class LoginPage extends BasePage {

  async login(
    username: string,
    password: string
  ) {

    await this.fill('#username', username);
    await this.fill('#password', password);

    await this.click('button[name="login"]');
  }
}