import SettingsPage from "../../../../support/pageobjects/SettingsPage.js";
import CommunicationsPage from "../../../../support/pageobjects/CommunicationsPage.js";
import ZeldaVideoPage from "../../../../support/pageobjects/ZeldaVideoPage.js";

const settingsPage = new SettingsPage();
const communicationsPage = new CommunicationsPage();
const zeldaVideoPage = new ZeldaVideoPage();

describe("Subscribed User - Settings and Communication Enabled", function () {
  it("Subscribed User - Settings and Communication Enabled", function () {
    //Login and navigate to Settings Page
    cy.loginSubscribedUser();
    cy.waitForAppPageLoad();

    settingsPage.visitSettingsPage();

    //Toggle Closed Captions to on
    cy.get('div[class*="switch-toggle-wrapper"]')
      .eq(0)
      .then(($div) => {
        if ($div.hasClass("switch-toggle-wrapper--left")) {
          cy.intercept("PUT", "/user/v1/attribute/user").as(
            "getAttributeToggle",
          );
          settingsPage.getBodyToggleClosedCaptionsButton().click();
          cy.wait("@getAttributeToggle");
        }
      });

    //Toggle FeedFM to on
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

    settingsPage.getBodySideNavCommunicationsLink().click();

    //Toggle ReceiveEmails to off
    cy.get('div[class*="switch-toggle-wrapper"]').then(($div) => {
      if ($div.hasClass("switch-toggle-wrapper--left")) {
        communicationsPage.getBodyToggleReceiveEmailsButton().click();
      }
    });

    //Navigate to workouts page and check if FeedFM exists
    zeldaVideoPage.visitVideoPage("30-min-upper-body-burn-ACB1120-S1");
    zeldaVideoPage.getFeedFMToggleStationsButton().should("exist");

    //Closed Captions
    zeldaVideoPage.getClosedCaptionsButton().should("be.visible");
    zeldaVideoPage.getClosedCaptionsButton().click();

    //Navigate to Communications Page and check if email option is enabled
    zeldaVideoPage.getCloseButton().click();
    communicationsPage.visitCommunicationsPage();
    cy.get('div[class*="switch-toggle-wrapper--right"]').should("exist");

    //Navigate to Settings and turn Closed Captions back to off
    settingsPage.visitSettingsPage();
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
  });
});
