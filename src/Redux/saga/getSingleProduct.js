import { put, call, takeLatest } from "@redux-saga/core/effects";
import { getSingleProductSuccess, getSingleProductError } from "../actions";
import * as action from "../constant";
import axios from "axios";

function* getSingleProduct(action) {
  try {
    let response = yield call(
      axios.get,
      `/products/${action.payload.id}`,
      action.payload
    );
    console.log(response);
    yield put(getSingleProductSuccess({ response: response.data }));
  } catch (error) {
    yield put(getSingleProductError({ error: "Data not fetched" }));
  }
}

export function* getSingleProductsSaga() {
  yield takeLatest(action.GET_SINGLE_PRODUCT_REQUEST, getSingleProduct);
}
