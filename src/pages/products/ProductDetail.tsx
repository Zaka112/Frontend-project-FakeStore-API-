import React, { useEffect } from "react";

import { Link, useParams } from "react-router-dom";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Box, Button, CircularProgress, Paper } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { Product } from "../../types/types";
import { AppDispatch, RootState } from "../../redux/store";
import { getProductDetailData } from "../../redux/thunk/products";
import { cartListActions } from "../../redux/slices/cart";
import { productActions } from "../../redux/slices/products";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();

  const productDetail = useSelector(
    (state: RootState) => state.productDetail.product
  );
  const isLoading = useSelector(
    (state: RootState) => state.productDetail.isLoading
  );

  const cartItems = useSelector((state: RootState) => state.cartList.cartItems);

  const favoriteProducts = useSelector(
    (state: RootState) => state.products.favorite
  );
  const dispatchApp = useDispatch<AppDispatch>();

  const productDetailURL = `https://api.escuelajs.co/api/v1/products/${id}?fullText=true`;

  const dispatch = useDispatch();

  const isFavorite = favoriteProducts.some(
    (favoriteItem) => favoriteItem.id === productDetail?.id
  );

  const isInCart = cartItems.some(
    (cartItem) => cartItem.id === productDetail?.id
  );
  function handelFavoriteProductIcon(product: Product) {
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

  useEffect(() => {
    dispatchApp(getProductDetailData(productDetailURL));
  }, [dispatchApp, productDetailURL]);

  if (isLoading) {
    return (
      <div>
        <CircularProgress />
      </div>
    );
  } else
    return (
      <Paper
        sx={{
          display: "flex",
          marginTop: 5,
          justifyContent: "center",
          minHeight:700
         }}
      >
        <Box
          key={productDetail?.id}
          sx={{
            margin: 5,
          }}
        >
          <Card sx={{ maxWidth: 300, minHeight: 320 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={productDetail?.images[0]}
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {productDetail?.title}
              </Typography>
              <Typography gutterBottom variant="body2" component="div">
                Price: {productDetail?.price} $
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {productDetail?.title} belongs to {productDetail?.category.name}{" "}
                category.
              </Typography>
              <Button
                size="small"
                style={{ color: "inherit" }}
                onClick={
                  productDetail !== null
                    ? () => addToCart(productDetail)
                    : () => {}
                }
              >
                Add to cart
              </Button>
              ||
              <Link to="/productlist" style={{ color: "inherit" }}>
                <Button size="small" style={{ color: "inherit" }}>
                  Back to shop
                </Button>
              </Link>
            </CardContent>

            <IconButton
              aria-label="add to favorites"
              onClick={
                productDetail !== null
                  ? () => handelFavoriteProductIcon(productDetail)
                  : () => {}
              }
              sx={isFavorite ? { color: "red" } : { color: "inherit" }}
            >
              <FavoriteIcon />
            </IconButton>
          </Card>
        </Box>
      </Paper>
    );
}
