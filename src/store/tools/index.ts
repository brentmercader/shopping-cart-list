import { ActionReducerMapBuilder } from "@reduxjs/toolkit/src/mapBuilders";
import { NoInfer } from "@reduxjs/toolkit/src/tsHelpers";
import forEach from "lodash/forEach";

export const builderReducers = ( reducers: Record<string, any>, builder: ActionReducerMapBuilder<NoInfer<any>> ) => {
  forEach( reducers, ( value, key ) => {
    builder.addCase( key, value );
  } );
};
