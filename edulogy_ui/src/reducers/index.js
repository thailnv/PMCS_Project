import { combineReducers } from 'redux';
import { authentication } from "./authReducers";
import { application } from "./appReducers";
import { test } from "./testReducers";
import {question} from "./questionsRedeucers";
import {dashboard} from "./adminReducers"
const rootReducer = combineReducers({
  authentication,
  application,
  test,
  question,
  dashboard
});

export default rootReducer;