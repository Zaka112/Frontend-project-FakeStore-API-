import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { Button, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import CartItems from "./CartItems";
import background from "../../assets/bg.svg";
import { RootState } from "../../redux/store";
import { toast } from "react-toastify";
import { cartListActions } from "../../redux/slice/cart";

export default function CartList() {
  const cartList = useSelector((state: RootState) => state.cartList.cartItems);
  const dispatch = useDispatch();
  function checkOut() {
    dispatch(cartListActions.checkOut());
   
  }
  const total = cartList.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.price * currentValue.counter;
  }, 0);

  return (
    <Paper
      sx={{ marginTop: 10, minHeight: 600, background: `url(${background})` }}
    >

      <h1>CartList</h1>
      {cartList.length === 0 ? (    <Button>Back to Shoping</Button>) : null}
      {cartList.length === 0 ? (
        <Typography>No item in the cart!</Typography> 
        
      ) : (
        cartList.map((cartItem) => {
          return <CartItems cartItem={cartItem} key={cartItem.id} />;
        })
      )}

      <br />
      <h1> Total: {total.toLocaleString()}</h1>

      {cartList.length > 0 ? (
        <Button
          onClick={() => {
            checkOut();
            toast.success(` Thanks for Shoping here. Come back soon`, {
              position: "top-left",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }}
        >
          Check Out
        </Button>
      ) : null}
    {cartList.length > 0 ? (   <Button onClick={() => checkOut()}>Remove Cart</Button>): null}
      
    </Paper>
  );
}
