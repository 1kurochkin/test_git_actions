import ClassesPage from "../../../../support/pageobjects/ClassesPage.js";

const classesPage = new ClassesPage();

describe("Subscribed User - Filter Classes Category Menus", function () {
  it("Subscribed User - Filter Classes Category Menus", function () {
    // Navigate to Classes Page and Select a Class Category
    classesPage.visitPage();
    classesPage.getGetStartedButton().click({ force: true });

    // Validate Class Length Filter
    classesPage.getFiltersButton().click({ force: true });
    classesPage.getFiltersClassLengthAccordionButton().click();
    classesPage.getFiltersClassLengthFilterButton().click();
    classesPage.getFiltersShowClassesButton().click();
    classesPage
      .getFiltersClearSelectedFilterButton("515Mins")
      .should("be.visible");
    classesPage.getAllWorkoutClassCards().eq(0).should("be.visible");
    classesPage.getFiltersClearAllFiltersButton().click({ force: true });

    // Validate Pacing Filter
    classesPage.getFiltersButton().click({ force: true });
    classesPage.getFiltersPacingAccordionButton().click();
    classesPage.getFiltersPacingFilterButton().click();
    classesPage.getFiltersShowClassesButton().click();
    classesPage
      .getFiltersClearSelectedFilterButton("SlowSteady")
      .should("be.visible");
    classesPage.getAllWorkoutClassCards().eq(0).should("be.visible");
    classesPage.getFiltersClearAllFiltersButton().click({ force: true });

    // Validate LVS Recording Filter
    classesPage.getFiltersButton().click({ force: true });
    classesPage.getFiltersLiveVirtualStudioRecordingsAccordionButton().click();
    classesPage
      .getFiltersLiveVirtualStudioRecordingUncheckedRadioButton(2)
      .click({ force: true });
    classesPage.getFiltersShowClassesButton().click();
    classesPage
      .getFiltersClearSelectedFilterButton("DontShowLvs")
      .should("be.visible");
    classesPage.getAllWorkoutClassCards().eq(0).should("be.visible");
    classesPage.getFiltersClearAllFiltersButton().click({ force: true });

    // Validate Trainers Filter
    classesPage.getFiltersButton().click({ force: true });
    classesPage.getFiltersTrainersAccordionButton().click();
    classesPage.getFiltersTrainerFilterButton("Zach").click();
    classesPage.getFiltersShowClassesButton().click();
    classesPage
      .getFiltersClearSelectedFilterButton("Zach")
      .should("be.visible");
    classesPage.getAllWorkoutClassCards().eq(0).should("be.visible");
    classesPage.getFiltersClearAllFiltersButton().click({ force: true });

    // Validate Equipment Filter
    classesPage.getFiltersButton().click({ force: true });
    classesPage.getFiltersEquipmentAccordionButton().click();
    classesPage.getFiltersEquipmentFilterButton().click();
    classesPage.getFiltersShowClassesButton().click();
    classesPage
      .getFiltersClearSelectedFilterButton("NoEquipment")
      .should("be.visible");
    classesPage.getAllWorkoutClassCards().eq(0).should("be.visible");
    classesPage.getFiltersClearAllFiltersButton().click({ force: true });

    // Validate Focus Filter
    classesPage.getFiltersButton().click({ force: true });
    classesPage.getFiltersFocusAccordionButton().click();
    classesPage.getFiltersFocusFilterButton().click();
    classesPage.getFiltersShowClassesButton().click();
    classesPage
      .getFiltersClearSelectedFilterButton("FullBody")
      .should("be.visible");
    classesPage.getAllWorkoutClassCards().eq(0).should("be.visible");
    classesPage.getFiltersClearAllFiltersButton().click({ force: true });
  });
});
