import { combineReducers } from "@reduxjs/toolkit";

import { CART } from "./actionType";

import cart from './slices/cart.slice';
const modules = {
  [CART]: cart,
};

const reducer = combineReducers( modules );

export default reducer;
