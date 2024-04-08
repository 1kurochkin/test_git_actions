import AppHeader from "../../../support/pageobjects/AppHeader";
import ClassesPanePage from "../../../support/pageobjects/ClassesPanePage";
import HomePage from "../../../support/pageobjects/HomePage";
import AllureMetadataManager from "../../../support/utils/AllureMetadataManager";
import TAGS from "../../../support/utils/tags.js";

const homePage = new HomePage();
const appHeader = new AppHeader();
const classesPanePage = new ClassesPanePage();

const issueId = "@STREAM-2684";
const tmsId = "@C-8064";

describe("Home Test Suite", function () {
  it(
    "Verify Workout Detail Pane is closing " + issueId + " " + tmsId,
    { tags: [TAGS.SMOKE] },
    function () {
      cy.loginRechargeUser();
      cy.assertVisible([
        appHeader.getHomeButton(),
        homePage.getFirstClassTitle(),
      ]);

      homePage.getFirstClassTitle().click({ force: true });
      cy.assertExist([
        classesPanePage.getPlayVideoButton(),
        classesPanePage.getClosePaneButton(),
        classesPanePage.getDateOfReleaseButton(),
        classesPanePage.getFavoriteButton(),
        classesPanePage.getTrainersPicture(),
        classesPanePage.getTrainersName(),
      ]);
      classesPanePage.getClosePaneButton().click({ force: true });
      cy.assertVisible([
        appHeader.getHomeButton(),
        homePage.getFirstClassTitle(),
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
