import MyPlanPage from "../../../../support/pageobjects/MyPlanPage.js";

const myPlanPage = new MyPlanPage();
const sizes = [
  Cypress.env("screenSizes").mobile,
  Cypress.env("screenSizes").largePhone,
  Cypress.env("screenSizes").tablet,
];

describe("Subscribed User - Series Complete State Layout", function () {
  it("Verifies the My Plan page Series Complete state", function () {
    cy.loginSubscribedUserSeriesComplete();
    cy.waitForAppPageLoad(7500);

    const seriesCompleteVisibleSelectors = [
      myPlanPage.getSeriesCompleteBanner,
      myPlanPage.getSeriesCompleteMakeYourNextMoveText,
    ];
    cy.assertVisible(seriesCompleteVisibleSelectors);

    const seriesCompleteExistSelectors = [
      myPlanPage.getSeriesCompleteIcon,
      myPlanPage.getSeriesCompleteText,
      myPlanPage.getSeriesCompleteSeriesCarouselSection,
    ];
    cy.assertExist(seriesCompleteExistSelectors);
  });

  sizes.forEach((size) => {
    it(
      "Responsive - My Plan Page Series Complete State Validation for " +
        size.width +
        ", " +
        size.height,
      function () {
        cy.viewport(size.width, size.height);

        cy.loginSubscribedUserSeriesComplete();
        cy.waitForAppPageLoad(7500);

        const seriesCompleteVisibleSelectors = [
          myPlanPage.getSeriesCompleteBanner,
          myPlanPage.getSeriesCompleteMakeYourNextMoveText,
        ];
        cy.assertVisible(seriesCompleteVisibleSelectors);

        const seriesCompleteExistSelectors = [
          myPlanPage.getSeriesCompleteIcon,
          myPlanPage.getSeriesCompleteText,
          myPlanPage.getSeriesCompleteSeriesCarouselSection,
        ];
        cy.assertExist(seriesCompleteExistSelectors);
      },
    );
  });
});
