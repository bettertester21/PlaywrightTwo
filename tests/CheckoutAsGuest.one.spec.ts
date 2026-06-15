import { test } from '@playwright/test';
import testData from '../testdata/testdata.json';

import { LandingPage } from '../pages/LandingPage';
import { StorePage } from '../pages/StorePage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { OrderConfirmationPage } from '../pages/OrderConfirmationPage';

test('Checkout As Guest User', async ({ page }) => {

  const landingPage = new LandingPage(page);
  const storePage = new StorePage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);
  const orderPage = new OrderConfirmationPage(page);

  await landingPage.navigate(testData.baseUrl);

  await landingPage.clickStoreMenu();

  await storePage.searchProduct(
    testData.product.name
  );

  await storePage.addProductToCart(
    testData.product.name
  );

  await storePage.goToCart();

  await cartPage.proceedToCheckout();

  await checkoutPage.fillBillingDetails(
    testData.guestUser.billingAddress
  );

  await checkoutPage.placeOrder();

  await orderPage.verifyOrderSuccess();
});