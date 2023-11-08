import { configureStore } from "@reduxjs/toolkit";
import ViewSingleProductIdReducer from "./ReduxDataSlices/ViewSingleProductDataSlice";
import AddAndViewCartDataReducer from "./ReduxDataSlices/AddAndViewCartDataSlice";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  ViewSingleProductId: ViewSingleProductIdReducer,
  AddAndViewCartData: AddAndViewCartDataReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: { persistedData: persistedReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;
