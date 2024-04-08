import SeriesDetailsPage from "../../../../support/pageobjects/SeriesDetailsPage.js";

const seriesDetailsPage = new SeriesDetailsPage();
const sizes = [
  Cypress.env("screenSizes").mobile,
  Cypress.env("screenSizes").largePhone,
  Cypress.env("screenSizes").tablet,
];

describe("Series Details POM Selector Validation Test", function () {
  it("Validates all of the selectors in the Series Details POM", function () {
    seriesDetailsPage.visitSeriesMadnessChallengePage();
    cy.scrollTo("top");

    cy.appHeaderGuest();

    const visibleSelectors = [
      //Body - Equipment Used
      seriesDetailsPage.getBodyEquipmentUsedFirstProductLink,
      seriesDetailsPage.getBodyEquipmentUsedSecondProductLink,
      seriesDetailsPage.getBodyEquipmentUsedThirdProductLink,
      seriesDetailsPage.getBodyEquipmentUsedFourthProductLink,
      seriesDetailsPage.getBodyEquipmentUsedFifthProductLink,
      seriesDetailsPage.getBodyEquipmentUsedSixthProductLink,
      seriesDetailsPage.getBodyEquipmentUsedSeventhProductLink,
      seriesDetailsPage.getBodyEquipmentUsedEighthProductLink,

      //Body - Week 1
      seriesDetailsPage.getBodyWeekOneSection,
      seriesDetailsPage.getBodyWeekOneCarouselBackButton,
      seriesDetailsPage.getBodyWeekOneCarouselNextButton,
      seriesDetailsPage.getBodyWeekOneSeeAllButton,
      seriesDetailsPage.getBodyWeekOneFirstWorkoutCard,
      seriesDetailsPage.getBodyWeekOneFirstWorkoutVideoLink,
      seriesDetailsPage.getBodyWeekOneFirstWorkoutPageLink,
      seriesDetailsPage.getBodyWeekOneFirstWorkoutFavoriteButton,
      seriesDetailsPage.getBodyWeekOneSecondWorkoutCard,
      seriesDetailsPage.getBodyWeekOneSecondWorkoutVideoLink,
      seriesDetailsPage.getBodyWeekOneSecondWorkoutPageLink,
      seriesDetailsPage.getBodyWeekOneSecondWorkoutFavoriteButton,
      seriesDetailsPage.getBodyWeekOneThirdWorkoutCard,
      seriesDetailsPage.getBodyWeekOneThirdWorkoutVideoLink,
      seriesDetailsPage.getBodyWeekOneThirdWorkoutPageLink,
      seriesDetailsPage.getBodyWeekOneThirdWorkoutFavoriteButton,

      //Body - Week 2
      seriesDetailsPage.getBodyWeekTwoSection,
      seriesDetailsPage.getBodyWeekTwoCarouselBackButton,
      seriesDetailsPage.getBodyWeekTwoCarouselNextButton,
      seriesDetailsPage.getBodyWeekTwoSeeAllButton,
      seriesDetailsPage.getBodyWeekTwoFirstWorkoutCard,
      seriesDetailsPage.getBodyWeekTwoFirstWorkoutVideoLink,
      seriesDetailsPage.getBodyWeekTwoFirstWorkoutPageLink,
      seriesDetailsPage.getBodyWeekTwoFirstWorkoutFavoriteButton,
      seriesDetailsPage.getBodyWeekTwoSecondWorkoutCard,
      seriesDetailsPage.getBodyWeekTwoSecondWorkoutVideoLink,
      seriesDetailsPage.getBodyWeekTwoSecondWorkoutPageLink,
      seriesDetailsPage.getBodyWeekTwoSecondWorkoutFavoriteButton,
      seriesDetailsPage.getBodyWeekTwoThirdWorkoutCard,
      seriesDetailsPage.getBodyWeekTwoThirdWorkoutVideoLink,
      seriesDetailsPage.getBodyWeekTwoThirdWorkoutPageLink,
      seriesDetailsPage.getBodyWeekTwoThirdWorkoutFavoriteButton,

      //Body - Week 3
      seriesDetailsPage.getBodyWeekThreeSection,
      seriesDetailsPage.getBodyWeekThreeCarouselBackButton,
      seriesDetailsPage.getBodyWeekThreeCarouselNextButton,
      seriesDetailsPage.getBodyWeekThreeSeeAllButton,
      seriesDetailsPage.getBodyWeekThreeFirstWorkoutCard,
      seriesDetailsPage.getBodyWeekThreeFirstWorkoutVideoLink,
      seriesDetailsPage.getBodyWeekThreeFirstWorkoutPageLink,
      seriesDetailsPage.getBodyWeekThreeFirstWorkoutFavoriteButton,
      seriesDetailsPage.getBodyWeekThreeSecondWorkoutCard,
      seriesDetailsPage.getBodyWeekThreeSecondWorkoutVideoLink,
      seriesDetailsPage.getBodyWeekThreeSecondWorkoutPageLink,
      seriesDetailsPage.getBodyWeekThreeSecondWorkoutFavoriteButton,
      seriesDetailsPage.getBodyWeekThreeThirdWorkoutCard,
      seriesDetailsPage.getBodyWeekThreeThirdWorkoutVideoLink,
      seriesDetailsPage.getBodyWeekThreeThirdWorkoutPageLink,
      seriesDetailsPage.getBodyWeekThreeThirdWorkoutFavoriteButton,

      //Body - Trainers
      seriesDetailsPage.getBodyTrainerOneSection,
      seriesDetailsPage.getBodyTrainerOneNameText,
      seriesDetailsPage.getBodyTrainerOneSeeAllWorkoutsLink,
      seriesDetailsPage.getBodyTrainerTwoSection,
      seriesDetailsPage.getBodyTrainerTwoNameText,
      seriesDetailsPage.getBodyTrainerTwoSeeAllWorkoutsLink,
      seriesDetailsPage.getBodyTrainerThreeSection,
      seriesDetailsPage.getBodyTrainerThreeNameText,
      seriesDetailsPage.getBodyTrainerThreeSeeAllWorkoutsLink,
      seriesDetailsPage.getBodyTrainerFourSection,
      seriesDetailsPage.getBodyTrainerFourNameText,
      seriesDetailsPage.getBodyTrainerFourSeeAllWorkoutsLink,

      //Body - Start Free Trial
      seriesDetailsPage.getBodyStartFreeTrialCTAButton,
    ];
    cy.assertVisible(visibleSelectors);

    cy.scrollTo("bottom");
    seriesDetailsPage.getBodyTrainerOnePortraitImage().should("exist");
    seriesDetailsPage.getBodyTrainerTwoPortraitImage().should("exist");
    seriesDetailsPage.getBodyTrainerThreePortraitImage().should("exist");
    seriesDetailsPage.getBodyTrainerFourPortraitImage().should("exist");

    cy.appFooter();
  });

  sizes.forEach((size) => {
    it(
      "Responsive - Series Details Page Validation for " +
        size.width +
        ", " +
        size.height,
      function () {
        cy.viewport(size.width, size.height);

        seriesDetailsPage.visitSeriesMadnessChallengePage();
        cy.appHeaderGuest();

        const seriesDetailsVisibleSelectors = [
          //Body - Equipment Used
          seriesDetailsPage.getBodyEquipmentUsedFirstProductLink,
          seriesDetailsPage.getBodyEquipmentUsedSecondProductLink,
          seriesDetailsPage.getBodyEquipmentUsedThirdProductLink,
          seriesDetailsPage.getBodyEquipmentUsedFourthProductLink,
          seriesDetailsPage.getBodyEquipmentUsedFifthProductLink,
          seriesDetailsPage.getBodyEquipmentUsedSixthProductLink,
          seriesDetailsPage.getBodyEquipmentUsedSeventhProductLink,
          seriesDetailsPage.getBodyEquipmentUsedEighthProductLink,

          //Body - Week 1
          seriesDetailsPage.getBodyWeekOneSection,
          seriesDetailsPage.getBodyWeekOneCarouselBackButton,
          seriesDetailsPage.getBodyWeekOneCarouselNextButton,
          seriesDetailsPage.getBodyWeekOneSeeAllButton,
          seriesDetailsPage.getBodyWeekOneFirstWorkoutCard,
          seriesDetailsPage.getBodyWeekOneFirstWorkoutVideoLink,
          seriesDetailsPage.getBodyWeekOneFirstWorkoutPageLink,
          seriesDetailsPage.getBodyWeekOneFirstWorkoutFavoriteButton,

          //Body - Week 2
          seriesDetailsPage.getBodyWeekTwoSection,
          seriesDetailsPage.getBodyWeekTwoCarouselBackButton,
          seriesDetailsPage.getBodyWeekTwoCarouselNextButton,
          seriesDetailsPage.getBodyWeekTwoSeeAllButton,
          seriesDetailsPage.getBodyWeekTwoFirstWorkoutCard,
          seriesDetailsPage.getBodyWeekTwoFirstWorkoutVideoLink,
          seriesDetailsPage.getBodyWeekTwoFirstWorkoutPageLink,
          seriesDetailsPage.getBodyWeekTwoFirstWorkoutFavoriteButton,

          //Body - Week 3
          seriesDetailsPage.getBodyWeekThreeSection,
          seriesDetailsPage.getBodyWeekThreeCarouselBackButton,
          seriesDetailsPage.getBodyWeekThreeCarouselNextButton,
          seriesDetailsPage.getBodyWeekThreeSeeAllButton,
          seriesDetailsPage.getBodyWeekThreeFirstWorkoutCard,
          seriesDetailsPage.getBodyWeekThreeFirstWorkoutVideoLink,
          seriesDetailsPage.getBodyWeekThreeFirstWorkoutPageLink,
          seriesDetailsPage.getBodyWeekThreeFirstWorkoutFavoriteButton,

          //Body - Trainers
          seriesDetailsPage.getBodyTrainerOneSection,
          seriesDetailsPage.getBodyTrainerOneNameText,
          seriesDetailsPage.getBodyTrainerOneSeeAllWorkoutsLink,
          seriesDetailsPage.getBodyTrainerTwoSection,
          seriesDetailsPage.getBodyTrainerTwoNameText,
          seriesDetailsPage.getBodyTrainerTwoSeeAllWorkoutsLink,
          seriesDetailsPage.getBodyTrainerThreeSection,
          seriesDetailsPage.getBodyTrainerThreeNameText,
          seriesDetailsPage.getBodyTrainerThreeSeeAllWorkoutsLink,
          seriesDetailsPage.getBodyTrainerFourSection,
          seriesDetailsPage.getBodyTrainerFourNameText,
          seriesDetailsPage.getBodyTrainerFourSeeAllWorkoutsLink,

          //Body - Start Free Trial
          seriesDetailsPage.getBodyStartFreeTrialCTAButton,
        ];
        cy.assertVisible(seriesDetailsVisibleSelectors);

        const seriesDetailsExistsSelectors = [
          seriesDetailsPage.getBodyWeekOneSecondWorkoutVideoLink,
          seriesDetailsPage.getBodyWeekOneSecondWorkoutPageLink,
          seriesDetailsPage.getBodyWeekOneSecondWorkoutFavoriteButton,
          seriesDetailsPage.getBodyWeekOneThirdWorkoutVideoLink,
          seriesDetailsPage.getBodyWeekOneThirdWorkoutPageLink,
          seriesDetailsPage.getBodyWeekOneThirdWorkoutFavoriteButton,

          seriesDetailsPage.getBodyWeekTwoSecondWorkoutVideoLink,
          seriesDetailsPage.getBodyWeekTwoSecondWorkoutPageLink,
          seriesDetailsPage.getBodyWeekTwoSecondWorkoutFavoriteButton,
          seriesDetailsPage.getBodyWeekTwoThirdWorkoutVideoLink,
          seriesDetailsPage.getBodyWeekTwoThirdWorkoutPageLink,
          seriesDetailsPage.getBodyWeekTwoThirdWorkoutFavoriteButton,

          seriesDetailsPage.getBodyWeekThreeSecondWorkoutVideoLink,
          seriesDetailsPage.getBodyWeekThreeSecondWorkoutPageLink,
          seriesDetailsPage.getBodyWeekThreeSecondWorkoutFavoriteButton,
          seriesDetailsPage.getBodyWeekThreeThirdWorkoutVideoLink,
          seriesDetailsPage.getBodyWeekThreeThirdWorkoutPageLink,
          seriesDetailsPage.getBodyWeekThreeThirdWorkoutFavoriteButton,

          seriesDetailsPage.getBodyTrainerOnePortraitImage,
          seriesDetailsPage.getBodyTrainerTwoPortraitImage,
          seriesDetailsPage.getBodyTrainerThreePortraitImage,
          seriesDetailsPage.getBodyTrainerFourPortraitImage,
        ];
        cy.assertExist(seriesDetailsExistsSelectors);

        //Footer
        cy.responsiveAppFooter();
      },
    );
  });
});
