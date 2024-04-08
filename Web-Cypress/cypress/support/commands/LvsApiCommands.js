import { CANCEL_LVS_RESERVATION_ENDPOINT } from "../apiEndpoints/ApiEndpoints";
import { HttpStatusCodes } from "../utils/httpStatusCode";

/**
 * Cancel LVS reservation
 * Users needs to store token when logging in
 * ex: cy.cancelLvsReservation("23123");
 */
Cypress.Commands.add("cancelLvsReservation", (reservationId) => {
  cy.getAuthToken().then((token) => {
    const endpoint = `${CANCEL_LVS_RESERVATION_ENDPOINT.replace(
      "{reservationId}",
      reservationId,
    )}`;
    cy.sendPost(endpoint, token, HttpStatusCodes.OK);
  });
});
