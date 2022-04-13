import { fork, all } from "redux-saga/effects";
import { signupSaga } from "./signup";
import { loginSaga } from "./login";


export default function* rootSaga() {
    yield all([fork(signupSaga), fork(loginSaga)]);
  }
