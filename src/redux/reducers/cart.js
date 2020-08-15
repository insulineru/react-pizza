const initialState = {
  items: [],
  count: 0,
  price: 0,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        items: [...state.items, action.payload],
        count: state.count + 1,
        price: state.price + action.payload.price,
      };
    case "REMOVE_FROM_CART":
      const newItems = [...state.items];
      newItems.splice(action.payload, 1);
      const newPrice = newItems.reduce((total, item) => total + item.price, 0);

      return {
        ...state,
        items: newItems,
        count: state.count - 1,
        price: newPrice,
      };
    case "CLEAR_CART":
      return initialState;
    default:
      return state;
  }
};

export default cart;
