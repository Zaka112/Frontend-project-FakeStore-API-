import React from "react";

import { useDispatch, useSelector } from "react-redux";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import {
  Box,
  Button,
  IconButton,
  Paper,
  Tooltip,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

import { RootState } from "../../redux/store";
import { productActions } from "../../redux/slices/products";
import { Product } from "../../types/types";

export default function FavoriteProducts() {
  const favoriteProducts = useSelector(
    (state: RootState) => state.products.favorite
  );

  const dispatch = useDispatch();

  function deleteFavorite(favProduct: Product): void {
    dispatch(productActions.deleteFavoriteProducts(favProduct));
  }
  return (
    <Paper sx={{ minHeight: 600, marginTop: 10 }}>
      <Typography variant="h3" component="h1">
        Your Favorite Choices
      </Typography>
      {favoriteProducts.length === 0 ? (
        <Typography variant="h4" component="div">
          List of Favorite Choices is empty.
          <Tooltip title="Go To Shop" arrow placement="right">
            <Link to="/productlist">
            <Button variant="contained"> Bring some in!</Button>
          </Link></Tooltip>
        </Typography>
      ) : (
        favoriteProducts.map((favProduct) => {
          return (
            <Box
              key={favProduct.id}
              sx={{
                display: "flex",
                gap: "2rem",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Tooltip title="Product Details" arrow placement="left">
                <Link to={`/products/productdetail/${favProduct.id}`}>
                  <img
                    src={favProduct.images[0]}
                    width={70}
                    alt={favProduct.title}
                  />
                </Link>
              </Tooltip>
              <Box
                sx={{
                  minWidth: 345,
                  display: "flex",
                }}
              >
                <Typography>
                  {favProduct.title}: ${favProduct.price}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",

                  alignItems: "center",
                }}
              >
                <IconButton
                  onClick={() => deleteFavorite(favProduct)}
                  sx={{ color: "red" }}
                >
                  <Tooltip title="Delete" arrow>
                    <DeleteForeverIcon />
                  </Tooltip>
                </IconButton>
              </Box>
            </Box>
          );
        })
      )}
    </Paper>
  );
}
