import IndexPage from "../page_objects/IndexPage.js";
import InventoryPage from "../page_objects/InventoryPage.js";
import NavBar from "../page_objects/common/NavBar.js";
import { loginUser } from "../utils/login.js";

const USERNAME = "standard_user"
const PASSWORD = "secret_sauce"

const BACKPACK = 2

describe("Cart Icon functionality tests", () => {
  beforeAll(() => {
    browser.maximizeWindow()
  })

  it("should update cart badge correctly", async () => {
    await IndexPage.open()

    await loginUser(USERNAME, PASSWORD)

    await InventoryPage.AddProductToCart(BACKPACK)
    await NavBar.waitForCartBadge()

    //Expect badge to appear on screen and to have number "1"
    expect(await NavBar.getCartBadgeNum()).toEqual("1")
  })
})