import IndexPage  from "../page_objects/IndexPage.js";
import InventoryPage from "../page_objects/InventoryPage.js";
import CartPage from "../page_objects/CartPage.js";
import ProductContainer from "../page_objects/common/ProductContainer.js";
import NavBar from "../page_objects/common/NavBar.js";

describe("Add to Cart functionality tests", () => {
  beforeAll(() => {
    browser.maximizeWindow()
  })

  it("should remove desired item successfully", async () => {
    await IndexPage.open()

    await IndexPage.enterUsername("standard_user")
    await IndexPage.enterPassword("secret_sauce")
    await IndexPage.loginUser()

    await InventoryPage.addProduct(2)
    
    const secondItemName = await InventoryPage.getProductName(0)
    await InventoryPage.goToProductPage(0)
    await ProductContainer.addProductToCart()

    await NavBar.goToCart()
    await CartPage.removeItem(0)

    expect(secondItemName).toEqual(await CartPage.getItemName(0))
  })
})