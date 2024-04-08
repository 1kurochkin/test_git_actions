import ClassesPage from "../../../../support/pageobjects/ClassesPage.js";

const classesPage = new ClassesPage();
const sizes = [
  Cypress.env("screenSizes").mobile,
  Cypress.env("screenSizes").largePhone,
  Cypress.env("screenSizes").tablet,
];

describe("Classes POM Selector Validation Test", function () {
  it("Validates all of the selectors in the /classes POM", function () {
    classesPage.visitPage();

    const visibleSelectors = [
      classesPage.getAllClassesButton,
      classesPage.getGetStartedButton,
      classesPage.getStrengthAndSculptButton,
      classesPage.getCardioBurnButton,
      classesPage.getMatDefinitionButton,
      classesPage.getRecoverAndStretchButton,
      classesPage.getMovementTherapyButton,
      classesPage.getMeditationButton,
      classesPage.getFiltersButton,
    ];
    cy.assertVisible(visibleSelectors);

    // Filters
    classesPage.getFiltersButton().click({ force: true });

    const filtersVisibleSelectors = [
      classesPage.getFiltersCloseButton,
      classesPage.getFiltersClearButton,
      classesPage.getFiltersShowClassesButton,
      classesPage.getFiltersClassLengthAccordionButton,
      classesPage.getFiltersPacingAccordionButton,
      classesPage.getFiltersLiveVirtualStudioRecordingsAccordionButton,
      classesPage.getFiltersTrainersAccordionButton,
      classesPage.getFiltersEquipmentAccordionButton,
      classesPage.getFiltersFocusAccordionButton,
    ];
    cy.assertVisible(filtersVisibleSelectors);

    // Class Length filter validation
    classesPage.getFiltersClassLengthAccordionButton().click();
    classesPage
      .getFiltersClassLengthFilterButton("515Mins")
      .should("be.visible");
    classesPage
      .getFiltersClassLengthFilterButton("1625Mins")
      .should("be.visible");
    classesPage
      .getFiltersClassLengthFilterButton("2635Mins")
      .should("be.visible");
    classesPage
      .getFiltersClassLengthFilterButton("3645Mins")
      .should("be.visible");
    classesPage
      .getFiltersClassLengthFilterButton("4660Mins")
      .should("be.visible");
    classesPage
      .getFiltersClassLengthFilterButton("60Mins")
      .should("be.visible");

    // Pacing filter validation
    classesPage.getFiltersPacingAccordionButton().click();
    classesPage.getFiltersPacingFilterButton("SlowSteady").should("be.visible");
    classesPage.getFiltersPacingFilterButton("EbbsFlows").should("be.visible");
    classesPage.getFiltersPacingFilterButton("FastPaced").should("be.visible");

    // LVS Recordings filter validation
    classesPage.getFiltersLiveVirtualStudioRecordingsAccordionButton().click();
    classesPage
      .getFiltersLiveVirtualStudioRecordingUncheckedRadioButton(0)
      .should("exist");
    classesPage
      .getFiltersLiveVirtualStudioRecordingUncheckedRadioButton(1)
      .should("exist");
    classesPage
      .getFiltersLiveVirtualStudioRecordingUncheckedRadioButton(2)
      .should("exist");

    // Trainer filter validation
    classesPage.getFiltersTrainersAccordionButton().click();
    classesPage.getFiltersTrainerFilterButton("Maeve").should("be.visible");
    classesPage.getFiltersTrainerFilterButton("Zach").should("be.visible");
    classesPage.getFiltersTrainerFilterButton("Stephen").should("be.visible");

    // Equipment filter validation
    classesPage.getFiltersEquipmentAccordionButton().click();
    classesPage
      .getFiltersEquipmentFilterButton("NoEquipment")
      .should("be.visible");
    classesPage.getFiltersEquipmentFilterButton("PBall").should("be.visible");
    classesPage
      .getFiltersEquipmentFilterButton("LightWeights")
      .should("be.visible");
    classesPage.getFiltersEquipmentFilterButton("Gliders").should("be.visible");
    classesPage.getFiltersEquipmentFilterButton("PBand").should("be.visible");
    classesPage
      .getFiltersEquipmentFilterButton("P3Trainer")
      .should("be.visible");
    classesPage
      .getFiltersEquipmentFilterButton("LightAnkleBand")
      .should("be.visible");
    classesPage
      .getFiltersEquipmentFilterButton("HeavyAnkleBand")
      .should("be.visible");
    classesPage
      .getFiltersEquipmentFilterButton("LightAnkleWeights")
      .should("be.visible");
    classesPage
      .getFiltersEquipmentFilterButton("HeavyAnkleWeights")
      .should("be.visible");
    classesPage
      .getFiltersEquipmentFilterButton("SlantBoard")
      .should("be.visible");
    classesPage
      .getFiltersEquipmentFilterButton("PrecisionMat")
      .should("be.visible");
    classesPage
      .getFiltersEquipmentFilterButton("MassageBall")
      .should("be.visible");
    classesPage
      .getFiltersEquipmentFilterButton("FoamRoller")
      .should("be.visible");
    classesPage
      .getFiltersEquipmentFilterButton("HeavyWeights")
      .should("be.visible");
    classesPage
      .getFiltersEquipmentFilterButton("PBallStrap")
      .should("be.visible");

    // Focus filter validation
    classesPage.getFiltersFocusAccordionButton().click();
    classesPage.getFiltersFocusFilterButton("FullBody").should("be.visible");
    classesPage.getFiltersFocusFilterButton("UpperBody").should("be.visible");
    classesPage.getFiltersFocusFilterButton("LowerBody").should("be.visible");
    classesPage.getFiltersFocusFilterButton("Core").should("be.visible");
    classesPage.getFiltersFocusFilterButton("Mindfulness").should("be.visible");

    // Select filters and show classes with those filters
    classesPage.getFiltersFocusFilterButton("FullBody").click();
    classesPage.getFiltersFocusFilterButton("UpperBody").click();
    classesPage.getFiltersFocusFilterButton("LowerBody").click();
    classesPage.getFiltersShowClassesButton().click();

    // Verify Clear Filters buttons' functionality
    classesPage
      .getFiltersClearSelectedFilterButton("LowerBody")
      .click({ force: true });
    classesPage
      .getFiltersClearSelectedFilterButton("LowerBody")
      .should("not.exist");
    classesPage.getFiltersClearAllFiltersButton().click({ force: true });
    classesPage.getFiltersClearAllFiltersButton().should("not.exist");
    classesPage
      .getFiltersClearSelectedFilterButton("FullBody")
      .should("not.exist");
    classesPage
      .getFiltersClearSelectedFilterButton("UpperBody")
      .should("not.exist");

    let i = 0;
    for (i = 0; i < 5; i++) {
      classesPage.getAllWorkoutClassCards().eq(i).should("be.visible");
      classesPage.getWorkoutsClassCardHeader(i).should("be.visible");
      classesPage.getWorkoutsClassCardImage(i).should("be.visible");
      classesPage.getWorkoutsFavoriteButton(i).should("be.visible");
    }

    classesPage.getBackToTopButton().should("not.exist");
  });

  sizes.forEach((size) => {
    it(
      "Responsive - Classes Page POM Validation for " +
        size.width +
        ", " +
        size.height,
      function () {
        cy.viewport(size.width, size.height);

        classesPage.visitPage();

        const existSelectors = [
          classesPage.getAllClassesButton,
          classesPage.getGetStartedButton,
          classesPage.getStrengthAndSculptButton,
          classesPage.getCardioBurnButton,
          classesPage.getMatDefinitionButton,
          classesPage.getRecoverAndStretchButton,
          classesPage.getMovementTherapyButton,
          classesPage.getMeditationButton,
          classesPage.getFiltersButton,
        ];
        cy.assertExist(existSelectors);

        // The arrows are intentionally not shown below 600 pixels
        if (size.width > 599) {
          classesPage
            .getClassesButtonsScrollRightButton()
            .click({ force: true });
          classesPage
            .getClassesButtonsScrollLeftButton()
            .click({ force: true });
        }

        // Filters
        classesPage.getFiltersButton().click({ force: true });

        const filtersExistSelectors = [
          classesPage.getFiltersCloseButton,
          classesPage.getFiltersClearButton,
          classesPage.getFiltersShowClassesButton,
          classesPage.getFiltersClassLengthAccordionButton,
          classesPage.getFiltersPacingAccordionButton,
          classesPage.getFiltersLiveVirtualStudioRecordingsAccordionButton,
          classesPage.getFiltersTrainersAccordionButton,
          classesPage.getFiltersEquipmentAccordionButton,
          classesPage.getFiltersFocusAccordionButton,
        ];
        cy.assertExist(filtersExistSelectors);

        // Class Length filter validation
        classesPage.getFiltersClassLengthAccordionButton().click();
        classesPage
          .getFiltersClassLengthFilterButton("515Mins")
          .should("exist");
        classesPage
          .getFiltersClassLengthFilterButton("1625Mins")
          .should("exist");
        classesPage
          .getFiltersClassLengthFilterButton("2635Mins")
          .should("exist");
        classesPage
          .getFiltersClassLengthFilterButton("3645Mins")
          .should("exist");
        classesPage
          .getFiltersClassLengthFilterButton("4660Mins")
          .should("exist");
        classesPage.getFiltersClassLengthFilterButton("60Mins").should("exist");

        // Pacing filter validation
        classesPage.getFiltersPacingAccordionButton().click();
        classesPage.getFiltersPacingFilterButton("SlowSteady").should("exist");
        classesPage.getFiltersPacingFilterButton("EbbsFlows").should("exist");
        classesPage.getFiltersPacingFilterButton("FastPaced").should("exist");

        // LVS Recordings filter validation
        classesPage
          .getFiltersLiveVirtualStudioRecordingsAccordionButton()
          .click();
        classesPage
          .getFiltersLiveVirtualStudioRecordingUncheckedRadioButton(0)
          .should("exist");
        classesPage
          .getFiltersLiveVirtualStudioRecordingUncheckedRadioButton(1)
          .should("exist");
        classesPage
          .getFiltersLiveVirtualStudioRecordingUncheckedRadioButton(2)
          .should("exist");

        // Trainer filter validation
        classesPage.getFiltersTrainersAccordionButton().click();
        classesPage.getFiltersTrainerFilterButton("Maeve").should("exist");
        classesPage.getFiltersTrainerFilterButton("Zach").should("exist");
        classesPage.getFiltersTrainerFilterButton("Stephen").should("exist");

        // Equipment filter validation
        classesPage.getFiltersEquipmentAccordionButton().click();
        classesPage
          .getFiltersEquipmentFilterButton("NoEquipment")
          .should("be.visible");
        classesPage
          .getFiltersEquipmentFilterButton("PBall")
          .should("be.visible");
        classesPage
          .getFiltersEquipmentFilterButton("LightWeights")
          .should("be.visible");
        classesPage
          .getFiltersEquipmentFilterButton("Gliders")
          .should("be.visible");
        classesPage
          .getFiltersEquipmentFilterButton("PBand")
          .should("be.visible");
        classesPage
          .getFiltersEquipmentFilterButton("P3Trainer")
          .should("be.visible");
        classesPage
          .getFiltersEquipmentFilterButton("LightAnkleBand")
          .should("be.visible");
        classesPage
          .getFiltersEquipmentFilterButton("HeavyAnkleBand")
          .should("be.visible");
        classesPage
          .getFiltersEquipmentFilterButton("LightAnkleWeights")
          .should("be.visible");
        classesPage
          .getFiltersEquipmentFilterButton("HeavyAnkleWeights")
          .should("be.visible");
        classesPage
          .getFiltersEquipmentFilterButton("SlantBoard")
          .should("be.visible");
        classesPage
          .getFiltersEquipmentFilterButton("PrecisionMat")
          .should("be.visible");
        classesPage
          .getFiltersEquipmentFilterButton("MassageBall")
          .should("be.visible");
        classesPage
          .getFiltersEquipmentFilterButton("FoamRoller")
          .should("be.visible");
        classesPage
          .getFiltersEquipmentFilterButton("HeavyWeights")
          .should("be.visible");
        classesPage
          .getFiltersEquipmentFilterButton("PBallStrap")
          .should("be.visible");

        // Focus filter validation
        classesPage.getFiltersFocusAccordionButton().click();
        classesPage
          .getFiltersFocusFilterButton("FullBody")
          .should("be.visible");
        classesPage
          .getFiltersFocusFilterButton("UpperBody")
          .should("be.visible");
        classesPage
          .getFiltersFocusFilterButton("LowerBody")
          .should("be.visible");
        classesPage.getFiltersFocusFilterButton("Core").should("be.visible");
        classesPage
          .getFiltersFocusFilterButton("Mindfulness")
          .should("be.visible");

        // Select filters and show classes with those filters
        classesPage.getFiltersFocusFilterButton("FullBody").click();
        classesPage.getFiltersFocusFilterButton("UpperBody").click();
        classesPage.getFiltersFocusFilterButton("LowerBody").click();
        classesPage.getFiltersShowClassesButton().click();

        // Verify Clear Filters buttons' functionality
        classesPage
          .getFiltersClearSelectedFilterButton("LowerBody")
          .click({ force: true });
        classesPage
          .getFiltersClearSelectedFilterButton("LowerBody")
          .should("not.exist");
        classesPage.getFiltersClearAllFiltersButton().click({ force: true });
        classesPage.getFiltersClearAllFiltersButton().should("not.exist");
        classesPage
          .getFiltersClearSelectedFilterButton("FullBody")
          .should("not.exist");
        classesPage
          .getFiltersClearSelectedFilterButton("UpperBody")
          .should("not.exist");

        let i = 0;
        for (i = 0; i < 5; i++) {
          classesPage.getAllWorkoutClassCards().eq(i).should("be.visible");
          classesPage.getWorkoutsClassCardHeader(i).should("be.visible");
          classesPage.getWorkoutsClassCardImage(i).should("be.visible");
          classesPage.getWorkoutsFavoriteButton(i).should("be.visible");
        }

        classesPage.getBackToTopButton().should("not.exist");
      },
    );
  });
});
