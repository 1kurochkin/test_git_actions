import ZeldaVideoPage from "../../../../support/pageobjects/ZeldaVideoPage.js";

const zeldaVideoPage = new ZeldaVideoPage();

let beforeCurrentTime = 0;
let afterCurrentTime = 0;

function convertToTime(stringTime) {
  const trimTime = stringTime.split(" / ");
  const videoTime = new Date(
    "01 Jan 1970 00:" + trimTime[0] + " GMT",
  ).getTime();
  return videoTime / 1000;
}

describe("Subscribed User - Zelda FeedFM Functionality and Layout", function () {
  it("Subscribed User - Zelda FeedFM Functionality and Layout", function () {
    //Login and navigate to workout video
    cy.loginSubscribedUser();
    cy.waitForAppPageLoad();
    zeldaVideoPage.visitVideoPage("30-min-upper-body-burn-ACB1120-S1");

    //Play, Pause, and Skip show
    zeldaVideoPage.getFeedFMPlayButton().should("be.visible");
    zeldaVideoPage.getFeedFMSkipButton().should("be.visible");
    zeldaVideoPage.getFeedFMPlayButton().click();
    zeldaVideoPage.getFeedFMPauseButton().should("be.visible");

    //Interacting with FeedFM pauses the video
    cy.wait(1000);
    zeldaVideoPage.getFeedFMToggleStationsButton().click();

    zeldaVideoPage.getCurrentTimeText().then(function ($currentTime) {
      beforeCurrentTime = $currentTime.text();
    });

    cy.wait(3000); //Wait 3 seconds to make sure its paused

    zeldaVideoPage.getCurrentTimeText().then(function ($currentTime) {
      afterCurrentTime = $currentTime.text();
      expect(convertToTime(afterCurrentTime)).to.equal(
        convertToTime(beforeCurrentTime),
      );
    });

    //All stations show
    zeldaVideoPage.getFeedFMPopButton().should("be.visible");
    zeldaVideoPage.getFeedFMElectronicButton().should("be.visible");
    zeldaVideoPage.getFeedFMHipHopButton().should("be.visible");
    zeldaVideoPage.getFeedFMChillButton().should("be.visible");
    zeldaVideoPage.getFeedFMThrowbackButton().should("be.visible");

    //All station icons show
    zeldaVideoPage.getFeedFMPopIcon().should("be.visible");
    zeldaVideoPage.getFeedFMElectronicIcon().should("be.visible");
    zeldaVideoPage.getFeedFMHipHopIcon().should("be.visible");
    zeldaVideoPage.getFeedFMChillIcon().should("be.visible");
    zeldaVideoPage.getFeedFMThrowbackIcon().should("be.visible");

    //Now Playing text functionality
    zeldaVideoPage.getFeedFMPopNowPlayingText().should("be.visible");
    zeldaVideoPage.getFeedFMChillButton().click();
    zeldaVideoPage.getFeedFMPopNowPlayingText().should("not.exist");
    zeldaVideoPage.getFeedFMChillNowPlayingText().should("be.visible");
  });
});
