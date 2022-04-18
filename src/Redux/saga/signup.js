import { put, call, takeLatest } from "@redux-saga/core/effects";
import { signupSuccess, signupError } from "../actions";
import * as action from "../constant";
import axios from "axios";

function* signup(action) {
  try {
    let response = yield call(axios.post, '/users', action.payload);
    if (response) {
      yield put(signupSuccess({ response: response.data }));
    } else {
      yield put(signupError({ error: "Data not fetched" }));
    }
  } catch (error) {
    yield put(signupError({ error: "Data not fetched" }));
  }
}

export function* signupSaga() {
  yield takeLatest(action.SIGNUP_REQUEST, signup);
}
