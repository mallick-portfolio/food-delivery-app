import React from "react";
import { useState } from "react";
import products from "../../assets/fakeData/products.js";
import pic1 from "../../assets/pic1.png";
import pic2 from "../../assets/pic2.png";
import pic3 from "../../assets/pic3.png";
import ProductCard from "./ProductCard.jsx";
const FoodCategory = () => {
  const [active, setActive] = useState(1);
  return (
    <div className="container py-12">
      <h1 className="foods-title">Popular Foods</h1>
      <div className="bg-[#df2020] py-2 sm:py-8 rounded-md">
        <ul className="food-category">
          {items.map((item) => (
            <li
              onClick={() => setActive(item.id)}
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
  },
  {
    id: 2,
    title: "Burger",
    image: pic1,
  },
  {
    id: 3,
    title: "Pizza",
    image: pic2,
  },
  {
    id: 4,
    title: "Bread",
    image: pic3,
  },
];

export default FoodCategory;
