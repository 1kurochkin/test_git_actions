import BaseURLPage from "../../../support/pageobjects/BaseURLPage.js";
import ShopifyHeader from "../../../support/pageobjects/ShopifyHeader.js";

const baseURLPage = new BaseURLPage();
const shopifyHeader = new ShopifyHeader();

const intercept = {
  intercept() {
    /*
     * this function is used to spy on the intercept and keep track
     * of how many times each intercept has been called.
     */
  },
};

describe("Segment - Shopify CTA Clicked", function () {
  // Removing coverage due to charges for clicking the quiz banner
  /*it('Segment - FreeShipping Banner', function () {
        baseURLPage.visitPage();
        cy.waitForShopifyPageLoad();

        const spy = cy.spy(intercept, 'intercept').as('intercept');

        cy.intercept('POST', ' https://api.segment.io/v1/t', (req) => {
                intercept.intercept();
                req.alias = 'freeShippingBanner';
            }
        });
        baseURLPage.getPromoBanner().click({ force: true }).then(($spy) => {
            cy.wrap($spy, { timeout: 5000 }).should($spy => {
                expect(spy).to.have.callCount(1);
            });
        });
    });*/

  it("Segment - Header Free Trial CTA Shopify", function () {
    if (Cypress.env("APP_BASE_URL") === "https://app.qa.pvolve.com") {
      // KeepPass for ShopifyHeader issues ECOMM-1091-ECOMM-1095
    } else {
      baseURLPage.visitPage();
      cy.waitForShopifyPageLoad();

      const spy = cy.spy(intercept, "intercept").as("intercept");

      cy.intercept("POST", " https://api.segment.io/v1/t", (req) => {
        if (req.body.includes('"event":"CTA Clicked"')) {
          intercept.intercept();
          req.alias = "freeTrialHeader";
        }
      });
      shopifyHeader
        .getHeaderFreeTrialButton()
        .click({ force: true })
        .then(($spy) => {
          cy.wrap($spy, { timeout: 5000 }).should(() => {
            expect(spy).to.have.callCount(1);
          });
        });
    }
  });

  // KeepPass for QB-875
  /*
    it('Segment - Get Your Exclusive Offer CTA on Specialty Pain LP', function () {
        specialtyPainLP.visitPage();
        cy.waitForShopifyPageLoad();

        const spy = cy.spy(intercept, 'intercept').as('intercept');

        cy.intercept('POST', ' https://api.segment.io/v1/t', (req) => {
            if (req.body.includes('"event":"CTA Clicked"')) {
                intercept.intercept();
                req.alias = 'exclusiveOfferButton';
            }
        });
        specialtyPainLP.getViewExclusiveOfferButton().click({ force: true }).then(($spy) => {
            cy.wrap($spy, { timeout: 5000 }).should($spy => {
                expect(spy).to.have.callCount(1);
            });
        });
    });

    it('Segment - Get Started CTA on Specialty Pain LP', function () {
        specialtyPainLP.visitPage();
        cy.waitForShopifyPageLoad();

        const spy = cy.spy(intercept, 'intercept').as('intercept');

        cy.intercept('POST', ' https://api.segment.io/v1/t', (req) => {
            intercept.intercept();
            req.alias = 'getStartedButton';
        });

        specialtyPainLP.getGetStartedButton().click({ force: true }).then(($spy) => {
            cy.wrap($spy, { timeout: 5000 }).should($spy => {
                expect(spy).to.have.callCount(1);
            });
        });
    });

    it('Segment - Add to Cart CTA on Specialty Pain LP', function () {
        specialtyPainLP.visitPage();
        cy.waitForShopifyPageLoad();

        const spy = cy.spy(intercept, 'intercept').as('intercept');

        cy.intercept('POST', ' https://api.segment.io/v1/t', (req) => {
            if (req.body.includes('"event":"CTA Clicked"')) {
                intercept.intercept();
                req.alias = 'addToCartButton';
            }
        });
        specialtyPainLP.getAddToCartButton().click({ force: true }).then(($spy) => {
            cy.wrap($spy, { timeout: 5000 }).should($spy => {
                expect(spy).to.have.callCount(1);
            });
        });
    });

    it('Segment - Lets Get Started CTA on Specialty Pain LP', function () {
        specialtyPainLP.visitPage();
        cy.waitForShopifyPageLoad();

        const spy = cy.spy(intercept, 'intercept').as('intercept');

        cy.intercept('POST', ' https://api.segment.io/v1/t', (req) => {
            if (req.body.includes('"event":"CTA Clicked"')) {
                intercept.intercept();
                req.alias = 'letsGetStartedButton';
            }
        });
        specialtyPainLP.getLetsGetStartedButton().click({ force: true }).then(($spy) => {
            cy.wrap($spy, { timeout: 5000 }).should($spy => {
                expect(spy).to.have.callCount(1);
            });
        });
    });
    */
});
