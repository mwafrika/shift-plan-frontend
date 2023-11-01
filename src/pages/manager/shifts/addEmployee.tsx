import React, { useEffect, useState } from "react";
import Input from "../../../components/input";
import SelectInput from "../../../components/select";
import Button from "../../../components/button";
import { addUser, getUsers } from "../../../redux/actions/users";
import MultiSect from "../../../components/multiSelect";
import {
  assignShift,
  unassignShift,
  createShift,
  updateShift,
  getShift,
  getShifts,
} from "../../../redux/actions/shift";
import { useDispatch, useSelector } from "react-redux";
// import Select from "react-tailwindcss-select";
import { getUserProfile } from "../../../redux/actions/setting";
import makeAnimated from "react-select/animated";
import Select from "react-select";

interface Props {
  handleClose?: () => void;
}
const AddEmployeeForm = ({ handleClose }: Props) => {
  const dispatch = useDispatch();
  const {
    userShiftAssignments,
    shifts,
    unassignShift,
    createShift,
    updateShift,
  } = useSelector((state: any) => state.shifts);
  const { users } = useSelector((state: any) => state?.users);
  const currentUser = useSelector((state) => state?.setting?.user);
  const [selectedUserIds, setSelectedUserIds] = useState([]);
  const animatedComponents = makeAnimated();

  const [newShift, setNewShift] = useState({
    startDate: "",
    endDate: "",
    shiftId: null,
    userIDs: [],
  });

  useEffect(() => {
    dispatch(getUsers() as any);
    dispatch(getShifts() as any);
    dispatch(getUserProfile() as any);
  }, []);

  const handleChange = (e) => {
    setNewShift((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setNewShift((prev) => ({ ...prev, userIDs: selectedUserIds }));
    dispatch(assignShift(newShift) as any);
    handleClose();
  };

  const handleUsersChange = (selectedValues) => {
    setSelectedUserIds(selectedValues);
  };

  const handleUnassign = (e) => {
    e.preventDefault();
    dispatch(unassignShift(selectedUserIds) as any);
  };

  const handleCreateShift = (e) => {
    e.preventDefault();
    dispatch(createShift(newShift) as any);
  };

  console.log("Selected users", selectedUserIds);
  console.log("userShiftAssignments", userShiftAssignments);

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
      {/* <div className="w-full rounded-[5px] mb-4 ">
        <p className="text-primary/50 mb-1">Select Users</p>

        <Select
          options={
            users && users.map((user) => ({ value: user.id, label: user.name }))
          }
          value={selectedUsers}
          onChange={handleUsersChange}
          isMultiple
          isSearchable
          placeholder="Select users"
          primaryColor="#1ea7fd"
        />
      </div> */}
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
          selectedUserIds.map((user: any) => ({
            value: user.value,
            label: user.label,
          }))
        }
        name="userIDs"
        onChange={handleUsersChange}
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

export default AddEmployeeForm;
