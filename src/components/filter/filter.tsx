import React from "react";
import { FaFilter, FaSearch } from "react-icons/fa";

interface Props {
  handleSearchInputChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void;
}

const FilterSection = ({ handleSearchInputChange }: Props) => {
  return (
    <div className="bg-white rounded-lg p-2 flex items-center gap-4 w-full">
      <div className="flex items-center gap-2 text-primary">
        <FaFilter size={18} />
        <p className="text-sm font-bold">All</p>
      </div>
      <div className="border border-primary/50 rounded-lg flex items-center gap-2 p-1 w-full">
        <FaSearch size={20} />
        <input
          type="search"
          placeholder="Search"
          className="w-full outline-none border-none"
          onChange={handleSearchInputChange}
        />
      </div>
    </div>
  );
};

export default FilterSection;
