import { createAction } from "redux-actions";
import * as constant from "../constant";

export const loginRequest = createAction(constant.LOGIN_REQUEST);
export const loginSuccess = createAction(constant.LOGIN_SUCCESS);
export const loginError = createAction(constant.LOGIN_ERROR);

export const signupRequest = createAction(constant.SIGNUP_REQUEST);
export const signupSuccess = createAction(constant.SIGNUP_SUCCESS);
export const signupError = createAction(constant.SIGNUP_ERROR);

export const getAllProductsRequest = createAction(constant.GET_ALL_PRODUCTS_REQUEST);
export const getAllProductsSuccess = createAction(constant.GET_ALL_PRODUCTS_SUCCESS);
export const getAllProductsError = createAction(constant.GET_ALL_PRODUCTS_ERROR);

export const getSingleProductRequest = createAction(constant.GET_SINGLE_PRODUCT_REQUEST);
export const getSingleProductSuccess = createAction(constant.GET_SINGLE_PRODUCT_SUCCESS);
export const getSingleProductError = createAction(constant.GET_SINGLE_PRODUCT_ERROR);