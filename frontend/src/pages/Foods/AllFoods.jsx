import React, { useState } from "react";
import { FilterFood, FoodBanner, Foods } from "../../components/index.js";

const AllFoods = () => {
  const [search, setSearch] = useState("");
  return (
    <div>
      <FoodBanner />
      <FilterFood setSearch={setSearch} />
      <Foods search={search} />
    </div>
  );
};

export default AllFoods;
