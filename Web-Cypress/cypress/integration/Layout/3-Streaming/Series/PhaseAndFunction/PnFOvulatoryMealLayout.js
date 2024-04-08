import PnFMeals from "../../../../../support/pageobjects/PnFMealsPage.js";

const sizes = [
  Cypress.env("screenSizes").mobile,
  Cypress.env("screenSizes").largePhone,
  Cypress.env("screenSizes").tablet,
];
const exclude = ["appHeader.getShopButton"]; //Responsive only has DropDown Shop button
const pnfMeals = new PnFMeals();
const phase = "ovulatory";
let firstMealHref = "";

describe("Ovulatory Meals POM Selector Validation Test", function () {
  it("Validates all of the selectors in the Ovulatory Meals POM", function () {
    cy.loginSubscribedUserPhaseFunction();

    cy.waitForAppPageLoad();

    pnfMeals.visitMealsPage(phase);
    cy.waitForAppPageLoad();
    cy.scrollTo("top");

    cy.appHeaderSubscribed();

    //non-phase specific visible elements
    const visibleSelectors = [
      pnfMeals.getMealsHeaderText,
      pnfMeals.getMealsIcon,
      pnfMeals.getMealsDescriptionText,
      pnfMeals.getRightArrowLink,
      pnfMeals.getLeftArrowLink,
      pnfMeals.getBreakfastTab,
      pnfMeals.getLunchTab,
      pnfMeals.getDinnerTab,
      pnfMeals.getMealsTabFirstMealLink,
      pnfMeals.getMealsTabSecondMealLink,
      pnfMeals.getMealsTabThirdMealLink,
    ];
    cy.assertVisible(visibleSelectors);

    //phase specific visible elements
    pnfMeals.getBackgroundColor(phase).should("be.visible");
    pnfMeals.getFoodsListLink(phase).should("be.visible");
    pnfMeals.getDetailsLink(phase).should("be.visible");
    pnfMeals.getLibraryLink(phase).should("be.visible");
    pnfMeals.getFoodsLink(phase).should("be.visible");

    //verifies the content shown in the tabs is changing
    pnfMeals
      .getMealsTabFirstMealLink()
      .invoke("attr", "href")
      .then((href) => {
        firstMealHref = href;
      });

    pnfMeals.getDinnerTab().click();
    pnfMeals
      .getMealsTabFirstMealLink()
      .invoke("attr", "href")
      .then((href) => {
        cy.wrap(href).should("not.equal", firstMealHref);
        firstMealHref = href;
      });

    pnfMeals.getLunchTab().click();
    pnfMeals
      .getMealsTabFirstMealLink()
      .invoke("attr", "href")
      .then((href) => {
        cy.wrap(href).should("not.equal", firstMealHref);
        firstMealHref = href;
      });

    pnfMeals.getBreakfastTab().click();
    pnfMeals
      .getMealsTabFirstMealLink()
      .invoke("attr", "href")
      .then((href) => {
        cy.wrap(href).should("not.equal", firstMealHref);
        firstMealHref = href;
      });

    cy.appFooter();
  });

  sizes.forEach((size) => {
    it(
      "Responsive - Ovulatory Meals Page Validation for " +
        size.width +
        ", " +
        size.height,
      function () {
        cy.viewport(size.width, size.height);

        cy.loginSubscribedUserPhaseFunction();

        cy.waitForAppPageLoad();

        pnfMeals.visitMealsPage(phase);
        cy.waitForAppPageLoad();

        cy.appHeaderSubscribed(exclude);

        //non-phase specific visible elements
        const visibleSelectors = [
          pnfMeals.getMealsHeaderText,
          pnfMeals.getMealsIcon,
          pnfMeals.getMealsDescriptionText,
          pnfMeals.getMealsTabFirstMealLink,
          pnfMeals.getMealsTabSecondMealLink,
          pnfMeals.getMealsTabThirdMealLink,
        ];
        cy.assertVisible(visibleSelectors);

        const existingSelectors = [
          pnfMeals.getRightArrowLink,
          pnfMeals.getLeftArrowLink,
          pnfMeals.getBreakfastTab,
          pnfMeals.getLunchTab,
          pnfMeals.getDinnerTab,
        ];
        cy.assertExist(existingSelectors);

        //phase specific visible elements
        pnfMeals.getBackgroundColor(phase).should("be.visible");
        pnfMeals.getFoodsListLink(phase).should("be.visible");
        pnfMeals.getDetailsLink(phase).should("be.visible");
        pnfMeals.getLibraryLink(phase).should("be.visible");
        pnfMeals.getFoodsLink(phase).should("be.visible");

        //verifies the content shown in the tabs is changing
        pnfMeals
          .getMealsTabFirstMealLink()
          .invoke("attr", "href")
          .then((href) => {
            firstMealHref = href;
          });

        pnfMeals.getDinnerTab().click({ force: true });
        pnfMeals
          .getMealsTabFirstMealLink()
          .invoke("attr", "href")
          .then((href) => {
            cy.wrap(href).should("not.equal", firstMealHref);
            firstMealHref = href;
          });

        pnfMeals.getLunchTab().click({ force: true });
        pnfMeals
          .getMealsTabFirstMealLink()
          .invoke("attr", "href")
          .then((href) => {
            cy.wrap(href).should("not.equal", firstMealHref);
            firstMealHref = href;
          });

        pnfMeals.getBreakfastTab().click({ force: true });
        pnfMeals
          .getMealsTabFirstMealLink()
          .invoke("attr", "href")
          .then((href) => {
            cy.wrap(href).should("not.equal", firstMealHref);
            firstMealHref = href;
          });

        //Footer
        cy.responsiveAppFooter();
      },
    );
  });
});
