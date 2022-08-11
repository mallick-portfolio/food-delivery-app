import React from "react";
import products from "../../assets/fakeData/products.js";
import ProductCard from "../PopularFood/ProductCard.jsx";

const HotPizza = () => {
  return (
    <div className="container py-12">
      <h1 className="foods-title">Hot Pizza</h1>
      <div className="foods-grid">
        {products
          .filter((cat) => cat.category === "Pizza")
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default HotPizza;
