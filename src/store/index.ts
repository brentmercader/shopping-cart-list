import { configureStore } from "@reduxjs/toolkit";
import type { TypedUseSelectorHook } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { getPersistConfig } from "redux-deep-persist";
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist";
// storage
import storage from "redux-persist/lib/storage";

import { CART } from "./actionType";
import reducers from "./reducers";
// create persist reducer
const persistConfig = getPersistConfig( {
  key: "root_mobile",
  storage,
  blacklist: [
    CART,
  ],
  rootReducer: reducers,
} );
const persistedReducer = persistReducer( persistConfig, reducers );
// create store
const store = configureStore( {
  devTools: process.env.NODE_ENV === "development",
  reducer: persistedReducer,
  middleware: ( getDefaultMiddleware ) =>
    getDefaultMiddleware( {
      immutableCheck: {
        warnAfter: 128, 
      },
      serializableCheck: {
        warnAfter: 128, 
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER ],
      },
    } ),
} );

export type RootState = ReturnType<typeof persistedReducer>;

export const persistor = persistStore( store );

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
