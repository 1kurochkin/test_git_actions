import ShopifyHeader from "../../../support/pageobjects/ShopifyHeader.js";
import SpecialtyPainLandingPage from "../../../support/pageobjects/SpecialtyPainLandingPage.js";

const specialtyPainLP = new SpecialtyPainLandingPage();
const shopifyHeader = new ShopifyHeader();
const sizes = [
  Cypress.env("screenSizes").mobile,
  Cypress.env("screenSizes").largePhone,
  Cypress.env("screenSizes").tablet,
];

describe("Specialty Pain Landing Page POM Selector Validation Test", function () {
  it("Validates all of the selectors in the Specialty Pain Landing Page POM", function () {
    specialtyPainLP.visitPage();
    cy.waitForShopifyPageLoad();

    //verifies shopify header is not visible on this page
    shopifyHeader.getHeaderStreamingButton().should("not.be.visible");

    const visibleSelectors = [
      //[BODY]
      specialtyPainLP.getViewExclusiveOfferButton,
      specialtyPainLP.getGetStartedButton,
      specialtyPainLP.getVideoIFrame,
      specialtyPainLP.getFirstCommentCarouselButton,
      specialtyPainLP.getSecondCommentCarouselButton,
      specialtyPainLP.getThirdCommentCarouselButton,
      specialtyPainLP.getBuzzFeedLink,
      specialtyPainLP.getVogueLink,
      specialtyPainLP.getSelfLink,
      specialtyPainLP.getWomensHealthLink,
      specialtyPainLP.getWellAndGoodLink,
      specialtyPainLP.getTodayLink,
      specialtyPainLP.getLetsGetStartedButton,
    ];
    cy.assertVisible(visibleSelectors);

    const notVisibleSelectors = [specialtyPainLP.getAddToCartButton];
    cy.assertNotVisible(notVisibleSelectors);

    cy.shopifyFooter();
  });

  sizes.forEach((size) => {
    it(
      "Responsive - Specialty Pain Landing Page Validation for  " +
        size.width +
        ", " +
        size.height,
      function () {
        cy.viewport(size.width, size.height);

        specialtyPainLP.visitPage();

        cy.waitForShopifyPageLoad();

        //verifies shopify header is not visible on this page
        shopifyHeader.getResponsiveMenuButton().should("not.be.visible");

        const visibleSelectors = [
          //[BODY]
          specialtyPainLP.getViewExclusiveOfferButton,
          specialtyPainLP.getGetStartedButton,
          specialtyPainLP.getVideoIFrame,
          specialtyPainLP.getFirstCommentCarouselButton,
          specialtyPainLP.getSecondCommentCarouselButton,
          specialtyPainLP.getThirdCommentCarouselButton,
          specialtyPainLP.getBuzzFeedLink,
          specialtyPainLP.getVogueLink,
          specialtyPainLP.getSelfLink,
          specialtyPainLP.getWomensHealthLink,
          specialtyPainLP.getWellAndGoodLink,
          specialtyPainLP.getTodayLink,
          specialtyPainLP.getLetsGetStartedButton,
        ];
        cy.assertVisible(visibleSelectors);

        const notVisibleSelectors = [specialtyPainLP.getAddToCartButton];
        cy.assertNotVisible(notVisibleSelectors);

        cy.responsiveShopifyFooter();
      },
    );
  });
});
