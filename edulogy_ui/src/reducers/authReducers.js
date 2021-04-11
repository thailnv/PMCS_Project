import { constancts } from '../constants'

let user = JSON.parse(localStorage.getItem('user'));

let initialState = user ? { loggedIn: true, user } : {}

export function authentication (state = initialState ,action ){
    console.log(action);
    switch(action.type)
    {
      case constancts.LOGIN_SUCCESS:
        return {
          loggedIn: true,
          user: action.user
        };
      case constancts.LOGIN_FAILURE:
        return {
          message: action.message
        };
      default: return state;
    }
  }