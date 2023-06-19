import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Cart } from "../../types/types";
import CartItems from "../../pages/cart/CartItems";

type InitialState = {
  cartItems: Cart[];
};

export const initialState: InitialState = {
  cartItems: [],

  //initial state for counter?
};

const cartSlice = createSlice({
  name: "cartList",
  initialState,
  reducers: {
    addToCart: (state, action): void => {
      const isIncluded = state.cartItems.some(
        (cartItem) => cartItem.id === action.payload.id
      );

      if (!isIncluded) {
        state.cartItems.push(action.payload);
      }
    },
    removeFromCart: (state, action: PayloadAction<Cart>) => {
      const result = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = result;
    },

    increaseQuantity: (state, action: PayloadAction<Cart>) => {
      const productIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );

      if (productIndex !== -1) {
        state.cartItems[productIndex].counter++;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<Cart>) => {
      const productIndex: number = state.cartItems.findIndex(
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
