import PnFFoods from "../../../../../support/pageobjects/PnFFoodsPage.js";

const sizes = [
  Cypress.env("screenSizes").mobile,
  Cypress.env("screenSizes").largePhone,
  Cypress.env("screenSizes").tablet,
];
const exclude = ["appHeader.getShopButton"]; //Responsive only has DropDown Shop button
const pnfFoods = new PnFFoods();
const phase = "luteal";
let firstFoodText = "";

describe("Luteal Foods POM Selector Validation Test", function () {
  it("Validates all of the selectors in the Luteal Foods POM", function () {
    cy.loginSubscribedUserPhaseFunction();

    cy.waitForAppPageLoad();

    pnfFoods.visitFoodsPage(phase);
    cy.waitForAppPageLoad();
    cy.scrollTo("top");

    cy.appHeaderSubscribed();

    //non-phase specific visible elements
    const visibleSelectors = [
      pnfFoods.getFoodsHeaderText,
      pnfFoods.getFoodsIcon,
      pnfFoods.getFoodsDescriptionText,
      pnfFoods.getRightArrowLink,
      pnfFoods.getLeftArrowLink,
      pnfFoods.getCarbsTab,
      pnfFoods.getProteinsTab,
      pnfFoods.getFatsTab,
      pnfFoods.getExtrasTab,
      pnfFoods.getAvoidTab,
      pnfFoods.getFirstHeaderText,
      pnfFoods.getFoodsPieChartImage,
      pnfFoods.getHowUseToolTipHeaderText,
      pnfFoods.getWeightLossHeaderText,
      pnfFoods.getWeightLossContentText,
      pnfFoods.getDownloadPDFLink,
    ];
    cy.assertVisible(visibleSelectors);

    //phase specific visible elements
    pnfFoods.getBackgroundColor(phase).should("be.visible");
    pnfFoods.getDetailsLink(phase).should("be.visible");
    pnfFoods.getLibraryLink(phase).should("be.visible");
    pnfFoods.getMealsLink(phase).should("be.visible");

    //Hover mouse over tooltip
    pnfFoods.getToolTipContentText().should("not.be.visible");
    pnfFoods
      .getHowUseToolTipHeaderText()
      .scrollIntoView({ offset: { top: -150, left: 0 } });
    pnfFoods.getHowUseToolTipHeaderText().trigger("mouseover");

    //verifies the content shown in the tabs is changing
    pnfFoods
      .getFirstHeaderText()
      .invoke("text")
      .then((text) => {
        firstFoodText = text;
      });

    pnfFoods.getAvoidTab().click();
    pnfFoods
      .getFirstHeaderText()
      .invoke("text")
      .then((text) => {
        cy.wrap(text).should("not.equal", firstFoodText);
        firstFoodText = text;
      });

    pnfFoods.getExtrasTab().click();
    pnfFoods
      .getFirstHeaderText()
      .invoke("text")
      .then((text) => {
        cy.wrap(text).should("not.equal", firstFoodText);
        firstFoodText = text;
      });

    pnfFoods.getFatsTab().click();
    pnfFoods
      .getFirstHeaderText()
      .invoke("text")
      .then((text) => {
        cy.wrap(text).should("not.equal", firstFoodText);
        firstFoodText = text;
      });

    pnfFoods.getProteinsTab().click();
    pnfFoods
      .getFirstHeaderText()
      .invoke("text")
      .then((text) => {
        cy.wrap(text).should("not.equal", firstFoodText);
        firstFoodText = text;
      });

    pnfFoods.getCarbsTab().click();
    pnfFoods
      .getFirstHeaderText()
      .invoke("text")
      .then((text) => {
        cy.wrap(text).should("not.equal", firstFoodText);
        firstFoodText = text;
      });

    cy.appFooter();
  });

  sizes.forEach((size) => {
    it(
      "Responsive - Luteal Foods Page Validation for " +
        size.width +
        ", " +
        size.height,
      function () {
        cy.viewport(size.width, size.height);

        cy.loginSubscribedUserPhaseFunction();

        cy.waitForAppPageLoad();

        pnfFoods.visitFoodsPage(phase);
        cy.waitForAppPageLoad();

        cy.appHeaderSubscribed(exclude);

        //non-phase specific visible elements
        const visibleSelectors = [
          pnfFoods.getFoodsHeaderText,
          pnfFoods.getFoodsIcon,
          pnfFoods.getFoodsDescriptionText,
          pnfFoods.getFirstHeaderText,
          pnfFoods.getFoodsPieChartImage,
          pnfFoods.getHowUseToolTipHeaderText,
          pnfFoods.getWeightLossHeaderText,
          pnfFoods.getWeightLossContentText,
          pnfFoods.getDownloadPDFLink,
        ];
        cy.assertVisible(visibleSelectors);

        const existingSelectors = [
          pnfFoods.getRightArrowLink,
          pnfFoods.getLeftArrowLink,
          pnfFoods.getCarbsTab,
          pnfFoods.getProteinsTab,
          pnfFoods.getFatsTab,
          pnfFoods.getExtrasTab,
        ];
        cy.assertExist(existingSelectors);

        //phase specific visible elements
        pnfFoods.getBackgroundColor(phase).should("be.visible");
        pnfFoods.getDetailsLink(phase).should("be.visible");
        pnfFoods.getLibraryLink(phase).should("be.visible");
        pnfFoods.getMealsLink(phase).should("be.visible");

        //Hover mouse over tooltip
        pnfFoods.getToolTipContentText().should("not.be.visible");
        pnfFoods
          .getHowUseToolTipHeaderText()
          .scrollIntoView({ offset: { top: -150, left: 0 } });
        pnfFoods.getHowUseToolTipHeaderText().trigger("mouseover");

        //verifies the content shown in the tabs is changing
        pnfFoods
          .getFirstHeaderText()
          .invoke("text")
          .then((text) => {
            firstFoodText = text;
          });

        pnfFoods.getExtrasTab().click({ force: true });
        pnfFoods
          .getFirstHeaderText()
          .invoke("text")
          .then((text) => {
            cy.wrap(text).should("not.equal", firstFoodText);
            firstFoodText = text;
          });

        pnfFoods.getFatsTab().click({ force: true });
        pnfFoods
          .getFirstHeaderText()
          .invoke("text")
          .then((text) => {
            cy.wrap(text).should("not.equal", firstFoodText);
            firstFoodText = text;
          });

        pnfFoods.getProteinsTab().click({ force: true });
        pnfFoods
          .getFirstHeaderText()
          .invoke("text")
          .then((text) => {
            cy.wrap(text).should("not.equal", firstFoodText);
            firstFoodText = text;
          });

        pnfFoods.getCarbsTab().click({ force: true });
        pnfFoods
          .getFirstHeaderText()
          .invoke("text")
          .then((text) => {
            cy.wrap(text).should("not.equal", firstFoodText);
            firstFoodText = text;
          });

        //Footer
        cy.responsiveAppFooter();
      },
    );
  });
});
