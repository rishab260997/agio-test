import { put, call, takeLatest } from "@redux-saga/core/effects";
import { addToCartSuccess, addToCartError } from "../actions";
import * as action from "../constant";
import axios from "axios";

function* addToCart(action) {
  try {
    let response = yield call(axios.post, "/carts", action.payload);
    console.log(response)
    yield put(addToCartSuccess({ response: response.data }));
  } catch (error) {
    yield put(addToCartError({ error: "Data not fetched" }));
  }
}

export function* addToCartSaga() {
  yield takeLatest(action.ADD_TO_CART_REQUEST, addToCart);
}
