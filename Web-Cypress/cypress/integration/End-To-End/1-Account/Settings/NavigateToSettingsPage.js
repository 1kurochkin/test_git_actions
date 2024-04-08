import AccountPage from "../../../../support/pageobjects/AccountPage.js";
import AppHeader from "../../../../support/pageobjects/AppHeader.js";
import SettingsPage from "../../../../support/pageobjects/SettingsPage.js";
import SubscriptionPage from "../../../../support/pageobjects/SubscriptionPage.js";

const appHeader = new AppHeader();
const accountPage = new AccountPage();
const settingsPage = new SettingsPage();
const subscriptionPage = new SubscriptionPage();

describe("Subscribed User - Navigate to Account Pages", function () {
  it("Subscribed User - Navigate to Account Pages", function () {
    cy.loginSubscribedUser();

    appHeader.getToggleDropDownButton().click({ force: true });
    appHeader.getDropDownAccountButton().click({ force: true });
    cy.url().should("eq", Cypress.env("APP_BASE_URL") + "/account");

    accountPage.getBodySideNavSettingsLink().click();
    cy.url().should("eq", Cypress.env("APP_BASE_URL") + "/account/settings");

    settingsPage.getBodySideNavSubscriptionsLink().click();
    cy.url().should(
      "eq",
      Cypress.env("APP_BASE_URL") + "/account/subscription",
    );

    subscriptionPage.getBodySideNavCommunicationsLink().click();
    cy.url().should(
      "eq",
      Cypress.env("APP_BASE_URL") + "/account/communications",
    );
  });
});
