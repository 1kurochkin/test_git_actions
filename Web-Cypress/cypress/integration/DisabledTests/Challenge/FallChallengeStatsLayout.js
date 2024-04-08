import FallChallengeStatsPage from "../../../../support/pageobjects/FallChallengeStatsPage.js";

const fallChallengeStatsPage = new FallChallengeStatsPage();
const sizes = [
  Cypress.env("screenSizes").mobile,
  Cypress.env("screenSizes").largePhone,
  Cypress.env("screenSizes").tablet,
];
const arrayOfLinks = [
  "https://app.pvolve.com/workouts/30-min-lower-body-strength-PBB0622-S1",
  "https://app.pvolve.com/workouts/30-min-mat-core-and-inner-thigh-sculpt-PBB0622-S2",
  "https://app.pvolve.com/workouts/23-min-standing-upper-body-strength-PBB0622-S3",
  "https://app.pvolve.com/workouts/30-min-lower-body-strength-PBB0622-S4/video",
  "https://app.pvolve.com/workouts/33-min-mat-core-and-pelvic-floor-strength-PBB0622-S5",
  "https://app.pvolve.com/workouts/40-min-full-body-standing-sculpt-and-stretch-PBB0622-S6",
  "https://app.pvolve.com/workouts/35-min-full-body-strength-PBB0622-S7",
  "https://app.pvolve.com/workouts/42-min-full-body-sculpt-PBB0622-S8",
  "https://app.pvolve.com/classes/video/20-min-standing-lower-body-sculpt-OFF0622-S45",
  "https://app.pvolve.com/classes/video/25-min-standing-full-body-burn-OFF0622-S41",
  "https://app.pvolve.com/classes/video/25-min-full-body-mat-definition-OFF0622-S4",
  "https://app.pvolve.com/classes/video/25-min-upper-body-progressive-weight-training-OFF0622-S28",
];

