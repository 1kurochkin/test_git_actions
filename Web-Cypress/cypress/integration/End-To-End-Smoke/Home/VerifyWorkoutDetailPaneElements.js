import AppHeader from "../../../support/pageobjects/AppHeader";
import ClassesPanePage from "../../../support/pageobjects/ClassesPanePage";
import HomePage from "../../../support/pageobjects/HomePage";
import AllureMetadataManager from "../../../support/utils/AllureMetadataManager";
import { HttpStatusCodes } from "../../../support/utils/httpStatusCode";
import TAGS from "../../../support/utils/tags.js";

const homePage = new HomePage();
const appHeader = new AppHeader();
const classesPanePage = new ClassesPanePage();

const issueId = "@STREAM-2683";
const tmsId = "@C-8063";

describe("Home Test Suite", function () {
  it(
    "Verify Workout Detail Pane elements " + issueId + " " + tmsId,
    { tags: [TAGS.SMOKE, TAGS.CHECK] },
    function () {
      cy.loginRechargeUser();
      cy.assertVisible([
        appHeader.getHomeButton(),
        appHeader.getClassesButton(),
        homePage.getFirstClassTitle(),
      ]);

      cy.intercept("GET", "**/previewVideo").as("previewVideo");
      homePage.getFirstClassTitle().click({ force: true });
      cy.wait("@previewVideo")
        .then((interception) => {
          return interception.response.body.uri;
        })
        .then((videoUri) => {
          cy.assertExist([
            classesPanePage.getPlayVideoButton(),
            classesPanePage.getClosePaneButton(),
            classesPanePage.getDateOfReleaseButton(),
            classesPanePage.getFavoriteButton(),
            classesPanePage.getTrainersPicture(),
            classesPanePage.getTrainersName(),
            classesPanePage.getAboutSectionHeader(),
            classesPanePage.getClassDuration(),
            classesPanePage.getPacingSectionHeader(),
            classesPanePage.getEquipmentSectionHeader(),
            classesPanePage.getBodyFocusSectionHeader(),
          ]);
          classesPanePage.getClosePaneButton().click({ force: true });
          cy.intercept("GET", videoUri).as("videoPlayer");
          homePage.getFirstClassTitle().click({ force: true });
        })
        .then(() => {
          cy.validateResponseStatus("@videoPlayer", HttpStatusCodes.OK);
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
