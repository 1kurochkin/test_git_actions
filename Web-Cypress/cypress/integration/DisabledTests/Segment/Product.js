import CollectionsPage from "../../../support/pageobjects/CollectionsPage.js";
import ProductsPage from "../../../support/pageobjects/ProductsPage.js";

const collectionsPage = new CollectionsPage();
const productsPage = new ProductsPage();

const intercept = {
  intercept() {
    /*
     * this function is used to spy on the intercept and keep track
     * of how many times each intercept has been called.
     */
  },
};

describe("Segment - Product", function () {
  it("Segment - Product List Viewed", function () {
    collectionsPage.visitPage();

    cy.intercept("POST", " https://api.segment.io/v1/t", (req) => {
      if (req.body.includes('"event":"Product List Viewed"')) {
        req.alias = "productListViewed";
      }
    });
    cy.wait("@productListViewed");
  });

  it("Segment - Product Clicked", function () {
    collectionsPage.visitPage();
    cy.wait(5000);

    const spy = cy.spy(intercept, "intercept").as("intercept");

    cy.intercept("POST", " https://api.segment.io/v1/t", (req) => {
      if (req.body.includes('"event":"Product Clicked"')) {
        intercept.intercept();
        req.alias = "productClicked";
      }
    });
    collectionsPage
      .getBodyProductOne()
      .click()
      .then(($spy) => {
        cy.wrap($spy, { timeout: 5000 }).should(() => {
          expect(spy).to.have.callCount(1);
        });
      });
  });

  it("Segment - Product Viewed", function () {
    const spy = cy.spy(intercept, "intercept").as("intercept");

    cy.intercept("POST", " https://api.segment.io/v1/t", (req) => {
      if (req.body.includes('"event":"Product Viewed"')) {
        intercept.intercept();
        req.alias = "productViewed";
      }
    });
    productsPage.visitPBallPage().then(($spy) => {
      cy.wrap($spy, { timeout: 15000 }).should(() => {
        expect(spy).to.have.callCount(1);
      });
    });
  });
});
