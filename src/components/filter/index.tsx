import React from "react";
import { FaFilter, FaSearch } from "react-icons/fa";
import FilterSection from "./filter";

type Props = {
  label1?: string;
  label2?: string;
  label3?: string;
  label4?: string;
  total?: number;
};

const Filter: React.FC<Props> = (filter: Props) => {
  return (
    <div className="max-w-[400px]">
      <div className="flex flex-col gap-4 ">
        {/* <FilterSection /> */}
        <div className="max-w-[400px]">
          <div className="flex flex-row items-center gap-4">
            {filter.label1 && filter.total && (
              <p className="text-[12px] text-primary font-semibold">
                {filter.label1}
                <span className="text-black text-[10px] py-1 px-2 bg-primary/10 rounded-[50%] ml-2">
                  {filter.total}
                </span>
              </p>
            )}
            {filter.label2 && filter.total && (
              <p className="text-[12px] text-black/50 font-semibold">
                {filter.label2}
                <span className="text-black text-[10px] py-1 px-2 bg-primary/10 rounded-[50%] ml-2">
                  {filter.total}
                </span>
              </p>
            )}

            {filter.label3 && filter.total && (
              <p className="text-[12px] text-black/50 font-semibold">
                {filter.label3}
                <span className="text-black text-[10px] py-1 px-2 bg-primary/10 rounded-[50%] ml-2">
                  {filter.total}
                </span>
              </p>
            )}
            {filter.label4 && filter.total && (
              <p className="text-[12px] text-black/50 font-semibold">
                {filter.label4}
                <span className="text-black text-[10px] py-1 px-2 bg-primary/10 rounded-[50%] ml-2">
                  {filter.total}
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
