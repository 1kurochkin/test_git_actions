import BaseURLPage from "../../../../support/pageobjects/BaseURLPage.js";
import ContinuePage from "../../../../support/pageobjects/ContinuePage.js";
import SignUpPage from "../../../../support/pageobjects/SignUpPage";
import ShopifyHeader from "../../../../support/pageobjects/ShopifyHeader.js";

const continuePage = new ContinuePage();
const baseURLPage = new BaseURLPage();
const signUpPage = new SignUpPage();
const shopifyHeader = new ShopifyHeader();

describe("Guest - Create Account via Shopify Homepage Log In", function () {
  it("Guest - Create Account via Shopify Homepage Log In", function () {
    baseURLPage.visitPage();
    shopifyHeader.getHeaderLoginLink().click();
    continuePage.getEmailForm().type("pvolvetestautomation+unused@gmail.com");
    continuePage.getSubmitButton().click();
    signUpPage.getFirstNameField().type("Test");
    signUpPage.getLastNameField().type("Automation");
    signUpPage.getCreatePasswordField().type("Password1234!");
    signUpPage.getCreateAccountButton().should("be.visible");
  });
});
