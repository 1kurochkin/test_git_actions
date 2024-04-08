import ClassesPanePage from "../../../support/pageobjects/ClassesPanePage";
import ContinuePage from "../../../support/pageobjects/ContinuePage";
import LoginPage from "../../../support/pageobjects/LoginPage";
import AllureMetadataManager from "../../../support/utils/AllureMetadataManager";
import TAGS from "../../../support/utils/tags.js";

const classesPanePage = new ClassesPanePage();
const continuePage = new ContinuePage();
const loginPage = new LoginPage();

const workoutSlug = "25-min-mat-full-body-stretch-OFF0923-S24";

const issueId = "@STREAM-2925";
const tmsId = "@C-8068";

describe("Home Test Suite", function () {
  it(
    "Verify Workout Detail Pane elements direct link " + issueId + " " + tmsId,
    { tags: [TAGS.SMOKE, TAGS.BLOCKED] },
    function () {
      this.skip();
      classesPanePage.visitPageFromHome(workoutSlug);
      cy.assertVisible([continuePage.getEmailForm()]);

      continuePage.getEmailForm().type(Cypress.env("rechargeEmail"));
      continuePage.getSubmitButton().click();

      cy.assertVisible([loginPage.getPasswordForm()]);
      loginPage.getPasswordForm().type(Cypress.env("password"));
      cy.assertVisible([loginPage.getSubmitButton()]);
      loginPage.getSubmitButton().click();

      cy.assertVisible([classesPanePage.getClassNameHeader()]);
    },
  );

  this.beforeEach(() => {
    cy.setMetadataToAllureReport(createAllureMetadata());
  });

  function createAllureMetadata() {
    const metadataManager = new AllureMetadataManager();
    metadataManager.setIssue(issueId);
    metadataManager.setTMS(tmsId);
    metadataManager.setOwner("Farit Majul");
    metadataManager.setDescription(
      "There is a known issue https://pvolve.atlassian.net/browse/STREAM-2655",
    );
    metadataManager.setTags("Related bug", "Blocked");
    metadataManager.setLink({
      url: "https://pvolve.atlassian.net/browse/STREAM-2655",
      name: "Related Bug",
      type: "issue",
    });
    return metadataManager;
  }
});
