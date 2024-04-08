import AppHeader from "../../../support/pageobjects/AppHeader.js";
import BaseURLPage from "../../../support/pageobjects/BaseURLPage.js";
import CollectionsPage from "../../../support/pageobjects/CollectionsPage.js";
import ShopifyHeader from "../../../support/pageobjects/ShopifyHeader.js";
import WorkoutsPage from "../../../support/pageobjects/WorkoutsPage.js";

const baseURLPage = new BaseURLPage();
const workoutsPage = new WorkoutsPage();
const collectionsPage = new CollectionsPage();
const appHeader = new AppHeader();
const shopifyHeader = new ShopifyHeader();

let exclude = null;

if (Cypress.env("APP_BASE_URL") === "https://app.pvolve.com") {
  exclude = [
    "shopifyHeader.getHeaderStudioSubNavAboutButton",
    "appHeader.getShopButton",
  ];
} else {
  // KeepPass for ECOMM-1091 - ECOMM-1095
  exclude = [
    "shopifyHeader.getHeaderStudioSubNavAboutButton",
    "shopifyHeader.getHeaderBlogSubNavAllButton",
    "shopifyHeader.getHeaderBlogSubNavFitnessButton",
    "shopifyHeader.getHeaderBlogSubNavLifestyleButton",
    "shopifyHeader.getHeaderBlogSubNavNutritionButton",
    "shopifyHeader.getHeaderBlogSubNavTestimonialsButton",
    "shopifyHeader.getHeaderBlogSubNavTravelButton",
    "shopifyHeader.getHeaderBlogSubNavWomensWellnessButton",
    "shopifyHeader.getHeaderFreeTrialButton",
    "shopifyHeader.getHeaderStreamingSubNavMyPlanButton",
  ];
}

describe("Multi-User - Hover on Headers", function () {
  it("Guest - Hover on Base URL Headers", function () {
    baseURLPage.visitPage();
    cy.waitForShopifyPageLoad();

    cy.shopifyHeaderGuest(exclude);
  });

  it("Subscribed User - Hover on Shopify Headers", function () {
    cy.loginSubscribedUser();
    cy.waitForAppPageLoad();

    collectionsPage.visitPage();
    cy.waitForShopifyPageLoad();

    cy.shopifyHeaderSubscribed(exclude);
  });

  it("Unsubscribed User - Hover on Shopify Headers", function () {
    cy.loginUnsubscribedUser();
    cy.waitForShopifyPageLoad();

    collectionsPage.visitPage();
    cy.waitForShopifyPageLoad();

    cy.shopifyHeaderUnsubscribed(exclude);
  });

  it("Guest - Hover on App Headers", function () {
    workoutsPage.visitPage();
    cy.scrollTo("top");

    cy.appHeaderGuest(exclude);
  });

  it("Subscribed User - Hover on My Plan Headers", function () {
    cy.loginSubscribedUser();

    cy.scrollTo("top");
    cy.appHeaderSubscribed();
  });

  it("Unsubscribed User - Hover on Workouts Headers", function () {
    cy.loginUnsubscribedUser();
    cy.waitForShopifyPageLoad();

    workoutsPage.visitPage();
    cy.scrollTo("top");

    cy.appHeaderUnsubscribed(exclude);
  });

  it("Guest - Click on 3 Header Buttons", function () {
    workoutsPage.visitPage();
    cy.wait(500);
    cy.scrollTo("top");

    appHeader.getHomeButton().click();
    cy.url().should("contain", "/continue");

    collectionsPage.visitPage();
    shopifyHeader.getHeaderStreamingButton().trigger("mouseover");
    shopifyHeader
      .getHeaderStreamingSubNavWorkoutsButton()
      .click({ force: true });
    cy.url().should("contain", "/classes");

    cy.scrollTo("top");
    appHeader.getToggleDropDownButton().click();
    appHeader.getDropDownLoginButton().click({ force: true });
    cy.url().should("contain", "/continue");
  });
});
