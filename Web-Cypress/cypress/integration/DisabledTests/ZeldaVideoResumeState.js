import ZeldaVideoPage from "../../support/pageobjects/ZeldaVideoPage.js";

const zeldaVideoPage = new ZeldaVideoPage();

function convertToTime(stringTime) {
  const trimTime = stringTime.split(" / ");
  const videoTime = new Date(
    "01 Jan 1970 00:" + trimTime[0] + " GMT",
  ).getTime();
  return videoTime / 1000;
}

describe("Subscribed User - Zelda Video Resume State", function () {
  it("Subscribed User - Zelda Video Resume State", function () {
    //User logs into a subscriber account
    cy.loginSubscribedUser();

    cy.waitForAppPageLoad();

    zeldaVideoPage.visitVideoPage("30-min-upper-body-burn-ACB1120-S1");

    //User clicks progress bar in middle
    cy.intercept("POST", "/workouts/v1/video_events").as("getVideoEvents");
    zeldaVideoPage.getProgressSlider().should("be.visible");
    cy.wait("@getVideoEvents", { timeout: 10000 });
    cy.intercept("POST", "/workouts/v1/video_events").as("getVideoEvents");
    zeldaVideoPage.getProgressSlider().click(700, 0, { force: true });
    cy.wait("@getVideoEvents", { timeout: 10000 });
    cy.intercept("POST", "/workouts/v1/video_events").as("getVideoEvents");
    cy.wait("@getVideoEvents", { timeout: 10000 });

    cy.wait(3500);

    //Time is greater than 690 seconds
    cy.intercept("POST", "/workouts/v1/video_events").as("getVideoEvents");
    zeldaVideoPage.getCurrentTimeText().then(function ($currentTime) {
      cy.log($currentTime.text());
      expect(convertToTime($currentTime.text())).to.be.greaterThan(690);
    });
    cy.wait("@getVideoEvents", { timeout: 10000 });

    //User navigates away and back
    cy.visit(Cypress.env("APP_BASE_URL") + "/workouts");
    zeldaVideoPage.visitVideoPage("30-min-upper-body-burn-ACB1120-S1");

    cy.wait(4750);

    //Time is greater than 690 seconds
    cy.intercept("POST", "/workouts/v1/video_events").as("getVideoEvents");
    zeldaVideoPage.getProgressSlider().should("be.visible");
    cy.wait("@getVideoEvents");
    zeldaVideoPage.getCurrentTimeText().then(function ($currentTime) {
      expect(convertToTime($currentTime.text())).to.be.greaterThan(690);
    });
    zeldaVideoPage.getProgressSlider().click(0, 0, { force: true });
    cy.intercept("POST", "/workouts/v1/video_events").as("getVideoEvents");
    cy.wait("@getVideoEvents", { timeout: 10000 });
  });
});
