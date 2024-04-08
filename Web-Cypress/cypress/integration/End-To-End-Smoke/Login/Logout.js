import AccountPage from "../../../support/pageobjects/AccountPage";
import AppHeader from "../../../support/pageobjects/AppHeader";
import ContinuePage from "../../../support/pageobjects/ContinuePage";
import HomePage from "../../../support/pageobjects/HomePage";
import AllureMetadataManager from "../../../support/utils/AllureMetadataManager";
import TAGS from "../../../support/utils/tags.js";

const accountPage = new AccountPage();
const appHeader = new AppHeader();
const homePage = new HomePage();
const continuePage = new ContinuePage();

const issueId = "@STREAM-2577";
const tmsId = "@C-7677";

describe("Login Test Suite", function () {
  it(
    "Log out of the app" + issueId + " " + tmsId,
    { tags: [TAGS.SMOKE] },
    function () {
      cy.loginRechargeUser();
      cy.assertVisible([
        appHeader.getHomeButton(),
        appHeader.getClassesButton(),
      ]);

      accountPage.visitAccountPage();
      cy.assertVisible([accountPage.getBodySideNavLogoutLink()]);
      accountPage.getBodySideNavLogoutLink().click();
      cy.assertVisible([accountPage.getConfirmLogoutButton()]);
      accountPage.getConfirmLogoutButton().click();

      homePage.visitPage();
      cy.assertVisible([
        continuePage.getEmailForm(),
        continuePage.getSubmitButton(),
        continuePage.getPvolveLogoButton(),
      ]);
    },
  );

  this.beforeEach(() => {
    cy.setMetadataToAllureReport(createAllureMetadata());
  });

  function createAllureMetadata() {
    const metadataManager = new AllureMetadataManager();
    metadataManager.setIssue(issueId);
    metadataManager.setTMS(tmsId);
    metadataManager.setOwner("Carlos Rodríguez");
    return metadataManager;
  }
});
