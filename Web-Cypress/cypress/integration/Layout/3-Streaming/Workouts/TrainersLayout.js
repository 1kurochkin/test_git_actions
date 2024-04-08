import TrainersPage from "../../../../support/pageobjects/TrainersPage.js";

const trainersPage = new TrainersPage();
const sizes = [
  Cypress.env("screenSizes").mobile,
  Cypress.env("screenSizes").largePhone,
  Cypress.env("screenSizes").tablet,
];

describe("Trainers POM Selector Validation Test", function () {
  it("Validates all of the selectors in the Trainers POM", function () {
    trainersPage.visitTrainerMaeveMcewenPage();

    cy.appHeaderGuest();

    const visibleSelectors = [
      //Body - Trainer
      trainersPage.getBodyTrainerNameText,
      trainersPage.getBodyTrainerBioText,
      trainersPage.getBodyTrainerImage,

      //Body - Workout Cards
      trainersPage.getBodyFirstCardPageLink,
      trainersPage.getBodyFirstCardFavoriteButton,
      trainersPage.getBodySecondCardPageLink,
      trainersPage.getBodySecondCardFavoriteButton,
      trainersPage.getBodyThirdCardPageLink,
      trainersPage.getBodyThirdCardFavoriteButton,
      trainersPage.getBodyFourthCardPageLink,
      trainersPage.getBodyFourthCardFavoriteButton,
    ];
    cy.assertVisible(visibleSelectors);

    const nonVisibleSelectors = [
      trainersPage.getBodyFirstCardVideoLink,
      trainersPage.getBodySecondCardVideoLink,
      trainersPage.getBodyThirdCardVideoLink,
      trainersPage.getBodyFourthCardVideoLink,
    ];
    cy.assertNotVisible(nonVisibleSelectors);

    cy.appFooter();
  });

  sizes.forEach((size) => {
    it(
      "Responsive - Trainers Page Validation for " +
        size.width +
        ", " +
        size.height,
      function () {
        cy.viewport(size.width, size.height);

        trainersPage.visitTrainerMaeveMcewenPage();

        cy.waitForAppPageLoad();

        cy.appHeaderGuest();

        const trainerVisibleSelectors = [
          //Body - Trainer
          trainersPage.getResponsiveTrainerNameText,
          trainersPage.getResponsiveTrainerBioText,
          trainersPage.getBodyTrainerImage,

          //Body - Workout Cards
          trainersPage.getBodyFirstCardPageLink,
          trainersPage.getBodyFirstCardFavoriteButton,
          trainersPage.getBodySecondCardPageLink,
          trainersPage.getBodySecondCardFavoriteButton,
          trainersPage.getBodyThirdCardPageLink,
          trainersPage.getBodyThirdCardFavoriteButton,
          trainersPage.getBodyFourthCardPageLink,
          trainersPage.getBodyFourthCardFavoriteButton,
        ];
        cy.assertVisible(trainerVisibleSelectors);

        const trainerNonVisibleSelectors = [
          trainersPage.getBodyFirstCardVideoLink,
          trainersPage.getBodySecondCardVideoLink,
          trainersPage.getBodyThirdCardVideoLink,
          trainersPage.getBodyFourthCardVideoLink,
        ];
        cy.assertNotVisible(trainerNonVisibleSelectors);

        //Footer
        cy.responsiveAppFooter();
      },
    );
  });
});
