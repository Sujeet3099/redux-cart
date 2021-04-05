import {
  INCREASE,
  DECREASE,
  CLEAR_CART,
  GET_TOTALS,
  REMOVE,
  TOGGLE,
} from './action';
export const reducer = (state, action) => {
  switch (action.type) {
    case CLEAR_CART:
      return { ...state, cart: [] };
    case TOGGLE:
      const tempCart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          let newAmount;
          if (action.payload.fun === 'inc') newAmount = item.amount + 1;
          else newAmount = item.amount - 1;
          item = { ...item, amount: newAmount };
        }
        return item;
      });
      return { ...state, cart: tempCart };
    case REMOVE:
      return {
        ...state,
        cart: state.cart.filter((item) => action.payload.id !== item.id),
      };
    case GET_TOTALS:
      let { totalAmount, totalPrice } = state.cart.reduce(
        (cartTotal, cartItem) => {
          cartTotal.totalAmount += cartItem.amount;
          cartTotal.totalPrice += cartItem.price * cartItem.amount;
          return cartTotal;
        },
        { totalAmount: 0, totalPrice: 0 },
      );
      totalPrice = parseFloat(totalPrice.toFixed(2));
      return { ...state, total: totalPrice, amount: totalAmount };
    default:
      return state;
  }
};

// if (action.type === INCREASE) {
//   return { ...state, total: state.total + 1 };
// }
// if (action.type === DECREASE) {
//   return { ...state, total: state.total - 1 };
// }
