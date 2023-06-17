import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import ProductList from "./pages/products/ProductList";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import ProductDetail from "./pages/products/ProductDetail";
import FavoriteProducts from "./pages/products/FavoriteProducts";
import CartList from "./pages/cart/CartList";
import background from "./assets/bg.svg";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App" style={{background:`url(${background})`}}>
      <NavBar />
    
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/productlist" element={<ProductList />}></Route>
        <Route path="/favorite" element={<FavoriteProducts />} />
        <Route path="/products/productdetail/:id" element={<ProductDetail />} />
        <Route path="/cartlist" element={<CartList />} />
      </Routes>
      <Footer/>
    
    </div>
  );
}

export default App;
