import { testService } from "../services/testServices";
import { constants as c } from "../constants";

function getTestById(id) {
  return (dispatch) => {
    testService.getTestById(id).then((res) => {
      if (res.doc) dispatch(success(res.doc));
      else dispatch(failure());
    });
  };
  function success(test) {
    return { type: c.GET_TEST_SUCCESS, test };
  }
  function failure(msg) {
    return { type: c.GET_TEST_FAILURE };
  }
}

export const testActions = {
  getTestById,
};
