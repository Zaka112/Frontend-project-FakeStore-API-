import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Product } from "../../types/types";

export type productDetail = { product: null |Product; isLoading: boolean };

export const initialState: productDetail = {
  product: null,
  isLoading: true,
};

const productDetailSlice = createSlice({
  name: "productDetail",
  initialState,
  reducers: {
    getProductDetail: (state, action: PayloadAction<Product>) => {
      state.product = action.payload;
      state.isLoading = false;
    },
  },
});

export const productDetailActions = productDetailSlice.actions;
const productDetailReducer = productDetailSlice.reducer;
export default productDetailReducer;
