import ContinuePage from "../../../support/pageobjects/ContinuePage.js";
import LoginHelpPage from "../../../support/pageobjects/LoginHelpPage.js";
import LoginPage from "../../../support/pageobjects/LoginPage.js";
import AllureMetadataManager from "../../../support/utils/AllureMetadataManager.js";
import TAGS from "../../../support/utils/tags.js";

const continuePage = new ContinuePage();
const loginPage = new LoginPage();
const loginHelpPage = new LoginHelpPage();

const issueId = "@STREAM-2819";
const tmsId = "@C-8039";

describe("Login Test Suite", function () {
  it(
    "Forgot Password " + issueId + " " + tmsId,
    { tags: [TAGS.SMOKE] },
    function () {
      const email = Cypress.env("rechargeEmail");
      continuePage.visitPage();
      continuePage.getEmailForm().type(email);
      continuePage.getSubmitButton().click();
      cy.assertVisible([loginPage.getPasswordForm()]);

      loginPage.getForgotPasswordLink().click();
      cy.assertVisible([loginHelpPage.getGoBackLink()]);

      loginHelpPage.getSendEmailButton().click();
      cy.assertVisible([
        loginHelpPage.getGotItLink(),
        loginHelpPage.getResendEmailButton(),
      ]);

      const expectedTexts = [
        "An email was sent to " + email,
        "reset your password.",
        "Didn't get it?",
      ];
      loginHelpPage.getTextContent().each(($paragraph, index) => {
        cy.wrap($paragraph).assertTextContains(expectedTexts[index]);
      });
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
