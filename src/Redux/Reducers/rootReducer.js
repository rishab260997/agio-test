import { combineReducers } from "redux";
import signup from "./signup";
import login from "./login";
import getAllProducts from "./getAllProducts";
import getSingleProduct from "./getSingleProduct";

const rootReducer = combineReducers({
  signup: signup,
  login: login,
  getAllProducts: getAllProducts,
  getSingleProduct: getSingleProduct,
});

export default rootReducer;
