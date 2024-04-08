import DigitalMembershipPage from "../../../../support/pageobjects/DigitalMembershipPage.js";
import ProductsPage from "../../../../support/pageobjects/ProductsPage.js";

const productsPage = new ProductsPage();
const digitalMembershipPage = new DigitalMembershipPage();

describe("Guest - Digital-Membership already in cart alert", function () {
  it("Guest - Digital-Membership already in cart alert", function () {
    productsPage.visitEssentialsKitPage();
    cy.wait(2000);

    productsPage.getBodyAddToCartButton().click({ force: true });
    cy.wait(2000);

    digitalMembershipPage.visitDigitalMembershipPage();
    digitalMembershipPage.getMembershipInCartAlert().should("be.visible");
    digitalMembershipPage
      .getMembershipInCartAlertCloseButton()
      .should("be.visible");
    digitalMembershipPage
      .getMembershipInCartAlertViewCartButton()
      .should("be.visible");
    digitalMembershipPage.getMembershipInCartALertText().should("be.visible");
  });
});
