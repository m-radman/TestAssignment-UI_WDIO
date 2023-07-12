
class ProductContainer {
  private addToCartBtn: string

  constructor() {
    this.addToCartBtn = ".inventory_details_desc_container>button"
  }

  async addProductToCart() {
    await $(this.addToCartBtn).click()
  }
}