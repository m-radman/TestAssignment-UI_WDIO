import IndexPage  from "../page_objects/IndexPage.js";
import InventoryPage from "../page_objects/InventoryPage.js";
import CartPage from "../page_objects/CartPage.js";
import ProductContainer from "../page_objects/common/ProductContainer.js";
import NavBar from "../page_objects/common/NavBar.js";
import { loginUser } from "../utils/login.js";

const BACKPACK = 2
const T_SHIRT = 0

const FIRST_ITEM_IN_CART = 0

describe("Add to Cart functionality tests", () => {
  beforeAll(() => {
    browser.maximizeWindow()
  })

  it("should remove undesired item successfully", async () => {
    await IndexPage.open()

    await loginUser()

    //Add product to shopping cart from Inventory page
    await InventoryPage.AddProductToCart(BACKPACK)
    
    //Add product to shopping cart from Product page
    const secondItemName = await InventoryPage.getProductName(T_SHIRT)
    await InventoryPage.goToProductPage(T_SHIRT)
    await ProductContainer.addProductToCart()

    await NavBar.goToCart()
    await CartPage.removeItem(FIRST_ITEM_IN_CART)

    //Expect the first, and only, item in the cart to be the item we added second
    expect(await CartPage.getItemName(FIRST_ITEM_IN_CART)).toEqual(secondItemName)
    expect(await NavBar.getCartBadgeNum()).toEqual("1")
  })
})