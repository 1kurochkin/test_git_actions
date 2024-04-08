import InfluencerPage from "../../../support/pageobjects/InfluencerPage";

const influencerPage = new InfluencerPage();
const sizes = [
  Cypress.env("screenSizes").mobile,
  Cypress.env("screenSizes").largePhone,
  Cypress.env("screenSizes").tablet,
];

describe("Influencer Page Selector Validation Test", function () {
  it("Validates all of the Selectors on the Influencer Page", function () {
    influencerPage.visitPage();

    cy.shopifyHeaderGuest();

    const notVisibleSelectors = [
      influencerPage.getHeroPromoCodeText,
      influencerPage.getHeroAddToCartButton,
      influencerPage.getFirstProductAddToCartButton,
      influencerPage.getSecondProductAddToCartButton,
      influencerPage.getThirdProductAddToCartButton,
      influencerPage.getTrustedByText,
      influencerPage.getBottomShopNowButton,
    ];
    cy.assertExist(notVisibleSelectors);

    cy.shopifyFooter();
  });

  sizes.forEach((size) => {
    it(
      "Responsive - Influencer page Validation for " +
        size.width +
        "," +
        size.height,
      function () {
        cy.viewport(size.width, size.height);

        cy.responsiveShopifyHeaderGuest();

        influencerPage.visitPage();

        const notVisibleSelectors = [
          influencerPage.getHeroPromoCodeText,
          influencerPage.getHeroAddToCartButton,
          influencerPage.getFirstProductAddToCartButton,
          influencerPage.getSecondProductAddToCartButton,
          influencerPage.getThirdProductAddToCartButton,
          influencerPage.getTrustedByText,
          influencerPage.getBottomShopNowButton,
        ];
        cy.assertExist(notVisibleSelectors);

        cy.responsiveShopifyFooter();
      },
    );
  });
});
