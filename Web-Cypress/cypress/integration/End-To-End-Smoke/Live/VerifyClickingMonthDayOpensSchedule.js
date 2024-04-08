import AppHeader from "../../../support/pageobjects/AppHeader";
import LivePage from "../../../support/pageobjects/LivePage";
import AllureMetadataManager from "../../../support/utils/AllureMetadataManager";
import TAGS from "../../../support/utils/tags.js";

const appHeader = new AppHeader();
const livePage = new LivePage();

const issueId = "@STREAM-2816";
const tmsId = "@C-8143";

describe("Live Test Suite", function () {
  it(
    "Clicking on Month Day opens schedule for that day " +
      issueId +
      " " +
      tmsId,
    { tags: [TAGS.SMOKE] },
    function () {
      cy.loginRechargeUser();
      cy.assertVisible([
        appHeader.getHomeButton(),
        appHeader.getClassesButton(),
      ]);

      cy.intercept("GET", "**/studios/**").as("lvsInitialClasses");
      livePage.visitPage();
      cy.assertVisible([
        livePage.getLiveVirtualStudioBackgroundImage(),
        livePage.getLiveVirtualStudioTitle(),
      ]);

      cy.pickNextDayInLvsCalendar(21);
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
