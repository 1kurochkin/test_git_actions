class WorkoutDetailsPage {
  /**
   * Visits the entered workout details page
   */
  visitPage(page) {
    return cy.visit(Cypress.env("APP_BASE_URL") + "/workouts/" + page);
  }

  /**
   * Visits 60-minute Full Body Sculpt Workout Details Page
   */
  visit60MinFullBodySculptWorkoutPage() {
    return cy.visit(
      Cypress.env("APP_BASE_URL") + "/workouts/60-min-full-body-sculpt-158537",
    );
  }

  /**
   * Visits Eating for your Menstrual Cycle Talk Details Page
   */
  visitEatingForYourMenstrualCycleTalkPage() {
    return cy.visit(
      Cypress.env("APP_BASE_URL") +
        "/workouts/eating-for-your-menstrual-cycle-DIS0121-T1",
    );
  }

  /**
   * Returns the Preview Video.
   */
  getPreviewVideo() {
    return cy.get('video[class*="vjs-tech"]');
  }

  /**
   * Returns the section containing the title text for title assertions.
   *
   * Example: workoutDetailsPage.getBodyWorkoutTitleText().contains("60 Min Full Body Sculpt");
   */
  getBodyWorkoutTitleText() {
    return cy.get(
      'div[class*="details-header-overlay-module"] h1[class*="bold upper margin-bottom"]',
    );
  }

  /**
   * Returns the section containing the level text for level assertions.
   *
   * Example: workoutDetailsPage.getBodyWorkoutLevelText().contains("60 Min Full Body Sculpt");
   */
  getBodyWorkoutLevelText() {
    return cy.get(
      'div[class*="details-header-overlay-module"] p[class*="details-header-overlay-module"]',
    );
  }

  /**
   * Returns the Preview button for the playing the video.
   */
  getBodyPreviewButton() {
    return cy.get(
      'div[class*="details-header-overlay-module"] button[class*="play-button"]',
    );
  }

  /**
   * [LOGGED-IN] Returns the Play button for the video.
   */
  getBodyPlayButton() {
    return cy.get(
      'div[class*="details-header-overlay-module"] button[class*="play-button"]',
    );
  }

  /**
   * [LOGGED-IN] Returns the Favorite button for the video.
   */
  getBodyFavoriteButton() {
    return cy.get(
      'div[class*="details-header-overlay-module"] button[class*="favorite-button-module"]',
    );
  }

  /**
   * Returns the Focus details card.
   */
  getBodyFocusDetailsCard() {
    return cy
      .get(
        'div[class*="details-header-overlay-module"] div[class*="details-card-module--details-card"]',
      )
      .eq(0);
  }

  /**
   * Returns the Type details card.
   */
  getBodyTypeDetailsCard() {
    return cy
      .get(
        'div[class*="details-header-overlay-module"] div[class*="details-card-module--details-card"]',
      )
      .eq(1);
  }

  /**
   * Returns the Benefits details card.
   */
  getBodyBenefitsDetailsCard() {
    return cy
      .get(
        'div[class*="details-header-overlay-module"] div[class*="details-card-module--details-card"]',
      )
      .eq(2);
  }

  /**
   * Returns the section containing the Times Completed text for Times Completed assertions.
   *
   * To find the number of times completes, chain contains("x") off this selector.
   *
   * Example: workoutDetailsPage.getBodyTimesCompletedText().contains("0");
   */
  getBodyTimesCompletedDetailsCard() {
    return cy
      .get(
        'div[class*="details-header-overlay-module"] div[class*="details-card-module--details-card"]',
      )
      .eq(3);
  }

  /**
   * Returns the From Series Link if workout is in a series.
   *
   * Example: workoutDetailsPage.getFromSeriesLink("phase-and-function").should('be.visible');
   */
  getFromSeriesLink(series) {
    return cy.get(
      'p[class*="description-link"] a[href*="/series/' + series + '"]',
    );
  }

  /**
   * Returns the first product link in Equipment Used section.
   */
  getBodyEquipmentUsedFirstProductLink() {
    return cy
      .get(
        'div[class*="equipment-used-module"] a[href*="pvolve.com/products/"]',
      )
      .eq(0);
  }

  /**
   * Returns the first product image in Equipment Used section.
   */
  getEquipmentUsedFirstProductImage() {
    return cy
      .get(
        'div[class*="equipment-used-module"] a[href*="pvolve.com/products/"]',
      )
      .eq(0)
      .find("img");
  }

  /**
   * Returns the second product link in Equipment Used section.
   */
  getBodyEquipmentUsedSecondProductLink() {
    return cy
      .get(
        'div[class*="equipment-used-module"] a[href*="pvolve.com/products/"]',
      )
      .eq(1);
  }

  /**
   * Returns the second product image in Equipment Used section.
   */
  getEquipmentUsedSecondProductImage() {
    return cy
      .get(
        'div[class*="equipment-used-module"] a[href*="pvolve.com/products/"]',
      )
      .eq(1)
      .find("img");
  }

  /**
   * Returns the third product link in Equipment Used section.
   */
  getBodyEquipmentUsedThirdProductLink() {
    return cy
      .get(
        'div[class*="equipment-used-module"] a[href*="pvolve.com/products/"]',
      )
      .eq(2);
  }

  /**
   * Returns the third product image in Equipment Used section.
   */
  getEquipmentUsedThirdProductImage() {
    return cy
      .get(
        'div[class*="equipment-used-module"] a[href*="pvolve.com/products/"]',
      )
      .eq(2)
      .find("img");
  }

  /**
   * Returns the fourth product link in Equipment Used section.
   */
  getBodyEquipmentUsedFourthProductLink() {
    return cy
      .get(
        'div[class*="equipment-used-module"] a[href*="pvolve.com/products/"]',
      )
      .eq(3);
  }

  /**
   * Returns the fourth product image in Equipment Used section.
   */
  getEquipmentUsedFourthProductImage() {
    return cy
      .get(
        'div[class*="equipment-used-module"] a[href*="pvolve.com/products/"]',
      )
      .eq(3)
      .find("img");
  }

  /**
   * Returns the fifth product link in Equipment Used section.
   */
  getBodyEquipmentUsedFifthProductLink() {
    return cy
      .get(
        'div[class*="equipment-used-module"] a[href*="pvolve.com/products/"]',
      )
      .eq(4);
  }

  /**
   * Returns the fifth product image in Equipment Used section.
   */
  getEquipmentUsedFifthProductImage() {
    return cy
      .get(
        'div[class*="equipment-used-module"] a[href*="pvolve.com/products/"]',
      )
      .eq(4)
      .find("img");
  }

  /**
   * Returns the sixth product link in Equipment Used section.
   */
  getBodyEquipmentUsedSixthProductLink() {
    return cy
      .get(
        'div[class*="equipment-used-module"] a[href*="pvolve.com/products/"]',
      )
      .eq(5);
  }

  /**
   * Returns the sixth product image in Equipment Used section.
   */
  getEquipmentUsedSixthProductImage() {
    return cy
      .get(
        'div[class*="equipment-used-module"] a[href*="pvolve.com/products/"]',
      )
      .eq(5)
      .find("img");
  }

  /**
   * Returns the seventh product link in Equipment Used section.
   */
  getBodyEquipmentUsedSeventhProductLink() {
    return cy
      .get(
        'div[class*="equipment-used-module"] a[href*="pvolve.com/products/"]',
      )
      .eq(6);
  }

  /**
   * Returns the seventh product image in Equipment Used section.
   */
  getEquipmentUsedSeventhProductImage() {
    return cy
      .get(
        'div[class*="equipment-used-module"] a[href*="pvolve.com/products/"]',
      )
      .eq(6)
      .find("img");
  }

  /**
   * Returns the eighth product link in Equipment Used section.
   */
  getBodyEquipmentUsedEighthProductLink() {
    return cy
      .get(
        'div[class*="equipment-used-module"] a[href*="pvolve.com/products/"]',
      )
      .eq(7);
  }

  /**
   * Returns the eighth product image in Equipment Used section.
   */
  getEquipmentUsedEighthProductImage() {
    return cy
      .get(
        'div[class*="equipment-used-module"] a[href*="pvolve.com/products/"]',
      )
      .eq(7)
      .find("img");
  }

  /**
   * Returns the first Trainer Section. Not interactable.
   */
  getBodyTrainerOneSection() {
    return cy.get('div[class="ui grid"] div[class*="middle aligned"]').eq(0);
  }

  /**
   * Returns the first Trainer Name Text.
   */
  getBodyTrainerOneNameText() {
    return cy
      .get('div[class="ui grid"] div[class*="middle aligned"]')
      .eq(0)
      .find('h5[class*="trainer-name"]');
  }

  /**
   * Returns the first Trainer Portrait image.
   */
  getTrainerOnePortraitImage() {
    return cy
      .get('div[class="ui grid"] div[class*="middle aligned"]')
      .eq(0)
      .find("img");
  }

  /**
   * Returns the first Trainer Bio section.
   */
  getTrainerOneBioSection() {
    return cy.get('div[class="ui grid"]').find('p[class*="-bio-"]').eq(0);
  }

  /**
   * Returns the first Trainer See All Trainer's Workouts Link.
   */
  getBodyTrainerOneSeeAllWorkoutsLink() {
    return cy
      .get('div[class="ui grid"]')
      .find('a[class*="see-all-button"]')
      .eq(0);
  }

  /**
   * Returns the second Trainer Section. Not interactable.
   */
  getBodyTrainerTwoSection() {
    return cy.get('div[class="ui grid"] div[class*="middle aligned"]').eq(1);
  }

  /**
   * Returns the second Trainer Name Text.
   */
  getBodyTrainerTwoNameText() {
    return cy
      .get('div[class="ui grid"] div[class*="middle aligned"]')
      .eq(1)
      .find('h5[class*="trainer-name"]');
  }

  /**
   * Returns the second Trainer Portrait image.
   */
  getTrainerTwoPortraitImage() {
    return cy
      .get('div[class="ui grid"] div[class*="middle aligned"]')
      .eq(1)
      .find("img");
  }

  /**
   * Returns the second Trainer Bio section.
   */
  getTrainerTwoBioSection() {
    return cy.get('div[class="ui grid"]').find('p[class*="-bio-"]').eq(1);
  }

  /**
   * Returns the second Trainer See All Trainer's Workouts Link.
   */
  getBodyTrainerTwoSeeAllWorkoutsLink() {
    return cy
      .get('div[class="ui grid"]')
      .find('a[class*="see-all-button"]')
      .eq(1);
  }

  /**
   * Returns the third Trainer Section. Not interactable.
   */
  getBodyTrainerThreeSection() {
    return cy.get('div[class="ui grid"] div[class*="middle aligned"]').eq(2);
  }

  /**
   * Returns the third Trainer Name Text.
   */
  getBodyTrainerThreeNameText() {
    return cy
      .get('div[class="ui grid"] div[class*="middle aligned"]')
      .eq(2)
      .find('h5[class*="trainer-name"]');
  }

  /**
   * Returns the third Trainer Portrait image.
   */
  getTrainerThreePortraitImage() {
    return cy
      .get('div[class="ui grid"] div[class*="middle aligned"]')
      .eq(2)
      .find("img");
  }

  /**
   * Returns the third Trainer Bio section.
   */
  getTrainerThreeBioSection() {
    return cy.get('div[class="ui grid"]').find('p[class*="-bio-"]').eq(2);
  }

  /**
   * Returns the third Trainer See All Trainer's Workouts Link.
   */
  getBodyTrainerThreeSeeAllWorkoutsLink() {
    return cy
      .get('div[class="ui grid"]')
      .find('a[class*="see-all-button"]')
      .eq(2);
  }

  /**
   * Returns the fourth Trainer Section. Not interactable.
   */
  getBodyTrainerFourSection() {
    return cy.get('div[class="ui grid"] div[class*="middle aligned"]').eq(3);
  }

  /**
   * Returns the fourth Trainer Name Text.
   */
  getBodyTrainerFourNameText() {
    return cy
      .get('div[class="ui grid"] div[class*="middle aligned"]')
      .eq(3)
      .find('h5[class*="trainer-name"]');
  }

  /**
   * Returns the fourth Trainer Portrait image.
   */
  getTrainerFourPortraitImage() {
    return cy
      .get('div[class="ui grid"] div[class*="middle aligned"]')
      .eq(3)
      .find("img");
  }

  /**
   * Returns the fourth Trainer Bio section.
   */
  getTrainerFourBioSection() {
    return cy.get('div[class="ui grid"]').find('p[class*="-bio-"]').eq(3);
  }

  /**
   * Returns the fourth Trainer See All Trainer's Workouts Link.
   */
  getBodyTrainerFourSeeAllWorkoutsLink() {
    return cy
      .get('div[class="ui grid"]')
      .find('a[class*="see-all-button"]')
      .eq(3);
  }

  /**
   * Returns the fifth Trainer Section. Not interactable.
   */
  getBodyTrainerFiveSection() {
    return cy.get('div[class="ui grid"] div[class*="middle aligned"]').eq(4);
  }

  /**
   * Returns the fifth Trainer Name Text.
   */
  getBodyTrainerFiveNameText() {
    return cy
      .get('div[class="ui grid"] div[class*="middle aligned"]')
      .eq(4)
      .find('h5[class*="trainer-name"]');
  }

  /**
   * Returns the fifth Trainer Portrait image.
   */
  getTrainerFivePortraitImage() {
    return cy
      .get('div[class="ui grid"] div[class*="middle aligned"]')
      .eq(4)
      .find("img");
  }

  /**
   * Returns the fifth Trainer Bio section.
   */
  getTrainerFiveBioSection() {
    return cy.get('div[class="ui grid"]').find('p[class*="-bio-"]').eq(4);
  }

  /**
   * Returns the fifth Trainer See All Trainer's Workouts Link.
   */
  getBodyTrainerFiveSeeAllWorkoutsLink() {
    return cy
      .get('div[class="ui grid"]')
      .find('a[class*="see-all-button"]')
      .eq(4);
  }

  /**
   * Returns the sixth Trainer Section. Not interactable.
   */
  getBodyTrainerSixSection() {
    return cy.get('div[class="ui grid"] div[class*="middle aligned"]').eq(5);
  }

  /**
   * Returns the sixth Trainer Name Text.
   */
  getBodyTrainerSixNameText() {
    return cy
      .get('div[class="ui grid"] div[class*="middle aligned"]')
      .eq(5)
      .find('h5[class*="trainer-name"]');
  }

  /**
   * Returns the sixth Trainer Portrait image.
   */
  getTrainerSixPortraitImage() {
    return cy
      .get('div[class="ui grid"] div[class*="middle aligned"]')
      .eq(5)
      .find("img");
  }

  /**
   * Returns the sixth Trainer Bio section.
   */
  getTrainerSixBioSection() {
    return cy.get('div[class="ui grid"]').find('p[class*="-bio-"]').eq(5);
  }

  /**
   * Returns the sixth Trainer See All Trainer's Workouts Link.
   */
  getBodyTrainerSixSeeAllWorkoutsLink() {
    return cy
      .get('div[class="ui grid"]')
      .find('a[class*="see-all-button"]')
      .eq(5);
  }

  /**
   * Returns the Start Free Trial CTA Button.
   */
  getBodyStartFreeTrialCTAButton() {
    return cy.get('a[href*="month_trial"]').contains("Start free trial");
  }
}
export default WorkoutDetailsPage;
