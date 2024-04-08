import BaseURLPage from "../../../support/pageobjects/BaseURLPage.js";
import ProductsPage from "../../../support/pageobjects/ProductsPage.js";
import CollectionsPage from "../../../support/pageobjects/CollectionsPage.js";
import ContinuePage from "../../../support/pageobjects/ContinuePage.js";
import AccountPage from "../../../support/pageobjects/AccountPage.js";
import ShopifyHeader from "../../../support/pageobjects/ShopifyHeader.js";
import AppHeader from "../../../support/pageobjects/AppHeader.js";
import DigitalMembershipPage from "../../../support/pageobjects/DigitalMembershipPage";

const baseURLPage = new BaseURLPage();
const productsPage = new ProductsPage();
const collectionsPage = new CollectionsPage();
const continuePage = new ContinuePage();
const accountPage = new AccountPage();
const shopifyHeader = new ShopifyHeader();
const appHeader = new AppHeader();
const digitalMembershipPage = new DigitalMembershipPage();

describe("Multi-User - Logo navigation", function () {
  it("Base url page logo click should stay in same page", function () {
    baseURLPage.visitPage();
    shopifyHeader.getHeaderPvolveLogoButton().click();
    cy.url().should("eq", Cypress.config().baseUrl + "/");
  });

  it("Collections page logo should navigate to home page", function () {
    collectionsPage.visitPage();
    shopifyHeader.getHeaderPvolveLogoButton().click();
    cy.url().should("eq", Cypress.config().baseUrl + "/");
  });

  it("Individual product logo button should navigate to home page", function () {
    productsPage.visitPBallPage();
    shopifyHeader.getHeaderPvolveLogoButton().click();
    cy.url().should("eq", Cypress.config().baseUrl + "/");
  });

  it("Streaming access page logo should navigate to home page", function () {
    digitalMembershipPage.visitDigitalMembershipPage();
    shopifyHeader.getHeaderPvolveLogoButton().click();
    cy.url().should("eq", Cypress.config().baseUrl + "/");
  });

  it("Continue page logo should navigate to home page", function () {
    continuePage.visitPage();
    continuePage.getPvolveLogoButton().click();
    cy.url().should("eq", Cypress.config().baseUrl + "/");
  });

  it("My Plan page logo should navigate to my plan", function () {
    cy.loginSubscribedUser();

    cy.waitForAppPageLoad();
    appHeader.getPvolveLogoButton().click();
    cy.url().should("include", "/my-plan");
  });

  it("Account page logo should navigate to my plan", function () {
    cy.loginSubscribedUser();
    cy.waitForAppPageLoad();
    accountPage.visitAccountPage();

    cy.waitForAppPageLoad();
    appHeader.getPvolveLogoButton().click();
    cy.url().should("include", "/my-plan");
  });
});
