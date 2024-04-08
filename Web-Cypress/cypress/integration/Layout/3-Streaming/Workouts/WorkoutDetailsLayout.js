import WorkoutDetailsPage from "../../../../support/pageobjects/WorkoutDetailsPage.js";
import SeriesDetailsPage from "../../../../support/pageobjects/SeriesDetailsPage.js";

const seriesDetailsPage = new SeriesDetailsPage();
const workoutDetailsPage = new WorkoutDetailsPage();
const sizes = [
  Cypress.env("screenSizes").mobile,
  Cypress.env("screenSizes").largePhone,
  Cypress.env("screenSizes").tablet,
];

describe("Workout Details POM Selector Validation Test", function () {
  it("Validates all of the selectors in the Workout Details POM", function () {
    seriesDetailsPage.visitSeriesDetailsPage("30-day-evolution2");
    seriesDetailsPage.getBodyWeekOneFirstWorkoutCard().click();
    cy.waitForAppPageLoad();

    cy.scrollTo("top");
    workoutDetailsPage
      .getBodyWorkoutTitleText()
      .contains("50 Min Full Body Foundation");
    workoutDetailsPage.getBodyWorkoutLevelText().contains("beginner");
    workoutDetailsPage.getBodyTimesCompletedDetailsCard().contains("0");
    cy.scrollTo("top");

    cy.appHeaderGuest();

    const visibleSelectors = [
      //Body
      workoutDetailsPage.getPreviewVideo,
      workoutDetailsPage.getBodyPreviewButton,
      workoutDetailsPage.getBodyFocusDetailsCard,
      workoutDetailsPage.getBodyTypeDetailsCard,
      workoutDetailsPage.getBodyBenefitsDetailsCard,

      //Body - Equipment Used
      workoutDetailsPage.getBodyEquipmentUsedFirstProductLink,
      workoutDetailsPage.getEquipmentUsedFirstProductImage,
      workoutDetailsPage.getBodyEquipmentUsedSecondProductLink,
      workoutDetailsPage.getEquipmentUsedSecondProductImage,

      //Body - Trainers
      workoutDetailsPage.getBodyTrainerOneSection,
      workoutDetailsPage.getBodyTrainerOneNameText,
      workoutDetailsPage.getTrainerOnePortraitImage,
      workoutDetailsPage.getTrainerOneBioSection,
      workoutDetailsPage.getBodyTrainerOneSeeAllWorkoutsLink,

      //Body - Start Free Trial
      workoutDetailsPage.getBodyStartFreeTrialCTAButton,
    ];
    cy.assertVisible(visibleSelectors);

    workoutDetailsPage
      .getFromSeriesLink("30-day-evolution2")
      .should("be.visible");

    cy.appFooter();
  });

  sizes.forEach((size) => {
    it(
      "Responsive - Workout Details Page Validation for " +
        size.width +
        ", " +
        size.height,
      function () {
        cy.viewport(size.width, size.height);

        seriesDetailsPage.visitSeriesDetailsPage("30-day-evolution2");
        seriesDetailsPage.getBodyWeekOneFirstWorkoutCard().click();
        cy.waitForAppPageLoad();

        cy.scrollTo("top");
        workoutDetailsPage
          .getBodyWorkoutTitleText()
          .contains("50 Min Full Body Foundation");
        workoutDetailsPage.getBodyWorkoutLevelText().contains("beginner");
        workoutDetailsPage.getBodyTimesCompletedDetailsCard().contains("0");
        cy.scrollTo("top");

        cy.appHeaderGuest();

        const workoutDetailsVisibleSelectors = [
          //Body
          workoutDetailsPage.getPreviewVideo,
          workoutDetailsPage.getBodyPreviewButton,
          workoutDetailsPage.getBodyFocusDetailsCard,
          workoutDetailsPage.getBodyTypeDetailsCard,
          workoutDetailsPage.getBodyBenefitsDetailsCard,

          //Body - Equipment Used
          workoutDetailsPage.getBodyEquipmentUsedFirstProductLink,
          workoutDetailsPage.getEquipmentUsedFirstProductImage,

          //Body - Trainers
          workoutDetailsPage.getBodyTrainerOneSection,
          workoutDetailsPage.getBodyTrainerOneNameText,
          workoutDetailsPage.getTrainerOnePortraitImage,
          workoutDetailsPage.getTrainerOneBioSection,
          workoutDetailsPage.getBodyTrainerOneSeeAllWorkoutsLink,

          //Body - Start Free Trial
          workoutDetailsPage.getBodyStartFreeTrialCTAButton,
        ];
        cy.assertVisible(workoutDetailsVisibleSelectors);

        workoutDetailsPage
          .getTrainerOneBioSection()
          .scrollIntoView()
          .should("be.visible");
        //Footer
        cy.responsiveAppFooter();
      },
    );
  });
});
