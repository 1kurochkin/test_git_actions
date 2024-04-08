import ClassesPage from "../../../../support/pageobjects/ClassesPage.js";

const classesPage = new ClassesPage();

describe("Subscribed User - Filter Classes Results", function () {
  it("Subscribed User - Filter Classes Results", function () {
    // Navigate to Classes Page
    classesPage.visitPage();

    classesPage.getFiltersButton().click({ force: true });
    classesPage.getFiltersEquipmentAccordionButton().click();
    classesPage.getFiltersEquipmentFilterButton().click();
    classesPage.getFiltersShowClassesButton().click();
    classesPage.getAllWorkoutClassCards().eq(0).should("be.visible");
    classesPage
      .getFiltersClearSelectedFilterButton("NoEquipment")
      .should("be.visible");

    classesPage.getFiltersSelectedEquipmentOnlyButton().should("be.visible");
    classesPage.getFiltersAdditionalEquipmentButton().should("be.visible");

    classesPage.getFiltersButton().click({ force: true });
    classesPage.getFiltersClassLengthAccordionButton().click();
    classesPage.getFiltersClassLengthFilterButton().click();
    classesPage.getFiltersShowClassesButton().click();
    classesPage.getAllWorkoutClassCards().eq(0).should("be.visible");
    classesPage
      .getFiltersClearSelectedFilterButton("NoEquipment")
      .should("be.visible");
    classesPage
      .getFiltersClearSelectedFilterButton("515Mins")
      .should("be.visible");

    classesPage
      .getFiltersClearSelectedFilterButton("NoEquipment")
      .click({ force: true });
    classesPage
      .getFiltersClearSelectedFilterButton("NoEquipment")
      .should("not.exist");
    classesPage
      .getFiltersClearSelectedFilterButton("515Mins")
      .should("be.visible");
    classesPage.getAllWorkoutClassCards().eq(0).should("be.visible");

    classesPage.getFiltersClearAllFiltersButton().click({ force: true });
    classesPage
      .getFiltersClearSelectedFilterButton("515Mins")
      .should("not.exist");
    classesPage.getAllWorkoutClassCards().eq(0).should("be.visible");
  });
});
