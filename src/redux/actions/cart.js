export const addToCart = (item) => ({
  type: "ADD_TO_CART",
  payload: item,
});

export const removeFromCart = (index) => ({
  type: "REMOVE_FROM_CART",
  payload: index,
});

export const clearCart = () => ({
  type: "CLEAR_CART",
});
