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
  Paper,
} from "@mui/material/";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import InfoIcon from "@mui/icons-material/Info";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InventoryIcon from "@mui/icons-material/Inventory";
import { useDispatch, useSelector } from "react-redux";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import logoLight from "../assets/logo-light.png";
import logoDark from "../assets/logo-dark.png";
import { RootState } from "../redux/store";
import switchThemeActions from "../redux/slices/theme";


type Props = { themeMode: "light" | "dark" };
export default function NavBar({ themeMode }: Props) {
  const dispatch = useDispatch();

  function toggleThemeHandler() {
    dispatch(switchThemeActions.toggleTheme());
  }
  const favoriteItems = useSelector(
    (state: RootState) => state.products.favorite
  );
  const cartItems = useSelector((state: RootState) => state.cartList.cartItems);

  let favoriteItemsCount, cartItemsCount;
  favoriteItemsCount = favoriteItems.length;
  cartItemsCount = cartItems.length;

  return (
    <Paper sx={{ display: { xs: "none", md: "flex"}, justifyContent:"space-around" }}>
      <AppBar>
        <Toolbar>
          <Link to="/" style={{ color: "inherit" }}>
            <Typography variant="h4" component="div">
              <Tooltip title="Go to Home" arrow placement="right-start">

                <img className="fade color grow  shrink circle rotate threed swing border"
                  src={themeMode === "dark" ? logoLight : logoDark}
                  width={50}
                  alt="Logo"
                />
              </Tooltip>
            </Typography>
          </Link>
          <Tooltip title="Change Theme" arrow placement="right-start">
            <IconButton
              sx={{ ml: 1 }}
              onClick={() => toggleThemeHandler()}
              color="inherit"
            >
              {themeMode === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
            </IconButton>
          </Tooltip>
          
          <Box sx={{ flexGrow: 1 }} />
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
        </Toolbar>
      </AppBar>
    </Paper>
  );
}
