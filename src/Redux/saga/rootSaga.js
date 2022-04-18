import { fork, all } from "redux-saga/effects";
import { signupSaga } from "./signup";
import { loginSaga } from "./login";
import { getAllProductsSaga } from "./getAllProducts";
import { getSingleProductsSaga } from "./getSingleProduct";
import { addToCartSaga } from "./addToCart";
import { getUserCartSaga } from "./getUserCart";

export default function* rootSaga() {
  yield all([
    fork(signupSaga),
    fork(loginSaga),
    fork(getAllProductsSaga),
    fork(getSingleProductsSaga),
    fork(addToCartSaga),
    fork(getUserCartSaga),
  ]);
}
