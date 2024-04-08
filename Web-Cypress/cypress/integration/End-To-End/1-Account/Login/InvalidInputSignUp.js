import ContinuePage from "../../../../support/pageobjects/ContinuePage.js";
import SignUpPage from "../../../../support/pageobjects/SignUpPage.js";

const continuePage = new ContinuePage();
const signUpPage = new SignUpPage();

describe("Guest User - Invalid Sign Up", function () {
  it("Guest User - Invalid Sign Up", function () {
    continuePage.visitPage();

    //Navigate to Sign up Page with a Good Email
    continuePage.getEmailForm().clear();
    continuePage.getEmailForm().type("GoodEmail@test.com");
    continuePage.getSubmitButton().click();

    //SignUp missing first name
    signUpPage.getFirstNameField().clear();
    signUpPage.getCreateAccountButton().click({ force: true });
    signUpPage
      .getInvalidErrorText()
      .contains("Required", { matchCase: false })
      .should("be.visible");

    //SignUp missing last name
    signUpPage.getLastNameField().clear();
    signUpPage.getCreateAccountButton().click({ force: true });
    signUpPage
      .getInvalidErrorText()
      .contains("Required", { matchCase: false })
      .should("be.visible");

    //SignUp missing password
    signUpPage.getCreatePasswordField().clear();
    signUpPage.getCreateAccountButton().click({ force: true });
    signUpPage
      .getInvalidErrorText()
      .contains("Required", { matchCase: false })
      .should("be.visible");

    //SignUp password minimum length
    signUpPage.getCreatePasswordField().type("1234");
    signUpPage.getCreateAccountButton().click({ force: true });
    signUpPage
      .getInvalidErrorText()
      .contains("The password must be at least 6 characters", {
        matchCase: false,
      })
      .should("be.visible");
  });
});
