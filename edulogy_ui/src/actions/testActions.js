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

function getTest(query) {
  return (dispatch) => {
    testService.getTest(query).then((res) => {
      if (res.doc) dispatch(success(res.doc));
      else dispatch(failure(res.message));
    });
  };
  function success(tests) {
    return { type: c.GET_TESTS_SUCCESS, tests };
  }
  function failure(message) {
    return { type: c.GET_TESTS_FAILURE, message };
  }
}

function getAllTest(){
  return (dispatch) => {
    testService.getAllTest().then((res) => {
      if (res.doc) dispatch(success(res.doc));
      else dispatch(failure(res.message));
    });
  };
  function success(tests) {
    return { type: c.GET_TESTS_SUCCESS, tests };
  }
  function failure(message) {
    return { type: c.GET_TESTS_FAILURE, message };
  }
}

export const testActions = {
  getTest,
  getTestById,
  getAllTest
};
