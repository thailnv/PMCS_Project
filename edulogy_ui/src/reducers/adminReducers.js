import { constants } from "../constants";

const initialState = { dashboardType: "dashboard_question", status: constants.LOADING };

export function dashboard(state = initialState, action) {
  switch (action.type) {
    case constants.DASHBOARD_TEST:
      return {
        ...state,
        dashboardType: "dashboard_test",
      };
    case constants.DASHBOARD_QUESTION:
      return {
        ...state,
        dashboardType: "dashboard_question",
      };
    default:
      return state;
  }
}
