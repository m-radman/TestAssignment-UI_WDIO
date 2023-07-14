import { faker } from '@faker-js/faker';

import IndexPage  from "../page_objects/IndexPage.js";
import InventoryPage from "../page_objects/InventoryPage.js";
import CartPage from "../page_objects/CartPage.js";
import CheckoutPage from "../page_objects/CheckoutPage.js";
import ProductContainer from "../page_objects/common/ProductContainer.js";
import NavBar from "../page_objects/common/NavBar.js";

import { loginUser } from "../utils/login.js";

const USERNAME = "standard_user"
const PASSWORD = "secret_sauce"

const BACKPACK = 2
const T_SHIRT = 0

const FIRST_ITEM_IN_CART = 0

describe("Checkout functionality tests", () => {
  beforeAll(() => {
    browser.maximizeWindow()
  })

  it("should complete order successfully", async () => {
    await IndexPage.open()

    await loginUser(USERNAME, PASSWORD)

    //Add items to the cart
    await InventoryPage.AddProductToCart(BACKPACK)    
    await InventoryPage.goToProductPage(T_SHIRT)
    await ProductContainer.addProductToCart()

    //Go to cart, remove first item and proceed to checkout
    await NavBar.goToCart()
    await CartPage.removeItem(FIRST_ITEM_IN_CART)
    await CartPage.goToCheckout()

    //Fill checkout form correctly
    await CheckoutPage.enterFirstName(faker.person.firstName())
    await CheckoutPage.enterLastName(faker.person.lastName())
    await CheckoutPage.enterZipCode(faker.location.zipCode())
    await CheckoutPage.continueCheckout()

    //Confirm checkout overview
    await CheckoutPage.waitForFinishBtn()
    await CheckoutPage.finishCheckout()
    await CheckoutPage.waitForCheckoutCompleteMsg()

    //Expect to see a message about completed checkout
    expect (await CheckoutPage.checkoutComplete()).toBeTruthy()
  })
})