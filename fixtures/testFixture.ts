import { test as base } from '@playwright/test';

import { LandingPage } from '../pages/LandingPage';
import { LoginPage } from '../pages/LoginPage';
import { StorePage } from '../pages/StorePage';

type PageFixtures = {
  landingPage: LandingPage;
  loginPage: LoginPage;
  storePage: StorePage;
};

export const test = base.extend<PageFixtures>({
  landingPage: async ({ page }, use) => {
    await use(new LandingPage(page));
  },

  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  storePage: async ({ page }, use) => {
    await use(new StorePage(page));
  }
});

export { expect } from '@playwright/test';