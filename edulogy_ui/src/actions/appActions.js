import { appServices } from "../services/appServices";
import { constants as c } from "../constants";

function getHomeInfo() {
  return (dispatch) => {
    appServices.getHomeInfo().then((res) => {
      if (res.level1) dispatch(success(res));
      else dispatch(failure(res.message));
    });
  };

  function success(info) {
    return { type: c.GET_HOME_SUCCESS, info };
  }
  function failure(message) {
    return { type: c.GET_HOME_FAILURE, message };
  }
}

function changePopup(type) {
  return { type };
}

function hidePopup() {
  return { type: c.HIDE_POPUP };
}

export const appActions = {
  changePopup,
  hidePopup,
  getHomeInfo,
};
