import React, { useState } from "react";
import Pagination from "../../../components/pagination";
import Checkbox from "../../../components/checkbox";
import Button from "../../../components/button";

const Employees = [
  {
    id: 1,
    employee: "Okolongo",
    start_date: "10/25/2023",
    end_date: "10/30/2023",
    reason: "I want a break to breathe",
    status: "pending",
  },
  {
    id: 2,
    employee: "Okolongo",
    start_date: "10/25/2023",
    end_date: "10/30/2023",
    reason: "I want a break to breathe",
    status: "pending",
  },
  {
    id: 3,
    employee: "Okolongo",
    start_date: "10/25/2023",
    end_date: "10/30/2023",
    reason: "I want a break to breathe",
    status: "pending",
  },
  {
    id: 4,
    employee: "Okolongo",
    start_date: "10/25/2023",
    end_date: "10/30/2023",
    reason: "I want a break to breathe",
    status: "pending",
  },
  {
    id: 5,
    employee: "Okolongo",
    start_date: "10/25/2023",
    end_date: "10/30/2023",
    reason: "I want a break to breathe",
    status: "pending",
  },
];

const AbsenceList = () => {
  // const [selectedStatus, setSelectedStatus] = useState("pending");
  const [selectedItem, setSelectedItem] = useState(null);
  const [employees, setEmployees] = useState(Employees);

  const handleActionChange = (employeeId, action) => {
    // Update the status of the selected employee
    const updatedEmployees = employees.map((emp) =>
      emp.id === employeeId ? { ...emp, status: action } : emp,
    );

    setSelectedItem(employeeId);
    setEmployees(updatedEmployees);
  };
  return (
    <div className="flex flex-col items-center justify-center mt-4">
      <table className="table p-5 overflow-auto md:overflow-visible md:table-fixed md:w-full sm:hidden">
        <colgroup>
          <col style={{ width: "5%" }} />
          <col style={{ width: "15%" }} />
          <col style={{ width: "10%" }} />
          <col style={{ width: "10%" }} />
          <col style={{ width: "35%" }} />
          <col style={{ width: "25%" }} />
        </colgroup>
        <thead className="mx-5 text-white bg-secondary w-full">
          <tr className="w-full">
            <th className="font-semibold text-left pl-5 py-2 bg-primary-200">
              <Checkbox name={""} />
            </th>
            <th className="text-[14px] text-blue font-semibold text-left pl-5 py-2 bg-primary-200">
              Employees
            </th>
            <th className="text-[14px] text-blue font-semibold text-left pl-5 py-2 bg-primary-200">
              Start date
            </th>
            <th className="text-[14px] text-blue font-semibold text-left pl-5 py-2 bg-primary-200">
              End date
            </th>
            <th className="text-[14px] text-blue font-semibold text-left pl-5 py-2 bg-primary-200">
              Reason
            </th>
            <th className="text-[14px] text-blue font-semibold text-left pl-5 py-2 bg-primary-200">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {employees?.map((emp) => (
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
              {/* <td className="font-normal text-[14px] text-left py-2 flex flex-row items-center justify-around">
                <Button
                  label={"Approve"}
                  width="w-[100px] h-[25px] text-white bg-[#06AD35]/60 rounded-[5px]"
                />
                <Button
                  label={"Deny"}
                  width="w-[100px] h-[25px] text-white bg-red/60 rounded-[5px]"
                />
              </td> */}

              <td className="px-3 py-2">
                <div className="space-x-2 relative inline-block">
                  <select
                    className={`bg-${getBackgroundColorClass(
                      emp.status,
                    )} text-white p-2 rounded-md focus:outline-none text-sm`}
                    value={emp.status} // Use the employee's status
                    onChange={(e) => handleActionChange(emp.id, e.target.value)}
                  >
                    <option value="pending">Pending</option>
                    <option value="approved">Approve</option>
                    <option value="denied">Deny</option>
                  </select>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination pagesCount={6} currentPage={0} onPageChange={undefined} />
    </div>
  );
};

const getBackgroundColorClass = (status) => {
  switch (status) {
    case "approved":
      return "green";
    case "denied":
      return "red/60";
    default:
      return "secondary";
  }
};

export default AbsenceList;
