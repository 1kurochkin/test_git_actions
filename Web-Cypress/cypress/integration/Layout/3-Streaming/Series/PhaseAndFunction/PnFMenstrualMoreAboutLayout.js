import PnFMoreAbout from "../../../../../support/pageobjects/PnFMoreAboutPage.js";

const sizes = [
  Cypress.env("screenSizes").mobile,
  Cypress.env("screenSizes").largePhone,
  Cypress.env("screenSizes").tablet,
];
const exclude = ["appHeader.getShopButton"]; //Responsive only has DropDown Shop button
const pnfMoreAbout = new PnFMoreAbout();
const phase = "menstrual";

describe("Menstrual More About POM Selector Validation Test", function () {
  it("Validates all of the selectors in the Menstrual More About POM", function () {
    cy.loginSubscribedUserPhaseFunctionSeries();

    cy.waitForAppPageLoad();

    pnfMoreAbout.visitMoreAboutPage(phase);
    cy.waitForAppPageLoad();
    cy.scrollTo("top");

    cy.appHeaderSubscribed();

    //non-phase specific visible elements
    const visibleSelectors = [
      pnfMoreAbout.getMoreAboutHeaderText,
      pnfMoreAbout.getMoreAboutIcon,
      pnfMoreAbout.getMenstrualProgressBar,
      pnfMoreAbout.getFollicularProgressBar,
      pnfMoreAbout.getOvulatoryProgressBar,
      pnfMoreAbout.getLutealProgressBar,
      pnfMoreAbout.getPhaseDaysText,
      pnfMoreAbout.getPencilIcon,
      pnfMoreAbout.getRightArrowLink,
      pnfMoreAbout.getLeftArrowLink,
      pnfMoreAbout.getHormonesHeaderText,
      pnfMoreAbout.getHormonesBodyText,
      pnfMoreAbout.getHormonesGraphImage,
      pnfMoreAbout.getFirstSeparatorMindIcon,
      pnfMoreAbout.getMindHeaderText,
      pnfMoreAbout.getMindBodyText,
      pnfMoreAbout.getSecondSeparatorMovementIcon,
      pnfMoreAbout.getMovementHeaderText,
      pnfMoreAbout.getMovementBodyText,
      pnfMoreAbout.getMovementTipHeaderText,
      pnfMoreAbout.getMovementTipBodyText,
      pnfMoreAbout.getPhaseLibraryCarouselNextButton,
      pnfMoreAbout.getPhaseLibraryCarouselBackButton,
      pnfMoreAbout.getPhaseLibraryFirstWorkoutVideoLink,
      pnfMoreAbout.getPhaseLibraryFirstWorkoutDetailsPageLink,
      pnfMoreAbout.getPhaseLibraryFirstWorkoutContent,
      pnfMoreAbout.getPhaseLibraryFirstWorkoutFavoriteButton,
      pnfMoreAbout.getThirdSeparatorMealsIcon,
      pnfMoreAbout.getMealsHeaderText,
      pnfMoreAbout.getMealsBodyText,
      pnfMoreAbout.getFoodsToAvoidHeaderText,
      pnfMoreAbout.getFoodsToAvoidBodyText,
      pnfMoreAbout.getSourcesLink,
    ];
    cy.assertVisible(visibleSelectors);

    //phase specific visible elements
    pnfMoreAbout.getBackgroundColor(phase).should("be.visible");
    pnfMoreAbout.getPhaseLibrarySeeAllLink(phase).should("be.visible");
    pnfMoreAbout.getFoodsLink(phase).should("be.visible");
    pnfMoreAbout.getMealsLink(phase).should("be.visible");

    cy.appFooter();
  });

  sizes.forEach((size) => {
    it(
      "Responsive - Menstrual More About Page Validation for " +
        size.width +
        ", " +
        size.height,
      function () {
        cy.viewport(size.width, size.height);

        cy.loginSubscribedUserPhaseFunctionSeries();

        cy.waitForAppPageLoad();

        pnfMoreAbout.visitMoreAboutPage(phase);
        cy.waitForAppPageLoad();

        cy.appHeaderSubscribed(exclude);

        //non-phase specific visible elements
        const visibleSelectors = [
          pnfMoreAbout.getMoreAboutHeaderText,
          pnfMoreAbout.getMoreAboutIcon,
          pnfMoreAbout.getMenstrualProgressBar,
          pnfMoreAbout.getFollicularProgressBar,
          pnfMoreAbout.getOvulatoryProgressBar,
          pnfMoreAbout.getLutealProgressBar,
          pnfMoreAbout.getPhaseDaysText,
          pnfMoreAbout.getPencilIcon,
          pnfMoreAbout.getRightArrowLink,
          pnfMoreAbout.getLeftArrowLink,
          pnfMoreAbout.getHormonesHeaderText,
          pnfMoreAbout.getHormonesBodyText,
          pnfMoreAbout.getHormonesGraphImage,
          pnfMoreAbout.getFirstSeparatorMindIcon,
          pnfMoreAbout.getMindHeaderText,
          pnfMoreAbout.getMindBodyText,
          pnfMoreAbout.getSecondSeparatorMovementIcon,
          pnfMoreAbout.getMovementHeaderText,
          pnfMoreAbout.getMovementBodyText,
          pnfMoreAbout.getMovementTipHeaderText,
          pnfMoreAbout.getMovementTipBodyText,
          pnfMoreAbout.getPhaseLibraryCarouselNextButton,
          pnfMoreAbout.getPhaseLibraryCarouselBackButton,
          pnfMoreAbout.getThirdSeparatorMealsIcon,
          pnfMoreAbout.getMealsHeaderText,
          pnfMoreAbout.getMealsBodyText,
          pnfMoreAbout.getFoodsToAvoidHeaderText,
          pnfMoreAbout.getFoodsToAvoidBodyText,
          pnfMoreAbout.getSourcesLink,
        ];
        cy.assertVisible(visibleSelectors);

        const existSelectors = [
          pnfMoreAbout.getPhaseLibraryFirstWorkoutVideoLink,
          pnfMoreAbout.getPhaseLibraryFirstWorkoutDetailsPageLink,
          pnfMoreAbout.getPhaseLibraryFirstWorkoutContent,
          pnfMoreAbout.getPhaseLibraryFirstWorkoutFavoriteButton,
        ];
        cy.assertExist(existSelectors);

        //phase specific visible elements
        pnfMoreAbout.getBackgroundColor(phase).should("be.visible");
        pnfMoreAbout.getPhaseLibrarySeeAllLink(phase).should("be.visible");
        pnfMoreAbout.getFoodsLink(phase).should("be.visible");
        pnfMoreAbout.getMealsLink(phase).should("be.visible");

        //Footer
        cy.responsiveAppFooter();
      },
    );
  });
});
