import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaList } from "react-icons/fa";

const FilterFood = ({ setSearch }) => {
  return (
    <div className="food-filter-container">
      <div className="w-1/3 relative">
        <input
          onChange={(e) => setSearch(e.target.value)}
          className="filter-input"
          type="text"
          placeholder="I'm looking for..."
        />
        <AiOutlineSearch className="filter-search-icon" />
      </div>
      <div className="flex items-center gap-8">
        <BsFillGrid3X3GapFill
          onClick={() => setSearch(true)}
          className="filter-view"
        />
        <FaList onClick={() => setSearch(false)} className="filter-view" />
      </div>
    </div>
  );
};

export default FilterFood;
