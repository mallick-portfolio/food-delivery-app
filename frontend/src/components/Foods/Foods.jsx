import React, { useState } from "react";
import { useEffect } from "react";
import allProducts from "../../assets/fakeData/products.js";
import FoodModal from "../Modal/FoodModal.jsx";
import ProductCard from "../PopularFood/ProductCard.jsx";
const Foods = ({ search, view }) => {
  const [item, setItem] = useState(null);
  const [products, setProducts] = useState(allProducts);
  useEffect(() => {
    const filterProduct = allProducts.filter((product) =>
      product.title.toLowerCase().match(search)
    );
    setProducts(filterProduct);
  }, [search]);
  return (
    <>
      <div className="container">
        <div
          className={`grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 mt-12`}
        >
          {products.map((product) => (
            <ProductCard setItem={setItem} key={product.id} product={product} />
          ))}
        </div>
      </div>
      {item && <FoodModal item={item} setItem={setItem} />}
    </>
  );
};

export default Foods;
