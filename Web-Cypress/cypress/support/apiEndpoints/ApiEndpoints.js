/**
 * Contains useful endpoints
 */

export const LEAVE_FROM_SERIES_ENDPOINT = "/v2/workouts/series/leave";
export const ENROLL_TO_SERIES_ENDPOINT = "/v2/workouts/series/enroll";
export const ADD_REMOVE_FROM_FAVORITES_ENDPOINT =
  "/v2/user/attributes/favorites";
export const START_SESSION_ENDPOINT = "/v2/workouts/start_session/{workoutId}";
export const END_SESSION_ENDPOINT = "/v2/workouts/end_session/{workoutId}";
export const CANCEL_LVS_RESERVATION_ENDPOINT =
  "/studios/reservation/{reservationId}/cancel";
export const SEARCH_WORKOUTS_ENDPOINT = "/tsapi/workouts/search";
export const HISTORY_WORKOUTS_ENDPOINT = "/v2/workouts/history";
export const STATS_WORKOUTS_ENDPOINT = "/stats/v2/workouts";
export const SERIES_ENDPOINT = "/tsapi/series";
