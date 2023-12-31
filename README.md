# Automation assignment UI testing task

The main objective of this task is to write e2e automation tests for https://www.saucedemo.com/.  
The steps to follow are:

- Go to https://www.saucedemo.com/
- Log in to the site
- Add an item from the list to the cart
- Verify that the cart badge is updated correctly
- Open another item’s details page
- Add the item to the cart
- Open the cart
- Verify that the correct items are present (2 different items)
- Remove the first item from the cart
- Verify that the correct item is present (1 item)
- Continue to the Checkout page
- Complete the checkout form
- Complete the order
- Verify that the order is completed successfully with the displayed message

I completed this task using the WebDriverIO automation framework.  
Also, here is my take on this task using [Cypress](https://github.com/m-radman/TestAssignment-UI_Cypress/tree/master).

---

### Where to find code

The implementation of the page objects you can see [here](https://github.com/m-radman/TestAssignment-UI_WDIO/tree/master/test/page_objects).  
The implementation of the tests you can see [here](https://github.com/m-radman/TestAssignment-UI_WDIO/tree/master/test/spec).

---

### How to run tests

For running tests you need to take next steps:

1. Clone this repository to your local machine.
2. Install dependencies using `npm install`
3. Run tests using these commands:
   - To run all tests `npm run wdio`
   - To run the cart badge update test `npm run cart-badge`
   - To run the test for presence of correct items in the cart `npm run check-cart`
   - To run the test for presence of right item in the cart after removing one item `npm run remove-item`
   - To run the successful order completion test `npm run checkout`
