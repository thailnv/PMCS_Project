import { userService } from '../services/userServices';
import {constancts} from '../constants'
function login(email, password) {
  return dispatch => {
    userService.login(email, password)
    .then(
        res => { 
          if(res.user)
            dispatch(success(res.user));
          else
            dispatch(failure(res.message));
        }
    );
  }

  function success(user) { return { type: constancts.LOGIN_SUCCESS, user } }
  function failure(message) { return { type: constancts.LOGIN_FAILURE, message } }
}

export const userActions = {
  login
}