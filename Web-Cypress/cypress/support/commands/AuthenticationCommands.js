import ContinuePage from "../../support/pageobjects/ContinuePage.js";
import LoginPage from "../../support/pageobjects/LoginPage.js";

const continuePage = new ContinuePage();
const loginPage = new LoginPage();

/**
 * Login an Unsubscribed User.
 *
 * Email: pvolvetestautomation+[ENV]_001@gmail.com
 */
Cypress.Commands.add("loginUnsubscribedUser", function () {
  login(Cypress.env("emailUnsubscribed"), Cypress.env("password"));
});

/**
 * Login a Subscribed User.
 *
 * Email: pvolvetestautomation+[ENV]_002@gmail.com
 */
Cypress.Commands.add("loginSubscribedUser", function () {
  login(Cypress.env("emailSubscribed"), Cypress.env("password"));
});

/**
 * Login an Unsubscribed User.
 *
 * This Account's password changes for verifying the change password
 * functionality.
 *
 * Avoid using this account for anything but the change password test.
 *
 * Email: pvolvetestautomation+[ENV]_004@gmail.com
 */
Cypress.Commands.add("loginUnsubscribedUserPassword", function () {
  login(Cypress.env("emailUnsubscribedPasswordTest"), Cypress.env("password"));
});

/**
 * Login a Subscribed User.
 *
 * This Account Joins and leaves the Phase and Function series.
 *
 * Avoid using this account for anything but Phase and Function testing.
 *
 * Email: pvolvetestautomation+[ENV]_003@gmail.com
 */
Cypress.Commands.add("loginSubscribedUserPhaseFunction", function () {
  login(Cypress.env("emailP&F"), Cypress.env("password"));
});

/**
 * Login a Subscribed User.
 *
 * This Account Joins and leaves a random series.
 *
 * Avoid using this account for anything but series testing.
 *
 * Email: pvolvetestautomation+[ENV]_005@gmail.com
 */
Cypress.Commands.add("loginSubscribedUserSeries", function () {
  login(Cypress.env("emailSubscribedSeries"), Cypress.env("password"));
});

/**
 * Login a Subscribed User.
 *
 * This Account is in the FTU state.
 *
 * Do not use this account for anything but verifying the FTU
 * state of the My Plan page.
 *
 * Email: pvolvetestautomation+[ENV]_006@gmail.com
 */
Cypress.Commands.add("loginSubscribedUserFTU", function () {
  login(Cypress.env("emailSubscribedFTU"), Cypress.env("password"));
});

/**
 * Login a Subscribed User.
 *
 * This Account is in the Phase and Function series.
 * Avoid leaving the Phase and Function series on this account.
 *
 * Avoid using this account for anything but Phase and Function testing.
 *
 * Email: pvolvetestautomation+[ENV]_007@gmail.com
 */
Cypress.Commands.add("loginSubscribedUserPhaseFunctionSeries", function () {
  login(Cypress.env("emailP&FSeries"), Cypress.env("password"));
});

/**
 * Login a Subscribed Optum User.
 *
 * Avoid using this account for anything but Optum verification.
 *
 * Email: pvolvetestautomation+[ENV]_008@gmail.com
 */
Cypress.Commands.add("loginSubscribedOptumUser", function () {
  login(Cypress.env("emailOptum"), Cypress.env("password"));
});

/**
 * Login a Subscribed User.
 *
 * This Account verifies video completion.
 *
 * Avoid using this account for anything but video completion.
 *
 * Email: pvolvetestautomation+[ENV]_009@gmail.com
 */
Cypress.Commands.add("loginSubscribedUserVideoComplete", function () {
  login(Cypress.env("emailVideo"), Cypress.env("password"));
});

/**
 * Login a Subscribed User.
 *
 * This Account is set to the series complete state.
 *
 * Avoid using this account for anything but series complete state validation.
 *
 * Note: Currently only set up for QA.
 *
 * Email: pvolvetestautomation+qa_m005@gmail.com
 */
Cypress.Commands.add("loginSubscribedUserSeriesComplete", function () {
  login(Cypress.env("seriesComplete"), Cypress.env("password"));
});

/**
 * Login a Recharge User.
 *
 * This Account is set to the series complete state.
 *
 * Avoid using this account for anything but recharge user functionalities.
 *
 * Note: Currently only set up for QA & Prod.
 *
 * Email: automation.test@test.com
 */
Cypress.Commands.add("loginRechargeUser", function () {
  login(Cypress.env("rechargeEmail"), Cypress.env("password"));
});

/**
 * Login a Recharge User with multiple workouts completed and store auth token
 *
 * This Account is set to the series complete state.
 *
 * Avoid using this account for anything but recharge user functionalities.
 *
 * Note: Currently only set up for QA & Prod.
 *
 * Email:crodriguez+test1@sweatworks.net
 */
Cypress.Commands.add(
  "loginRechargeUserSeveralWorkoutsCompletedAndStoreAuthToken",
  function () {
    loginAndStoreAuthToken(
      Cypress.env("rechargeEmailMultipleWorkoutsCompleted"),
      Cypress.env("password"),
    );
  },
);

/**
 * Login a Recharge User and store auth token
 *
 * This Account is set to the series complete state.
 *
 * Avoid using this account for anything but recharge user functionalities.
 *
 * Note: Currently only set up for QA.
 *
 * Email: automation.test@test.com
 */
Cypress.Commands.add("loginRechargeUserAndStoreAuthToken", function () {
  loginAndStoreAuthToken(Cypress.env("rechargeEmail"), Cypress.env("password"));
});

Cypress.Commands.add("getAuthToken", () => {
  return cy.get("@authToken");
});

function loginAndStoreAuthToken(username, password) {
  cy.intercept("POST", "https://cognito-idp.us-east-1.amazonaws.com").as(
    "loginRequest",
  );
  login(username, password);
  cy.wait("@loginRequest").then((interception) => {
    const token = interception.response.body.AuthenticationResult.IdToken;
    cy.wrap(token).as("authToken");
  });
}

function login(username, password) {
  cy.visit(Cypress.env("APP_BASE_URL") + "/continue");
  continuePage.getEmailForm().type(username);
  continuePage.getSubmitButton().click();
  loginPage.getPasswordForm().type(password);
  loginPage.getSubmitButton().click();
}
