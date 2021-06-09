import { constants } from "../constants";

const initialState = { popupType: "", status: constants.LOADING };

export function application(state = initialState, action) {
  switch (action.type) {
    case constants.POPUP_LOGIN:
      return {
        ...state,
        popupType: "login",
      };
    case constants.HIDE_POPUP:
      return {
        ...state,
        popupType: "",
      };
    case constants.GET_HOME_SUCCESS:
      return {
        ...state,
        status: constants.SUCCESS,
        homeInfo: action.info,
      };
    case constants.GET_HOME_FAILURE:
      return {
        ...state,
        status: constants.FAILURE,
      };
    default:
      return state;
  }
}
