import ElektraPage from "../../../support/pageobjects/ElektraPage";

const elektraPage = new ElektraPage();
const sizes = [
  Cypress.env("screenSizes").mobile,
  Cypress.env("screenSizes").largePhone,
  Cypress.env("screenSizes").tablet,
];

describe("Elektra Page Selector Validation Test", function () {
  it("Validates all of the selectors on the Elektra page", function () {
    elektraPage.visitPage();

    cy.shopifyHeaderGuest();

    const notVisibleSelectors = [
      //BODY
      elektraPage.getElektraExpertLink,
      elektraPage.getPVolveExpertLink,
      elektraPage.getBottomGetAccessButton,
    ];
    cy.assertExist(notVisibleSelectors);

    const visibleSelectors = [
      //BODY
      elektraPage.getHeroElektraLink,
      elektraPage.getHeroLearnMoreButton,
      elektraPage.getMidLoopingVideo,
      elektraPage.getMidElektraHealthLink,
      //elektraPage.getMidStartTheSeriesButton, KeepPass
      //elektraPage.getMidGetMovingButton, KeepPass
      elektraPage.getProductPromoCodeText,
      elektraPage.getProductImageCarousel,
      elektraPage.getProductAddToCartButton,
      elektraPage.getFirstProductAccordionTitle,
      elektraPage.getSecondProductAccordionTitle,
      elektraPage.getThirdProductAccordionTitle,
      elektraPage.getTestimonyTextCarousel,
    ];
    cy.assertVisible(visibleSelectors);

    cy.shopifyFooter();
  });

  sizes.forEach((size) => {
    it(
      "Responsive - Elektra page validation for " +
        size.width +
        "," +
        size.height,
      function () {
        cy.viewport(size.width, size.height);

        cy.responsiveShopifyHeaderGuest();

        elektraPage.visitPage();

        const notVisibleSelectors = [
          //BODY
          elektraPage.getElektraExpertLink,
          elektraPage.getPVolveExpertLink,
          elektraPage.getBottomGetAccessButton,
        ];
        cy.assertExist(notVisibleSelectors);

        const visibleSelectors = [
          //BODY
          elektraPage.getHeroElektraLink,
          elektraPage.getHeroLearnMoreButton,
          elektraPage.getMidLoopingVideo,
          elektraPage.getMidElektraHealthLink,
          //elektraPage.getMidStartTheSeriesButton, KeepPass
          //elektraPage.getMidGetMovingButton, KeepPass
          elektraPage.getProductPromoCodeText,
          elektraPage.getProductImageCarousel,
          elektraPage.getProductAddToCartButton,
          elektraPage.getFirstProductAccordionTitle,
          elektraPage.getSecondProductAccordionTitle,
          elektraPage.getThirdProductAccordionTitle,
          elektraPage.getTestimonyTextCarousel,
        ];
        cy.assertVisible(visibleSelectors);

        cy.responsiveShopifyFooter();
      },
    );
  });
});
