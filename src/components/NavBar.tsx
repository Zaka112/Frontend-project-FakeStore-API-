import React from "react";

import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  IconButton,
  Tooltip,
  Toolbar,
  Typography,
} from "@mui/material/";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import InfoIcon from "@mui/icons-material/Info";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InventoryIcon from "@mui/icons-material/Inventory";
import { useSelector } from "react-redux";

import logo from "../assets/logo.png";
import logo2 from "../assets/logo2.png";
import logo1 from "../assets/logoboth.png";
import { RootState } from "../redux/store";

export default function NavBar() {
  const favoriteItems = useSelector(
    (state: RootState) => state.products.favorite
  );
  const cartItems = useSelector((state: RootState) => state.cartList.cartItems);
  let favoriteItemsCount, cartItemsCount;
  favoriteItemsCount = favoriteItems.length;
  cartItemsCount = cartItems.length;
  return (
    <Box>
      <AppBar >
        <Toolbar>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <Typography variant="h4" component="div" sx={{ color: "blue" }}>
              <Tooltip title="Go to Home" arrow placement="right-start">
                <span>
                 
                  <img src={logo1} width={50} alt="Logo" />
                  {/* <img src={logo2} width={50} alt="Logo" /> */}
                </span>
              </Tooltip>
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <IconButton size="large" aria-label="home" color="inherit">
                <Tooltip title="Home" arrow>
                  <HomeIcon />
                </Tooltip>
              </IconButton>
            </Link>
            <Link
              to="/productlist"
              style={{ textDecoration: "none", color: "black" }}
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
              style={{ textDecoration: "none", color: "black" }}
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
              style={{ textDecoration: "none", color: "black" }}
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
              style={{ textDecoration: "none", color: "black" }}
            >
              <IconButton size="large" aria-label="" color="inherit">
                <Tooltip title="About" arrow>
                  <InfoIcon />
                </Tooltip>
              </IconButton>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
