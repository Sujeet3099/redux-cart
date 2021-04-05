import React from 'react';
// components
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
// items
import cartItems from './cart-items';

// ? redux stuff
// * store -> stores data , like a state
/**
 * store.getState -> return the state object
 */

// * reducer -> a function that is used to update the store
/**
 * it requires two arguments => state , action
 * state -> old state/ state befor update
 * action -> what happened / what update
 * must return updated or old state
 */

import { createStore } from 'redux';
import { reducer } from './redux/reducer';
import { Provider } from 'react-redux';
// ? react-redux connector stuff (serious approach)
// * Provider -> Wraps the app
// * connect -> used in components to connect it to the store

const initialState = {
  cart: cartItems,
  amount: 0,
  total: 0,
};
const store = createStore(reducer, initialState);

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
