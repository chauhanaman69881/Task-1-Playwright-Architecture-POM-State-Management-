class CartPage {
  constructor(page) {
    this.page = page;

    this.cartItemName = '.inventory_item_name';
    this.cartItemPrice = '.inventory_item_price';
  }

  async getCartItemDetails() {
    const name = await this.page.locator(this.cartItemName).innerText();
    const priceText = await this.page.locator(this.cartItemPrice).innerText();
    const price = parseFloat(priceText.replace('$', ''));

    return { name, price };
  }
}

module.exports = { CartPage };
