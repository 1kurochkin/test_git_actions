import ContinuePage from "../../../../support/pageobjects/ContinuePage.js";
import LoginPage from "../../../../support/pageobjects/LoginPage.js";
import ShopifyHeader from "../../../../support/pageobjects/ShopifyHeader.js";
import AccountPage from "../../../../support/pageobjects/AccountPage.js";
import PasswordPage from "../../../../support/pageobjects/PasswordPage.js";

const continuePage = new ContinuePage();
const loginPage = new LoginPage();
const shopifyHeader = new ShopifyHeader();
const accountPage = new AccountPage();
const passwordPage = new PasswordPage();

describe("Unsubscribed User - Change Password", function () {
  it("Unsubscribed User - Change Password", function () {
    //Login
    cy.loginUnsubscribedUserPassword();

    cy.wait(2000);
    cy.get("body").then(($body) => {
      if ($body.find('div[class*="ui red"]').length > 0) {
        cy.reload();
        continuePage
          .getEmailForm()
          .type(Cypress.env("emailUnsubscribedPasswordTest"));
        continuePage.getSubmitButton().click();
        loginPage.getPasswordForm().type("5678!Password");
        loginPage.getSubmitButton().click({ force: true });
        cy.waitForShopifyPageLoad();

        accountPage.visitAccountPage();
        cy.waitForAppPageLoad();

        //Click Change Password button
        accountPage.getBodyChangePasswordButton().click();

        //Fill in password fields and save
        passwordPage.getCurrentPasswordField().type("5678!Password");
        passwordPage.getNewPasswordField().type(Cypress.env("password"));
        passwordPage.getSavePasswordButton().click();
        accountPage.getBodyFirstNameField().should("be.visible"); //Assert redirect

        //User logs out
        accountPage.getBodySideNavLogoutLink().click({ force: true });
        cy.wait(2000);

        //User logs back in with new password
        shopifyHeader.getHeaderLoginLink().click();
        continuePage
          .getEmailForm()
          .type(Cypress.env("emailUnsubscribedPasswordTest"));
        continuePage.getSubmitButton().click();
        loginPage.getPasswordForm().type(Cypress.env("password"));
        loginPage.getSubmitButton().click({ force: true });
      } else {
        accountPage.visitAccountPage();
        cy.waitForAppPageLoad();

        //Click Change Password button
        accountPage.getBodyChangePasswordButton().click();

        //Fill in password fields and save
        passwordPage.getCurrentPasswordField().type(Cypress.env("password"));
        passwordPage.getNewPasswordField().type("5678!Password");
        passwordPage.getSavePasswordButton().click();
        accountPage.getBodyFirstNameField().should("be.visible"); //Assert redirect

        //User logs out
        accountPage.getBodySideNavLogoutLink().click({ force: true });
        cy.wait(2000);

        //User logs back in with new password
        shopifyHeader.getHeaderLoginLink().click();
        continuePage
          .getEmailForm()
          .type(Cypress.env("emailUnsubscribedPasswordTest"));
        continuePage.getSubmitButton().click();
        loginPage.getPasswordForm().type("5678!Password");
        loginPage.getSubmitButton().click({ force: true });

        accountPage.visitAccountPage();
        cy.waitForAppPageLoad();

        //Click Change Password button
        accountPage.getBodyChangePasswordButton().click();

        //Fill in password fields and save
        passwordPage.getCurrentPasswordField().type("5678!Password");
        passwordPage.getNewPasswordField().type(Cypress.env("password"));
        passwordPage.getSavePasswordButton().click();
        accountPage.getBodyFirstNameField().should("be.visible"); //Assert redirect
      }
    });
  });
});
