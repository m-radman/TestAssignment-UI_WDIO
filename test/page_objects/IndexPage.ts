
class IndexPage {
  static url: string = "https://www.saucedemo.com/"

  private usernameInputField: string
  private passwordInputField: string
  private loginButton: string

  constructor() {
    this.usernameInputField = "#user-name"
    this.passwordInputField = "#password"
    this.loginButton = "#login-button"
  }

  async open() {
    await browser.url(IndexPage.url)
  }

  async enterUsername(username: string) {
    await $(this.usernameInputField).setValue(username)
  }

  async enterPassword(password: string) {
    await $(this.passwordInputField).setValue(password)
  }

  async loginUser() {
    await $(this.loginButton).click()
  }
}

export default new IndexPage()