import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./slice/products";
import productDetailReducer from "./slice/productDetail";
import cartReducer from "./slice/cart";
import searchReducer from "./slice/search";

export const store = configureStore({
  reducer: {
    products: productReducer,
    productDetail: productDetailReducer,
    search: searchReducer,
    cartList: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
