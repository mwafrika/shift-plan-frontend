import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { assignShift, getShifts } from "../../../redux/actions/shift";
import { getUsers } from "../../../redux/actions/users";
import { getUserProfile } from "../../../redux/actions/setting";
import Input from "../../../components/input";
import SelectInput from "../../../components/select";
import Button from "../../../components/button";
import makeAnimated from "react-select/animated";
import Select from "react-select";

// Props interface
interface Props {
  handleClose?: () => void;
}

const AddEmployeeForm = ({ handleClose }: Props) => {
  // Redux state and dispatch
  const dispatch = useDispatch();
  const { userShiftAssignments, shifts } = useSelector(
    (state: any) => state.shifts,
  );
  const { users } = useSelector((state: any) => state?.users);
  const [selectedUserIds, setSelectedUserIds] = useState([]);
  const animatedComponents = makeAnimated();
  // Component state
  const [newShift, setNewShift] = useState({
    startDate: "",
    endDate: "",
    shiftId: null,
    userIDs: [],
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

  const handleUsersChange = (selectedValues) => {
    setSelectedUserIds(selectedValues);
  };

  const allIDs = selectedUserIds.map((user) => user?.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewShift((prev: any) => ({
      ...prev,
      userIDs: allIDs,
    }));

    dispatch(assignShift(newShift) as any);
    handleClose();
  };

  // Update synchronizing the userIDs in the newShift object
  useEffect(() => {
    setNewShift((prev: any) => ({
      ...prev,
      userIDs: allIDs,
    }));
  }, [allIDs]);

  // JSX rendering
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

      <SelectInput
        label="Select shift"
        placeholder="Select shift"
        name="shiftId"
        Style="border border-primary rounded-[5px]"
        Options={
          shifts &&
          shifts.map((shift) => ({
            value: shift.id,
            label: `${shift.shiftName} (${shift.startTime} - ${shift.endTime})`,
          }))
        }
        value={newShift.shiftId}
        onChange={handleChange}
      />

      <div className="w-full rounded-[5px] mb-4 ">
        <p className="text-primary/50 mb-1">Select Users</p>
        <Select
          closeMenuOnSelect={false}
          components={animatedComponents}
          isMulti
          options={
            users && users.map((user) => ({ value: user.id, label: user.name }))
          }
          menuPlacement="top"
          value={
            selectedUserIds.length > 0 &&
            // dispatch the userIDs in the newShift object
            selectedUserIds.map((user: any) => ({
              value: user.value,
              label: user.label,
            }))
          }
          name="userIDs"
          onChange={handleUsersChange}
          className="w-full rounded-[5px] mb-4 border-radius-[5px] border border-primary text-sm"
        />
      </div>

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

export default AddEmployeeForm;
