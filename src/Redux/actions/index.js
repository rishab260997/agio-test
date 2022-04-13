import { createAction } from "redux-actions";
import * as constant from "../constant";

export const loginRequest = createAction(constant.LOGIN_REQUEST);
export const loginSuccess = createAction(constant.LOGIN_SUCCESS);
export const loginError = createAction(constant.LOGIN_ERROR);

export const signupRequest = createAction(constant.SIGNUP_REQUEST);
export const signupSuccess = createAction(constant.SIGNUP_SUCCESS);
export const signupError = createAction(constant.SIGNUP_ERROR);