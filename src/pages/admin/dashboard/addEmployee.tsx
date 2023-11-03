import React, { useEffect, useState } from "react";
import Input from "../../../components/input";
import SelectInput from "../../../components/select";
import Button from "../../../components/button";
import { addUser, getUsers } from "../../../redux/actions/users";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { fetchRoles } from "../../../redux/actions/role";
import { getDepartments } from "../../../redux/actions/department";

interface Props {
  showForm?: boolean;
  setShowForm?: (value: boolean) => void;
}
const AddEmployeeForm = ({ showForm, setShowForm }: Props) => {
  const dispatch = useDispatch();
  const { roles } = useSelector((state) => state.roles);
  const { departments } = useSelector((state) => state.departments);

  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    departmentId: null,
    roleId: null,
  });

  useEffect(() => {
    dispatch(fetchRoles() as any);
    dispatch(getDepartments() as any);
  }, []);

  console.log(departments, "Departents");
  const handleChange = (e) => {
    setNewUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(newUser) as any);
    dispatch(getUsers() as any);
    dispatch(getDepartments() as any);
    setShowForm(!showForm);
  };

  console.log(newUser, "new user data");

  return (
    <form className="flex flex-col items-start" onSubmit={handleSubmit}>
      <Input
        type="text"
        name="name"
        label="Full Name"
        placeholder="Okolongo okolongo"
        inputStyle="border border-primary rounded-[5px] h-8"
        value={newUser.name}
        onChange={handleChange}
      />

      <Input
        type="email"
        name="email"
        label="Email"
        placeholder="okolongo@gmail.com"
        inputStyle="border border-primary rounded-[5px] h-8"
        value={newUser.email}
        onChange={handleChange}
      />

      <SelectInput
        label="Department"
        placeholder="Department"
        name="departmentId"
        Style="border border-primary rounded-[5px]"
        Options={
          departments &&
          departments.map((department) => ({
            value: department.id,
            label: department.departmentName,
          }))
        }
        value={newUser.departmentId}
      />

      <SelectInput
        label="Roles"
        placeholder="Roles"
        name="roleId"
        Style="border border-primary rounded-[5px]"
        Options={
          roles &&
          roles.filter(
            (role) => role.name !== "superAdmin" && role.name !== "admin",
          )
          .map((role) => ({
            value: role.id,
            label: role.name,
          }))
        }
        value={newUser.departmentId}
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
