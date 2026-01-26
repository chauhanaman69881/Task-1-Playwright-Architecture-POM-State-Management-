class InventoryPage {
  constructor(page) {
    this.page = page;

    this.sortDropdown = '[data-test="product-sort-container"]';
    this.inventoryItems = '.inventory_item';
    this.itemName = '.inventory_item_name';
    this.itemPrice = '.inventory_item_price';
    this.addToCartBtn = 'button[data-test^="add-to-cart"]';
    this.cartIcon = '.shopping_cart_link';
  }

  async sortByPriceLowToHigh() {
    await this.page.selectOption(this.sortDropdown, 'lohi');
  }

  async getSecondCheapestItemDetails() {
    const secondItem = this.page.locator(this.inventoryItems).nth(1);

    const name = await secondItem.locator(this.itemName).innerText();
    const priceText = await secondItem.locator(this.itemPrice).innerText();
    const price = parseFloat(priceText.replace('$', ''));

    return { name, price };
  }

  async addSecondCheapestItemToCart() {
    const secondItem = this.page.locator(this.inventoryItems).nth(1);
    await secondItem.locator(this.addToCartBtn).click();
  }

  async navigateToCart() {
    await this.page.click(this.cartIcon);
  }
}

module.exports = { InventoryPage };
