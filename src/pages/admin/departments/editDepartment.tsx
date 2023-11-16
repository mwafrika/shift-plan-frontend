import React, { useEffect, useState } from "react";
import Input from "../../../components/input";
import SelectInput from "../../../components/select";
import Button from "../../../components/button";
import { useSelector, useDispatch } from "react-redux";
import { getDepartments } from "../../../redux/actions/department";
import { editUser, getUsers } from "../../../redux/actions/users";
import { fetchRoles } from "../../../redux/actions/role";
import { updateDepartment } from "../../../redux/actions/department";

const EditDepartmentForm = ({ handleClose }) => {
  const { department, users, departUsers } = useSelector((state) => ({
    department: state?.departments?.department,
    users: state?.users?.users,
    departUsers: state?.departments?.users,
  }));

  const dispatch = useDispatch();
  const [newDepartment, setNewDepartment] = useState({
    departmentName: "",
    departmentManager: "",
    departmentDescription: "",
  });
  useEffect(() => {
    if (department) {
      setNewDepartment({
        departmentName: department.departmentName || "",
        departmentManager: department.departmentManager || "",
        departmentDescription: department.departmentDescription || "",
      });
    }
  }, [department]);

  useEffect(() => {
    dispatch(fetchRoles() as any);
    dispatch(getDepartments() as any);
    dispatch(getUsers() as any);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDepartment((prevData) => ({ ...prevData, [name]: value }));
  };

  const submit = (event) => {
    event.preventDefault();
    dispatch(updateDepartment(department.id, newDepartment) as any);
    dispatch(getDepartments() as any);
    dispatch(getUsers() as any);
    handleClose();
  };

  const handleEditEmployee = (e) => {
    e.preventDefault();
    submit(e);
  };

  const managers = users.filter((user) => user?.role?.name === "manager");

  return (
    <form className="flex flex-col items-start" onSubmit={handleEditEmployee}>
      <Input
        type="text"
        name="departmentName"
        label="Department Name"
        placeholder="Department Name"
        inputStyle="border border-primary rounded-[5px] h-8"
        value={newDepartment.departmentName}
        onChange={handleInputChange}
      />
      <SelectInput
        name="departmentManager"
        label="Department Manager"
        placeholder="Department Manager"
        Style="border border-primary rounded-[5px]"
        value={newDepartment.departmentManager}
        onChange={handleInputChange}
        Options={
          managers &&
          managers.map((employee) => ({
            value: employee.name,
            label: employee.name,
          }))
        }
      />
      <Input
        name="departmentDescription"
        label="Department Description"
        placeholder="Department Description"
        inputStyle="border border-primary rounded-[5px] h-8"
        value={newDepartment.departmentDescription}
        onChange={handleInputChange}
      />
      <div className="flex flex-row gap-2">
        <Button
          label="Cancel"
          width="border border-primary text-primary w-[120px] rounded-[5px]"
          type="button"
        />
        <Button
          label="Save changes"
          width="bg-secondary text-white w-[120px] rounded-[5px]"
          type="submit"
        />
      </div>
    </form>
  );
};

export default EditDepartmentForm;
