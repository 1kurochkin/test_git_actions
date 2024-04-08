import SettingsPage from "../../../../support/pageobjects/SettingsPage.js";
import CommunicationsPage from "../../../../support/pageobjects/CommunicationsPage.js";
import ZeldaVideoPage from "../../../../support/pageobjects/ZeldaVideoPage.js";

const settingsPage = new SettingsPage();
const communicationsPage = new CommunicationsPage();
const zeldaVideoPage = new ZeldaVideoPage();

describe("Subscribed User - Settings and Communication Disabled", function () {
  it("Subscribed User - Settings and Communication Disabled", function () {
    //Login and navigate to Settings Page
    cy.loginSubscribedUser();
    cy.waitForAppPageLoad();

    settingsPage.visitSettingsPage();

    //Toggle Closed Captions to off
    cy.get('div[class*="switch-toggle-wrapper"]')
      .eq(0)
      .then(($div) => {
        if ($div.hasClass("switch-toggle-wrapper--right")) {
          cy.intercept("PUT", "/user/v1/attribute/user").as(
            "getAttributeToggle",
          );
          settingsPage.getBodyToggleClosedCaptionsButton().click();
          cy.wait("@getAttributeToggle");
        }
      });

    //Toggle FeedFM to off
    cy.get('div[class*="switch-toggle-wrapper"]')
      .eq(1)
      .then(($div) => {
        if ($div.hasClass("switch-toggle-wrapper--right")) {
          cy.intercept("PUT", "/user/v1/attribute/user").as(
            "getAttributeToggle",
          );
          settingsPage.getBodyToggleFeedFMButton().click();
          cy.wait("@getAttributeToggle");
        }
      });

    settingsPage.getBodySideNavCommunicationsLink().click();

    //Toggle ReceiveEmails to off
    cy.get('div[class*="switch-toggle-wrapper"]').then(($div) => {
      if ($div.hasClass("switch-toggle-wrapper--right")) {
        communicationsPage.getBodyToggleReceiveEmailsButton().click();
      }
    });

    //Navigate to a workouts video
    //Check if FeedFM and closed captions do not exist
    zeldaVideoPage.visitVideoPage("30-min-upper-body-burn-ACB1120-S1");
    zeldaVideoPage.getFeedFMToggleStationsButton().should("not.exist");
    zeldaVideoPage.getClosedCaptionsButton().should("not.exist");

    //Navigate to Communications Page and check if email option is disabled
    zeldaVideoPage.getCloseButton().click();
    communicationsPage.visitCommunicationsPage();
    cy.get('div[class*="switch-toggle-wrapper--left"]').should("exist");

    settingsPage.visitSettingsPage();

    //Toggle FeedFM back to on, if it is off.
    cy.get('div[class*="switch-toggle-wrapper"]')
      .eq(1)
      .then(($div) => {
        if ($div.hasClass("switch-toggle-wrapper--left")) {
          cy.intercept("PUT", "/user/v1/attribute/user").as(
            "getAttributeToggle",
          );
          settingsPage.getBodyToggleFeedFMButton().click();
          cy.wait("@getAttributeToggle");
        }
      });
  });
});
