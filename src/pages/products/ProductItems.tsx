import React from "react";

import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { productActions } from "../../redux/slice/products";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { cartListActions } from "../../redux/slice/cart";
import { RootState } from "../../redux/store";
import { Product } from "../../types/types";

type Prop = { product: Product };

export default function ProductItems({ product }: Prop) {
  

  const cartItems= useSelector((state:RootState)=> state.cartList.cartItems)

  const isInCart = cartItems.some(
    (cartItem) => cartItem.id === product.id
  );
  const dispatch = useDispatch();
  const favoriteProducts = useSelector(
    (state: RootState) => state.products.favorite
  );
  const isFavorite = favoriteProducts.some(
    (favoriteItem) => favoriteItem.id === product.id
  );

  function handelFavoriteProductIcon(product: Product):void {
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

  function addToCart(product: Product):void {
    if (!isInCart) {dispatch(cartListActions.addToCart(product));
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
    <Card sx={{ maxWidth: 300, minHeight: 320 }}>
      <Link
        to={`/products/productdetail/${product.id}`}
        style={{ textDecoration: "none", color: "white" }}
      >
        {" "}
        <CardMedia
          component="img"
          alt="green iguana"
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
        {/* <Typography variant="body2" color="text.secondary">
        {product.title} belongs to {product.category.name} category.
        </Typography> */}
        <Link to={`/products/productdetail/${product.id}`}>
          {" "}
          <Button size="small" style={{ color: "black" }}>
            Learn More
          </Button>
        </Link>
        ||
        <Button
          size="small"
          style={{ color: "black" }}
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
        sx={isFavorite ? { color: "red" } : { color: "black" }}
      >
        <FavoriteIcon />
      </IconButton>
    </Card>
  );
}
