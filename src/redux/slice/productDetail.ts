import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Product } from "../../types/types";

type InitialState = { product: Product; isLoading: boolean };

const initialState: InitialState = {
  product: {id: 0,
    title: "",
    price: 0,
    description: "",
    images: [],
    creationAt: "string",
    updatedAt: "",
    category: {
      id: 0,
      name: "",
      image: "",
      creationAt: "",
      updatedAt: "",
    },},
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
