import AppHeader from "../../../support/pageobjects/AppHeader";
import ClassesPanePage from "../../../support/pageobjects/ClassesPanePage";
import HomePage from "../../../support/pageobjects/HomePage";
import AllureMetadataManager from "../../../support/utils/AllureMetadataManager";
import TAGS from "../../../support/utils/tags.js";

const homePage = new HomePage();
const appHeader = new AppHeader();
const classesPanePage = new ClassesPanePage();

const issueId = "@STREAM-2682";
const tmsId = "@C-7686";

describe("Home Test Suite", function () {
  it(
    "Verify Workout Detail Pane is opening " + issueId + " " + tmsId,
    { tags: [TAGS.SMOKE] },
    function () {
      cy.loginRechargeUser();
      cy.assertVisible([
        appHeader.getHomeButton(),
        homePage.getFirstClassTitle(),
      ]);
      const baseUrl = Cypress.env("APP_BASE_URL");
      const expectedUrlPattern = new RegExp(
        `^${baseUrl}/home/detail/[a-zA-Z0-9-]+(?:-[a-zA-Z0-9]+)*$`,
      );
      cy.assertUrl(baseUrl + "/home");

      homePage.getFirstClassTitle().click({ force: true });
      cy.assertExist([
        classesPanePage.getPlayVideoButton(),
        classesPanePage.getClosePaneButton(),
        classesPanePage.getDateOfReleaseButton(),
        classesPanePage.getFavoriteButton(),
        classesPanePage.getTrainersPicture(),
        classesPanePage.getTrainersName(),
      ]);
      cy.assertUrlPattern(expectedUrlPattern);
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
