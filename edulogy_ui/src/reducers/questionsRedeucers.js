import { constants as c } from "../constants";

let initialState = { status: c.LOADING };

export function question(state = initialState, action) {
  switch (action.type) {
    case c.GET_QUESTIONS_FAILURE: {
      return {
        status: c.FAILURE,
      };
    }
    case c.GET_QUESTIONS_SUCCESS:
      return {
        status: c.SUCCESS,
        questions: action.questions,
      };
    default:
      return state;
  }
}

