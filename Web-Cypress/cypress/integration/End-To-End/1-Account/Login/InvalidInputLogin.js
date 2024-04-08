import ContinuePage from "../../../../support/pageobjects/ContinuePage.js";

const continuePage = new ContinuePage();

describe("Guest User - Invalid Login Up", function () {
  it("Guest User - Invalid Login Up", function () {
    continuePage.visitPage();

    //Email empty
    continuePage.getEmailForm().clear();
    continuePage.getSubmitButton().click({ force: true });
    continuePage
      .getInvalidErrorText()
      .contains("valid email address", { matchCase: false })
      .should("be.visible");

    //Email missing @
    continuePage.getEmailForm().type("NoAtSymbol.com");
    continuePage.getSubmitButton().click({ force: true });
    continuePage
      .getInvalidErrorText()
      .contains("Invalid email address", { matchCase: false })
      .should("be.visible");

    //Email missing period
    continuePage.getEmailForm().clear();
    continuePage.getEmailForm().type("NoPeriod@com");
    continuePage.getSubmitButton().click({ force: true });
    continuePage
      .getInvalidErrorText()
      .contains("Invalid email address", { matchCase: false })
      .should("be.visible");

    //Email missing characters on end
    continuePage.getEmailForm().clear();
    continuePage.getEmailForm().type("NoCharacters@test.c");
    continuePage.getSubmitButton().click({ force: true });
    continuePage
      .getInvalidErrorText()
      .contains("Invalid email address", { matchCase: false })
      .should("be.visible");
  });
});
