# Playwright Exercise

Automated end-to-end tests for [automationexercise.com](https://automationexercise.com) using Playwright and TypeScript

## Project Structure

```
pages/
  BasePage.ts          — Base class with shared navigation and cookie consent handling
  HomePage.ts          — Home page navigation methods
  ProductsPage.ts      — Product listing, search, and add to cart actions
  CartPage.ts          — Cart page item count
  ContactUsPage.ts     — Contact form fill and submit
tests/
  productSearch.spec.ts — Search for "Dress" and verify results
  addToCart.spec.ts     — Add two products to cart and verify count
  contactForm.spec.ts   — Submit contact form and verify success message
```

## Installation & Running Tests

### Setup

```bash
git clone https://github.com/witeknatalia/playwright-exercise.git
cd playwright-exercise
npm install
```

### Run Tests

```bash
# Run all tests
npm run test

# Run tests with interactive UI
npm run test:ui

# Open HTML report after a test run
npm run test:report
```

## Decisions & Trade-offs

- **Cookie consent handling in BasePage**: The site shows a cookie consent modal on first visit. Rather than handling it in every test, `BasePage.navigate()` automatically dismisses it with a try/catch and a 5-second timeout so tests aren't blocked if the modal doesn't appear.
- **Fuzzy search results**: Searching "Dress" on the site returns products that don't contain "dress" in their name (e.g. "Sleeves Top and Short"). The test asserts that at least some results match rather than requiring all results to match, as this is a known website behavior.
- **Cart modal interaction**: After adding a product to the cart, the site shows a modal. The addToCart test explicitly clicks "Continue Shopping" after the first product and "View Cart" after the second to navigate to the cart page.
- **Page Object Model**: All locators are centralised in page object constructors. Tests only interact through named methods, keeping selectors out of test files.

## AI Usage

I use GitHub Copilot in my day-to-day work, which helps me work more efficiently. For this exercise, I used it to assist with scaffolding the Page Object Model structure and drafting test boilerplate — allowing me to focus on the test logic and architecture decisions rather than repetitive setup code.

## Improvements Given More Time

- **Test data fixtures**: Use Playwright fixtures to instantiate page objects, reducing boilerplate in each test.
- **More granular cart assertions**: Verify product names and prices in the cart, not just item count.
- **CI pipeline**: Add a GitHub Actions workflow for running tests on push/PR.
- **Better search assertion**: If the site's search is supposed to be exact, file a bug and add a stricter assertion behind a flag.
