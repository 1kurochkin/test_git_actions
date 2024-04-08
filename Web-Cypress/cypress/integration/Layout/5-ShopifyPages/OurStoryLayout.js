import OurStoryPage from "../../../support/pageobjects/OurStoryPage.js";

const ourStoryPage = new OurStoryPage();
const sizes = [
  Cypress.env("screenSizes").mobile,
  Cypress.env("screenSizes").largePhone,
  Cypress.env("screenSizes").tablet,
];

describe("Our Story POM Selector Validation Test", function () {
  it("Validates all of the selectors in the Our Story Page POM", function () {
    ourStoryPage.visitPage();

    const visibleSelectors = [
      ourStoryPage.getVideoWrapper,
      ourStoryPage.getCarousel,
      ourStoryPage.getCarouselNextButton,
      ourStoryPage.getCarouselBackButton,
    ];
    cy.assertVisible(visibleSelectors);

    ourStoryPage.getHowItAllBeganHeaderText();
    ourStoryPage.getBuiltForWomenLikeUsText();

    // Navigate the carousel
    ourStoryPage.getCarouselNextButton().click();
    ourStoryPage.getCarouselSecondSlideText();

    ourStoryPage.getCarouselBackButton().click();
    ourStoryPage.getCarouselFirstSlideText();

    // Verify the Try for free button
    ourStoryPage.getTakeOurQuizButton().should("be.visible");

    // Verify the footer quotes
    ourStoryPage.getFooterQuoteOneText();
    ourStoryPage.getFooterQuoteTwoText();
  });

  sizes.forEach((size) => {
    it(
      "Responsive - Our Story Layout for  " + size.width + ", " + size.height,
      function () {
        cy.viewport(size.width, size.height);
        ourStoryPage.visitPage();

        const visibleSelectors = [
          ourStoryPage.getVideoWrapper,
          ourStoryPage.getCarousel,
          ourStoryPage.getCarouselNextButton,
          ourStoryPage.getCarouselBackButton,
        ];
        cy.assertVisible(visibleSelectors);

        ourStoryPage.getHowItAllBeganHeaderText();
        ourStoryPage.getBuiltForWomenLikeUsText();

        // // Navigate the carousel
        ourStoryPage.getCarouselNextButton().click();
        ourStoryPage.getCarouselSecondSlideText();

        ourStoryPage.getCarouselBackButton().click();
        ourStoryPage.getCarouselFirstSlideText();

        // // Verify the Try for free button
        ourStoryPage.getTakeOurQuizButton().should("be.visible");

        // // Verify the footer quotes
        ourStoryPage.getFooterQuoteOneText();
        ourStoryPage.getFooterQuoteTwoText();
      },
    );
  });
});
