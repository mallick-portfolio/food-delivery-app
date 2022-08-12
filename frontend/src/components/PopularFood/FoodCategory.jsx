import React, { useEffect } from "react";
import { useState } from "react";
import allProducts from "../../assets/fakeData/products.js";
import pic1 from "../../assets/pic1.png";
import pic2 from "../../assets/pic2.png";
import pic3 from "../../assets/pic3.png";
import ProductCard from "./ProductCard.jsx";
const FoodCategory = () => {
  const [active, setActive] = useState(1);
  const [products, setProducts] = useState(allProducts);
  const [category, setCategory] = useState("ALL");

  useEffect(() => {
    if (category === "ALL") {
      setProducts(allProducts);
    }

    if (category === "BURGER") {
      const filteredProducts = allProducts.filter(
        (item) => item.category === "Burger"
      );
      setProducts(filteredProducts);
    }

    if (category === "PIZZA") {
      const filteredProducts = allProducts.filter(
        (item) => item.category === "Pizza"
      );

      setProducts(filteredProducts);
    }

    if (category === "BREAD") {
      const filteredProducts = allProducts.filter(
        (item) => item.category === "Bread"
      );

      setProducts(filteredProducts);
    }
  }, [category, products]);
  return (
    <div className="container py-12">
      <h1 className="foods-title">Popular Foods</h1>
      <div className="bg-[#df2020] py-2 sm:py-8 rounded-md">
        <ul className="food-category">
          {items.map((item) => (
            <li
              onClick={() => {
                setActive(item.id);
                setCategory(item.category);
              }}
              key={item.id}
              className={`${
                active === item.id ? "bg-white text-secondary" : "text-white"
              } category-item`}
            >
              {item.image && <img className="w-6" src={item.image} alt="" />}
              <span>{item.title}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="foods-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

const items = [
  {
    id: 1,
    title: "All",
    image: "",
    category: "ALL",
  },
  {
    id: 2,
    title: "Burger",
    image: pic1,
    category: "BURGER",
  },
  {
    id: 3,
    title: "Pizza",
    image: pic2,
    category: "PIZZA",
  },
  {
    id: 4,
    title: "Bread",
    image: pic3,
    category: "BREAD",
  },
];

export default FoodCategory;
