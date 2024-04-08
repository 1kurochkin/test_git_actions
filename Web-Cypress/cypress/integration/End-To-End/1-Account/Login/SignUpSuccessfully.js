import ContinuePage from "../../../../support/pageobjects/ContinuePage.js";
import SignUpPage from "../../../../support/pageobjects/SignUpPage.js";

const continuePage = new ContinuePage();
const signUpPage = new SignUpPage();

describe("Guest User - Sign Up successfully", function () {
  it("Guest User - Sign Up successfully", function () {
    continuePage.visitPage();

    //Navigate to Sign up Page with a Good Email
    continuePage.getEmailForm().clear();
    continuePage
      .getEmailForm()
      .type(`AutomationTest+${Math.random() * Math.random()}@test.com`);
    continuePage.getSubmitButton().click();

    //SignUp missing first name
    signUpPage.getFirstNameField().clear().type("First");
    signUpPage.getLastNameField().clear().type("Last");
    signUpPage.getCreatePasswordField().clear().type("Password");
    cy.get(":nth-child(1) > .ui > label").click();
    cy.get("#optIn").check();
    cy.get(":nth-child(2) > .ui > label").click();
    cy.get("#acceptTerms").check();
    signUpPage.getCreateAccountButton().click({ force: true });
    cy.wait(7000);
    cy.get("#password").type("Alfajores1!");
    cy.get(".btn").click();
    cy.visit(Cypress.env("APP_BASE_URL") + "/continue");

    cy.location("pathname").should("contain", "streaming-membership");
  });
});
