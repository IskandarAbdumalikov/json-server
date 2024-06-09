import React from "react";
import Hero from "./components/hero/Hero";
import ProductsAxios from "./components/products/ProductsAxios";
import ProductsCreate from "./components/products/ProductsCreate";
import Products from "./components/productsCards/Products";

const App = () => {
  return (
    <div>
      {/* <Hero /> */}
      <ProductsAxios />
      <Products />
    </div>
  );
};

export default App;
