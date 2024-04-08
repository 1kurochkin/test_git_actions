import MyPlanPage from "../../../../support/pageobjects/MyPlanPage.js";

const myPlanPage = new MyPlanPage();

describe("Fall Challenge - Banner", function () {
  it("Validates the Fall Challenge banner on /myplan page", function () {
    cy.loginSubscribedUser();
    cy.waitForAppPageLoad();

    const visibleSelectors = [
      myPlanPage.getFallChallengeBannerHeaderText,
      myPlanPage.getFallChallengeBannerClickHereButton,
    ];
    cy.assertVisible(visibleSelectors);
  });
});
