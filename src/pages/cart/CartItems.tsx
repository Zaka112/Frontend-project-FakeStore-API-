import React from "react";

import { Box,  IconButton, Paper, Tooltip, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useDispatch } from "react-redux";

import background from "../../assets/bg.svg";
import { cartListActions } from "../../redux/slice/cart";
import { Cart, Product } from "../../types/types";
import { Link } from "react-router-dom";

type Prop = { cartItem: Cart };
export default function CartItems({ cartItem }: Prop) {

  
  const dispatch = useDispatch();
  // function increaseItem(cartItem: Product){
  //   dispatch(cartListActions.addToCart(cartItem))
  // }


  function increaseItem() {
    dispatch(cartListActions.increaseQuantity(cartItem));
    
  }
  function removeItem() {
    dispatch(cartListActions.removeFromCart(cartItem));
  }
  function decreaseItem() {
    dispatch(cartListActions.decreaseQuantity(cartItem));
  }

  return (
    <Paper>
      <Box
        sx={{
          display: "flex",
          gap: "2rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
         <Tooltip title="Product Details" arrow placement="left-start">
        <Link to={`/products/productdetail/${cartItem.id}`}><img src={cartItem.images[0]} width={70} alt="" /></Link></Tooltip>
        <Box
          sx={{
            minWidth: 345,
            display: "flex",
          }}
        >
          <Typography>
            {" "}
            {cartItem.title}: ${cartItem.price}   
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <IconButton onClick={increaseItem}>
          <Tooltip title="increase quantity" arrow placement="top"> 
          <KeyboardArrowUpIcon /></Tooltip>
          </IconButton>
          <Typography> {cartItem.counter} </Typography>
          <IconButton onClick={decreaseItem}>
          <Tooltip title="decrease quantity" arrow placement="bottom">
             <KeyboardArrowDownIcon /></Tooltip> 
          </IconButton>
        </Box>
        <IconButton onClick={removeItem}>
        <Tooltip title="remove product" arrow placement="bottom">
          <DeleteForeverIcon /></Tooltip>
        </IconButton>
      </Box>
    </Paper>
  );
}
