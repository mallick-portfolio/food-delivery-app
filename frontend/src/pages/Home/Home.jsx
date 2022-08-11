import React from "react";
import {
  Banner,
  Category,
  HotPizza,
  PopularFood,
  Serve,
  Tasty,
  Testimonial,
} from "../../components/index.js";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <Serve />
      <PopularFood />
      <Tasty />
      <HotPizza />
      <Testimonial />
    </div>
  );
};

export default Home;
