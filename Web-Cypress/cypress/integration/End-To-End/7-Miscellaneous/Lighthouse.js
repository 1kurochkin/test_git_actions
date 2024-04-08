import WorkoutsPage from "../../../support/pageobjects/WorkoutsPage.js";
import CategoriesPage from "../../../support/pageobjects/CategoriesPage.js";
import SeriesPage from "../../../support/pageobjects/SeriesPage.js";
import SeriesDetailsPage from "../../../support/pageobjects/SeriesDetailsPage.js";
import "cypress-audit/commands";

const workoutsPage = new WorkoutsPage();
const categoriesPage = new CategoriesPage();
const seriesPage = new SeriesPage();
const seriesDetailsPage = new SeriesDetailsPage();

const desktopConfig = {
  formFactor: "desktop",
  screenEmulation: { disabled: true },
  throttling: {
    rttMs: 0,
    throughputKbps: 0,
    cpuSlowdownMultiplier: 0.1,
    requestLatencyMs: 0,
    downloadThroughputKbps: 0,
    uploadThroughputKbps: 0,
  },
};

const customThresholds = {
  performance: 0, //Set to KeepPass until benchmark is determined
};

describe("Lighthouse", { taskTimeout: 120000 }, function () {
  it("pvolve.com", function () {
    cy.visit("/");
    cy.lighthouse(customThresholds, desktopConfig);
  });
  it("app.pvolve.com/workouts", function () {
    workoutsPage.visitPage();
    cy.lighthouse(customThresholds, desktopConfig);
  });
  it("app.pvolve.com/categories/{categoryname}", function () {
    categoriesPage.visitCardioBurnPage();
    cy.lighthouse(customThresholds, desktopConfig);
  });
  it("app.pvolve.com/myplan", function () {
    cy.loginSubscribedUser();
    cy.waitForAppPageLoad();
    cy.lighthouse(customThresholds, desktopConfig);
  });
  it("app.pvolve.com/series", function () {
    seriesPage.visitPage();
    cy.lighthouse(customThresholds, desktopConfig);
  });
  it("app.pvolve.com/series/{seriesname}", function () {
    seriesDetailsPage.visitSeriesMadnessChallengePage();
    cy.lighthouse(customThresholds, desktopConfig);
  });
});
