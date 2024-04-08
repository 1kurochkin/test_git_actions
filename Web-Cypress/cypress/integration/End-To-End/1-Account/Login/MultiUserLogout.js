import AccountPage from "../../../../support/pageobjects/AccountPage.js";
import AppHeader from "../../../../support/pageobjects/AppHeader.js";
import ShopifyHeader from "../../../../support/pageobjects/ShopifyHeader.js";

const appHeader = new AppHeader();
const shopifyHeader = new ShopifyHeader();
const accountPage = new AccountPage();

describe("Multi-User - Log out", function () {
  it("Subscribed User - Log out", function () {
    cy.loginSubscribedUser();

    cy.waitForAppPageLoad();

    appHeader.getDropDownLogoutButton().click({ force: true });
    cy.url().should("eq", Cypress.config().baseUrl + "/");
  });
  it("Unsubscribed User - Log out", function () {
    cy.loginUnsubscribedUser();
    cy.waitForShopifyPageLoad();

    shopifyHeader.getHeaderDropDownItemLogout().click({ force: true });
    cy.url().should("eq", Cypress.config().baseUrl + "/");
  });

  it("Subscribed User - Accounts Page Logout button", function () {
    cy.loginSubscribedUser();
    cy.waitForAppPageLoad();

    accountPage.visitAccountPage();
    accountPage.getBodySideNavLogoutLink().click();
    cy.url().should("eq", Cypress.config().baseUrl + "/");
  });

  it("Unsubscribed User - Accounts Page Logout button", function () {
    cy.loginUnsubscribedUser();
    cy.waitForShopifyPageLoad();

    accountPage.visitAccountPage();
    accountPage.getBodySideNavLogoutLink().click();
    cy.url().should("eq", Cypress.config().baseUrl + "/");
  });
});
