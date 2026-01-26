const { test, expect } = require('@playwright/test');
const { InventoryPage } = require('../pages/inventoryPage');
const { CartPage } = require('../pages/cartPage');

test('Add second cheapest item and verify it in cart', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);

  // a. Load inventory page using saved auth
  await page.goto('/inventory.html');

  // b. Sort items by price (low to high)
  await inventoryPage.sortByPriceLowToHigh();

  // c. Capture second cheapest item details
  const selectedItem = await inventoryPage.getSecondCheapestItemDetails();

  // d. Add second cheapest item to cart
  await inventoryPage.addSecondCheapestItemToCart();

  // e. Navigate to cart
  await inventoryPage.navigateToCart();

  // f. Assertion
  const cartItem = await cartPage.getCartItemDetails();

  expect(cartItem.name).toBe(selectedItem.name);
  expect(cartItem.price).toBe(selectedItem.price);
});
