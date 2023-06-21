import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CartProducts, Product } from "../../types/types";

type CartList = {
  cartItems: CartProducts[];
};

export const initialState: CartList = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cartList",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>): void => {
      const isIncluded = state.cartItems.some(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (!isIncluded) {
        state.cartItems.push({ ...action.payload, counter: 1 });
      }
      else
     {alert("already in") } // extra feature Some logic here
    },
    removeFromCart: (state, action: PayloadAction<CartProducts>) => {
      const arrayAfterRemoving = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = arrayAfterRemoving;
    },

    increaseQuantity: (state, action: PayloadAction<CartProducts>) => {
      const productIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );

      if (productIndex !== -1) {
        state.cartItems[productIndex].counter++;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<CartProducts>) => {
      const productIndex= state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (productIndex !== -1) {
        if (state.cartItems[productIndex].counter === 1) {
          state.cartItems[productIndex].counter = 1;
        } else {
          state.cartItems[productIndex].counter--;
        }
      }
    },
    checkOut: (state) => {
      state.cartItems = initialState.cartItems;
    },
  },
});

export const cartListActions = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;
