# PlaywrightTwo
UI Automation framework using Playwright and TypeScript

Installing Playwright
Get started by installing Playwright using one of the following methods.
npm init playwright@latest

Select the folowing while creating the Playwright project
TypeScript or JavaScript (default: TypeScript)
Tests folder name (default: tests, or e2e if tests already exists)
Add a GitHub Actions workflow (recommended for CI)
Install Playwright browsers (default: yes)

Playwright creates the following files:
playwright.config.ts        
package.json
package-lock.json           
tests/
  example.spec.ts           

  Running the Test
  npx playwright test


Error Resolution
To resolve error "Cannot find name 'process'" install the following
sudo apt install node-typescript
npm i --save-dev @types/node
tsc --init


In the project root folder,Create the following folders and files

playwright-askomdch-framework
│
├── pages
│   ├── BasePage.ts
│   ├── LandingPage.ts
│   ├── LoginPage.ts
│   ├── HomePage.ts
│   ├── StorePage.ts
│   ├── CartPage.ts
│   ├── CheckoutPage.ts
│   └── OrderConfirmationPage.ts
│
├── tests
│   ├── createCheckoutAsRegisteredUser.spec.ts
│   └── createCheckoutAsGuest.spec.ts
│
├── helpers
│   ├── BrowserHelper.ts
│   ├── WaitHelper.ts
│   ├── AssertionHelper.ts
│   ├── ScreenshotHelper.ts
│   ├── JsonHelper.ts
│   ├── TestDataHelper.ts
│   ├── RandomDataHelper.ts
│   ├── DateHelper.ts
│   ├── ApiHelper.ts
│   ├── StorageStateHelper.ts
│   ├── EnvironmentHelper.ts
│   ├── Logger.ts
│   └── RetryHelper.ts
│
├── fixtures
│   └── testFixture.ts
│
├── testdata
│   ├── testdata.json
│   ├── qa.json
│   ├── stage.json
│   └── prod.json
│
├── constants
│   ├── Routes.ts
│   ├── Messages.ts
│   └── Timeouts.ts
│
├── interfaces
│   ├── User.ts
│   ├── Product.ts
│   └── BillingDetails.ts
│
├── utils
│   ├── FileUtil.ts
│   ├── ExcelUtil.ts
│   └── CsvUtil.ts
│
├── storage
│   ├── registeredUser.json
│   └── adminUser.json
│
├── screenshots
│
├── reports
│   ├── html-report
│   └── allure-results
│
├── playwright.config.ts
├── package.json
├── tsconfig.json
├── .env.qa
├── .env.stage
├── .env.prod
└── README.md