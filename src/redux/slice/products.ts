import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Product } from "../../types/types";

type InitialState = {
  products: Product[];
  favorite: Product[];
  
  isLoading: boolean;
};

const initialState: InitialState = {
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
      state.isLoading= false
      
    },
    addFavoriteProducts: (state, action: PayloadAction<Product>): void => {
      const result = state.favorite.some(
        (product) => product.id === action.payload.id
      );

     if (!result) {state.favorite = [...state.favorite, action.payload]
   }
        else {state.favorite = [...state.favorite]
          
        }
      
    },
    deleteFavoriteProducts: (state, action: PayloadAction<Product>): void => {
      const result = state.favorite.filter(
        (product) => product.id !== action.payload.id
      );
      state.favorite = result;
      
    },
  },
});

export const productActions = productSlice.actions;
const productReducer = productSlice.reducer;
export default productReducer;
