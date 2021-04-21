import { constants } from '../constants';

const initialState = { popupType: '' };

export function application(state = initialState, action) {
  console.log('appReducers', action);
  switch (action.type) {
    case constants.POPUP_LOGIN:
      return {
        ...state,
        popupType: 'login',
      }
    case constants.POPUP_CONTRIBUTION:
      return {
        ...state,
        popupType: 'contribution',
      }
    case constants.HIDE_POPUP:
      return {
        ...state,
        popupType: ''
      }
    default:
      return state
  }
}