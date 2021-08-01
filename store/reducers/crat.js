import CartItem from "../../models/CartItem";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cart";
import { ADD_ORDER } from "../actions/orders";
import { DELETE_PRODUCT } from "../actions/Products";

const initialState = {
  items: {},
  totalAmount: 0,
};

export default cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addProduct = action.product;
      let oldAmount = state.totalAmount;
      price = addProduct.price;
      oldAmount = parseFloat(oldAmount);
      let newAmount = oldAmount + price;

      if (state.items[addProduct.id]) {
        const updateCartItem = new CartItem(
          state.items[addProduct.id].quantity + 1,
          addProduct.price,
          addProduct.title,
          state.items[addProduct.id].sum + addProduct.price
        );
        return {
          ...state,
          items: { ...state.items, [addProduct.id]: updateCartItem },
          totalAmount: newAmount,
        };
      } else {
        const newCartItem = new CartItem(
          1,
          addProduct.price,
          addProduct.title,
          addProduct.price
        );
        return {
          ...state,
          items: { ...state.items, [addProduct.id]: newCartItem },
          totalAmount: newAmount,
        };
      }
    case ADD_ORDER:
      return initialState;
    case REMOVE_FROM_CART:
      const removeProduct = action.product;
      const quantity = state.items[removeProduct].quantity;
      let price = state.items[removeProduct].productPrice;
      oldAmount = state.totalAmount;
      price.toFixed(2);

      let newTotalAmount = state.totalAmount - price;

      newTotalAmount = newTotalAmount.toFixed(2);
      if (quantity > 1) {
        const updateCartItem = new CartItem(
          quantity - 1,
          price,
          state.items[removeProduct].productTitle,
          state.items[removeProduct].sum - price
        );
        return {
          ...state,
          items: { ...state.items, [removeProduct]: updateCartItem },
          totalAmount: newTotalAmount,
        };
      } else {
        const updateCart = { ...state.items };
        delete updateCart[removeProduct];

        return {
          ...state,
          items: updateCart,
          totalAmount: newTotalAmount,
        };
      }
    case DELETE_PRODUCT:
      if (!state.items[action.pid]) {
        return { ...state };
      }
      const updateItems = { ...state.items };
      const newAmountAfterDelet =
        state.totalAmount - state.items[action.pid].sum;
      delete updateItems[action.pid];
      return { ...state, items: updateItems, totalAmount: newAmountAfterDelet };

    default:
      return state;
  }
};
