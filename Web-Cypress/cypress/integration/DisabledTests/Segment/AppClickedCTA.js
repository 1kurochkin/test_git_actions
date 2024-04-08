import AppFooter from "../../../support/pageobjects/AppFooter.js";
import CancelPage from "../../../support/pageobjects/CancelPage.js";
import SubscriptionPage from "../../../support/pageobjects/SubscriptionPage.js";
import SeriesPage from "../../../support/pageobjects/SeriesPage.js";

const seriesPage = new SeriesPage();
const appFooter = new AppFooter();
const cancelPage = new CancelPage();
const subscriptionPage = new SubscriptionPage();

const intercept = {
  intercept() {
    /*
     * this function is used to spy on the intercept and keep track
     * of how many times each intercept has been called.
     */
  },
};

describe("Segment - App CTA Clicked", function () {
  it("Segment - Sticky Free Trial CTA", function () {
    seriesPage.visitPage();

    cy.waitForAppPageLoad();

    const spy = cy.spy(intercept, "intercept").as("intercept");

    cy.intercept("POST", " https://api.segment.io/v1/t", (req) => {
      if (req.body.includes('"event":"CTA Clicked"')) {
        intercept.intercept();
        req.alias = "stickyCTA";
      }
    });
    appFooter
      .getStickyCTATryForFreeButton()
      .click({ force: true })
      .then(($spy) => {
        cy.wrap($spy, { timeout: 5000 }).should(() => {
          expect(spy).to.have.callCount(1);
        });
      });
  });

  it("Segment - Contact Customer Service on Cancel page", function () {
    cy.loginSubscribedUser();
    cy.wait(2000);
    cy.visit(Cypress.env("APP_BASE_URL") + "/account/subscription", {
      failOnStatusCode: false,
    });
    //Reactivate account if inactive
    cy.get('div[class*="bottom aligned two"] div[class*="right aligned"]')
      .eq(0)
      .then(($button) => {
        if ($button.text().includes("Reactivate")) {
          subscriptionPage.getReactivateSubscriptionButton().click();
        }
      });
    subscriptionPage.getBodyCancelSubscriptionButton().click();

    const spy = cy.spy(intercept, "intercept").as("intercept");

    cy.intercept("POST", " https://api.segment.io/v1/t", (req) => {
      if (req.body.includes('"event":"CTA Clicked"')) {
        intercept.intercept();
        req.alias = "contactButton";
      }
    });
    cancelPage
      .getContactButton()
      .click({ force: true })
      .then(($spy) => {
        cy.wrap($spy, { timeout: 5000 }).should(() => {
          expect(spy).to.have.callCount(1);
        });
      });
  });

  it("Segment - Schedule Free Trainer Session on Cancel page", function () {
    cy.loginSubscribedUser();
    cy.wait(2000);
    cy.visit(Cypress.env("APP_BASE_URL") + "/account/subscription", {
      failOnStatusCode: false,
    });
    //Reactivate account if inactive
    cy.get('div[class*="bottom aligned two"] div[class*="right aligned"]')
      .eq(0)
      .then(($button) => {
        if ($button.text().includes("Reactivate")) {
          subscriptionPage.getReactivateSubscriptionButton().click();
        }
      });
    subscriptionPage.getBodyCancelSubscriptionButton().click();

    const spy = cy.spy(intercept, "intercept").as("intercept");

    cy.intercept("POST", " https://api.segment.io/v1/t", (req) => {
      if (req.body.includes('"event":"CTA Clicked"')) {
        intercept.intercept();
        req.alias = "scheduleTrainerButton";
      }
    });
    cancelPage
      .getScheduleTrainerButton()
      .click({ force: true })
      .then(($spy) => {
        cy.wrap($spy, { timeout: 5000 }).should(() => {
          expect(spy).to.have.callCount(1);
        });
      });
  });

  it("Segment - No Thanks, cancel my subscription on Cancel page", function () {
    cy.loginSubscribedUser();
    cy.wait(2000);
    cy.visit(Cypress.env("APP_BASE_URL") + "/account/subscription", {
      failOnStatusCode: false,
    });
    //Reactivate account if inactive
    cy.get('div[class*="bottom aligned two"] div[class*="right aligned"]')
      .eq(0)
      .then(($button) => {
        if ($button.text().includes("Reactivate")) {
          subscriptionPage.getReactivateSubscriptionButton().click();
        }
      });
    subscriptionPage.getBodyCancelSubscriptionButton().click();

    const spy = cy.spy(intercept, "intercept").as("intercept");

    cy.intercept("POST", " https://api.segment.io/v1/t", (req) => {
      if (req.body.includes('"event":"CTA Clicked"')) {
        intercept.intercept();
        req.alias = "noThanksLink";
      }
    });
    cancelPage
      .getCancelSubscriptionLink()
      .click({ force: true })
      .then(($spy) => {
        cy.wrap($spy, { timeout: 5000 }).should(() => {
          expect(spy).to.have.callCount(1);
        });
      });
  });

  it("Segment - Nevermind! I want to keep working out on Cancel page", function () {
    cy.loginSubscribedUser();
    cy.wait(2000);
    cy.visit(Cypress.env("APP_BASE_URL") + "/account/subscription", {
      failOnStatusCode: false,
    });
    //Reactivate account if inactive
    cy.get('div[class*="bottom aligned two"] div[class*="right aligned"]')
      .eq(0)
      .then(($button) => {
        if ($button.text().includes("Reactivate")) {
          subscriptionPage.getReactivateSubscriptionButton().click();
        }
      });
    subscriptionPage.getBodyCancelSubscriptionButton().click();

    const spy = cy.spy(intercept, "intercept").as("intercept");

    cy.intercept("POST", " https://api.segment.io/v1/t", (req) => {
      if (req.body.includes('"event":"CTA Clicked"')) {
        if (req.body.includes('"cta_name":"cancellation-cancel"')) {
          intercept.intercept();
          req.alias = "noThanksLink";
        } else if (req.body.includes('"cta_name":"cancellation-nevermind"')) {
          intercept.intercept();
          req.alias = "nevermindLink";
        }
      }
    });
    cancelPage.getCancelSubscriptionLink().click();

    cancelPage
      .getNevermindLink()
      .click({ force: true })
      .then(($spy) => {
        cy.wrap($spy, { timeout: 5000 }).should(() => {
          expect(spy).to.have.callCount(2);
        });
      });
  });
});
