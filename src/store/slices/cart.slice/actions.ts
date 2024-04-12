import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"

import { CART } from "../../actionType"
import { State } from "."

export const reducers = {

  setCart( state:State,{ payload }:PayloadAction<any> ){
    state.cart = payload
  }
}

export const reducesAsync = createAsyncThunk( `${CART}/one`, () => {

} )
