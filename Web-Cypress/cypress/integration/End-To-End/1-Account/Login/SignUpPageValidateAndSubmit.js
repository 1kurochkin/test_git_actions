import ContinuePage from "../../../../support/pageobjects/ContinuePage.js";
import LoginPage from "../../../../support/pageobjects/LoginPage";

const continuePage = new ContinuePage();
const loginPage = new LoginPage();

describe("Guest User - Login with fresh user", function () {
  it("Login with fresh user - Validate at Sign up page and submit successfully", function () {
    const randomUserId = new Date().getTime();
    const loginEmail = `test-user-${randomUserId}@test.com`;
    continuePage.visitPage();

    // Input not existing user
    continuePage.getEmailForm().clear();
    continuePage.getEmailForm().type(loginEmail);
    continuePage.getSubmitButton().click({ force: true });

    // Wait until find user endpoint is completed
    cy.wait(2000);

    // When input valid first name then no error message display
    loginPage.getFirstNameInput().type("Jenifer");
    loginPage.getFirstNameError().should("not.exist");

    // When input valid last name then no error message display
    loginPage.getLastNameInput().type("Aniston");
    loginPage.getLastNameError().should("not.exist");

    // When input password less than 6 characters
    loginPage.getPasswordForm().type("123");
    loginPage.getPageTitle().click({ force: true });
    loginPage
      .getPasswordError()
      .should(
        "have.text",
        "Please enter a valid password. The password must be at least 6 characters",
      );

    // When input password more than equal 6 characters
    loginPage.getPasswordForm().clear();
    loginPage.getPasswordForm().type("123456");
    loginPage.getPasswordError().should("not.exist");

    // When show password should show password able
    loginPage.getShowPassword().click({ force: true });
    loginPage.getPasswordForm().should("have.attr", "type", "text");

    // Check status submit button when check/uncheck otp in button
    loginPage.getOTPIn().click({ force: true });
    loginPage.getSubmitButton().should("be.disabled");

    // Check status submit button when check/uncheck accept terms button
    loginPage.getAcceptTerms().click({ force: true });
    loginPage.getSubmitButton().should("be.enabled");
    loginPage.getAcceptTerms().click({ force: true });
    loginPage.getSubmitButton().should("be.disabled");
    loginPage.getAcceptTerms().click({ force: true });

    // Should submit successfully
    loginPage.getSubmitButton().click({ force: true });

    cy.intercept("POST", "**amazonaws.com**").as("signUpAccount");
    cy.wait("@signUpAccount", { timeout: 10000 });

    cy.wait(1500);

    // Should redirect able
    cy.url().should("not.include", "/signup");
  });
});