describe("Fall Challenge Stats Page POM Selector Validation Test", function () {
  it("Validates all of the selectors in the Fall Challenge Stats POM", function () {
    cy.loginSubscribedUserPhaseFunction();
    cy.waitForAppPageLoad();

    fallChallengeStatsPage.visitPage();

    const visibleSelectors = [
      fallChallengeStatsPage.getWelcomeHeader,
      fallChallengeStatsPage.getWelcomeSubHeader,
      fallChallengeStatsPage.getChallengeWorkoutsHeader,
      fallChallengeStatsPage.getChallengeWorkoutsParagraph,
    ];
    cy.assertVisible(visibleSelectors);

    fallChallengeStatsPage.getWeekHeader(0).should("have.text", "week one");
    fallChallengeStatsPage.getWeekHeader(1).should("have.text", "week two");
    fallChallengeStatsPage.getWeekHeader(2).should("have.text", "week three");
    fallChallengeStatsPage.getWeekHeader(3).should("have.text", "week four");

    fallChallengeStatsPage.getFirstWorkoutForWeek(0).then(($el) => {
      expect($el.find("a").attr("href")).to.include(arrayOfLinks[0]);
    });
    fallChallengeStatsPage.getSecondWorkoutForWeek(0).then(($el) => {
      expect($el.find("a").attr("href")).to.include(arrayOfLinks[1]);
    });
    fallChallengeStatsPage.getThirdWorkoutForWeek(0).then(($el) => {
      expect($el.find("a").attr("href")).to.include(arrayOfLinks[2]);
    });
    fallChallengeStatsPage.getFirstWorkoutForWeek(1).then(($el) => {
      expect($el.find("a").attr("href")).to.include(arrayOfLinks[3]);
    });
    fallChallengeStatsPage.getSecondWorkoutForWeek(1).then(($el) => {
      expect($el.find("a").attr("href")).to.include(arrayOfLinks[4]);
    });
    fallChallengeStatsPage.getThirdWorkoutForWeek(1).then(($el) => {
      expect($el.find("a").attr("href")).to.include(arrayOfLinks[5]);
    });
    fallChallengeStatsPage.getFirstWorkoutForWeek(2).then(($el) => {
      expect($el.find("a").attr("href")).to.include(arrayOfLinks[6]);
    });
    fallChallengeStatsPage.getSecondWorkoutForWeek(2).then(($el) => {
      expect($el.find("a").attr("href")).to.include(arrayOfLinks[7]);
    });
    fallChallengeStatsPage.getThirdWorkoutForWeek(2).then(($el) => {
      expect($el.find("a").attr("href")).to.include(arrayOfLinks[8]);
    });
    fallChallengeStatsPage.getFirstWorkoutForWeek(3).then(($el) => {
      expect($el.find("a").attr("href")).to.include(arrayOfLinks[9]);
    });
    fallChallengeStatsPage.getSecondWorkoutForWeek(3).then(($el) => {
      expect($el.find("a").attr("href")).to.include(arrayOfLinks[10]);
    });
    fallChallengeStatsPage.getThirdWorkoutForWeek(3).then(($el) => {
      expect($el.find("a").attr("href")).to.include(arrayOfLinks[11]);
    });
  });

  sizes.forEach((size) => {
    it(
      "Responsive - Fall Challenge Stats Page POM Validation for " +
        size.width +
        ", " +
        size.height,
      function () {
        cy.viewport(size.width, size.height);

        cy.loginSubscribedUserPhaseFunction();
        cy.waitForAppPageLoad();

        fallChallengeStatsPage.visitPage();

        // Different selectors needed for responsive
        // const visibleSelectors = [
        //     fallChallengeStatsPage.getWelcomeHeader,
        //     fallChallengeStatsPage.getWelcomeSubHeader,
        //     fallChallengeStatsPage.getChallengeWorkoutsHeader,
        //     fallChallengeStatsPage.getChallengeWorkoutsParagraph
        // ];
        // cy.assertVisible(visibleSelectors);

        // fallChallengeStatsPage.getWeekHeader(0).should('have.text', 'week one');
        // fallChallengeStatsPage.getWeekHeader(1).should('have.text', 'week two');
        // fallChallengeStatsPage.getWeekHeader(2).should('have.text', 'week three');
        // fallChallengeStatsPage.getWeekHeader(3).should('have.text', 'week four');

        fallChallengeStatsPage.getFirstWorkoutForWeek(0).then(($el) => {
          expect($el.find("a").attr("href")).to.include(arrayOfLinks[0]);
        });
        fallChallengeStatsPage.getSecondWorkoutForWeek(0).then(($el) => {
          expect($el.find("a").attr("href")).to.include(arrayOfLinks[1]);
        });
        fallChallengeStatsPage.getThirdWorkoutForWeek(0).then(($el) => {
          expect($el.find("a").attr("href")).to.include(arrayOfLinks[2]);
        });
        fallChallengeStatsPage.getFirstWorkoutForWeek(1).then(($el) => {
          expect($el.find("a").attr("href")).to.include(arrayOfLinks[3]);
        });
        fallChallengeStatsPage.getSecondWorkoutForWeek(1).then(($el) => {
          expect($el.find("a").attr("href")).to.include(arrayOfLinks[4]);
        });
        fallChallengeStatsPage.getThirdWorkoutForWeek(1).then(($el) => {
          expect($el.find("a").attr("href")).to.include(arrayOfLinks[5]);
        });
        fallChallengeStatsPage.getFirstWorkoutForWeek(2).then(($el) => {
          expect($el.find("a").attr("href")).to.include(arrayOfLinks[6]);
        });
        fallChallengeStatsPage.getSecondWorkoutForWeek(2).then(($el) => {
          expect($el.find("a").attr("href")).to.include(arrayOfLinks[7]);
        });
        fallChallengeStatsPage.getThirdWorkoutForWeek(2).then(($el) => {
          expect($el.find("a").attr("href")).to.include(arrayOfLinks[8]);
        });
        fallChallengeStatsPage.getFirstWorkoutForWeek(3).then(($el) => {
          expect($el.find("a").attr("href")).to.include(arrayOfLinks[9]);
        });
        fallChallengeStatsPage.getSecondWorkoutForWeek(3).then(($el) => {
          expect($el.find("a").attr("href")).to.include(arrayOfLinks[10]);
        });
        fallChallengeStatsPage.getThirdWorkoutForWeek(3).then(($el) => {
          expect($el.find("a").attr("href")).to.include(arrayOfLinks[11]);
        });
      },
    );
  });
});
