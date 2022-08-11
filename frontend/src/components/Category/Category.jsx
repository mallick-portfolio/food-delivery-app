import React from "react";
import cat1 from "../../assets/cat1.png";
import cat2 from "../../assets/cat2.png";
import cat3 from "../../assets/cat3.png";
import cat4 from "../../assets/cat4.png";
const Category = () => {
  return (
    <div className="container py-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8">
      {category.map((cat) => (
        <div
          key={cat.id}
          className="flex items-center px-2 sm:pl-5 cursor-pointer gap-2 sm:gap-5 bg-[#fde4e4] rounded-md py-3 sm:py-4 lg:py-8"
        >
          <img className="w-1/3 sm:w-auto" src={cat.image} alt="" />
          <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold">{cat.title}</h4>
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
