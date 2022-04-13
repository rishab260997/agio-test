import { combineReducers } from "redux";
import signup from "./signup";
import login from "./login";
import getAllProducts from "./getAllProducts";

const rootReducer = combineReducers({
  signup: signup,
  login: login,
  getAllProducts: getAllProducts,
});

export default rootReducer;
