import ContinuePage from "../../../support/pageobjects/ContinuePage";
import LoginPage from "../../../support/pageobjects/LoginPage";

export const login = () => {
  const continuePage = new ContinuePage();
  const loginPage = new LoginPage();

  continuePage.visitPage();
  continuePage.getEmailForm().type(Cypress.env("rechargeEmail"));
  continuePage.getSubmitButton().click();
  cy.wait(5000);
  loginPage.getPasswordForm().type(Cypress.env("password"));
  loginPage.getSubmitButton().click();
  cy.wait(5000);
};
