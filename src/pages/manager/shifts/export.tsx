import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { assignShift, exportShifts } from "../../../redux/actions/shift";
import { getUsers } from "../../../redux/actions/users";
import { getUserProfile } from "../../../redux/actions/setting";
import Input from "../../../components/input";
import Button from "../../../components/button";
import PdfReportGenerator from "../../../components/report";

interface Props {
  handleClose?: () => void;
  handleShowExport?: () => void;
}

const ExportData = ({ handleShowExport }: Props) => {
  const [newShift, setNewShift] = useState({
    startDate: "",
    endDate: "",
  });

  const { exportedShifts } = useSelector((state: any) => state.shifts);
  const dispatch = useDispatch();

  // Event handlers
  const handleChange = (e) => {
    setNewShift((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePdfExport = () => {
    return <PdfReportGenerator data={exportedShifts} />;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(exportShifts(newShift.startDate, newShift.endDate) as any);
    handlePdfExport();
    handleShowExport();
  };

  console.log(exportedShifts, "exportted shifts");

  return (
    <form className="flex flex-col items-start" onSubmit={handleSubmit}>
      <Input
        type="date"
        name="startDate"
        label="Start Date"
        placeholder="Select the start date"
        inputStyle="border border-primary rounded-[5px] h-8"
        value={newShift.startDate}
        onChange={handleChange}
      />
      <Input
        type="date"
        name="endDate"
        label="End Date"
        placeholder="Select the end date"
        inputStyle="border border-primary rounded-[5px] h-8"
        value={newShift.endDate}
        onChange={handleChange}
      />

      <div className="flex flex-row gap-2">
        <Button
          label="Cancel"
          width="border border-primary text-primary w-[100px] rounded-[5px]"
        />
        <Button
          type="submit"
          label="Save"
          width="bg-secondary text-white w-[100px] rounded-[5px]"
        />
      </div>
    </form>
  );
};

export default ExportData;
