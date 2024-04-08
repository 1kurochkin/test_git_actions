import SugarbreakPage from "../../../support/pageobjects/SugarbreakPage";

const sugarbreakPage = new SugarbreakPage();
const sizes = [
  Cypress.env("screenSizes").mobile,
  Cypress.env("screenSizes").largePhone,
  Cypress.env("screenSizes").tablet,
];

describe("Sugarbreak Page Selector Validation Test", function () {
  it("Validates all of the Selectors on the Sugarbreak Page", function () {
    sugarbreakPage.visitPage();

    cy.shopifyHeaderGuest();

    const notVisibleSelectors = [
      //BODY
      sugarbreakPage.getSeriesPreviewVideo,
      sugarbreakPage.getMidBuyNowButton,
    ];
    cy.assertExist(notVisibleSelectors);

    const visibleSelectors = [
      //BODY
      sugarbreakPage.getHeroPromoCodeText,
      sugarbreakPage.getHeroBuyNowButton,
      sugarbreakPage.getSugarbreakSiteLink,
      sugarbreakPage.getMidGetStartedButton,
      sugarbreakPage.getFirstDisclaimerLink,
      sugarbreakPage.getSecondDisclaimerLink,
      sugarbreakPage.getProductAddToCartButton,
      sugarbreakPage.getFirstProductAccordionTitle,
      sugarbreakPage.getSecondProductAccordionTitle,
      sugarbreakPage.getThirdProductAccordionTitle,
      sugarbreakPage.getBottomPromoCodeText,
      sugarbreakPage.getSugarbreakExpertLink,
      sugarbreakPage.getPVolveExpertLink,
      sugarbreakPage.getBottomStartNowButton,
    ];
    cy.assertVisible(visibleSelectors);

    cy.shopifyFooter();
  });

  sizes.forEach((size) => {
    it(
      "Responsive - Sugarbreak page validation for " +
        size.width +
        "," +
        size.height,
      function () {
        cy.viewport(size.width, size.height);

        cy.responsiveShopifyHeaderGuest();

        sugarbreakPage.visitPage();

        const notVisibleSelectors = [
          //BODY
          sugarbreakPage.getSeriesPreviewVideo,
          sugarbreakPage.getMidBuyNowButton,
          sugarbreakPage.getSugarbreakExpertLink,
          sugarbreakPage.getPVolveExpertLink,
          sugarbreakPage.getBottomStartNowButton,
          sugarbreakPage.getBottomPromoCodeText,
        ];
        cy.assertExist(notVisibleSelectors);

        const visibleSelectors = [
          //BODY
          sugarbreakPage.getHeroPromoCodeText,
          sugarbreakPage.getHeroBuyNowButton,
          sugarbreakPage.getSugarbreakSiteLink,
          sugarbreakPage.getMidGetStartedButton,
          sugarbreakPage.getFirstDisclaimerLink,
          sugarbreakPage.getSecondDisclaimerLink,
          sugarbreakPage.getProductAddToCartButton,
          sugarbreakPage.getFirstProductAccordionTitle,
          sugarbreakPage.getSecondProductAccordionTitle,
          sugarbreakPage.getThirdProductAccordionTitle,
          sugarbreakPage.getMidBigPromoCodeText,
        ];
        cy.assertVisible(visibleSelectors);

        cy.responsiveShopifyFooter();
      },
    );
  });
});
