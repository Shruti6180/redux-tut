import { bindActionCreators } from "redux";
import { ADD_TO_CART } from "../Constants";

const initialState = {
  cartData: [],
};

export default function cartItems(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...StaticRange,
        cartData: action.data,
      };
      break;

    default:
      return state;
  }
}
