import ZeldaVideoPage from "../../../../support/pageobjects/ZeldaVideoPage.js";

const zeldaVideoPage = new ZeldaVideoPage();

describe("Zelda Video POM Selector Validation Test", function () {
  it("Validates all of the selectors in the Zelda Video POM", function () {
    cy.loginSubscribedUser();
    cy.waitForAppPageLoad();
    zeldaVideoPage.visitVideoPage(
      "40-min-full-body-strength-and-burn-ROO0522-S2",
    );
    cy.wait(500);
    zeldaVideoPage.getVideoPauseButton().click();

    const visibleSelectors = [
      //BODY
      zeldaVideoPage.getVideoPlayButton,
      zeldaVideoPage.getRewindButton,
      zeldaVideoPage.getFastForwardButton,
      zeldaVideoPage.getFullScreenButton,
      zeldaVideoPage.getVolumeMenuButton,
      zeldaVideoPage.getClosedCaptionsButton,
      zeldaVideoPage.getCloseButton,
    ];
    cy.assertExist(visibleSelectors);
    zeldaVideoPage.getVolumeMenuButton().click({ force: true });
    zeldaVideoPage.getMusicVolumeSlider().should("be.visible");
    zeldaVideoPage.getTrainerVolumeSlider().should("be.visible");
    zeldaVideoPage.getVolumeMenuButton().click({ force: true });

    zeldaVideoPage.getFeedFMToggleStationsButton().click();
    const feedFMVisibleSelectors = [
      //BODY
      zeldaVideoPage.getFeedFMToggleStationsButton,
      zeldaVideoPage.getFeedFMPlayButton,
      zeldaVideoPage.getFeedFMSkipButton,
      zeldaVideoPage.getFeedFMPopButton,
      zeldaVideoPage.getFeedFMPopIcon,
      zeldaVideoPage.getFeedFMElectronicButton,
      zeldaVideoPage.getFeedFMElectronicIcon,
      zeldaVideoPage.getFeedFMHipHopButton,
      zeldaVideoPage.getFeedFMHipHopIcon,
      zeldaVideoPage.getFeedFMChillButton,
      zeldaVideoPage.getFeedFMChillIcon,
      zeldaVideoPage.getFeedFMThrowbackButton,
      zeldaVideoPage.getFeedFMThrowbackIcon,
    ];
    cy.assertVisible(feedFMVisibleSelectors);
  });
});
