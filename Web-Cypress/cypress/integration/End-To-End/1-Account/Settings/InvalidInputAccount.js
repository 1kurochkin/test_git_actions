import AccountPage from "../../../../support/pageobjects/AccountPage.js";

const accountPage = new AccountPage();

describe("Subscribed User - Invalid Input Account", function () {
  it("Subscribed User - Invalid Input Account", function () {
    cy.loginSubscribedUser();
    cy.waitForAppPageLoad();

    //Navigate to Account page
    accountPage.visitAccountPage();

    //First Name
    accountPage.getBodyFirstNameField().clear();
    accountPage
      .getInvalidErrorText()
      .contains("Required", { matchCase: false })
      .should("be.visible");
    accountPage.getBodyFirstNameField().type("Test");

    //Last Name
    accountPage.getBodyLastNameField().clear();
    accountPage
      .getInvalidErrorText()
      .contains("Required", { matchCase: false })
      .should("be.visible");

    //Birthday less than required amount of numbers
    accountPage.getBodyBirthdayField().clear();
    accountPage.getBodyBirthdayField().type("01/01/123");
    accountPage.getBodyEmailField().click({ force: true });
    accountPage
      .getInvalidErrorText()
      .contains("must be in mm/dd/yyyy format", { matchCase: false })
      .should("be.visible");

    //Birthday value greater than 12 for months
    accountPage.getBodyBirthdayField().clear();
    accountPage.getBodyBirthdayField().type("13/01/1234");
    accountPage.getBodyEmailField().click({ force: true });
    accountPage
      .getInvalidErrorText()
      .contains("must be in mm/dd/yyyy format", { matchCase: false })
      .should("be.visible");

    //Birthday value greater than 31 for days
    accountPage.getBodyBirthdayField().clear();
    accountPage.getBodyBirthdayField().type("01/32/1234");
    accountPage.getBodyEmailField().click({ force: true });
    accountPage
      .getInvalidErrorText()
      .contains("must be in mm/dd/yyyy format", { matchCase: false })
      .should("be.visible");

    //Birthday value greater than current year for year
    accountPage.getBodyBirthdayField().clear();
    accountPage.getBodyBirthdayField().type("01/01/2200");
    accountPage.getBodyEmailField().click({ force: true });
    accountPage
      .getInvalidErrorText()
      .contains("invalid date", { matchCase: false })
      .should("be.visible");

    //Phone Number less than the required amount
    accountPage.getBodyPhoneNumberField().clear();
    accountPage.getBodyPhoneNumberField().type("123456789");
    accountPage.getBodyEmailField().click({ force: true });
    accountPage
      .getInvalidErrorText()
      .contains("Invalid phone number", { matchCase: false })
      .should("be.visible");

    //Phone Number more than the allowed amount
    accountPage.getBodyPhoneNumberField().clear();
    accountPage.getBodyPhoneNumberField().type("1234567891011");
    accountPage.getBodyEmailField().click({ force: true });
    accountPage
      .getInvalidErrorText()
      .contains("Invalid phone number", { matchCase: false })
      .should("be.visible");
  });
});
