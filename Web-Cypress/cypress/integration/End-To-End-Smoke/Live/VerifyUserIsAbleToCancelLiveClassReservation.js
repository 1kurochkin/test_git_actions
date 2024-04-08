import AppHeader from "../../../support/pageobjects/AppHeader";
import LivePage from "../../../support/pageobjects/LivePage";
import AllureMetadataManager from "../../../support/utils/AllureMetadataManager";
import TAGS from "../../../support/utils/tags.js";

const appHeader = new AppHeader();
const livePage = new LivePage();

const issueId = "@STREAM-2817";
const tmsId = "@C-7700";

let reservationId = null;

describe("Live Test Suite", function () {
  it(
    "Verify user is able to cancel live class reservation " +
      issueId +
      " " +
      tmsId,
    { tags: [TAGS.SMOKE] },
    function () {
      livePage.visitPage();
      cy.assertVisible([
        livePage.getLiveVirtualStudioBackgroundImage(),
        livePage.getLiveVirtualStudioTitle(),
      ]);

      livePage.getCancelLVSButton().click({ force: true });
      cy.assertExist([livePage.getPopupTitle()]);
      livePage.getPopupTitle().assertTextContains("Cancel booking");

      livePage.getPopupConfirmButton().click({ force: true });
      livePage.visitPage();
      cy.assertVisible([
        livePage.getLiveVirtualStudioBackgroundImage(),
        livePage.getLiveVirtualStudioTitle(),
      ]);
    },
  );

  this.beforeEach(() => {
    cy.setMetadataToAllureReport(createAllureMetadata());
    cy.loginRechargeUserAndStoreAuthToken();
    cy.assertVisible([appHeader.getHomeButton(), appHeader.getClassesButton()]);
    reserveClass();
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

  function reserveClass() {
    livePage.visitPage();
    cy.assertVisible([
      livePage.getLiveVirtualStudioBackgroundImage(),
      livePage.getLiveVirtualStudioTitle(),
    ]);
    cy.pickNextDayInLvsCalendar(1);

    cy.intercept("POST", "studios/reservation").as("reservationRequest");
    livePage.getReserveButtonFirstLVSClass().click({ force: true });
    cy.wait("@reservationRequest").then((interception) => {
      reservationId = interception.response.body.id;
      cy.assertExist([livePage.getPopupTitle()]);

      livePage.getPopupCloseButton();
    });
  }
});
