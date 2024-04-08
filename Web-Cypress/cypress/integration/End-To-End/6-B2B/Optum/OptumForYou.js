import SeriesPage from "../../../../support/pageobjects/SeriesPage.js";
import AccountPage from "../../../../support/pageobjects/AccountPage.js";

const accountPage = new AccountPage();
const seriesPage = new SeriesPage();

describe("Optum - Title text section Check and Membership missing", function () {
  it("Checks that the For You section are visible to an Optum User", function () {
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

      //Asserts Membership is not availabe for Optum user
      accountPage.visitAccountPage();
      accountPage.getBodySideNavSubscriptionsLink().should("not.exist");
    } else {
      cy.log("Cannot test in this environment");
    }
  });
});
