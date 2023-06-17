import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  CircularProgress,
  Grid,
  Pagination,
  Paper,
  TablePagination,
  Typography,
} from "@mui/material";

import { AppDispatch, RootState } from "../../redux/store";
import { getProductsData } from "../../redux/thunk/products";
import ProductItem from "../products/ProductItems";
import background from "../../assets/bg.svg";
import SearchForm from "../../components/SearchForm";

export default function ProductList() {
  const [page, setPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(12);

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getProductsData());
  }, [dispatch]);

  const products = useSelector((state: RootState) => state.products.products);
  const isLoading = useSelector((state: RootState) => state.products.isLoading);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value));
    setPage(0);
  };

  const searchedText = useSelector((state: RootState) => state.search.value);
  const searchedProduct = products.filter((product) =>
    product.title.toLowerCase().includes(searchedText.toLowerCase())
  );

  return isLoading ? (
    <Paper sx={{marginTop:10}}>
      <CircularProgress sx={{fontSize:300}} />
    </Paper>
  ) : (
    <Paper
      sx={{ background: `url(${background})`, backgroundRepeat: "repeat", marginTop:10 }}
    >
      <Typography variant="h3" component="h3">
        Products
      </Typography>
      <SearchForm />
      <Grid
        container
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1rem",
         
        }}
      >
        {searchedProduct.length === 0 ? (
          <Typography sx={{ color: "error", textAlign: "center" }}>
            {" "}
            Sorry, this product is not in our stock
          </Typography>
        ) : (
          searchedProduct.map((product) => {
            return <ProductItem product={product} key={product.id} />;
          })
        )}
      </Grid>
      <TablePagination
        rowsPerPage={rowsPerPage}
        page={page}
        count={searchedProduct.length}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        component="div"
      />
    </Paper>
  );
}
