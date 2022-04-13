import { put, call, takeLatest } from "@redux-saga/core/effects";
import { getAllProductsSuccess, getAllProductsError } from "../actions";
import * as action from "../constant";
import axios from "axios";

function* getAllProducts(action) {
  try {
    let response = yield call(axios.post, "/products", action.payload);
    console.log(response)
    yield put(getAllProductsSuccess({ response: response.data }));
  } catch (error) {
    yield put(getAllProductsError({ error: "Data not fetched" }));
  }
}

export function* getAllProductsSaga() {
  yield takeLatest(action.GET_ALL_PRODUCTS_REQUEST, getAllProducts);
}
