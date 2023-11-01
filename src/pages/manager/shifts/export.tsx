import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { assignShift, getShifts } from "../../../redux/actions/shift";
import { getUsers } from "../../../redux/actions/users";
import { getUserProfile } from "../../../redux/actions/setting";
import Input from "../../../components/input";
import Button from "../../../components/button";

interface Props {
  handleClose?: () => void;
}

const ExportData = ({ handleClose }: Props) => {
  const dispatch = useDispatch();
  const { userShiftAssignments, shifts } = useSelector(
    (state: any) => state.shifts,
  );
  const { users } = useSelector((state: any) => state?.users);

  // Component state
  const [newShift, setNewShift] = useState({
    startDate: "",
    endDate: "",
  });

  // useEffect for data fetching
  useEffect(() => {
    dispatch(getUsers() as any);
    dispatch(getShifts() as any);
    dispatch(getUserProfile() as any);
  }, [dispatch]);

  // Event handlers
  const handleChange = (e) => {
    setNewShift((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewShift((prev: any) => ({
      ...prev,
      userIDs: allIDs,
    }));
    dispatch(assignShift(newShift) as any);
    handleClose();
  };

  return (
    <form className="flex flex-col items-start">
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
          onClick={handleSubmit}
        />
      </div>
    </form>
  );
};

export default ExportData;
