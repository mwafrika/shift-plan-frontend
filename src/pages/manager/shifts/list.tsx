import React, { useEffect, useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { getShiftsWithEmployees } from "../../../redux/actions/shift";
import { useDispatch } from "react-redux";

const ShiftList = ({ shiftData }) => {
  const [expandedShift, setExpandedShift] = useState(null);
  const dispatch = useDispatch();

  const toggleShiftDetails = (shiftId) => {
    if (expandedShift === shiftId) {
      setExpandedShift(null);
    } else {
      setExpandedShift(shiftId);
      dispatch(getShiftsWithEmployees() as any);
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border-separate ">
        <thead>
          <tr className="bg-primary text-white">
            <th className="w-1/5 px-3 py-3">Shift Name</th>
            <th className="px-2 py-3">Assigned Date</th>
            <th className="px-2 py-3">Start Time</th>
            <th className="px-2 py-3">End Time</th>
            <th className="px-2 py-3">Start Date</th>
            <th className="px-2 py-3">End Date</th>
          </tr>
        </thead>
        <tbody>
          {shiftData.map((shift, index) => (
            <React.Fragment key={shift?.id}>
              <tr
                className={`${
                  index % 2 === 0
                    ? "bg-primary/10 hover:bg-primary/20"
                    : "bg-primary/20 hover:bg-primary/30"
                } cursor-pointer`}
                onClick={() => toggleShiftDetails(shift.id)}
              >
                <td className="px-2 py-2 text-center">{shift?.shiftName}</td>
                <td className="px-2 py-2 text-center">
                  {shift?.Users[0]?.EmployeeShift?.createdAt
                    ? new Date(shift.Users[0].EmployeeShift.createdAt)
                        .toLocaleDateString()
                        .split("/")
                        .join("-")
                    : ""}
                </td>
                <td className="px-2 py-2 text-center">{shift?.startTime}</td>
                <td className="px-2 py-2 text-center">{shift?.endTime}</td>
                <td className="px-2 py-2 text-center">
                  {shift?.Users[0]?.EmployeeShift?.startDate
                    ? new Date(shift.Users[0].EmployeeShift.startDate)
                        .toLocaleDateString()
                        .split("/")
                        .join("-")
                    : ""}
                </td>
                <td className="px-2 py-2 flex justify-between text-center">
                  {shift?.Users[0]?.EmployeeShift?.endDate
                    ? new Date(shift.Users[0].EmployeeShift.endDate)
                        .toLocaleDateString()
                        .split("/")
                        .join("-")
                    : ""}

                  <span
                    className="px-2 py-2 cursor-pointer"
                    onClick={() => toggleShiftDetails(shift.id)}
                  >
                    {expandedShift === shift.id ? (
                      <BsChevronUp size={20} />
                    ) : (
                      <BsChevronDown size={20} />
                    )}
                  </span>
                </td>
              </tr>

              {expandedShift === shift.id && (
                <tr className="bg-primary/30">
                  <td colSpan="6">
                    <table className="min-w-full border border-primary">
                      <thead className="bg-primary text-white">
                        <tr className="flex justify-start items-start">
                          <th className="px-5 py-3 w-1/5">Name</th>
                          <th className="px-5 py-3 w-1/5">Email</th>
                          <th className="px-5 py-3 w-1/5">Phone</th>
                          <th className="px-5 py-3 w-1/5">Address</th>
                          <th className="px-5 py-3 w-1/5">Assigned Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {shift.Users.slice(1).map((user, userIndex) => (
                          <tr
                            key={user.id}
                            className={`${
                              userIndex % 2 === 0
                                ? "bg-primary/5 hover-bg-primary/10"
                                : "bg-primary/10 hover:bg-primary/20"
                            } cursor-pointer  w-full flex justify-start`}
                          >
                            <td className="px-5 py-2 w-1/5">{user.name}</td>
                            <td className="px-5 py-2 w-1/5">{user.email}</td>
                            <td className="px-5 py-2 w-1/5 ml-24">
                              {user.phone || "N/A"}
                            </td>
                            <td className="px-5 py-2 w-1/5 ml-24">
                              {user.address || "N/A"}
                            </td>
                            <td className="px-5 py-2 w-1/5">
                              {user.EmployeeShift?.createdAt
                                ? new Date(
                                    user.EmployeeShift.createdAt,
                                  ).toLocaleDateString()
                                : "N/A"}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShiftList;
