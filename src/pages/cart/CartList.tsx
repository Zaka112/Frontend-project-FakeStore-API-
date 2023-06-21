import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { Button, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import CartItems from "./CartItems";
import { RootState } from "../../redux/store";
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
    <Paper sx={{ marginTop: 10, minHeight: 600 }}>
      <Typography variant="h1" component="div">
        Your Cart
      </Typography>

      {cartList.length === 0 ? (
        <Typography variant="h2" component="div">
          No item in the cart!
        </Typography>
      ) : (
        cartList.map((cartItem) => {
          return <CartItems cartItem={cartItem} key={cartItem.id} />;
        })
      )}
      {cartList.length === 0 ? (
        <Link to="/productlist" style={{ color: "inherit" }}>
          <Button size="large" sx={{ color: "inherit" }}>
            Back to Shoping
          </Button>{" "}
        </Link>
      ) : (
        <Paper>
          <Link to="/productlist" style={{ color: "inherit" }}>
            {" "}
            <Button size="large" sx={{ color: "inherit" }}>
              Add more items to the cart
            </Button>{" "}
          </Link>
        </Paper>
      )}
      <br />
      <Typography variant="h3" component="div">
        {" "}
        Total Amount: $ {total.toLocaleString()}
      </Typography>

      {cartList.length > 0 ? (
        <Button
          sx={{ color: "inherit" }}
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
      {cartList.length > 0 ? (
        <Button onClick={() => checkOut()} sx={{ color: "inherit" }}>
          Remove Cart
        </Button>
      ) : null}
    </Paper>
  );
}
