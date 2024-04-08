import ContinuePage from "../../../../support/pageobjects/ContinuePage.js";
import LoginPage from "../../../../support/pageobjects/LoginPage.js";

const continuePage = new ContinuePage();
const loginPage = new LoginPage();

describe("Subscribed User - Log In", function () {
  it("Subscribed User - Log In", function () {
    continuePage.visitPage();
    continuePage.getEmailForm().type(Cypress.env("rechargeEmail"));
    continuePage.getSubmitButton().click();
    cy.wait(5000);
    loginPage.getPasswordForm().type(Cypress.env("password"));
    loginPage.getSubmitButton().click();

    cy.url().should("eq", Cypress.env("APP_BASE_URL") + "/home");
  });
});
