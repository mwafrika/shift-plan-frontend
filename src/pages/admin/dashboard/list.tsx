import React from "react"
import Pagination from "../../../components/pagination"

const EmployeesList = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-8">
            <table className="table p-5 overflow-auto md:overflow-visible md:table-fixed md:w-full sm:hidden">
        <thead className="mx-5 text-white bg-secondary w-full">
          <tr className="w-full">
            <th className=" text-[14px] text-blue font-semibold text-left pl-5 py-2 bg-primary-200">
              Manager name
            </th>
            <th className=" text-[14px] text-blue font-semibold text-left pl-5 py-2 bg-primary-200">
              Email address
            </th>
            <th className="text-[14px] text-blue font-semibold text-left pl-5 py-2 bg-primary-200">
              Department
            </th>
            <th className="text-[14px] text-blue font-semibold text-left pl-5 py-2 bg-primary-200">
              Role
            </th>
            </tr>
        </thead>

        <tbody>
        </tbody>
      </table>
      <Pagination pagesCount={6} currentPage={0} onPageChange={undefined} />
        </div>
    )
}

export default EmployeesList;