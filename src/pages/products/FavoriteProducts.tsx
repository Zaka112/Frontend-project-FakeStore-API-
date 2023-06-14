import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { productActions } from '../../redux/slice/products';
import { Product } from '../../types/types';
import { Box, Button, Paper, Typography } from '@mui/material';

export default function FavoriteProducts() {
  const favoriteProducts = useSelector(
    (state: RootState) => state.products.favorite
  );
  console.log(favoriteProducts)
  const dispatch = useDispatch();
  function deleteFavorite(favProduct: Product) {
    dispatch(productActions.deleteFavoriteProducts(favProduct));
  }
  return (
    <Paper>
      <Typography variant="h2" component="h1">
        Favorite List
      </Typography>
      {favoriteProducts.length === 0 ? (
        <Typography>Empty</Typography>
      ) : (
        favoriteProducts.map((favProduct) =>
         {
          return (
            <Box key={favProduct.id}>
              {favProduct.title}
              <Button
                sx={{ color: "red" }}
                onClick={() => deleteFavorite(favProduct)}
              >
                Remove favorite
              </Button>
            </Box>
          );
        })
      )}
    </Paper>
  )
}
