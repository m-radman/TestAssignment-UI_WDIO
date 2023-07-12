import * as EC from 'wdio-wait-for'

class NavBar {
  private shoppingCartLink: string
  private shoppingCartBadge: string

  constructor() {
    this.shoppingCartLink = "#shopping_cart_container>a"
    this.shoppingCartBadge = "#shopping_cart_container span"
  }

  async goToCart() {
    await $(this.shoppingCartLink).click()
  }

  async waitForCartBadge() {
    await browser.waitUntil(EC.visibilityOf(this.shoppingCartBadge))
  }

  async getCartBadgeNum(): Promise<string> {
    return $(this.shoppingCartBadge).getText()
  }
}

export default new NavBar()