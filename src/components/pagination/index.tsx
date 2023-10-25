/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ReactPaginate from 'react-paginate';

type PropTypes = {
  pagesCount: number;
  currentPage: number;
  onPageChange: any;
};

const Pagination: React.FC<PropTypes> = (props) => {
  const { pagesCount, onPageChange } = props;
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel={
        <div className="p-1 bg-secondary rounded-[5px]">
          <FaChevronRight className="text-white text-sm" />
        </div>
      }
      onPageChange={onPageChange}
      pageRangeDisplayed={1}
      pageCount={pagesCount}
      previousLabel={
        <div className="p-1 bg-secondary rounded-[5px]">
          <FaChevronLeft className="text-white text-sm" />
        </div>
      }
      containerClassName="flex flex-row mt-6 gap-5 align-center items-center"
      activeClassName="border border-primary text-primary text-sm rounded-[5px]"
      pageClassName="w-[30px] text-primary text-center rounded-[5px]"
    />
  );
};

export default Pagination;