import OurClassesPage from "../../../support/pageobjects/OurClassesPage";

const ourClassesPage = new OurClassesPage();
const sizes = [
  Cypress.env("screenSizes").mobile,
  Cypress.env("screenSizes").largePhone,
  Cypress.env("screenSizes").tablet,
];

describe("Our Classes Page Selector Validation Test", function () {
  it("Validates all of the Selectors on the Our Classes Page", function () {
    ourClassesPage.visitPage();

    cy.shopifyHeaderGuest();

    const notVisibleSelectors = [
      //BODY
      ourClassesPage.getFirstExpertLink,
      ourClassesPage.getSecondExpertLink,
      ourClassesPage.getThirdExpertLink,
      ourClassesPage.getFourthExpertLink,
      ourClassesPage.getFifthExpertLink,
    ];
    cy.assertExist(notVisibleSelectors);

    const visibleSelectors = [
      //BODY
      ourClassesPage.getPVolveClassText,
      ourClassesPage.getPVolveClassImage,
      ourClassesPage.getClassTypesVideoContainer,
      ourClassesPage.getClassTypesVideoSelector,
      ourClassesPage.getMidFreeTrialButton,
      ourClassesPage.getMovementTherapyCollage,
      ourClassesPage.getQuoteTextCarousel,
      ourClassesPage.getStartMembershipButton,
      ourClassesPage.getLearnMoreButton,
      ourClassesPage.getChooseLocationDropDown,
      ourClassesPage.getExploreStudiosButton,
    ];
    cy.assertVisible(visibleSelectors);

    cy.shopifyFooter();
  });

  sizes.forEach((size) => {
    if (size == Cypress.env("screenSizes").tablet) {
      it(
        "Responsive - Our Classes page validation for " +
          size.width +
          "," +
          size.height,
        function () {
          cy.viewport(size.width, size.height);

          cy.responsiveShopifyHeaderGuest();

          const existSelectors = [
            //BODY
            ourClassesPage.getClassTypesVideoSelector,
            ourClassesPage.getPVolveClassImage,
          ];
          cy.assertExist(existSelectors);

          const visibleSelectors = [
            //BODY
            ourClassesPage.getPVolveClassText,
            ourClassesPage.getClassTypesVideoContainer,
            ourClassesPage.getMidFreeTrialButton,
            ourClassesPage.getMovementTherapyCollage,
            ourClassesPage.getQuoteTextCarousel,
            ourClassesPage.getFirstExpertLink,
            ourClassesPage.getSecondExpertLink,
            ourClassesPage.getThirdExpertLink,
            ourClassesPage.getFourthExpertLink,
            ourClassesPage.getFifthExpertLink,
            ourClassesPage.getStartMembershipButton,
            ourClassesPage.getLearnMoreButton,
            ourClassesPage.getChooseLocationDropDown,
            ourClassesPage.getExploreStudiosButton,
          ];
          cy.assertVisible(visibleSelectors);

          cy.responsiveShopifyFooter();
        },
      );
    } else {
      it(
        "Responsive - Our Classes page validation for " +
          size.width +
          "," +
          size.height,
        function () {
          cy.viewport(size.width, size.height);

          ourClassesPage.visitPage();

          cy.responsiveShopifyHeaderGuest();

          const existSelectors = [
            //BODY
            ourClassesPage.getClassTypesVideoSelector,
            ourClassesPage.getPVolveClassImage,
          ];
          cy.assertExist(existSelectors);

          const notVisibleSelectors = [
            //BODY
            ourClassesPage.getFirstExpertLink,
            ourClassesPage.getSecondExpertLink,
            ourClassesPage.getThirdExpertLink,
            ourClassesPage.getFourthExpertLink,
            ourClassesPage.getFifthExpertLink,
            ourClassesPage.getStartMembershipButton,
            ourClassesPage.getLearnMoreButton,
            ourClassesPage.getChooseLocationDropDown,
            ourClassesPage.getExploreStudiosButton,
          ];

          cy.assertNotVisible(notVisibleSelectors);

          const visibleSelectors = [
            //BODY
            ourClassesPage.getPVolveClassText,
            ourClassesPage.getClassTypesVideoContainer,
            ourClassesPage.getMidFreeTrialButton,
            ourClassesPage.getMovementTherapyCollage,
            ourClassesPage.getQuoteTextCarousel,
          ];
          cy.assertVisible(visibleSelectors);

          cy.responsiveShopifyFooter();
        },
      );
    }
  });
});
