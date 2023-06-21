import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Product } from "../../types/types";

type ProductList = {
  products: Product[];
  favorite: Product[];
  isLoading: boolean;
  fetchedProducts: Product[]
};

const initialState: ProductList = {
  products: [],
  favorite: [],
  isLoading: true,
  fetchedProducts:[]  
};

const productSlice = createSlice({
  name: "productList",
  initialState,
  reducers: {
    getProductsData: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
      state.fetchedProducts= action.payload;
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

    sorting: (state, action: PayloadAction<String>) => {
      if (action.payload === "lowestPrice") {
        state.products.sort((a, b) => a.price - b.price);
      }
      if (action.payload === "highestPrice") {
        state.products.sort((a, b) => b.price - a.price);
      }
      if (action.payload === "AZ") {
        state.products.sort((a, b) => a.title.localeCompare(b.title));
      }
      if (action.payload === "ZA") {
        state.products.sort((a, b) => b.title.localeCompare(a.title));
      }
      if (action.payload === "reset") {
        state.products=state.fetchedProducts
      }
    },
  },
});

export const productActions = productSlice.actions;
const productReducer = productSlice.reducer;
export default productReducer;
