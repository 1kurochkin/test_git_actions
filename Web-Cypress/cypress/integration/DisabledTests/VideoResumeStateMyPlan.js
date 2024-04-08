import MyPlanPage from "../../support/pageobjects/MyPlanPage.js";
import ClassesPage from "../../support/pageobjects/ClassesPage.js";
import ZeldaVideoPage from "../../support/pageobjects/ZeldaVideoPage.js";
import VideoPage from "../../support/pageobjects/VideoPage.js";

const zeldaVideoPage = new ZeldaVideoPage();
const myPlanPage = new MyPlanPage();
const classesPage = new ClassesPage();
const videoPage = new VideoPage();

function convertToTime(stringTime) {
  const trimTime = stringTime.split(" / ");
  const videoTime = new Date(
    "01 Jan 1970 00:" + trimTime[0] + " GMT",
  ).getTime();
  return videoTime / 1000;
}

describe("Subscribed User - Video Resume State My Plan page", function () {
  it("Subscribed User - Video Resume State My Plan page", function () {
    //User logs into an account with a subscription
    cy.loginSubscribedUser();
    cy.waitForAppPageLoad();

    //User navigates to Classes Page
    classesPage.visitPage();

    //User clicks the first video shown on the classes page
    classesPage.getWorkoutsDurationButton().eq(0).click({ force: true });

    //User clicks the progress slider in the middle of the progress bar
    cy.intercept("POST", "/workouts/v1/video_events").as("getVideoEvents");
    zeldaVideoPage.getProgressSlider().should("be.visible");
    cy.wait("@getVideoEvents", { timeout: 10000 });
    cy.intercept("POST", "/workouts/v1/video_events").as("getVideoEvents");
    zeldaVideoPage.getProgressSlider().click(700, 0, { force: true });
    cy.wait("@getVideoEvents", { timeout: 10000 });
    cy.intercept("POST", "/workouts/v1/video_events").as("getVideoEvents");
    cy.wait("@getVideoEvents", { timeout: 10000 });

    //User sees current time is greater than 120 seconds
    cy.intercept("POST", "/workouts/v1/video_events").as("getVideoEvents");
    zeldaVideoPage.getCurrentTimeText().then(function ($currentTime) {
      expect(convertToTime($currentTime.text())).to.be.greaterThan(120);
    });
    cy.wait("@getVideoEvents", { timeout: 10000 });

    zeldaVideoPage.getCurrentTimeText();
    zeldaVideoPage.getCloseButton().click();

    //User is redirected to the Classes Pane
    cy.url().should("includes", Cypress.env("APP_BASE_URL") + "/classes");

    //User navigates to the My Plan page
    myPlanPage.visitPage();

    //User sees the previously watched video in the Resume State
    //KeepPass for QB-315
    /*myPlanPage.getSeriesTodaysWorkoutTitle().invoke('text').then((text) => {
            expect(text).to.equal(videoTitle);
        });*/

    //User sees resume button on thumbnail for video
    myPlanPage.getResumePlayButton().should("be.visible");

    //User sees the resume time is the same as when the video was exited
    myPlanPage
      .getResumePlayButtonText()
      .invoke("text")
      .then(() => {
        //KeepPass for QB-315
        /*cy.wrap(convertToTime(text1.replace("restart from beginning", "")))
                .should('be.gte', videoTime-10);*/
      });

    //User sees restart button
    myPlanPage.getResumeRestartButton().should("be.visible");

    //User clicks the restart button
    myPlanPage.getResumeRestartButton().click();

    //The previously watched video starts from the beginning
    cy.intercept("POST", "/workouts/v1/video_events").as("getVideoEvents");
    videoPage.getProgressSlider().should("be.visible");
    cy.wait("@getVideoEvents", { timeout: 10000 });
    videoPage.getCurrentTimeText().then(function ($currentTime) {
      cy.wrap(convertToTime($currentTime.text())).should("be.lt", 10);
    });
    cy.intercept("POST", "/workouts/v1/video_events").as("getVideoEvents");
    cy.wait("@getVideoEvents", { timeout: 10000 });
  });
});
