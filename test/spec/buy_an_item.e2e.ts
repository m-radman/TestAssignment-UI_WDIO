import IndexPage from "../page_objects/IndexPage";
import InventoryPage from "../page_objects/InventoryPage";
import CartPage from "../page_objects/CartPage";
import CheckoutPage from "../page_objects/CheckoutPage";
import ProductContainer from "../page_objects/common/ProductContainer";
import NavBar from "../page_objects/common/NavBar";

describe("Shop functionality tests", () => {
  it("should update cart badge correctly", async () => {
    await IndexPage.open()

    await IndexPage.enterUsername("standard_user")
    await IndexPage.enterPassword("secret_sauce")
    await IndexPage.loginUser()

    await InventoryPage.addProduct(2)
    await NavBar.waitForCartBadge()

    await expect(NavBar.getCartBadgeNum()).toBe("1")
  })
})