import React from "react";
import {FaFilter, FaSearch} from "react-icons/fa"

type Props = {
  label1: string;
  label2: string;
  label3: string;
  label4?: string;
  total: number;
};

const Filter: React.FC<Props> = (filter: Props) => {
  return (
    <div className="flex flex-col gap-4">
        <div className=" bg-white rounded-lg flex flex-row items-center gap-2 w-[30%]">
            <div className="flex flex-row items-center gap-2 text-primary px-2 ">
            <FaFilter size={8}/>
            <p>All</p>
            </div>
            <div className="border border-primary/50 rounded-lg flex flex-row gap-2 items-center px-2 w-[100%]">
                <FaSearch size={10}/>
                <input type="search" placeholder="search"/>
            </div>
        </div>
        <div className="flex flex-row items-center gap-4">
          <p className="text-[12px] text-primary font-semibold">
            {filter.label1}
            <span className="text-black text-[10px] py-1 px-2 bg-primary/10 rounded-[50%] ml-2">{filter.total}</span>
          </p>
          <p className="text-[12px] text-black/50 font-semibold">
            {filter.label2}
            <span className="text-black text-[10px] py-1 px-2 bg-primary/10 rounded-[50%] ml-2">{filter.total}</span>
          </p>
          <p className="text-[12px] text-black/50 font-semibold">
            {filter.label3}
            <span className="text-black text-[10px] py-1 px-2 bg-primary/10 rounded-[50%] ml-2">{filter.total}</span>
          </p>
          <p className="text-[12px] text-black/50 font-semibold">
            {filter.label4}
            <span className="text-black text-[10px] py-1 px-2 bg-primary/10 rounded-[50%] ml-2">{filter.total}</span>
          </p>
        </div>
      </div>
  );
};

export default Filter;
