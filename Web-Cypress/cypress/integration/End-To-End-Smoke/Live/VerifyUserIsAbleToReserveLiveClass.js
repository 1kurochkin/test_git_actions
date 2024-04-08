import AppHeader from "../../../support/pageobjects/AppHeader";
import LivePage from "../../../support/pageobjects/LivePage";
import AllureMetadataManager from "../../../support/utils/AllureMetadataManager";
import TAGS from "../../../support/utils/tags.js";

const appHeader = new AppHeader();
const livePage = new LivePage();

const issueId = "@STREAM-2815";
const tmsId = "@C-7699";

let reservationId = null;

describe("Live Test Suite", function () {
  it(
    "Verify user is able to reserve a live class " + issueId + " " + tmsId,
    { tags: [TAGS.SMOKE] },
    function () {
      cy.loginRechargeUserAndStoreAuthToken();
      cy.assertVisible([
        appHeader.getHomeButton(),
        appHeader.getClassesButton(),
      ]);

      livePage.visitPage();
      cy.assertVisible([
        livePage.getLiveVirtualStudioBackgroundImage(),
        livePage.getLiveVirtualStudioTitle(),
      ]);
      cy.pickNextDayInLvsCalendar(12);

      cy.intercept("POST", "studios/reservation").as("reservationRequest");
      livePage.getReserveButtonFirstLVSClass().click({ force: true });
      cy.wait("@reservationRequest").then((interception) => {
        reservationId = interception.response.body.id;
        cy.assertExist([livePage.getPopupTitle()]);
      });
    },
  );

  this.beforeEach(() => {
    cy.setMetadataToAllureReport(createAllureMetadata());
  });

  this.afterEach(() => {
    if (reservationId) {
      cy.cancelLvsReservation(reservationId);
    }
  });

  function createAllureMetadata() {
    const metadataManager = new AllureMetadataManager();
    metadataManager.setIssue(issueId);
    metadataManager.setTMS(tmsId);
    metadataManager.setOwner("Carlos Rodríguez");
    return metadataManager;
  }
});
