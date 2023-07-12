
class InventoryPage {
  private addToCartBtns: string
  private productLinks: string
  private itemNames: string

  constructor() {
    this.addToCartBtns = ".pricebar>button"
    this.productLinks = ".inventory_item_label>a"
    this.itemNames = ".inventory_item_label .inventory_item_name"
  }

  async AddProductToCart(productIndex: number) {
    await $$(this.addToCartBtns)[productIndex].click()
  }

  async goToProductPage(productIndex: number) {
    await $$(this.productLinks)[productIndex].click()
  }

  async getProductName(productIndex: number): Promise<string> {
    return $$(this.itemNames)[productIndex].getText()
  }
}

export default new InventoryPage()