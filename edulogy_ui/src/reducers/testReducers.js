import { constants as c } from "../constants";

let initialState = { status: c.LOADING };

export function test(state = initialState, action) {
  switch (action.type) {
    case c.GET_TEST_SUCCESS:
      return {
        test: action.test,
        status: c.SUCCESS,
      };
    case c.GET_TEST_FAILURE: {
      return {
        status: c.FAILURE,
      };
    }
    default:
      return state;
  }
}
