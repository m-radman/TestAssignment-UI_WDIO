import * as EC from 'wdio-wait-for'

class CheckoutPage {
  private firstNameInputField: string
  private lastNameInputField: string
  private zipCodeInputField: string
  private continueBtn: string
  private finishBtn: string
  private checkoutCompleteMsg: string

  constructor() {
    this.firstNameInputField = "#first-name"
    this.lastNameInputField = "last-name"
    this.zipCodeInputField = "postal-code"
    this.continueBtn = "#conitnue"
    this.finishBtn = "#finish"
    this.checkoutCompleteMsg = "#checkout_complete_container"
  }

  async enterFirstName(fname: string) {
    await $(this.firstNameInputField).setValue(fname)
  }

  async enterLastName(lname: string) {
    await $(this.lastNameInputField).setValue(lname)
  }

  async enterZipCode(zip: number) {
    await $(this.zipCodeInputField).setValue(zip)
  }

  async continueCheckout() {
    await $(this.continueBtn).click()
  }

  async waitForFinishBtn() {
    await browser.waitUntil(EC.presenceOf(this.finishBtn))
  }

  async finishCheckout() {
    await $(this.finishBtn).click()
  }

  async waitForCheckoutCompleteMsg() {
    await browser.waitUntil(EC.visibilityOf(this.checkoutCompleteMsg))
  }

  async checkoutComplete(): Promise<boolean> {
    return $(this.checkoutCompleteMsg).isDisplayed()
  }
}

export default new CheckoutPage()