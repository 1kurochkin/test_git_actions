import AccountPage from "../../../../support/pageobjects/AccountPage.js";

const accountPage = new AccountPage();

describe("Subscribed User - Change Account Settings", function () {
  it("Subscribed User - Change Account Settings", function () {
    //User logs into account and navigates to the Account page
    cy.loginSubscribedUser();
    cy.waitForAppPageLoad();

    accountPage.visitAccountPage();

    //User checks if first name, last name, date of birth, gender, and phone number are the original values and reverts them back if not
    accountPage.getBodyFirstNameField().then(($firstName) => {
      if (!$firstName.attr("value").includes("Test")) {
        accountPage.getBodyFirstNameField().clear();
        accountPage.getBodyFirstNameField().type("Test");
      }
    });

    accountPage.getBodyLastNameField().then(($lastName) => {
      if (!$lastName.attr("value").includes("Tester")) {
        accountPage.getBodyLastNameField().clear();
        accountPage.getBodyLastNameField().type("Tester");
      }
    });

    accountPage.getBodyBirthdayField().then(($birthDay) => {
      if (!$birthDay.attr("value").includes("01/01/1001")) {
        accountPage.getBodyBirthdayField().clear();
        accountPage.getBodyBirthdayField().type("01/01/1001");
      }
    });

    accountPage.getBodyGenderDropDown().then(($gender) => {
      if (!$gender.text().includes("Non-Binary")) {
        accountPage.getBodyGenderDropDown().click({ force: true });
        accountPage.getBodyGenderNonBinaryDropDownItem().click();
      }
    });

    accountPage.getBodyPhoneNumberField().then(($phoneNumber) => {
      if (!$phoneNumber.attr("value").includes("+1 555 555 5555")) {
        accountPage.getBodyPhoneNumberField().clear();
        accountPage.getBodyPhoneNumberField().type("5555555555");
      }
    });

    accountPage.getBodySaveButton().then(($saveButton) => {
      if (!$saveButton.attr("disabled")) {
        accountPage.getBodySaveButton().click();
        cy.wait(2000);
      }
    });

    //User changes first name, last name, date of birth, gender, and phone number to new values
    accountPage.getBodyFirstNameField().clear();
    accountPage.getBodyFirstNameField().type("Jest");
    accountPage.getBodyLastNameField().clear();
    accountPage.getBodyLastNameField().type("Jester");
    accountPage.getBodyBirthdayField().clear();
    accountPage.getBodyBirthdayField().type("02/02/1002");
    accountPage.getBodyGenderDropDown().click({ force: true });
    accountPage.getBodyGenderFemaleDropDownItem().click();
    accountPage.getBodyPhoneNumberField().clear();
    accountPage.getBodyPhoneNumberField().type("5555554466");

    //User clicks the Save button
    accountPage.getBodySaveButton().click();
    cy.wait(2000);

    //Navigate away and back to Account page
    accountPage.getBodySideNavSubscriptionsLink().click();
    accountPage.visitAccountPage();

    //User sees the new values
    accountPage.getBodyFirstNameField().then(($firstName) => {
      cy.wrap($firstName).should("have.value", "Jest");
    });
    accountPage.getBodyLastNameField().then(($lastName) => {
      cy.wrap($lastName).should("have.value", "Jester");
    });
    accountPage.getBodyBirthdayField().then(($birthDay) => {
      cy.wrap($birthDay).should("have.value", "02/02/1002");
    });
    accountPage.getBodyGenderDropDown().then(($gender) => {
      cy.wrap($gender).should("have.text", "Female");
    });
    accountPage.getBodyPhoneNumberField().then(($phoneNumber) => {
      cy.wrap($phoneNumber).should("have.value", "+1 555 555 4466");
    });

    //User changes the fields back to original values and clicks the Save button
    accountPage.getBodyFirstNameField().then(($firstName) => {
      if (!$firstName.attr("value").includes("Test")) {
        accountPage.getBodyFirstNameField().clear();
        accountPage.getBodyFirstNameField().type("Test");
      }
    });

    accountPage.getBodyLastNameField().then(($lastName) => {
      if (!$lastName.attr("value").includes("Tester")) {
        accountPage.getBodyLastNameField().clear();
        accountPage.getBodyLastNameField().type("Tester");
      }
    });

    accountPage.getBodyBirthdayField().then(($birthDay) => {
      if (!$birthDay.attr("value").includes("01/01/1001")) {
        accountPage.getBodyBirthdayField().clear();
        accountPage.getBodyBirthdayField().type("01/01/1001");
      }
    });

    accountPage.getBodyGenderDropDown().then(($gender) => {
      if (!$gender.text().includes("Non-Binary")) {
        accountPage.getBodyGenderDropDown().click({ force: true });
        accountPage.getBodyGenderNonBinaryDropDownItem().click();
      }
    });

    accountPage.getBodyPhoneNumberField().then(($phoneNumber) => {
      if (!$phoneNumber.attr("value").includes("(555) 555-5555")) {
        accountPage.getBodyPhoneNumberField().clear();
        accountPage.getBodyPhoneNumberField().type("5555555555");
      }
    });

    accountPage.getBodySaveButton().click();
    cy.wait(2000);

    //Assertion for Opt-In legal text
    accountPage.getBodyPhoneNumberField().clear();
    accountPage.getBodyPhoneNumberLegalText().should("be.visible");
  });
});
