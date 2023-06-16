import React from "react";

import { Product } from "../../types/types";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { productActions } from "../../redux/slice/products";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { cartListActions } from "../../redux/slice/cart";

type Prop = { product: Product };

export default function ProductItems({ product }: Prop) {
  const dispatch = useDispatch();
  function addFavorite(product: Product) {
    dispatch(productActions.addFavoriteProducts(product));
  }
  function addToCart(product: Product) {
    dispatch(cartListActions.addToCart(product));
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
       
          {" "}
          <Button size="small" style={{ color: "black" }} onClick={()=> addToCart(product)}>
            Add to cart
          </Button>
       
      </CardContent>

      <IconButton
        aria-label="add to favorites"
        onClick={() => addFavorite(product)}
      >
        <FavoriteIcon />
      </IconButton>
    </Card>
  );
}
