import { put, call, takeLatest } from "@redux-saga/core/effects";
import { getUserCartSuccess, getUserCartError } from "../actions";
import * as action from "../constant";
import axios from "axios";

function* getUserCart(action) {
  try {
    let response = yield call(axios.get, "/carts/user/5");
    console.log(response)
    yield put(getUserCartSuccess({ response: response.data }));
  } catch (error) {
    yield put(getUserCartError({ error: "Data not fetched" }));
  }
}

export function* getUserCartSaga() {
  yield takeLatest(action.GET_USER_CART_REQUEST, getUserCart);
}
