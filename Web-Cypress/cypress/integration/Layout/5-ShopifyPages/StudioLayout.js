import StudioPage from "../../../support/pageobjects/StudioPage.js";

const studioPage = new StudioPage();
const mobileSizes = [
  Cypress.env("screenSizes").mobile,
  Cypress.env("screenSizes").largePhone,
  Cypress.env("screenSizes").tablet,
];

describe("Studio Layout POM Selector Validation Test", function () {
  it("Validates all of the selectors in the Studio Page POM", function () {
    studioPage.visitPage();

    cy.shopifyHeaderGuest();

    const visibleSelectors = [
      studioPage.getSeeFullScheduleButton,
      studioPage.getIntroOfferTab,
      studioPage.getMembershipsTab,
      studioPage.getPackagesTab,
      studioPage.getPersonalTrainingTab,
      studioPage.getTheFoundationColumn,
      studioPage.getTheFoundationSeeClassesButton,
      studioPage.getStrengthAndSculptColumn,
      studioPage.getStrengthAndSculptSeeClassesButton,
      studioPage.getCardioBurnColumn,
      studioPage.getCardioBurnSeeClassesButton,
      studioPage.getRecoverAndStretchColumn,
      studioPage.getRecoverAndStretchSeeClassesButton,
      studioPage.getPrivateTrainingInPersonLearnMoreButton,
      studioPage.getPrivateTrainingVirtualLearnMoreButton,
      studioPage.getStudioNameText,
      studioPage.getEmailToBookButton,
    ];
    cy.assertVisible(visibleSelectors);

    // Intro Offer Tab checks
    studioPage.getIntroOfferTabText();
    studioPage.getIntroOfferTab().click({ force: true });
    studioPage.getIntroOfferTabBuyNowButton().should("be.visible");

    // Membership Tab checks
    studioPage.getMembershipsTabText();
    studioPage.getMembershipsTab().click({ force: true });
    studioPage.getMembershipsTabMiniBurnBuyButton().should("be.visible");
    studioPage.getMembershipsTabUnlimitedBurnBuyButton().should("be.visible");

    // Packages Tab checks
    studioPage.getPackagesTabText();
    studioPage.getPackagesTab().click({ force: true });
    studioPage.getPackagesTabDropInBuyButton().should("be.visible");
    studioPage.getPackagesTab5ClassPackBuyButton().should("be.visible");

    // Class Format checks
    studioPage.getTheFoundationColumnHeadingText();
    studioPage.getStrengthAndSculptColumnHeadingText();
    studioPage.getCardioBurnColumnHeadingText();
    studioPage.getRecoverAndStretchColumnHeadingText();

    // Personal Training Tab checks
    studioPage.getPersonalTrainingTabText();

    // Studio Trainers
    studioPage.getFirstTrainerCard().should("exist");

    cy.shopifyFooter();
  });

  mobileSizes.forEach((size) => {
    if (size == Cypress.env("screenSizes").tablet) {
      it(
        "Responsive - Studio Layout for  " + size.width + ", " + size.height,
        function () {
          cy.viewport(size.width, size.height);
          studioPage.visitPage();

          cy.responsiveShopifyHeaderGuest();

          const visibleSelectors = [
            studioPage.getSeeFullScheduleButton,
            studioPage.getIntroOfferTab,
            studioPage.getMembershipsTab,
            studioPage.getPackagesTab,
            studioPage.getPersonalTrainingTab,
            studioPage.getTheFoundationColumn,
            studioPage.getTheFoundationSeeClassesButton,
            studioPage.getStrengthAndSculptColumn,
            studioPage.getStrengthAndSculptSeeClassesButton,
            studioPage.getCardioBurnColumn,
            studioPage.getCardioBurnSeeClassesButton,
            studioPage.getRecoverAndStretchColumn,
            studioPage.getRecoverAndStretchSeeClassesButton,
            studioPage.getPrivateTrainingInPersonLearnMoreButton,
            studioPage.getPrivateTrainingVirtualLearnMoreButton,
            studioPage.getStudioNameText,
            studioPage.getEmailToBookButton,
          ];
          cy.assertVisible(visibleSelectors);

          // Intro Offer Tab checks
          studioPage.getIntroOfferTabText();
          studioPage.getIntroOfferTab().click();
          studioPage.getIntroOfferTabBuyNowButton().should("be.visible");

          // Membership Tab checks
          studioPage.getMembershipsTabText();
          studioPage.getMembershipsTab().click();
          studioPage.getMembershipsTabMiniBurnBuyButton().should("be.visible");
          studioPage
            .getMembershipsTabUnlimitedBurnBuyButton()
            .should("be.visible");

          // Packages Tab checks
          studioPage.getPackagesTabText();
          studioPage.getPackagesTab().click();
          studioPage.getPackagesTabDropInBuyButton().should("be.visible");
          studioPage.getPackagesTab5ClassPackBuyButton().should("be.visible");

          // Class Format checks
          studioPage.getTheFoundationColumnHeadingText();
          studioPage.getStrengthAndSculptColumnHeadingText();
          studioPage.getCardioBurnColumnHeadingText();
          studioPage.getRecoverAndStretchColumnHeadingText();

          // Personal Training Tab checks
          studioPage.getPersonalTrainingTabText();

          // Studio Trainers
          studioPage.getFirstTrainerCard().should("exist");

          cy.responsiveShopifyFooter();
        },
      );
    } else {
      it(
        "Responsive - Studio Layout for  " + size.width + ", " + size.height,
        function () {
          cy.viewport(size.width, size.height);
          studioPage.visitPage();

          cy.responsiveShopifyHeaderGuest();

          const visibleSelectors = [
            studioPage.getSeeFullScheduleButton,
            studioPage.getIntroOfferTab,
            studioPage.getMembershipsTab,
            studioPage.getPackagesTab,
            studioPage.getPersonalTrainingTab,
            studioPage.getSeeFullScheduleButton,
            studioPage.getResponsiveTheFoundationColumn,
            studioPage.getResponsiveTheFoundationSeeClassesButton,
            studioPage.getResponsiveStrengthAndSculptColumn,
            studioPage.getResponsiveStrengthAndSculptSeeClassesButton,
            studioPage.getResponsiveCardioBurnColumn,
            studioPage.getResponsiveCardioBurnSeeClassesButton,
            studioPage.getResponsiveRecoverAndStretchColumn,
            studioPage.getResponsiveRecoverAndStretchSeeClassesButton,
            studioPage.getPrivateTrainingInPersonLearnMoreButton,
            studioPage.getPrivateTrainingVirtualLearnMoreButton,
            studioPage.getStudioNameText,
            studioPage.getEmailToBookButton,
          ];
          cy.assertVisible(visibleSelectors);

          // Intro Offer Tab checks
          studioPage.getIntroOfferTabText();
          studioPage.getIntroOfferTab().click();
          studioPage.getIntroOfferTabBuyNowButton().should("be.visible");

          // Membership Tab checks
          studioPage.getMembershipsTabText();
          studioPage.getMembershipsTab().click();
          studioPage.getMembershipsTabMiniBurnBuyButton().should("be.visible");
          studioPage
            .getMembershipsTabUnlimitedBurnBuyButton()
            .should("be.visible");

          // Packages Tab checks
          studioPage.getPackagesTabText();
          studioPage.getPackagesTab().click();
          studioPage.getPackagesTabDropInBuyButton().should("be.visible");
          studioPage.getPackagesTab5ClassPackBuyButton().should("be.visible");

          // Class Formats
          studioPage.getResponsiveTheFoundationColumnHeadingText();
          studioPage.getResponsiveStrengthAndSculptColumnHeadingText();
          studioPage.getResponsiveCardioBurnColumnHeadingText();
          studioPage.getResponsiveRecoverAndStretchColumnHeadingText();

          // Personal Training Tab checks
          studioPage.getPersonalTrainingTabText();

          // Personal Trainers Cards
          studioPage.getFirstTrainerCard().should("exist");

          cy.responsiveShopifyFooter();
        },
      );
    }
  });
});
