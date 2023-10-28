import React, { useState } from "react";
import Input from "../../../components/input";
import SelectInput from "../../../components/select";
import Button from "../../../components/button";
import { addUser } from "../../../redux/actions/users";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

const AddEmployeeForm = () => {

  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    departmentId: "",
  });

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  console.log(newUser, "new user data");

  return (
    <form className="flex flex-col items-start">
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
        Style="border border-primary rounded-[5px] h-8"
        Options={[
          { value: "Employee", label: "Employee" },
          { value: "Manager", label: "Manager" },
        ]}
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
