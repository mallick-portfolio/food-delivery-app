import React from "react";
import {
  Banner,
  Category,
  ContactBanner,
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
      <ContactBanner />
    </div>
  );
};

export default Home;
