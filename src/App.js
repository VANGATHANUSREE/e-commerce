import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import { Routes, Route } from 'react-router-dom'
import Products from "./components/Products";
import CategoryPage from "./components/Category";
import ProductDetails from "./components/ProductDetails";


function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Products' element={<Products />} />
      <Route path='/:categoryId' element={<CategoryPage />} />
      <Route path='/product/:id' element={<ProductDetails />} />
    </Routes>

    </>
  );
}

export default App;
