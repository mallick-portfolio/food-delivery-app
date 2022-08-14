import React, { useState } from "react";
import { FilterFood, FoodBanner, Foods } from "../../components/index.js";

const AllFoods = () => {
  const [view, setView] = useState(true);
  const [search, setSearch] = useState("");
  return (
    <div className="py-12">
      <FoodBanner />
      <FilterFood setSearch={setSearch} setView={setView} />
      <Foods search={search} />
    </div>
  );
};

export default AllFoods;
