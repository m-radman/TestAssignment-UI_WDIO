import IndexPage  from "../page_objects/IndexPage.js";
import InventoryPage from "../page_objects/InventoryPage.js";
import CartPage from "../page_objects/CartPage.js";
import ProductContainer from "../page_objects/common/ProductContainer.js";
import NavBar from "../page_objects/common/NavBar.js";
import { loginUser } from "../utils/login.js";

const USERNAME = "standard_user"
const PASSWORD = "secret_sauce"

const BACKPACK = 2
const T_SHIRT = 0

const FIRST_ITEM_IN_CART = 0
const SECOND_ITEM_IN_CART = 1

describe("Add to Cart functionality tests", () => {
  beforeAll(() => {
    browser.maximizeWindow()
  })

  it("should display correct items in the cart", async () => {
    await IndexPage.open()

    await loginUser(USERNAME, PASSWORD)

    //Add product to shopping cart from Inventory page
    const firstItemName = await InventoryPage.getProductName(BACKPACK)
    await InventoryPage.AddProductToCart(BACKPACK)
    
    //Add product to shopping cart from Product page
    const secondItemName = await InventoryPage.getProductName(T_SHIRT)
    await InventoryPage.goToProductPage(T_SHIRT)
    await ProductContainer.addProductToCart()

    await NavBar.goToCart()

    //Compare names of items from the cart with names of added items
    expect(await CartPage.getItemName(FIRST_ITEM_IN_CART)).toEqual(firstItemName)
    expect(await CartPage.getItemName(SECOND_ITEM_IN_CART)).toEqual(secondItemName)
    expect(await NavBar.getCartBadgeNum()).toEqual("2")
  })
})