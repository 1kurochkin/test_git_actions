import ContinuePage from "../../../../support/pageobjects/ContinuePage.js";
import LoginPage from "../../../../support/pageobjects/LoginPage";

const continuePage = new ContinuePage();
const loginPage = new LoginPage();

describe("Guest User - Login with fresh user", function () {
  it("Login with fresh user - Test UI Behavior", function () {
    const randomUserId = new Date().getTime();
    const loginEmail = `test-user-${randomUserId}@test.com`;
    continuePage.visitPage();

    // Input not existing user
    continuePage.getEmailForm().clear();
    continuePage.getEmailForm().type(loginEmail);
    continuePage.getSubmitButton().click({ force: true });

    // Wait until find user endpoint is completed
    cy.wait(1500);

    // Should redirect to signup page
    cy.url().should("includes", "/signup");

    // Submit button should be disabled
    loginPage.getSubmitButton().should("be.visible").and("be.disabled");

    // Email label should disable and filled with the email on the continue page
    loginPage
      .getEmailInput()
      .should("be.disabled")
      .and("have.value", loginEmail);

    // First name with placeholder and show require message after focus out
    loginPage
      .getFirstNameInput()
      .should("have.attr", "placeholder", "First Name");
    loginPage.getFirstNameInput().click({ force: true });
    loginPage.getPageTitle().click({ force: true });
    loginPage.getFirstNameError().should("have.text", "First name required");

    // Last name with placeholder and show require message after focus out
    loginPage
      .getLastNameInput()
      .should("have.attr", "placeholder", "Last Name");
    loginPage.getLastNameInput().click({ force: true });
    loginPage.getPageTitle().click({ force: true });
    loginPage.getLastNameError().should("have.text", "Last name required");

    // Password with placeholder and show require message after focus out
    loginPage
      .getPasswordForm()
      .should("have.attr", "placeholder", "Add Password");
    loginPage.getPasswordForm().click({ force: true });
    loginPage.getPageTitle().click({ force: true });
    loginPage.getPasswordError().should("have.text", "Required");

    // OTP check box
    loginPage.getOTPIn().parent().should("not.have.class", "checked");
    loginPage
      .getOTPIn()
      .next()
      .should(
        "have.text",
        "Keep me up to date with P.volve news and exclusive offers",
      );

    // Accept terms check box
    loginPage.getAcceptTerms().parent().should("not.have.class", "checked");
    loginPage
      .getAcceptTerms()
      .next()
      .should("have.text", "I agree to Terms of Service and Liability Waiver*");
  });
});
