import React from "react";
import cat1 from "../../assets/cat1.png";
import cat2 from "../../assets/cat2.png";
import cat3 from "../../assets/cat3.png";
import cat4 from "../../assets/cat4.png";
const Category = () => {
  return (
    <div className="category-container">
      {category.map((cat) => (
        <div key={cat.id} className="category-flex">
          <img className="w-1/3 sm:w-auto" src={cat.image} alt="" />
          <h4 className="category-title">{cat.title}</h4>
        </div>
      ))}
    </div>
  );
};

const category = [
  {
    id: 1,
    title: "Fastfood",
    image: cat1,
  },
  {
    id: 2,
    title: "Pizza",
    image: cat2,
  },
  {
    id: 3,
    title: "Asian Food",
    image: cat3,
  },
  {
    id: 4,
    title: "Raw Meat",
    image: cat4,
  },
];

export default Category;
