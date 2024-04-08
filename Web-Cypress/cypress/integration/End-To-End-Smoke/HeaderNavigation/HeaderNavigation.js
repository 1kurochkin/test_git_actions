import AppHeader from "../../../support/pageobjects/AppHeader";
import AllureMetadataManager from "../../../support/utils/AllureMetadataManager";
import TAGS from "../../../support/utils/tags";

const appHeader = new AppHeader();

const issueId = "@STREAM-2679";
const homeTmsId = "@C-8044";
const seriesTmsId = "@C-8048";
const classesTmsId = "@C-8049";
const liveTmsId = "@C-8053";
const shopTmsId = "@C-7680";
const locationsTmsId = "@C-7681";
const franchiseTmsId = "@C-7682";

describe("Header Navigation Test Suite", function () {
  it(
    "Header Navigation Home " + issueId + " " + homeTmsId,
    { tags: [TAGS.SMOKE] },
    function () {
      cy.setMetadataToAllureReport(createAllureMetadata(homeTmsId));

      const header = {
        callMethod: () => appHeader.getHomeButton(),
        url: Cypress.env("APP_BASE_URL") + "/home",
      };
      validateHeaderNavigation(header);
    },
  );

  it(
    "Header Navigation Series " + issueId + " " + seriesTmsId,
    { tags: [TAGS.SMOKE] },
    function () {
      cy.setMetadataToAllureReport(createAllureMetadata(seriesTmsId));

      const header = {
        callMethod: () => appHeader.getSeriesButton(),
        url: Cypress.env("APP_BASE_URL") + "/series",
      };
      validateHeaderNavigation(header);
    },
  );

  it(
    "Header Navigation Classes " + issueId + " " + classesTmsId,
    { tags: [TAGS.SMOKE] },
    function () {
      cy.setMetadataToAllureReport(createAllureMetadata(classesTmsId));

      const header = {
        callMethod: () => appHeader.getClassesButton(),
        url: Cypress.env("APP_BASE_URL") + "/classes",
      };
      validateHeaderNavigation(header);
    },
  );

  it(
    "Header Navigation Live " + issueId + " " + liveTmsId,
    { tags: [TAGS.SMOKE] },
    function () {
      cy.setMetadataToAllureReport(createAllureMetadata(liveTmsId));

      const header = {
        callMethod: () => appHeader.getLiveButton(),
        url: Cypress.env("APP_BASE_URL") + "/live",
      };
      validateHeaderNavigation(header);
    },
  );

  it(
    "Header Navigation Shop " + issueId + " " + shopTmsId,
    { tags: [TAGS.SMOKE] },
    function () {
      cy.setShopifyCookie();
      cy.setMetadataToAllureReport(createAllureMetadata(shopTmsId));

      const header = {
        callMethod: () => appHeader.getShopButton(),
        urlPattern: new RegExp(/^.+\/collections\/equipment$/),
      };
      validateHeaderNavigation(header);
    },
  );

  it(
    "Header Navigation Locations " + issueId + " " + locationsTmsId,
    { tags: [TAGS.SMOKE] },
    function () {
      cy.setMetadataToAllureReport(createAllureMetadata(locationsTmsId));

      const header = {
        callMethod: () => appHeader.getLocationsButton(),
        url: Cypress.env("APP_BASE_URL") + "/locations",
      };
      validateHeaderNavigation(header);
    },
  );

  it(
    "Header Navigation Franchise " + issueId + " " + franchiseTmsId,
    { tags: [TAGS.SMOKE] },
    function () {
      cy.setMetadataToAllureReport(createAllureMetadata(franchiseTmsId));

      const header = {
        callMethod: () => appHeader.getFranchiseButton(),
        url: "pvolvefranchise.com/",
        newTab: true,
      };
      validateHeaderNavigation(header);
    },
  );

  function validateHeaderNavigation(header) {
    cy.loginRechargeUser();
    cy.assertVisible([appHeader.getHomeButton()]);
    if (header.newTab && header.newTab === true) {
      cy.window().then((win) => {
        cy.stub(win, "open").as("windowOpen");
      });
      header.callMethod().click({ force: true });
      cy.get("@windowOpen").should("be.calledWithMatch", header.url);
      cy.go("back");
    } else if (header.urlPattern) {
      header.callMethod().click({ force: true });
      cy.assertUrlPattern(header.urlPattern);
    } else {
      header.callMethod().click({ force: true });
      cy.assertUrl(header.url);
    }
  }

  function createAllureMetadata(tms) {
    const metadataManager = new AllureMetadataManager();
    metadataManager.setIssue(issueId);
    metadataManager.setTMS(tms);
    metadataManager.setOwner("Mauro Gonzalez");
    return metadataManager;
  }
});
