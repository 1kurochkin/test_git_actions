import ProductsPage from "../../../../support/pageobjects/ProductsPage.js";
import DigitalMembershipPage from "../../../../support/pageobjects/DigitalMembershipPage";

const productsPage = new ProductsPage();
const sizes = [
  Cypress.env("screenSizes").mobile,
  Cypress.env("screenSizes").largePhone,
  Cypress.env("screenSizes").tablet,
];
const digitalMembershipPage = new DigitalMembershipPage();

describe("Products POM Selector Validation Test", function () {
  it("Validates all of the selectors in the products POM", function () {
    productsPage.visitProductPage("p-mat-new");
    cy.shopifyHeaderGuest();

    const visibleSelectors = [
      //[BODY] Product
      productsPage.getBodyBuyNowButton,
      productsPage.getBodyAddToCartButton,
      productsPage.getBodyQuantityDropDown,
      productsPage.getBodySlideshowPreviousArrowButton,
      productsPage.getBodySlideshowNextArrowButton,
      productsPage.getBodySlideshowFirstButton,
      productsPage.getBodySlideshowSecondButton,
      productsPage.getBodyBenefitsSection,
      productsPage.getBodyUpsellItemOneAddToCartButton,
      productsPage.getBodyFAQAccordianOneButton,
      productsPage.getBodyWriteAReviewButton,

      //[BODY] Gallery
      productsPage.getBodyGalleryItemOne,
      productsPage.getBodyGalleryItemTwo,
      productsPage.getBodyGalleryItemThree,
      productsPage.getBodyGalleryNextButton,
    ];
    cy.assertVisible(visibleSelectors);

    digitalMembershipPage.visitDigitalMembershipPage();

    const digitalMemVisibleSelectors = [
      digitalMembershipPage.get12monthAddToCartButton,
      digitalMembershipPage.get1monthAddToCartButton,
      digitalMembershipPage.get12monthMembershipLink,
      digitalMembershipPage.get1monthMembershipLink,
    ];
    cy.assertVisible(digitalMemVisibleSelectors);

    cy.shopifyFooter();
  });

  sizes.forEach((size) => {
    it(
      "Responsive - Products Page Validation for  " +
        size.width +
        ", " +
        size.height,
      function () {
        cy.viewport(size.width, size.height);
        productsPage.visitPBallPage();

        cy.responsiveShopifyHeaderGuest();

        const visibleSelectors = [
          //[BODY] Product
          productsPage.getBodyBuyNowButton,
          productsPage.getBodyAddToCartButton,
          productsPage.getBodyQuantityDropDown,
          productsPage.getBodySlideshowPreviousArrowButton,
          productsPage.getBodySlideshowNextArrowButton,
          productsPage.getBodySlideshowFirstButton,
          productsPage.getBodySlideshowSecondButton,
          productsPage.getBodyBenefitsSection,
          productsPage.getBodyUpsellItemOneAddToCartButton,
          productsPage.getBodyFAQAccordianOneButton,
          productsPage.getBodyWriteAReviewButton,

          //[BODY] Gallery
          productsPage.getBodyGalleryItemOne,
        ];
        cy.assertVisible(visibleSelectors);

        digitalMembershipPage.visitDigitalMembershipPage();

        const digitalMemVisibleSelectors = [
          digitalMembershipPage.get12monthAddToCartButton,
          digitalMembershipPage.get1monthAddToCartButton,
          digitalMembershipPage.get12monthMembershipLink,
          digitalMembershipPage.get1monthMembershipLink,
        ];
        cy.assertVisible(digitalMemVisibleSelectors);

        cy.responsiveShopifyFooter();
      },
    );
  });
});
