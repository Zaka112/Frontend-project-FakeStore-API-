import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { CircularProgress, Grid, Paper, Typography } from "@mui/material";

import { AppDispatch, RootState } from "../../redux/store";
import { getProductsData } from "../../redux/thunk/products";
import ProductItem from "../products/ProductItems";
import SearchForm from "../../components/SearchForm";
import SortProducts from "../../components/SortProducts";

export default function ProductList() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getProductsData());
  }, [dispatch]);

  const products = useSelector((state: RootState) => state.products.products);
  const isLoading = useSelector((state: RootState) => state.products.isLoading);
  const searchedText = useSelector(
    (state: RootState) => state.search.searchedString
  );

  const searchedProduct = products.filter((product) =>
    product.title.toLowerCase().includes(searchedText.toLowerCase())
  );

  return isLoading ? (
    <Paper sx={{ marginTop: 10 }}>
      <CircularProgress sx={{ fontSize: 300 }} />
    </Paper>
  ) : (
    <Paper
      sx={{
        backgroundRepeat: "repeat",
        marginTop: 10,
      }}
    >
      <Typography variant="h3" component="h3">
        Just BuY !T
      </Typography>
      <SearchForm /> <SortProducts />
      <hr />
      {searchedProduct.length === 0 ? (
        <Typography variant="h4" component="div" color="inherit">
          Sorry, this product is not in our stock.
        </Typography>
      ) : (
        <Grid
          container
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1rem",
          }}
        >
          {searchedProduct.map((product) => {
            return <ProductItem product={product} key={product.id} />;
          })}
        </Grid>
      )}
    </Paper>
  );
}
