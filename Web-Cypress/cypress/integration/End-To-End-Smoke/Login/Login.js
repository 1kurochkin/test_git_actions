import AppHeader from "../../../support/pageobjects/AppHeader.js";
import ContinuePage from "../../../support/pageobjects/ContinuePage.js";
import LoginPage from "../../../support/pageobjects/LoginPage.js";
import AllureMetadataManager from "../../../support/utils/AllureMetadataManager.js";
import TAGS from "../../../support/utils/tags.js";

const continuePage = new ContinuePage();
const loginPage = new LoginPage();
const appHeader = new AppHeader();

const issueId = "@STREAM-2569";
const tmsId = "@C-7676";

describe("Login Test Suite", function () {
  it(
    "Log into the app with valid user " + issueId + " " + tmsId,
    { tags: [TAGS.SMOKE, TAGS.REGRESSION] },
    function () {
      continuePage.visitPage();
      continuePage.getEmailForm().type(Cypress.env("rechargeEmail"));
      continuePage.getSubmitButton().click();

      cy.assertVisible([loginPage.getPasswordForm()]);
      loginPage.getPasswordForm().type(Cypress.env("password"));
      cy.assertVisible([loginPage.getSubmitButton()]);
      loginPage.getSubmitButton().click();

      cy.assertVisible([
        appHeader.getHomeButton(),
        appHeader.getClassesButton(),
      ]);
    },
  );

  this.beforeAll(() => {
    cy.setAllureEnvironmentVariables();
  });

  this.beforeEach(() => {
    cy.setMetadataToAllureReport(createAllureMetadata());
  });

  function createAllureMetadata() {
    const metadataManager = new AllureMetadataManager();
    metadataManager.setIssue(issueId);
    metadataManager.setTMS(tmsId);
    metadataManager.setOwner("Carlos Rodríguez");
    metadataManager.setDescription("User logs in the web application");
    metadataManager.setTags("Login");
    return metadataManager;
  }
});
