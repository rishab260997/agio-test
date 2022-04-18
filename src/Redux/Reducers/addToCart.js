import * as actions from "../constant";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
};

const addToCart = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_TO_CART_REQUEST:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
      };
    case actions.ADD_TO_CART_SUCCESS:
      return {
        isLoading: false,
        isSuccess: true,
        isError: false,
        data: action.payload.response,
      };
    case actions.ADD_TO_CART_ERROR:
      return {
        isLoading: false,
        isSuccess: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default addToCart;
