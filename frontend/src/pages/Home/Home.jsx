import React from "react";
import {
  Banner,
  Category,
  PopularFood,
  Serve,
} from "../../components/index.js";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <Serve />
      <PopularFood />
    </div>
  );
};

export default Home;
