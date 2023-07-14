# Automation assignment UI testing task

Main objective of this task is to write e2e automation tests for the https://www.saucedemo.com/.
Steps to follow are:

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

I completed this task using WebDriverIO automation framework. Also, here is my take on this task using Cypress automation framework [link].

---

### How to run tests

For running tests you need to take next steps:

1. Clone this repository to your local machine.
2. Install dependencies using `npm install`
3. Run tests using these commands:
   - To run all tests use `npm run wdio`
   - To run the cart badge update test use `npm run cart-badge`
   - To run the test for presence of correct items in the cart use `npm run check-cart`
   - To run the test for presence of right item in the cart after removing one item use `npm run remove-item`
   - To run the successful order completion test use `npm run checkout`
