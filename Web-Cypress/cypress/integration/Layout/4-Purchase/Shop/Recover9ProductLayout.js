import Recover9ProductPage from "../../../../support/pageobjects/Recover9ProductPage";
import ProductsPage from "../../../../support/pageobjects/ProductsPage.js";

const recover9Product = new Recover9ProductPage();
const productsPage = new ProductsPage();
const sizes = [
  Cypress.env("screenSizes").mobile,
  Cypress.env("screenSizes").largePhone,
  Cypress.env("screenSizes").tablet,
];

describe("Recover 9 Product POM Selector Validation Test", function () {
  it("Validates all of the selectors in the recover 9 product POM", function () {
    recover9Product.visitRecover9Page();
    cy.waitForShopifyPageLoad();

    cy.shopifyHeaderGuest();

    const visibleSelectors = [
      productsPage.getBodyBuyNowButton,
      productsPage.getBodyAddToCartButton,
      productsPage.getBodyQuantityDropDown,
      productsPage.getBodySlideshowPreviousArrowButton,
      productsPage.getBodySlideshowNextArrowButton,
      productsPage.getBodySlideshowFirstButton,
      productsPage.getBodySlideshowSecondButton,
      recover9Product.getAllAboutRecover9Section,
      recover9Product.getGoodStuffSection,
      recover9Product.getFirstBlockImageSection,
      recover9Product.getSecondBlockImageSection,
      recover9Product.getThirdBlockImageSection,
      productsPage.getBodyFAQAccordianOneButton,
      productsPage.getBodyFAQAccordianTwoButton,
    ];
    cy.assertVisible(visibleSelectors);

    cy.shopifyFooter();
  });

  sizes.forEach((size) => {
    it(
      "Responsive - Recover 9 Products Page Validation for  " +
        size.width +
        ", " +
        size.height,
      function () {
        cy.viewport(size.width, size.height);
        recover9Product.visitRecover9Page();
        cy.waitForShopifyPageLoad();

        cy.responsiveShopifyHeaderGuest();

        const visibleSelectors = [
          productsPage.getBodyBuyNowButton,
          productsPage.getBodyAddToCartButton,
          productsPage.getBodyQuantityDropDown,
          productsPage.getBodySlideshowPreviousArrowButton,
          productsPage.getBodySlideshowNextArrowButton,
          productsPage.getBodySlideshowFirstButton,
          productsPage.getBodySlideshowSecondButton,
          recover9Product.getAllAboutRecover9Section,
          recover9Product.getGoodStuffSection,
          recover9Product.getFirstBlockImageSection,
          recover9Product.getSecondBlockImageSection,
          recover9Product.getThirdBlockImageSection,
          productsPage.getBodyFAQAccordianOneButton,
          productsPage.getBodyFAQAccordianTwoButton,
        ];
        cy.assertVisible(visibleSelectors);

        cy.responsiveShopifyFooter();
      },
    );
  });
});
