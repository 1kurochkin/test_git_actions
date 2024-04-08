import CustomCheckoutPage from "../../../../support/pageobjects/CustomCheckoutPage.js";

const customCheckoutPage = new CustomCheckoutPage();
let productPrice = "";
let discountPrice = "";

function toFloat(str) {
  var num = str.replace(/[^\d.]*/g, "");
  return parseFloat(num, 10);
}

describe("Guest - Promo Code Validation", function () {
  it("Guest - Promo Code Validation", function () {
    customCheckoutPage.visitSKUPage("TRANSKIT3MOGY");

    //Newcheckout1 - 30% off - No Restriction
    customCheckoutPage.getCartPromoCodeField().type("Newcheckout1");

    //Assign productPrice
    customCheckoutPage.getCartTotalText().then(function ($price) {
      productPrice = $price.text();
    });

    cy.intercept("POST", "/commerce/v2/purchase/update").as("getUpdate");
    customCheckoutPage.getCartApplyPromoCodeButton().click();
    cy.wait("@getUpdate");

    //Assign discountPrice and assert
    customCheckoutPage.getCartTotalText().then(function ($price) {
      discountPrice = $price.text();
      expect(toFloat(discountPrice)).to.be.within(
        toFloat(productPrice) * 0.7 - 2,
        toFloat(productPrice) * 0.7 + 2,
      );
    });

    //ordermin - $30 off - $100+
    cy.intercept("POST", "/commerce/v2/purchase/update").as("getUpdate");
    customCheckoutPage.getCartRemovePromoCodeButton().click();
    cy.wait("@getUpdate");
    customCheckoutPage.getCartPromoCodeField().clear();
    cy.wait(1000);

    customCheckoutPage.getCartPromoCodeField().type("ordermin");

    //Assign productPrice
    customCheckoutPage.getCartTotalText().then(function ($price) {
      productPrice = $price.text();
    });

    cy.intercept("POST", "/commerce/v2/purchase/update").as("getUpdate");
    customCheckoutPage.getCartApplyPromoCodeButton().click();
    cy.wait("@getUpdate");

    //Assign discountPrice and assert
    customCheckoutPage.getCartTotalText().then(function ($price) {
      discountPrice = $price.text();
      expect(toFloat(discountPrice)).to.be.within(
        toFloat(productPrice) - 30 - 2,
        toFloat(productPrice) - 30 + 2,
      );
    });

    //Newcheckout10 - $10 off - No Restrictions
    cy.intercept("POST", "/commerce/v2/purchase/update").as("getUpdate");
    customCheckoutPage.getCartRemovePromoCodeButton().click();
    cy.wait("@getUpdate");
    customCheckoutPage.getCartPromoCodeField().clear();
    cy.wait(1000);

    //Assign productPrice
    customCheckoutPage.getCartTotalText().then(function ($price) {
      productPrice = $price.text();
    });

    customCheckoutPage.getCartPromoCodeField().type("Newcheckout10");

    cy.intercept("POST", "/commerce/v2/purchase/update").as("getUpdate");
    customCheckoutPage.getCartApplyPromoCodeButton().click();
    cy.wait("@getUpdate");

    //Assign discountPrice and assert
    customCheckoutPage.getCartTotalText().then(function ($price) {
      discountPrice = $price.text();
      expect(toFloat(discountPrice)).to.be.within(
        toFloat(productPrice) - 10 - 2,
        toFloat(productPrice) - 10 + 2,
      );
    });

    cy.intercept("POST", "/commerce/v2/purchase/update").as("getUpdate");
    customCheckoutPage.getCartRemovePromoCodeButton().click();
    cy.wait("@getUpdate");
    customCheckoutPage.getCartPromoCodeField().clear();
    cy.wait(1000);

    //Assign productPrice
    customCheckoutPage.getCartTotalText().then(function ($price) {
      productPrice = $price.text();
    });

    customCheckoutPage.getCartPromoCodeField().type("newcheckout6months");

    cy.intercept("POST", "/commerce/v2/purchase/update").as("getUpdate");
    customCheckoutPage.getCartApplyPromoCodeButton().click();
    cy.wait("@getUpdate");

    //Assign discountPrice and assert
    customCheckoutPage.getCartTotalText().then(function ($price) {
      discountPrice = $price.text();
      expect(toFloat(discountPrice)).to.be.within(
        toFloat(productPrice) * 0.5 - 2,
        toFloat(productPrice) * 0.5 + 2,
      );
    });
  });
});
