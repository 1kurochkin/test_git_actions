import MyPlanPage from "../../../../support/pageobjects/MyPlanPage.js";

const myPlanPage = new MyPlanPage();

describe("Subscribed User - First Time User My Plan", function () {
  it("Subscribed User - First Time User My Plan", function () {
    //Login
    cy.loginSubscribedUserFTU();
    cy.url().should("include", "/my-plan");
    myPlanPage.getFTUHeroTitle().should("be.visible");
    myPlanPage.getFTUBook15MinutesButton().should("be.visible");

    //Tab functionality
    myPlanPage.getFTUEquipmentLink().click({ force: true });
    myPlanPage.getFTUFirstSeriesLink().should("be.visible");
    myPlanPage.getFTUNoEquipmentLink().click({ force: true });
    myPlanPage.getFTUFirstSeriesLink().should("be.visible");
  });
});
