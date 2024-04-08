/**
 * Send post request using bearer token and body
 * ex: cy.sendPost("https://server.com/path", "asbc", {param: value}, 200, (response) => {validation});
 */
Cypress.Commands.add(
  "sendPost",
  (path, token, expectedStatusCode, body = {}, validateResponse = null) => {
    return cy
      .request({
        method: "POST",
        url: Cypress.env("API_BASE_URL") + path,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body,
      })
      .then((response) => {
        expect(response.status).to.equal(expectedStatusCode);
        if (validateResponse) {
          validateResponse(response.body);
        }
        return response;
      });
  },
);

/**
 * Send post request using bearer token and body
 * ex: cy.sendPut("https://server.com/path", "asbc", {param: value}, 200, (response) => {validation});
 */
Cypress.Commands.add(
  "sendPut",
  (path, token, expectedStatusCode, body = {}, validateResponse = null) => {
    return cy
      .request({
        method: "PUT",
        url: Cypress.env("API_BASE_URL") + path,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body,
      })
      .then((response) => {
        expect(response.status).to.equal(expectedStatusCode);
        if (validateResponse) {
          validateResponse(response.body);
        }
        return response;
      });
  },
);

/**
 * Send post request using bearer token and body
 * ex: cy.sendGet("https://server.com/path", "asbc", 200, (response) => {validation});
 */
Cypress.Commands.add(
  "sendGet",
  (
    path,
    token,
    expectedStatusCode,
    queryParams = {},
    validateResponse = null,
  ) => {
    return cy
      .request({
        method: "GET",
        url: Cypress.env("API_BASE_URL") + path,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        qs: queryParams,
      })
      .then((response) => {
        expect(response.status).to.equal(expectedStatusCode);
        if (validateResponse) {
          validateResponse(response.body);
        }
        return response;
      });
  },
);

Cypress.Commands.add(
  "validateResponseStatus",
  (requestAlias, expectedStatusCode) => {
    cy.wait(requestAlias)
      .its("response.statusCode")
      .should("eq", expectedStatusCode);
  },
);
