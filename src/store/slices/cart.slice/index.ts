
import { createSelector, createSlice } from "@reduxjs/toolkit"
import { persistReducer } from "redux-persist"
import storageSession from 'redux-persist/lib/storage/session'
import { RootState } from "../.."
import { CART } from "../../actionType"
import { reducers } from "./actions"

export type State = {
  cart: any,
}

const initialState: State = {
  cart: [],
}

const {
  actions,
  reducer
} = createSlice( {
  name: CART,
  initialState,
  reducers,
} )

export const cartSelector = createSelector( ( state: RootState ) => state[CART], state => state )

const cartReducer = persistReducer( {
  key: CART,
  storage: storageSession,
}, reducer )

export const {
  setCart
} = actions


export default cartReducer
