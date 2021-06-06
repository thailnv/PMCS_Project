import { combineReducers } from 'redux';

<<<<<<< Updated upstream
import { authentication } from './authReducers';
import { application } from './appReducers'

const rootReducer = combineReducers({
  authentication,
  application
=======
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
>>>>>>> Stashed changes
});

export default rootReducer;