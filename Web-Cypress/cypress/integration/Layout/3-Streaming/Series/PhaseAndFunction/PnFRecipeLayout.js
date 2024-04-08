import PnFRecipe from "../../../../../support/pageobjects/PnFRecipePage.js";

const pnfRecipe = new PnFRecipe();
const phase = "luteal";
const recipe = "Cauliflower-Breakfast-Porridge";
const sizes = [
  Cypress.env("screenSizes").mobile,
  Cypress.env("screenSizes").largePhone,
  Cypress.env("screenSizes").tablet,
];
const exclude = ["appHeader.getShopButton"]; //Responsive only has DropDown Shop button

describe("Recipe POM Selector Validation Test", function () {
  it("Validates all of the selectors in the Luteal Cauliflower Breakfast POM", function () {
    cy.loginSubscribedUserPhaseFunction();

    cy.waitForAppPageLoad();

    pnfRecipe.visitRecipePage(phase, recipe);
    cy.waitForAppPageLoad();
    cy.scrollTo("top");

    cy.appHeaderSubscribed();

    //non-phase specific visible elements
    const visibleSelectors = [
      pnfRecipe.getRecipeTitleText,
      pnfRecipe.getRecipeImage,
      pnfRecipe.getIngredientsTitleText,
      pnfRecipe.getIngredientsSubTitleText,
      pnfRecipe.getDirectionsTitleText,
      pnfRecipe.getNextRecipeText,
    ];
    cy.assertVisible(visibleSelectors);

    //phase specific visible elements
    pnfRecipe.getBackToPhaseMealsPageLink(phase).should("be.visible");
    pnfRecipe.getNextRecipeLink(phase).should("be.visible");

    //Goes through each element in the Ingredients and Directions lists
    pnfRecipe.getIngredientsList().each(($el) => {
      cy.wrap($el)
        .find('div[class*="circle-checkmark-module"]')
        .should("be.visible");
      cy.wrap($el).find('p[class*="icon-list-text"]').should("be.visible");
    });

    pnfRecipe.getDirectionsList().each(($el) => {
      cy.wrap($el).find('div[class*="icon-list-circle"]').should("be.visible");
      cy.wrap($el).find('p[class*="icon-list-text"]').should("be.visible");
    });

    cy.appFooter();
  });

  sizes.forEach((size) => {
    it(
      "Responsive - Recipe Page Validation for  " +
        size.width +
        ", " +
        size.height,
      function () {
        cy.viewport(size.width, size.height);
        cy.loginSubscribedUserPhaseFunction();

        cy.waitForAppPageLoad();

        pnfRecipe.visitRecipePage(phase, recipe);
        cy.waitForAppPageLoad();

        cy.appHeaderSubscribed(exclude);

        //non-phase specific visible elements
        const visibleSelectors = [
          pnfRecipe.getRecipeTitleText,
          pnfRecipe.getRecipeImage,
          pnfRecipe.getIngredientsTitleText,
          pnfRecipe.getIngredientsSubTitleText,
          pnfRecipe.getDirectionsTitleText,
          pnfRecipe.getNextRecipeText,
        ];
        cy.assertVisible(visibleSelectors);

        //phase specific visible elements
        pnfRecipe.getBackToPhaseMealsPageLink(phase).should("be.visible");
        pnfRecipe.getNextRecipeLink(phase).should("be.visible");

        //Goes through each element in the Ingredients and Directions lists
        pnfRecipe.getIngredientsList().each(($el) => {
          cy.wrap($el)
            .find('div[class*="circle-checkmark-module"]')
            .should("be.visible");
          cy.wrap($el).find('p[class*="icon-list-text"]').should("be.visible");
        });

        pnfRecipe.getDirectionsList().each(($el) => {
          cy.wrap($el)
            .find('div[class*="icon-list-circle"]')
            .should("be.visible");
          cy.wrap($el).find('p[class*="icon-list-text"]').should("be.visible");
        });

        cy.responsiveAppFooter();
      },
    );
  });
});
