import ContinuePage from "../../../../support/pageobjects/ContinuePage.js";
import LoginPage from "../../../../support/pageobjects/LoginPage.js";
import BaseURLPage from "../../../../support/pageobjects/BaseURLPage.js";
import ShopifyHeader from "../../../../support/pageobjects/ShopifyHeader.js";

const baseURLPage = new BaseURLPage();
const continuePage = new ContinuePage();
const loginPage = new LoginPage();
const shopifyHeader = new ShopifyHeader();

describe("Unsubscribed User - Log In", function () {
  it("Unsubscribed User - Log In", function () {
    baseURLPage.visitPage();
    shopifyHeader.getHeaderLoginLink().click();

    continuePage.getEmailForm().type(Cypress.env("emailUnsubscribed"));
    continuePage.getSubmitButton().click();

    loginPage.getPasswordForm().type(Cypress.env("password"));
    loginPage.getSubmitButton().click();

    cy.url().should("eq", Cypress.config().baseUrl + "/");
  });
});
