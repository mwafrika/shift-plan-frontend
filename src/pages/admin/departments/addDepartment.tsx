import React, { useEffect, useState } from "react";
import Input from "../../../components/input";
import SelectInput from "../../../components/select";
import Button from "../../../components/button";
import { useDispatch, useSelector } from "react-redux";
import {
  getDepartments,
  createDepartment,
} from "../../../redux/actions/department";
import { fetchRoles } from "../../../redux/actions/role";
import { getUsers } from "../../../redux/actions/users";

const AddDepartmentForm = () => {
  const dispatch = useDispatch();
  const { departments } = useSelector((state) => state.departments);
  const { users } = useSelector((state) => state.users);

  const [newDepartment, setNewDepartment] = useState({
    departmentName: "",
    departmentManager: "",
    departmentDescription: "",
  });

  useEffect(() => {
    dispatch(getDepartments() as any);
    dispatch(fetchRoles() as any);
    dispatch(getUsers() as any);
  }, []);

  const handleChange = (e) => {
    setNewDepartment((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createDepartment(newDepartment) as any);
    dispatch(getDepartments() as any);
    dispatch(getUsers() as any);
  };
  const employees = users.filter((user) => user?.role?.name === "manager");

  console.log(newDepartment, "new user data");
  return (
    <form className="flex flex-col items-start" onSubmit={handleSubmit}>
      <Input
        type="text"
        name="departmentName"
        label="Department Name"
        placeholder="Quality Assurance"
        inputStyle="border border-primary rounded-[5px] h-8"
        onChange={handleChange}
        value={newDepartment.departmentName}
      />

      <SelectInput
        name="departmentManager"
        label="Department Manager"
        placeholder="Department Manager"
        Style="border border-primary rounded-[5px]"
        //   inputStyle="border border-primary rounded-[5px] h-8"
        value={newDepartment.departmentManager}
        onChange={handleChange}
        Options={
          employees &&
          employees.map((employee) => ({
            value: employee.id,
            label: employee.name,
          }))
        }
      />
      <Input
        type="text"
        name="departmentDescription"
        label="Department Description"
        placeholder="Quality Assurance"
        inputStyle="border border-primary rounded-[5px] h-8"
        onChange={handleChange}
        value={newDepartment.departmentDescription}
      />
      <div className="flex flex-row gap-2">
        <Button
          label="Cancel"
          width="border border-primary text-primary w-[100px] rounded-[5px]"
          type="button"
        />
        <Button
          label="Save"
          width="bg-secondary text-white w-[100px] rounded-[5px]"
          type="submit"
        />
      </div>
    </form>
  );
};

export default AddDepartmentForm;
