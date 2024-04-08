const sizes = [
  Cypress.env("screenSizes").mobile,
  Cypress.env("screenSizes").largePhone,
  Cypress.env("screenSizes").tablet,
];
const exclude = ["appHeader.getShopButton"]; //Responsive only has DropDown Shop button

describe("App Header and Footer POM Selector Validation Test", function () {
  it("Validates all of the selectors in the App Header for a Guest", function () {
    cy.visit(Cypress.env("APP_BASE_URL") + "/classes");
    cy.wait(500);

    cy.appHeaderGuest();
  });

  it("Validates all of the selectors in the App Header for an Unsubscribed User", function () {
    cy.loginUnsubscribedUser();
    cy.waitForShopifyPageLoad();
    cy.visit(Cypress.env("APP_BASE_URL") + "/classes");
    cy.wait(1000);

    cy.appHeaderUnsubscribed();
  });

  it("Validates all of the selectors in the App Header for a Subscribed User", function () {
    cy.loginSubscribedUser();

    cy.waitForAppPageLoad();

    cy.appHeaderSubscribed();
  });

  it("Validates all of the selectors in the App Footer", function () {
    cy.visit(Cypress.env("APP_BASE_URL") + "/series");
    cy.wait(500);

    cy.appFooter();
  });

  sizes.forEach((size) => {
    it(
      "Responsive - App Header verification for " +
        size.width +
        ", " +
        size.height +
        " for a Guest",
      function () {
        cy.viewport(size.width, size.height);
        cy.visit(Cypress.env("APP_BASE_URL") + "/classes");

        cy.appHeaderGuest();
      },
    );

    it(
      "Responsive - App Header verification for " +
        size.width +
        ", " +
        size.height +
        " for an Unsubscribed User",
      function () {
        cy.viewport(size.width, size.height);
        cy.loginUnsubscribedUser();

        cy.waitForShopifyPageLoad();
        cy.visit(Cypress.env("APP_BASE_URL") + "/classes");
        cy.wait(1000);

        cy.appHeaderUnsubscribed(exclude);
      },
    );

    it(
      "Responsive - App Header verification for " +
        size.width +
        ", " +
        size.height +
        " for a Subscribed User",
      function () {
        cy.viewport(size.width, size.height);
        cy.loginSubscribedUser();

        cy.waitForAppPageLoad();

        cy.appHeaderSubscribed(exclude);
      },
    );

    it(
      "Responsive - App Footer verification for " +
        size.width +
        ", " +
        size.height,
      function () {
        cy.viewport(size.width, size.height);
        cy.visit(Cypress.env("APP_BASE_URL") + "/series");
        cy.wait(500);

        cy.responsiveAppFooter();
      },
    );
  });
});
