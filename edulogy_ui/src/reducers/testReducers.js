import { constants as c } from "../constants";

let initialState = { status: c.LOADING };

export function test(state = initialState, action) {
  switch (action.type) {
    case c.GET_TEST_SUCCESS:
      return {
        test: action.test,
        status: c.SUCCESS,
      };
    case c.GET_TEST_FAILURE:
    case c.GET_TESTS_FAILURE: {
      return {
        status: c.FAILURE,
      };
    }
    case c.GET_TESTS_SUCCESS:
      return {
        status: c.SUCCESS,
        tests: action.tests,
      };
    default:
      return state;
  }
}

