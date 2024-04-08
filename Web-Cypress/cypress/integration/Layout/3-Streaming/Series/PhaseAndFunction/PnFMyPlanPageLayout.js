import MyPlanPage from "../../../../../support/pageobjects/MyPlanPage";

const myPlanPage = new MyPlanPage();
const sizes = [
  Cypress.env("screenSizes").mobile,
  Cypress.env("screenSizes").largePhone,
  Cypress.env("screenSizes").tablet,
];
const exclude = ["appHeader.getShopButton"]; //Responsive only has DropDown Shop button

describe("PnF section in MyPlan POM Selector Validation Test", function () {
  it("Validates all of the selectors in the PnF section in MyPlan POM", function () {
    cy.loginSubscribedUserPhaseFunctionSeries();

    cy.waitForAppPageLoad();

    cy.appHeaderSubscribed();

    let phase = "DEFAULT";

    myPlanPage.getPnFPhaseHeader().should("be.visible");
    myPlanPage.getPnFEditCycleLink().should("be.visible");

    myPlanPage
      .getPnFPhaseHeader()
      .invoke("text")
      .then((phaseText) => {
        phase = phaseText.replace(" phase", "");

        myPlanPage.getPnFMoreAboutLink(phase).should("be.visible");
        myPlanPage.getPnFProgressArrow(phase).should("be.visible");
        myPlanPage.getPnFLibraryLink(phase).should("be.visible");
        myPlanPage.getPnFFoodsLink(phase).should("be.visible");
        myPlanPage.getPnFMealsLink(phase).should("be.visible");
      });

    cy.appFooter();
  });

  sizes.forEach((size) => {
    it(
      "Responsive - Validates all of the selectors in the PnF section in MyPlan POM for  " +
        size.width +
        ", " +
        size.height,
      function () {
        cy.viewport(size.width, size.height);
        cy.loginSubscribedUserPhaseFunctionSeries();

        cy.waitForAppPageLoad();

        cy.appHeaderSubscribed(exclude);

        let phase = "DEFAULT";

        myPlanPage.getPnFPhaseHeader().should("be.visible");
        myPlanPage.getPnFEditCycleLink().should("be.visible");

        myPlanPage
          .getPnFPhaseHeader()
          .invoke("text")
          .then((phaseText) => {
            phase = phaseText.replace(" phase", "");

            myPlanPage.getPnFMoreAboutLink(phase).should("be.visible");
            myPlanPage.getPnFProgressArrow(phase).should("be.visible");
            myPlanPage.getPnFLibraryLink(phase).should("be.visible");
            myPlanPage.getPnFFoodsLink(phase).should("be.visible");
            myPlanPage.getPnFMealsLink(phase).should("be.visible");
          });

        cy.responsiveAppFooter();
      },
    );
  });
});
