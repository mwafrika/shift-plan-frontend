import React, { useEffect } from "react";
import Button from "../../../components/button";
import ShiftList from "./list";
import Layout from "../../../layout";
import AddEmployeeForm from "./addShift";
import Dialog from "../../../components/dialog";
import PdfReportGenerator from "../../../components/report";
import { getShiftsWithEmployees } from "../../../redux/actions/shift";
import { useDispatch, useSelector } from "react-redux";

const ShiftPage = () => {
  const [showForm, setShowForm] = React.useState(false);
  const { shiftsWithEmployees } = useSelector((state: any) => state.shifts);
  const dispatch = useDispatch();
  const handleClick = () => {
    setShowForm(!showForm);
  };

  useEffect(() => {
    dispatch(getShiftsWithEmployees() as any);
  }, []);

  console.log(shiftsWithEmployees, "shiftsWithEmployees");

  const employees = [
    {
      id: 1,
      employee: "John Doe",
      shift: {
        name: "Morning",
        assignedDate: "2023-11-06",
        startTime: "08:00 AM",
        endTime: "12:00 PM",
        startDate: "2023-11-06",
        endDate: "2023-11-10",
      },
    },
    {
      id: 2,
      employee: "Jane Smith",
      shift: {
        name: "Morning",
        assignedDate: "2023-11-06",
        startTime: "08:00 AM",
        endTime: "12:00 PM",
        startDate: "2023-11-06",
        endDate: "2023-11-10",
      },
    },
    // Add data for more employees
  ];
  return (
    <Layout user={"Manager"} username={"Manager Okolongo"}>
      <div className="flex items-center justify-end bg-background">
        <h1 className=" bg-primary text-white px-36 py-2">Week-1/October</h1>
      </div>
      <div className="bg-background p-4">
        <div className="flex flex-row justify-between items-center my-4">
          {showForm && (
            <Dialog
              title="Create new shift"
              width="w-[30%]"
              onClose={handleClick}
            >
              <AddEmployeeForm handleClose={handleClick} />
            </Dialog>
          )}

          <Button
            width="bg-secondary text-white px-8 py-2 rounded-[5px] ml-1"
            type="click"
            label="Assign shift"
            onClick={handleClick}
          />
          <PdfReportGenerator data={shiftsWithEmployees} />
        </div>

        <ShiftList shiftData={shiftsWithEmployees} />
      </div>
    </Layout>
  );
};
export default ShiftPage;
