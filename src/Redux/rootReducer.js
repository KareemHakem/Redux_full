import { combineReducers } from "redux";
import counter from "./counter/reducer";
import users from './users/reducer'

const rootReducer = combineReducers({
  counter,
  users
});

export default rootReducer;
