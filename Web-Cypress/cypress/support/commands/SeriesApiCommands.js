import {
  LEAVE_FROM_SERIES_ENDPOINT,
  ENROLL_TO_SERIES_ENDPOINT,
  SERIES_ENDPOINT,
} from "../apiEndpoints/ApiEndpoints";
import { HttpStatusCodes } from "../utils/httpStatusCode";

/**
 * Remove user from Series post request using bearer token
 * Users needs to store token when logging in
 * ex: cy.leaveFromSeries("1233882");
 */
Cypress.Commands.add("leaveFromSeries", (seriesId) => {
  cy.getAuthToken().then((token) => {
    cy.sendPost(LEAVE_FROM_SERIES_ENDPOINT, token, HttpStatusCodes.OK, {
      series_id: seriesId,
    });
  });
});

/**
 * Enroll user to Series post request using bearer token
 * Users needs to store token when logging in
 * ex: cy.enrollToSeries("1233882");
 */
Cypress.Commands.add("enrollToSeries", (seriesId) => {
  cy.getAuthToken().then((token) => {
    cy.sendPost(ENROLL_TO_SERIES_ENDPOINT, token, HttpStatusCodes.OK, {
      series_id: seriesId,
    });
  });
});

/**
 * Retrieves Series post request using bearer token
 * Users needs to store token when logging in
 * ex: cy.getAllSeries();
 */
Cypress.Commands.add("getAllSeries", (queryParams) => {
  let params;
  if (!queryParams) {
    params = {
      limit: 50,
      skip: 0,
      sortField: "name",
    };
  }
  cy.getAuthToken().then((token) => {
    cy.sendGet(SERIES_ENDPOINT, token, HttpStatusCodes.OK, params);
  });
});
