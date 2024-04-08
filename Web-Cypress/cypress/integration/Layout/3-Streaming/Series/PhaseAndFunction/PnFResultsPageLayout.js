import PnFResultsPage from "../../../../../support/pageobjects/PnFResultsPage.js";

const pnFResultsPage = new PnFResultsPage();
const sizes = [
  Cypress.env("screenSizes").mobile,
  Cypress.env("screenSizes").largePhone,
  Cypress.env("screenSizes").tablet,
];

describe("PnFResults POM Selector Validation Test", function () {
  it("PnFResults POM Selector Validation Test", function () {
    cy.loginSubscribedUserPhaseFunctionSeries();

    cy.waitForAppPageLoad();

    pnFResultsPage.visitResultsPage();

    const visibleSelectors = [
      pnFResultsPage.getEditMyCycleLink,
      pnFResultsPage.getPhaseHeader,
      pnFResultsPage.getGoToMyPlanLink,
      pnFResultsPage.getMenstrualProgressBar,
      pnFResultsPage.getFollicularProgressBar,
      pnFResultsPage.getOvulatoryProgressBar,
      pnFResultsPage.getLutealProgressBar,
    ];
    cy.assertVisible(visibleSelectors);

    pnFResultsPage
      .getPhaseHeader()
      .invoke("text")
      .then((text) => {
        const phase = text.replace(" phase", "").trim();

        pnFResultsPage.getPhaseMoreAboutLink(phase);
      });
  });

  sizes.forEach((size) => {
    it(
      "Responsive - PnFResults page Validation for  " +
        size.width +
        ", " +
        size.height,
      function () {
        cy.viewport(size.width, size.height);

        cy.loginSubscribedUserPhaseFunctionSeries();

        cy.waitForAppPageLoad();

        pnFResultsPage.visitResultsPage();

        const visibleSelectors = [
          pnFResultsPage.getEditMyCycleLink,
          pnFResultsPage.getPhaseHeader,
          pnFResultsPage.getGoToMyPlanLink,
          pnFResultsPage.getMenstrualProgressBar,
          pnFResultsPage.getFollicularProgressBar,
          pnFResultsPage.getOvulatoryProgressBar,
          pnFResultsPage.getLutealProgressBar,
        ];
        cy.assertVisible(visibleSelectors);

        pnFResultsPage
          .getPhaseHeader()
          .invoke("text")
          .then((text) => {
            const phase = text.replace(" phase", "").trim();

            pnFResultsPage.getPhaseMoreAboutLink(phase);
          });
      },
    );
  });
});
