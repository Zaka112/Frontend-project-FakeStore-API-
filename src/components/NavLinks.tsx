import { AppBar, Badge, Box, IconButton, Paper, Toolbar, Tooltip } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import InfoIcon from "@mui/icons-material/Info";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InventoryIcon from "@mui/icons-material/Inventory";
import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';

export default function NavLinks() {

    const favoriteItems = useSelector(
        (state: RootState) => state.products.favorite
      );
      const cartItems = useSelector((state: RootState) => state.cartList.cartItems);
    
      let favoriteItemsCount, cartItemsCount;
      favoriteItemsCount = favoriteItems.length;
      cartItemsCount = cartItems.length;
  return (
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <IconButton size="large" aria-label="home" color="inherit">
                <Tooltip title="Home" arrow>
                  <HomeIcon />
                </Tooltip>
              </IconButton>
            </Link>
            <Link
              to="/productlist"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <IconButton
                size="large"
                aria-label="all products"
                color="inherit"
              >
                <Tooltip title="Products" arrow>
                  <InventoryIcon />
                </Tooltip>
              </IconButton>
            </Link>
            <Link
              to="/favorite"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <IconButton
                size="large"
                aria-label={`show ${favoriteItemsCount} new notifications`}
                color="inherit"
              >
                <Badge badgeContent={favoriteItemsCount} color="error">
                  <Tooltip title="Favorite" arrow>
                    <FavoriteIcon />
                  </Tooltip>
                </Badge>
              </IconButton>
            </Link>
            <Link
              to="/cartlist"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <IconButton
                size="large"
                aria-label={`show ${cartItemsCount} `}
                color="inherit"
              >
                <Badge badgeContent={cartItemsCount} color="error">
                  <Tooltip title="Shoppingbag" arrow>
                    <AddShoppingCartIcon />
                  </Tooltip>
                </Badge>
              </IconButton>
            </Link>
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <IconButton size="large" aria-label="" color="inherit">
                <Tooltip title="About" arrow>
                  <InfoIcon />
                </Tooltip>
              </IconButton>
            </Link>
          </Box>  
  )
}
