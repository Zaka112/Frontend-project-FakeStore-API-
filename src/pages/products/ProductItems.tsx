import React from "react";

import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { productActions } from "../../redux/slices/products";
import { cartListActions } from "../../redux/slices/cart";
import { RootState } from "../../redux/store";
import { Product } from "../../types/types";

type Prop = { product: Product };

export default function ProductItems({ product }: Prop) {
  const cartItems = useSelector((state: RootState) => state.cartList.cartItems);
  const favoriteProducts = useSelector(
    (state: RootState) => state.products.favorite
  );

  const isInCart = cartItems.some((cartItem) => cartItem.id === product.id);

  const isFavorite = favoriteProducts.some(
    (favoriteItem) => favoriteItem.id === product.id
  );

  const dispatch = useDispatch();

  function handelFavoriteProductIcon(product: Product): void {
    if (!isFavorite) {
      dispatch(productActions.addFavoriteProducts(product));
      toast.success(`${product.title} has been added to favorite list`, {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      dispatch(productActions.deleteFavoriteProducts(product));
      toast.success(`${product.title} removed from favorite list`, {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  function addToCart(product: Product): void {
    if (!isInCart) {
      dispatch(cartListActions.addToCart(product));
      toast.success(`${product.title} successfully added to the cart`, {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    
  }
  return (
    <Paper>
      <Card sx={{ maxWidth: "100%", minHeight: 320 }}>
        <Link
          to={`/products/productdetail/${product.id}`}
          style={{ textDecoration: "none", color: "white" }}
        >
          {" "}
          <CardMedia
            component="img"
            alt={product.title}
            height="140"
            image={product.images[0]}
          />
        </Link>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            Price: {product.price} $
          </Typography>
          <Link
            to={`/products/productdetail/${product.id}`}
            style={{ color: "inherit" }}
          >
            {" "}
            <Button size="small" sx={{ color: "inherit" }}>
              Learn More
            </Button>
          </Link>
          ||
          <Button
            size="small"
            style={{ color: "inherit" }}
            onClick={() => addToCart(product)}
          >
            Add to cart
          </Button>
        </CardContent>

        <IconButton
          aria-label="add to favorites"
          onClick={() => {
            handelFavoriteProductIcon(product);
          }}
          sx={isFavorite ? { color: "red" } : { color: "inherit" }}
        >
          <FavoriteIcon />
        </IconButton>
      </Card>
    </Paper>
  );
}
