import { faker } from '@faker-js/faker';

import IndexPage  from "../page_objects/IndexPage.js";
import InventoryPage from "../page_objects/InventoryPage.js";
import CartPage from "../page_objects/CartPage.js";
import CheckoutPage from "../page_objects/CheckoutPage.js";
import ProductContainer from "../page_objects/common/ProductContainer.js";
import NavBar from "../page_objects/common/NavBar.js";

describe("Checkout functionality tests", () => {
  beforeAll(() => {
    browser.maximizeWindow()
  })

  it("should complete order successfully", async () => {
    await IndexPage.open()

    await IndexPage.enterUsername("standard_user")
    await IndexPage.enterPassword("secret_sauce")
    await IndexPage.loginUser()

    await InventoryPage.addProduct(2)    
    await InventoryPage.goToProductPage(0)
    await ProductContainer.addProductToCart()

    await NavBar.goToCart()
    await CartPage.removeItem(0)
    await CartPage.goToCheckout()

    await CheckoutPage.enterFirstName(faker.person.firstName())
    await CheckoutPage.enterLastName(faker.person.lastName())
    await CheckoutPage.enterZipCode(faker.location.zipCode())
    await CheckoutPage.continueCheckout()

    await CheckoutPage.waitForFinishBtn()
    await CheckoutPage.finishCheckout()
    await CheckoutPage.waitForCheckoutCompleteMsg()

    expect (await CheckoutPage.checkoutComplete()).toBeTruthy()
  })
})