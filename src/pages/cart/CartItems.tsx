import React from "react";

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { cartListActions } from "../../redux/slices/cart";
import { CartProduct } from "../../types/types";
import RemoveCircleOutlinedIcon from "@mui/icons-material/RemoveCircleOutlined";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import { Box, IconButton, Paper, Tooltip, Typography } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

type Prop = { cartItem: CartProduct };

export default function CartItems({ cartItem }: Prop) {
  const dispatch = useDispatch();

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
          <Link to={`/products/productdetail/${cartItem.id}`}>
            <img src={cartItem.images[0]} width={70} alt={cartItem.title} />
          </Link>
        </Tooltip>
        <Box
          sx={{
            minWidth: 345,
            display: "flex",
          }}
        >
          <Typography>
            {" "}
            {cartItem.title}: $ {cartItem.price}
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
              <AddCircleOutlinedIcon />
            </Tooltip>
          </IconButton>
          <Typography sx={{ fontWeight: "bold" }}>
            {cartItem?.counter}
          </Typography>
          <IconButton onClick={decreaseItem}>
            <Tooltip title="decrease quantity" arrow placement="bottom">
              <RemoveCircleOutlinedIcon />
            </Tooltip>
          </IconButton>
        </Box>
        <IconButton onClick={removeItem}>
          <Tooltip title="remove product" arrow placement="bottom">
            <DeleteForeverIcon sx={{ color: "red" }} />
          </Tooltip>
        </IconButton>
      </Box>
    </Paper>
  );
}
