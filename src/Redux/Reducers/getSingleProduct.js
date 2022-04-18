import * as actions from "../constant";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
};

const getSingleProduct = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_SINGLE_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
      };
    case actions.GET_SINGLE_PRODUCT_SUCCESS:
      return {
        isLoading: false,
        isSuccess: true,
        isError: false,
        data: action.payload.response,
      };
    case actions.GET_SINGLE_PRODUCT_ERROR:
      return {
        isLoading: false,
        isSuccess: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default getSingleProduct;
