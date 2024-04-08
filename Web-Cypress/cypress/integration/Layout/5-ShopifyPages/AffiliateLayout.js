import AffiliatePage from "../../../support/pageobjects/AffiliatePage";

const affiliatePage = new AffiliatePage();
const sizes = [
  Cypress.env("screenSizes").mobile,
  Cypress.env("screenSizes").largePhone,
  Cypress.env("screenSizes").tablet,
];

describe("Affiliate Page Selector Validation Test", function () {
  it("Validates all of the Selectors on the Affiliate Page", function () {
    affiliatePage.visitPage();

    cy.shopifyHeaderGuest();

    const notVisibleSelectors = [
      //BODY
      affiliatePage.getBottomAddToCartButton,
    ];
    cy.assertExist(notVisibleSelectors);

    const visibleSelectors = [
      //[BODY]
      affiliatePage.getHeroPromoCodeText,
      affiliatePage.getHeroAddToCartButton,
      affiliatePage.getProductImageCarousel,
      affiliatePage.getProductAddToCartButton,
      affiliatePage.getFirstProductAccordionTitle,
      affiliatePage.getSecondProductAccordionTitle,
      affiliatePage.getThirdProductAccordionTitle,
      affiliatePage.getTrustedByText,
    ];
    cy.assertVisible(visibleSelectors);

    cy.shopifyFooter();
  });

  sizes.forEach((size) => {
    it(
      "Responsive - Affiliate page Validation for " +
        size.width +
        "," +
        size.height,
      function () {
        cy.viewport(size.width, size.height);

        cy.responsiveShopifyHeaderGuest();

        affiliatePage.visitPage();

        const notVisibleSelectors = [
          //BODY
          affiliatePage.getTrustedByText,
          affiliatePage.getBottomAddToCartButton,
        ];
        cy.assertExist(notVisibleSelectors);

        const visibleSelectors = [
          //[BODY]
          affiliatePage.getHeroPromoCodeText,
          affiliatePage.getHeroAddToCartButton,
          affiliatePage.getProductImageCarousel,
          affiliatePage.getProductAddToCartButton,
          affiliatePage.getFirstProductAccordionTitle,
          affiliatePage.getSecondProductAccordionTitle,
          affiliatePage.getThirdProductAccordionTitle,
        ];
        cy.assertVisible(visibleSelectors);

        cy.responsiveShopifyFooter();
      },
    );
  });
});
