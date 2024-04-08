import AppHeader from "../../../support/pageobjects/AppHeader";
import ClassesPanePage from "../../../support/pageobjects/ClassesPanePage";
import HomePage from "../../../support/pageobjects/HomePage";
import VideoPage from "../../../support/pageobjects/VideoPage";
import AllureMetadataManager from "../../../support/utils/AllureMetadataManager";
import TAGS from "../../../support/utils/tags.js";

const homePage = new HomePage();
const appHeader = new AppHeader();
const classesPanePage = new ClassesPanePage();
const videoPage = new VideoPage();

const issueId = "@STREAM-2820";
const tmsId = "@C-7690";

const timeToPlayVideoInSeconds = 1.5;
let video;

describe("Home Test Suite", function () {
  it(
    " Verify User is able to reproduce a workout from Workout Detail Pane " +
      issueId +
      " " +
      tmsId,
    { tags: [TAGS.SMOKE] },
    function () {
      cy.loginRechargeUser();
      cy.assertVisible([
        appHeader.getHomeButton(),
        homePage.getFirstClassTitle(),
      ]);
      const baseUrl = Cypress.env("APP_BASE_URL");
      const expectedUrlPattern = new RegExp(
        `^${baseUrl}/classes/video/[a-zA-Z0-9-]+(?:-[a-zA-Z0-9]+)*$`,
      );
      cy.assertUrl(baseUrl + "/home");

      homePage.getFirstClassTitle().click({ force: true });
      cy.assertExist([
        classesPanePage.getPlayVideoButton(),
        classesPanePage.getClosePaneButton(),
        classesPanePage.getDateOfReleaseButton(),
        classesPanePage.getFavoriteButton(),
        classesPanePage.getTrainersPicture(),
        classesPanePage.getTrainersName(),
      ]);

      classesPanePage.getPlayVideoButton().click({ force: true });
      cy.assertUrlPattern(expectedUrlPattern); //validates url follows video player url pattern
      cy.assertVisible([videoPage.getPauseButton()]);
      cy.assertVideoReachedSeconds(
        videoPage.getVideo(),
        timeToPlayVideoInSeconds,
      );
      videoPage.getVideo().then(($video) => {
        video = $video[0];
      });
    },
  );

  this.beforeEach(() => {
    cy.setMetadataToAllureReport(createAllureMetadata());
  });

  this.afterEach(() => {
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  });

  function createAllureMetadata() {
    const metadataManager = new AllureMetadataManager();
    metadataManager.setIssue(issueId);
    metadataManager.setTMS(tmsId);
    metadataManager.setOwner("Mauro Gonzalez");
    return metadataManager;
  }
});
