export const ADD_ORDER = "ADD_ORDER";
export const addOrder = (cartItem, totalAmount) => {
  return {
    type: ADD_ORDER,
    orderedItems: { items: cartItem, amount: totalAmount },
  };
};
