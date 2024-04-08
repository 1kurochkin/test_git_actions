/* eslint-disable prefer-const */
import VideoPage from "../../support/pageobjects/VideoPage.js";
import MyPlanPage from "../../support//pageobjects/MyPlanPage.js";
import ZeldaVideoPage from "../../support/pageobjects/ZeldaVideoPage.js";

const videoPage = new VideoPage();
const myPlanPage = new MyPlanPage();
const zeldaVideoPage = new ZeldaVideoPage();

const timeArray = [
  10000, 11000, 12000, 13000, 14000, 15000, 16000, 17000, 18000, 19000, 20000,
];

function getRemainingTime(stringTime) {
  const trimTime = stringTime.split(" / ");
  const videoTime = new Date(
    "01 Jan 1970 00:" + trimTime[0] + " GMT",
  ).getTime();
  const totalVideoTime = new Date(
    "01 Jan 1970 00:" + trimTime[1] + " GMT",
  ).getTime();
  const timeRemaining = totalVideoTime - videoTime;
  return timeRemaining;
}

function isItTime() {
  zeldaVideoPage.getCurrentTimeText().then(function ($currentTime) {
    let timeText = $currentTime.text();
    let remainingTime = getRemainingTime(timeText);
    if (timeArray.includes(remainingTime, { log: false })) {
      cy.get("video").then(($play) => {
        $play[0].playbackRate = 1;
        $play[0].play();
      });
    } else {
      cy.wait(500, { log: false });
      isItTime();
    }
  });
}

/**
 * Navigates to an entered video and waits for it to complete.
 *
 * ex: cy.videoComplete('ankle-and-foot-modifications-MOD1021-S4')
 *
 * Can handle an array of inputted videos
 * it will complete each video in order of them entered
 *
 * Note: must call this command from an app side page.
 */
Cypress.Commands.add("videoComplete", function (videos) {
  let counter = 0;

  videos.forEach(($video) => {
    videoPage.visitVideoPage($video);

    counter = counter + 1;

    cy.intercept("POST", "/workouts/v1/video_events", (req) => {
      if (
        JSON.stringify(req.body).includes("VIDEO_END") ||
        JSON.stringify(req.body).includes("VIDEO_PAUSE")
      ) {
        req.alias = "videoEnd" + $video;
      } else {
        req.alias = "getVideoEvents";
      }
    });
    videoPage.getProgressSlider().should("be.visible");
    cy.wait("@getVideoEvents", { timeout: 10000 });

    cy.get("video").then(($play) => {
      $play[0].playbackRate = 10;
      $play[0].play();
    });

    isItTime();

    cy.wait("@videoEnd" + $video, { timeout: 35000 });

    cy.wait(3500);

    myPlanPage.visitPage();
    cy.waitForAppPageLoad();
  });
});

/**
 * Sends the network request for the entered workout_ID to be completed
 *   on the SubscribedUserVideoComplete account
 *   (pvolvetestautomation+[env]_009@gmail.com)
 *
 * ex: cy.videoCompleteV2('6dyJd7SYga5Ef13yAus9dZ')
 *
 * Can handle an array of inputted videos
 * it will complete each video in order of them entered
 *
 * Note: workout_ID is different from the SKU, the easiest way to obtain a
 *   workout_ID is to watch a video on the site and look into the video_events
 *   network requests and search the payload for the workout_id.
 */
Cypress.Commands.add("videoCompleteV2", function (workout_IDs) {
  let clientId = null;
  let username = null;
  let password = null;
  let videoUrl = null;
  if (Cypress.env("APP_BASE_URL") === "https://app.qa.pvolve.com") {
    clientId = "i2jhefs78h4iubmrho7qpk65";
    username = "pvolvetestautomation+qa_009@gmail.com";
    password = "Password1234!";
    videoUrl = "https://api.qa.pvolve.com/workouts/v1/completed_workout";
  } else if (Cypress.env("APP_BASE_URL") === "https://app.pvolve.com") {
    clientId = "2i4bdkoko77l3tso6v06dp8pl";
    username = "pvolvetestautomation+prod_009@gmail.com";
    password = "Password1234!";
    videoUrl = "https://api.pvolve.com/workouts/v1/completed_workout";
  }
  workout_IDs.forEach(($workout_ID) => {
    cy.request({
      method: "POST",
      url: "https://cognito-idp.us-east-1.amazonaws.com/",
      headers: {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.InitiateAuth",
      },
      body: {
        ClientId: clientId,
        AuthFlow: "USER_PASSWORD_AUTH",
        AuthParameters: {
          USERNAME: username,
          PASSWORD: password,
        },
      },
    }).then((response) => {
      let idToken = response.body.AuthenticationResult.IdToken;

      cy.request({
        method: "POST",
        url: videoUrl,
        headers: {
          Authorization: "Bearer " + idToken,
          "Content-Type": "text/plain",
        },
        body: {
          workout_id: $workout_ID,
        },
      });
    });
  });
});
