import React from "react"
import Pagination from "../../../components/pagination"
import Checkbox from "../../../components/checkbox";
import Button from "../../../components/button";

const employees = [
  {
    id: 1,
    employee: "Okolongo",
    start_date: "10/25/2023",
    end_date: "10/30/2023",
    reason: "I want a break to breath"
  },
  {
    id: 2,
    employee: "Okolongo",
    start_date: "10/25/2023",
    end_date: "10/30/2023",
    reason: "I want a break to breath"
  },
  {
    id: 3,
    employee: "Okolongo",
    start_date: "10/25/2023",
    end_date: "10/30/2023",
    reason: "I want a break to breath"
  },
  {
    id: 4,
    employee: "Okolongo",
    start_date: "10/25/2023",
    end_date: "10/30/2023",
    reason: "I want a break to breath"
  },
  {
    id: 5,
    employee: "Okolongo",
    start_date: "10/25/2023",
    end_date: "10/30/2023",
    reason: "I want a break to breath"
  }
]

const AbsenceList = () => {

    return (
        <div className="flex flex-col items-center justify-center mt-4">
            <table className="table p-5 overflow-auto md:overflow-visible md:table-fixed md:w-full sm:hidden">
        <thead className="mx-5 text-white bg-secondary w-full">
          <tr className="w-full">
          <th className="font-semibold text-left pl-5 py-2 bg-primary-200 w-[5%]">
              <Checkbox name={""} />
            </th>
            <th className=" text-[14px] text-blue font-semibold text-left pl-5 py-2 bg-primary-200 w-[15%]">
              Employees
            </th>
            <th className=" text-[14px] text-blue font-semibold text-left pl-5 py-2 bg-primary-200 w-[10%]">
              Start date
            </th>
            <th className="text-[14px] text-blue font-semibold text-left pl-5 py-2 bg-primary-200 w-[10%]">
              End date
            </th>
            <th className=" text-[14px] text-blue font-semibold text-left pl-5 py-2 bg-primary-200 w-[35%]">
              Reason
            </th>
            <th className="text-[14px] text-blue font-semibold text-left pl-5 py-2 bg-primary-200">
              Action
            </th>
            </tr>
        </thead>

        <tbody>
        {employees.map((emp) => (
    <tr key={emp.id} className="bg-white">
      <td className="font-semibold text-[14px] text-left pl-5 py-2 overflow-x-hidden">
        <Checkbox name={emp.employee} />
      </td>
      <td className="font-semibold text-[14px] text-left pl-5 py-2 overflow-x-hidden">
        {emp.employee}
      </td>
      <td className="font-semibold text-[14px] text-left pl-5 py-2 overflow-x-hidden">
        {emp.start_date}
      </td>
      <td className="font-semibold text-[14px] text-left pl-5 py-2 overflow-x-hidden">
        {emp.end_date}
      </td>
      <td className="font-normal text-[14px] text-left text-secondary pl-5 py-2 overflow-x-hidden">
        <a href="/">{emp.reason}</a>
      </td>
      <td className="font-normal text-[14px] text-left pl-5 py-2 flex flex-row items-center">
        <Button 
          label={"Approve"} 
          width="w-[100px] h-[25px] text-white bg-[#06AD35]/60 rounded-[5px]"
          />
        <Button 
          label={"Deny"} 
          width="w-[100px] h-[25px] text-white bg-red/60 rounded-[5px]"
        />
      </td>
    </tr>
  ))}
        </tbody>
      </table>
      <Pagination pagesCount={6} currentPage={0} onPageChange={undefined} />
        </div>
    )
}

export default AbsenceList;