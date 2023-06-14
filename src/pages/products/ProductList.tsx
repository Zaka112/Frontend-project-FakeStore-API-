import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { CircularProgress, Grid, Paper, Typography } from "@mui/material";

import { AppDispatch, RootState } from "../../redux/store";
import { getProductsData } from "../../redux/thunk/products";
import ProductItem from "../products/ProductItems";
import background from "../../assets/bg.svg";

export default function ProductList() {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.products.products);
  const isLoading = useSelector((state: RootState) => state.products.isLoading);
console.log(products)
  useEffect(() => {
    dispatch(getProductsData());
  }, [dispatch]);

  return isLoading ? (
    <Paper>
      <CircularProgress />
    </Paper>
  ) : (
    <Paper
      sx={{ background: `url(${background})`, backgroundRepeat: "repeat" }}
    >
    <Typography variant="h3" component="h3">  ProductList</Typography>
      <Grid
        container
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1rem",
          margin:10
        }}
      >
        {products.map((product) => 
          {  return <ProductItem product={product} key={product.id} />;}
        )}
      </Grid>
    </Paper>
  );
}
