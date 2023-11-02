import React, { useEffect } from "react";
import Button from "../../../components/button";
import ShiftList from "./list";
import Layout from "../../../layout";
import AddEmployeeForm from "./addShift";
import Dialog from "../../../components/dialog";
import { getShiftsWithEmployees } from "../../../redux/actions/shift";
import { useDispatch, useSelector } from "react-redux";
import Export from "./export";
import PdfReportGenerator from "../../../components/report";
const ShiftPage = () => {
  const [showForm, setShowForm] = React.useState(false);
  const [showExport, setShowExport] = React.useState(false);
  const { shiftsWithEmployees } = useSelector((state: any) => state.shifts);
  const dispatch = useDispatch();
  const handleClick = () => {
    setShowForm(!showForm);
  };

  const handleShowExport = () => {
    setShowExport(!showExport);
  };

  useEffect(() => {
    dispatch(getShiftsWithEmployees() as any);
  }, []);

  return (
    <Layout user={"Manager"} username={"Manager Okolongo"}>
      <div className="flex items-center justify-end bg-background">
        <h1 className=" bg-primary text-white px-36 py-2">Week-1/October</h1>
      </div>
      <div className="bg-background p-4">
        <div className="flex flex-row justify-between items-center my-4">
          {showForm && (
            <Dialog title="Assign shift" width="w-[30%]" onClose={handleClick}>
              <AddEmployeeForm handleClose={handleClick} />
            </Dialog>
          )}

          {showExport && (
            <Dialog
              title="Export Data"
              width="w-[30%]"
              onClose={handleShowExport}
            >
              <Export handleExport={handleShowExport} />
            </Dialog>
          )}

          <Button
            width="bg-secondary text-white px-8 py-2 rounded-[5px] ml-1"
            type="click"
            label="Assign shift"
            onClick={handleClick}
          />
          {/* <Button
            width="bg-secondary text-white px-8 py-2 rounded-[5px] ml-1"
            type="button"
            label="Generate Report"
            onClick={handleShowExport}
          /> */}
          <PdfReportGenerator data={shiftsWithEmployees} />
        </div>

        <ShiftList shiftData={shiftsWithEmployees} />
      </div>
    </Layout>
  );
};
export default ShiftPage;
