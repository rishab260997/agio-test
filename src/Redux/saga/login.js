import { put, call, takeLatest } from "@redux-saga/core/effects";
import { loginSuccess, loginError } from "../actions";
import * as action from "../constant";
import axios from "axios";

function* login(action) {
  try {
      console.log(action.payload)
    let response = yield call(axios.post, '/users', action.payload);
    if (response) {
      yield put(loginSuccess({ response: response }));
    } else {
      yield put(loginError({ error: "Data not fetched" }));
    }
  } catch (error) {
    yield put(loginError({ error: "Data not fetched" }));
  }
}

export function* loginSaga() {
  yield takeLatest(action.LOGIN_REQUEST, login);
}
