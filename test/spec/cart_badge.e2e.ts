import IndexPage  from "../page_objects/IndexPage.js";
import InventoryPage from "../page_objects/InventoryPage.js";
import NavBar from "../page_objects/common/NavBar.js";

describe("Cart Icon functionality tests", () => {
  beforeAll(() => {
    browser.maximizeWindow()
  })

  it("should update cart badge correctly", async () => {
    await IndexPage.open()

    await IndexPage.enterUsername("standard_user")
    await IndexPage.enterPassword("secret_sauce")
    await IndexPage.loginUser()

    await InventoryPage.addProduct(2)
    await NavBar.waitForCartBadge()

    expect(await NavBar.getCartBadgeNum()).toEqual("1")
  })
})