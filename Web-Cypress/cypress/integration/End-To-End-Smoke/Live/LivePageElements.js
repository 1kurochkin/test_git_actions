import AppHeader from "../../../support/pageobjects/AppHeader";
import LivePage from "../../../support/pageobjects/LivePage";
import AllureMetadataManager from "../../../support/utils/AllureMetadataManager";
import TAGS from "../../../support/utils/tags.js";

const appHeader = new AppHeader();
const livePage = new LivePage();

const issueId = "@STREAM-2774";
const tmsId = "@C-8141";

const daysInCalendar = 7;

describe("Live Test Suite", function () {
  it(
    "Live page elements " + issueId + " " + tmsId,
    { tags: [TAGS.SMOKE] },
    function () {
      cy.loginRechargeUser();
      cy.assertVisible([
        appHeader.getHomeButton(),
        appHeader.getClassesButton(),
      ]);

      livePage.visitPage();
      cy.assertVisible([
        livePage.getLiveVirtualStudioBackgroundImage(),
        livePage.getLiveVirtualStudioTitle(),
        livePage.getLiveVirtualStudioDescription(),
        livePage.getTimezoneInfoImage(),
        livePage.getTimezoneInfoDisclaimer(),
        livePage.getCurrentMonthYearLVSEventsLabel(),
      ]);
      assertCalendarDaySelector();
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

  function assertCalendarDaySelector() {
    // Get the current date as a Date object
    const today = new Date();

    // Loop for seven days
    for (let i = 0; i < daysInCalendar; i++) {
      // Add the current day + i days to the array
      const newDate = new Date(today.getTime() + i * 24 * 60 * 60 * 1000);
      const dateObg = {
        weekday: newDate.toLocaleDateString("en-US", { weekday: "short" }),
        dayNumber: newDate.getDate(),
      };
      const dateFormatted = dateObg.weekday + " " + dateObg.dayNumber;
      livePage.getAllCalendarSelectors().assertTextContains(dateFormatted);
    }
  }
});
