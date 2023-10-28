import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  CircularProgress,
  Grid,
  Pagination,
  Paper,
  Typography,
} from "@mui/material";

import { AppDispatch, RootState } from "../../redux/store";
import { getProductsData } from "../../redux/thunk/products";
import ProductItem from "../products/ProductItems";
import SearchForm from "../../components/SearchForm";
import SortProducts from "../../components/SortProducts";

export default function ProductList() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getProductsData());
  }, [dispatch]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };
  const products = useSelector((state: RootState) => state.products.products);
  const itemsPerPage = 28;
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const isLoading = useSelector((state: RootState) => state.products.isLoading);
  const searchedText = useSelector(
    (state: RootState) => state.search.searchedString
  );

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const productsPerPage = products.slice(startIndex, endIndex);
  const searchedProduct = productsPerPage.filter((product) =>
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
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
      />
    </Paper>
  );
}
