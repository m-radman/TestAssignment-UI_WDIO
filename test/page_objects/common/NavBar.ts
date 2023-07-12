import * as EC from 'wdio-wait-for'

class NavBar {
  private shoppingCartLink: string
  private shoppingCartBadge: string

  constructor() {
    this.shoppingCartLink = "#shopping-cart-container>a"
    this.shoppingCartBadge = "#shopping-cart-container span"
  }

  async goToCart() {
    await $(this.shoppingCartLink).click()
  }

  async waitForCartBadge() {
    await browser.waitUntil(EC.presenceOf(this.shoppingCartBadge))
  }

  async getCartBadgeNum(): Promise<string> {
    return $(this.shoppingCartBadge).getText()
  }
}