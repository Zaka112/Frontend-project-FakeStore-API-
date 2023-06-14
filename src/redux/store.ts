import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./slice/products";
import productDetailReducer from "./slice/productDetail";

export const store = configureStore({
  reducer: { products: productReducer, productDetail: productDetailReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
