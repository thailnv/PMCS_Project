import { combineReducers } from 'redux';

import { authentication } from './authReducers';

const rootReducer = combineReducers({
  authentication
});

export default rootReducer;