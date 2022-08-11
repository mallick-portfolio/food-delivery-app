import React from "react";
import {
  Banner,
  Category,
  HotPizza,
  PopularFood,
  Serve,
  Tasty,
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
    </div>
  );
};

export default Home;
