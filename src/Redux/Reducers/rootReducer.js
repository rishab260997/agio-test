import { combineReducers } from "redux";
import signup from "./signup";
import login from "./login";

const rootReducer = combineReducers({
  signup: signup,
  login: login,
});

export default rootReducer;
