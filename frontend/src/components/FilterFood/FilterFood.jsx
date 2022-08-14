import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaList } from "react-icons/fa";

const FilterFood = ({ setSearch }) => {
  return (
    <div className="container flex justify-between items-center pt-12">
      <div className="w-1/3 relative">
        <input
          onChange={(e) => setSearch(e.target.value)}
          className="border w-full border-primary rounded-md focus:outline-none pl-4 h-10"
          type="text"
          placeholder="I'm looking for..."
        />
        <AiOutlineSearch className="absolute right-2 top-2 text-primary text-2xl cursor-pointer" />
      </div>
      <div className="flex items-center gap-8">
        <BsFillGrid3X3GapFill className="text-2xl text-primary cursor-pointer" />
        <FaList className="text-2xl text-primary cursor-pointer" />
      </div>
    </div>
  );
};

export default FilterFood;
