
class CartPage {
  private cartItems: string
  private removeBtns: string
  private checkoutBtn: string

  constructor() {
    this.cartItems = ".cart_item_label .inventory_item_name"
    this.removeBtns = ".item_pricebar>button"
    this.checkoutBtn = "#checkout"
  }

  async getItemName(itemIndex: number): Promise<string> {
    return $$(this.cartItems)[itemIndex].getText()
  }

  async removeItem(itemIndex: number) {
    await $$(this.removeBtns)[itemIndex].click()
  }

  async goToCheckout() {
    await $(this.checkoutBtn).click()
  }
}

export default new CartPage()