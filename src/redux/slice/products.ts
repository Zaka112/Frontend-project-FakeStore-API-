import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Product } from "../../types/types";

type ProductList = {
  products: Product[];
  favorite: Product[];
  isLoading: boolean;
};

const initialState: ProductList = {
  products: [],
  favorite: [],
  isLoading: true,
};

const productSlice = createSlice({
  name: "productList",
  initialState,
  reducers: {
    getProductsData: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
      state.isLoading = false;
    },
    addFavoriteProducts: (state, action: PayloadAction<Product>): void => {
      const isInFavorite = state.favorite.some(
        (product) => product.id === action.payload.id
      );

      if (!isInFavorite) {
        state.favorite = [...state.favorite, action.payload];
      } else {
        state.favorite = [...state.favorite];
      }
    },
    deleteFavoriteProducts: (state, action: PayloadAction<Product>): void => {
      const remainingAfterDelete = state.favorite.filter(
        (product) => product.id !== action.payload.id
      );
      state.favorite = remainingAfterDelete;
    },
  },
});

export const productActions = productSlice.actions;
const productReducer = productSlice.reducer;
export default productReducer;
