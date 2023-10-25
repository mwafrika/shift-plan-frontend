import React from "react";
import employees from "./data";

const ShiftList = () => {
  return (
    <table className="table p-5 overflow-auto md:overflow-visible md:table-fixed md:w-full sm:hidden">
        <thead className="mx-5 text-white bg-primary w-full">
          <tr className="w-full">
            <th className=" text-[14px] text-blue font-semibold text-left pl-5 py-3 bg-primary-200 w-[20%]">
              Employee
            </th>
            <th className=" text-[14px] text-blue font-semibold text-left pl-5 py-4 bg-primary-200">
              Mond
            </th>
            <th className="text-[14px] text-blue font-semibold text-left pl-5 py-4 bg-primary-200">
              Tue
            </th>
            <th className="text-[14px] text-blue font-semibold text-left pl-5 py-4 bg-primary-200">
              Wed
            </th>
            <th className="text-[14px] text-blue font-semibold text-left pl-5 py-4 bg-primary-200">
              Thu
            </th>
            <th className="text-[14px] text-blue font-semibold text-left pl-5 py-4 bg-primary-200">
              Fri
            </th>
            <th className="text-[14px] text-blue font-semibold text-left pl-5 py-4 bg-primary-200">
              Sat
            </th>
            <th className="text-[14px] text-blue font-semibold text-left pl-5 py-4 bg-primary-200">
              Sun
            </th>
            </tr>
        </thead>

        <tbody>
        {employees.map((emp) => (
      <tr 
        key={emp.id}
        className={`bg-primary ${emp.id % 2 === 0 ? 'bg-opacity-20' : 'bg-opacity-10'}`}
      >
      <td className="font-semibold text-[14px] text-left pl-5 py-2 overflow-x-hidden">
        {emp.employee}
      </td>
      <td className="font-semibold text-[14px] text-left pl-5 py-2 overflow-x-hidden">
        {emp.shift.mon?.date}<br />{emp.shift.mon?.start_time} - {emp.shift.mon?.end_time}
      </td>
      <td className="font-semibold text-[14px] text-left pl-5 py-2 overflow-x-hidden">
        {emp.shift.tue?.date}<br />{emp.shift.tue?.start_time} - {emp.shift.tue?.end_time}
      </td>
      <td className="font-semibold text-[14px] text-left pl-5 py-2 overflow-x-hidden">
        {emp.shift.wed?.date}<br />{emp.shift.wed?.start_time} - {emp.shift.wed?.end_time}
      </td>
      <td className="font-semibold text-[14px] text-left pl-5 py-2 overflow-x-hidden">
        {emp.shift.thu?.date}<br />{emp.shift.thu?.start_time} - {emp.shift.thu?.end_time}
      </td>
      <td className="font-semibold text-[14px] text-left pl-5 py-2 overflow-x-hidden">
        {emp.shift.fri?.date}<br />{emp.shift.fri?.start_time} - {emp.shift.fri?.end_time}
      </td>
      <td className="font-semibold text-[14px] text-left pl-5 py-2 overflow-x-hidden">
        {emp.shift.sat?.date}<br />{emp.shift.sat?.start_time} - {emp.shift.sat?.end_time}
      </td>
      <td className="font-semibold text-[14px] text-left pl-5 py-2 overflow-x-hidden">
        {emp.shift.sun?.date}<br />{emp.shift.sun?.start_time} - {emp.shift.sun?.end_time}
      </td>
    </tr>
  ))}
        </tbody>
      </table>
  )
}

export default ShiftList