import PhaseFunction from "../../../../../support/pageobjects/PhaseFunctionsPage.js";

const PnFseriesDetailsPage = new PhaseFunction();
const sizes = [
  Cypress.env("screenSizes").mobile,
  Cypress.env("screenSizes").largePhone,
  Cypress.env("screenSizes").tablet,
];
const exclude = ["appHeader.getShopButton"]; //Responsive only has DropDown Shop button

describe("PnF Series Details Page Layout", function () {
  it("Validates all selectors on the PnF Series Details page", function () {
    cy.loginSubscribedUserPhaseFunctionSeries();

    cy.waitForAppPageLoad();

    PnFseriesDetailsPage.visitPnFSeriesDetailPage();

    cy.waitForAppPageLoad();

    cy.appHeaderSubscribed();

    const visibleSelectors = [
      PnFseriesDetailsPage.getLeaveThisSeriesButton,
      PnFseriesDetailsPage.getUpdateYourCycleLink,
      PnFseriesDetailsPage.getThePhasesSection,
      PnFseriesDetailsPage.getEditPencil,
      PnFseriesDetailsPage.getThePhasesText,
      PnFseriesDetailsPage.getMenstrualIcon,
      PnFseriesDetailsPage.getMenstrualTextLink,
      PnFseriesDetailsPage.getFollicularIcon,
      PnFseriesDetailsPage.getFollicularTextLink,
      PnFseriesDetailsPage.getOvulatoryIcon,
      PnFseriesDetailsPage.getOvulatoryTextLink,
      PnFseriesDetailsPage.getLutealIcon,
      PnFseriesDetailsPage.getLutealTextLink,
      PnFseriesDetailsPage.getContributingText,
      PnFseriesDetailsPage.getContributingNameText1,
      PnFseriesDetailsPage.getContributingPhoto1,
      PnFseriesDetailsPage.getContributingText1,
      PnFseriesDetailsPage.getContributingNameText2,
      PnFseriesDetailsPage.getContributingPhoto2,
      PnFseriesDetailsPage.getContributingText2,
      PnFseriesDetailsPage.getContributingNameText3,
      PnFseriesDetailsPage.getContributingPhoto3,
      PnFseriesDetailsPage.getContributingText3,
      PnFseriesDetailsPage.getAdditionalReadingLink,
    ];
    cy.assertVisible(visibleSelectors);

    cy.appFooter();
  });

  sizes.forEach((size) => {
    it(
      "Responsive - Ovulatory More About Page Validation for " +
        size.width +
        ", " +
        size.height,
      function () {
        cy.viewport(size.width, size.height);

        cy.loginSubscribedUserPhaseFunctionSeries();

        cy.waitForAppPageLoad();

        PnFseriesDetailsPage.visitPnFSeriesDetailPage();

        cy.waitForAppPageLoad();

        cy.appHeaderSubscribed(exclude);

        const visibleSelectors = [
          PnFseriesDetailsPage.getLeaveThisSeriesButton,
          PnFseriesDetailsPage.getUpdateYourCycleLink,
          PnFseriesDetailsPage.getThePhasesSection,
          PnFseriesDetailsPage.getEditPencil,
          PnFseriesDetailsPage.getThePhasesText,
          PnFseriesDetailsPage.getMenstrualIcon,
          PnFseriesDetailsPage.getMenstrualTextLink,
          PnFseriesDetailsPage.getFollicularIcon,
          PnFseriesDetailsPage.getFollicularTextLink,
          PnFseriesDetailsPage.getOvulatoryIcon,
          PnFseriesDetailsPage.getOvulatoryTextLink,
          PnFseriesDetailsPage.getLutealIcon,
          PnFseriesDetailsPage.getLutealTextLink,
          PnFseriesDetailsPage.getContributingText,
          PnFseriesDetailsPage.getContributingNameText1,
          PnFseriesDetailsPage.getContributingPhoto1,
          PnFseriesDetailsPage.getContributingText1,
          PnFseriesDetailsPage.getContributingNameText2,
          PnFseriesDetailsPage.getContributingPhoto2,
          PnFseriesDetailsPage.getContributingText2,
          PnFseriesDetailsPage.getContributingNameText3,
          PnFseriesDetailsPage.getContributingPhoto3,
          PnFseriesDetailsPage.getContributingText3,
          PnFseriesDetailsPage.getAdditionalReadingLink,
        ];
        cy.assertVisible(visibleSelectors);

        cy.responsiveAppFooter();
      },
    );
  });
});
