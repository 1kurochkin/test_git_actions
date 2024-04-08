import SeriesPage from "../../../../support/pageobjects/SeriesPage.js";

const seriesPage = new SeriesPage();
const sizes = [
  Cypress.env("screenSizes").mobile,
  Cypress.env("screenSizes").largePhone,
  Cypress.env("screenSizes").tablet,
];

describe("Optum - Series page layout", function () {
  it("Validates the selectors for an Optum user on the Series page", function () {
    if (
      Cypress.env("APP_BASE_URL") === "https://app.qa.pvolve.com" ||
      Cypress.env("APP_BASE_URL") === "https://app.qa2.pvolve.com" ||
      Cypress.env("APP_BASE_URL") === "https://app.dev.pvolve.com"
    ) {
      cy.loginSubscribedOptumUser();
      cy.waitForAppPageLoad();

      seriesPage.visitPage();
      cy.waitForAppPageLoad();

      seriesPage.getOptumForYouTitleText().should("be.visible");

      seriesPage.getBodyEachCategory().eq(1).should("not.exist");

      seriesPage.getBodyFirstCategoryFirstSeriesLink().should("be.visible");
    } else {
      cy.log("Cannot test in this environment");
    }
  });

  sizes.forEach((size) => {
    it(
      "Responsive - Optum Series Page Validation for  " +
        size.width +
        ", " +
        size.height,
      function () {
        if (
          Cypress.env("APP_BASE_URL") === "https://app.qa.pvolve.com" ||
          Cypress.env("APP_BASE_URL") === "https://app.qa2.pvolve.com" ||
          Cypress.env("APP_BASE_URL") === "https://app.dev.pvolve.com"
        ) {
          cy.viewport(size.width, size.height);
          cy.loginSubscribedOptumUser();
          cy.waitForAppPageLoad();

          seriesPage.visitPage();
          cy.waitForAppPageLoad();

          seriesPage.getOptumForYouTitleText().should("be.visible");

          seriesPage.getBodyEachCategory().eq(1).should("not.exist");

          seriesPage.getBodyFirstCategoryFirstSeriesLink().should("be.visible");
        } else {
          cy.log("Cannot test in this environment");
        }
      },
    );
  });
});
