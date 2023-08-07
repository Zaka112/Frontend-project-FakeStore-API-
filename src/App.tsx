import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Paper, ThemeProvider, createTheme } from "@mui/material";
import { useSelector } from "react-redux";

import ProductList from "./pages/products/ProductList";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import ProductDetail from "./pages/products/ProductDetail";
import FavoriteProducts from "./pages/products/FavoriteProducts";
import CartList from "./pages/cart/CartList";
import Footer from "./components/Footer";
import { RootState } from "./redux/store";
import NavLinks from "./components/NavLinks";

function App() {
  const themeMode = useSelector((state: RootState) => state.theme.theme);
  const theme = createTheme({
    typography: {
      fontFamily: ["Nunito", "sen-serif"].join(","),
    },
    palette: {
      mode: themeMode === "dark" ? "light" : "dark",
      primary: {
        main: "#ccc",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Paper className="App">
     
        <NavBar themeMode={themeMode} />
        
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/productlist" element={<ProductList />}></Route>
          <Route path="/favorite" element={<FavoriteProducts />} />
          <Route
            path="/products/productdetail/:id"
            element={<ProductDetail />}
          />
          <Route path="/cartlist" element={<CartList />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Paper>
    </ThemeProvider>
  );
}

export default App;
