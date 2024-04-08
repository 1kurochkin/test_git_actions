import {
  ADD_REMOVE_FROM_FAVORITES_ENDPOINT,
  END_SESSION_ENDPOINT,
  HISTORY_WORKOUTS_ENDPOINT,
  SEARCH_WORKOUTS_ENDPOINT,
  START_SESSION_ENDPOINT,
  STATS_WORKOUTS_ENDPOINT,
} from "../apiEndpoints/ApiEndpoints";
import { HttpStatusCodes } from "../utils/httpStatusCode";

/**
 * Remove Workouts from favorites post request using bearer token
 * Users needs to store token when logging in
 * ex: cy.removeFromFavorites("1233882");
 */
Cypress.Commands.add("removeFromFavorites", (...workoutIds) => {
  cy.getAuthToken().then((token) => {
    cy.sendPut(ADD_REMOVE_FROM_FAVORITES_ENDPOINT, token, HttpStatusCodes.OK, {
      object: { remove: { workouts: workoutIds } },
    });
  });
});

/**
 * Add Workouts to favorites post request using bearer token
 * Users needs to store token when logging in
 * ex: cy.addToFavorites("1233882");
 */
Cypress.Commands.add("addToFavorites", (...workoutIds) => {
  cy.getAuthToken().then((token) => {
    cy.sendPut(ADD_REMOVE_FROM_FAVORITES_ENDPOINT, token, HttpStatusCodes.OK, {
      object: { add: { workouts: workoutIds } },
    });
  });
});

/**
 * Start Workouts Session from get request using bearer token
 * Users needs to store token when logging in
 * ex: cy.startWorkoutSession("1233882");
 */
Cypress.Commands.add("startWorkoutSession", (workoutId) => {
  return cy.getAuthToken().then((token) => {
    const endpoint = `${START_SESSION_ENDPOINT.replace(
      "{workoutId}",
      workoutId,
    )}`;
    return cy.sendGet(endpoint, token, HttpStatusCodes.OK);
  });
});

/**
 * End Workout Session from get request using bearer token
 * Users needs to store token when logging in
 * ex: cy.endWorkoutSession("1233882", "session123", 100);
 */
Cypress.Commands.add(
  "endWorkoutSession",
  (workoutId, sessionId, workoutCompletedPositions) => {
    return cy.getAuthToken().then((token) => {
      const endpoint = `${END_SESSION_ENDPOINT.replace(
        "{workoutId}",
        workoutId,
      )}`;
      return cy.sendPost(endpoint, token, HttpStatusCodes.OK, {
        session_id: sessionId,
        workout_completed_positions: workoutCompletedPositions,
      });
    });
  },
);

/**
 * Retrieves workouts using pagination.
 * Users needs to store token when logging in
 * ex: cy.getWorkouts(0, 50)
 */
Cypress.Commands.add(
  "getWorkouts",
  (
    pageNumber,
    resultsPerPage,
    sort = "newest",
    filters = "NOT type:walk AND NOT type:rest",
  ) => {
    return cy.getAuthToken().then((token) => {
      return cy.sendPost(SEARCH_WORKOUTS_ENDPOINT, token, HttpStatusCodes.OK, {
        facets: "*",
        filters,
        keywords: "",
        sort,
        page: pageNumber,
        hits: resultsPerPage,
        pagination: "on",
        equipmentFilter: "selected",
        seriesWorkoutsParam: "",
      });
    });
  },
);

/**
 * Complete Workout Session from get request using bearer token
 * Users needs to store token when logging in
 * ex: cy.completeWorkoutSession({workoutId: "1233", videoDuration: 1000});
 */
Cypress.Commands.add("completeWorkoutSession", (workout) => {
  cy.startWorkoutSession(workout.id).then((interception) => {
    const sessionId = interception.body.session_id;
    cy.endWorkoutSession(workout.id, sessionId, workout.videoDuration);
  });
});

/**
 * Retrieves workouts history
 * Users needs to store token when logging in
 * ex: cy.getWorkoutsHistory();
 */
Cypress.Commands.add("getWorkoutsHistory", (queryParams = null) => {
  return cy.getAuthToken().then((token) => {
    return cy.sendGet(
      HISTORY_WORKOUTS_ENDPOINT,
      token,
      HttpStatusCodes.OK,
      queryParams,
    );
  });
});

/**
 * Retrieves workouts stats
 * Users needs to store token when logging in
 * ex: cy.getWorkoutsStats();
 */
Cypress.Commands.add("getWorkoutsStats", (validation = null) => {
  return cy.getAuthToken().then((token) => {
    return cy.sendGet(
      STATS_WORKOUTS_ENDPOINT,
      token,
      HttpStatusCodes.OK,
      {},
      validation,
    );
  });
});
