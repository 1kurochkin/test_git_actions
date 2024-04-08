describe("Segment - Account Logged In", function () {
  it("Segment - Account Logged In", function () {
    cy.intercept("POST", " https://api.segment.io/v1/t", (req) => {
      if (req.body.includes('"event":"Account Logged In"')) {
        req.alias = "userLoggedIn";
      }
    });
    //Login
    cy.loginSubscribedUser();
    cy.wait("@userLoggedIn");
  });
});
