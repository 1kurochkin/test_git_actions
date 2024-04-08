import AppFooter from "../../../../support/pageobjects/AppFooter.js";

const appFooter = new AppFooter();

describe("Guest - Sticky CTA Interaction", function () {
  it("Guest - Clicks Try for Free on the Sticky CTA", function () {
    cy.visit(Cypress.env("APP_BASE_URL") + "/series");
    appFooter.getStickyCTATryForFreeButton().click();
    cy.wait(2000);
    cy.url().should("include", "month_trial");
  });
  it("Guest - Clicks the close button on the Sticky CTA", function () {
    cy.visit(Cypress.env("APP_BASE_URL") + "/series");
    appFooter.getStickyCTACloseButton().click();
    appFooter.getStickyCTATryForFreeButton().should("not.exist");
  });
});
