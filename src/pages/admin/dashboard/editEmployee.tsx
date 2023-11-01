import React, { useState, useEffect } from "react";
import Input from "../../../components/input";
import SelectInput from "../../../components/select";
import Button from "../../../components/button";
import { useDispatch, useSelector } from "react-redux";
import { editUser, getUsers } from "../../../redux/actions/users";
import { fetchRoles } from "../../../redux/actions/role";
import { togglePopup } from "../../../redux/actions/form";
import { getDepartments } from "../../../redux/actions/department";

interface Props {
  closeModal?: () => void;
}
const EditEmployeeForm = ({ closeModal }: Props) => {
  // const { popup } = useSelector((state) => state.form);
  const { user, roles, users, departments } = useSelector((state) => ({
    user: state?.users?.user,
    roles: state?.roles?.roles,
    users: state?.users?.users,
    departments: state?.departments?.departments,
  }));

  const [showForm, setShowForm] = useState(false);

  const dispatch = useDispatch();

  // Initialize userData when the user is available
  useEffect(() => {
    if (user) {
      setUserData({
        name: user.name || "",
        email: user.email || "",
        roleId: user.role?.id || "",
        departmentId: user.department?.id || "",
      });
    }
  }, [user]);

  useEffect(() => {
    dispatch(fetchRoles() as any);
    dispatch(getDepartments() as any);
  }, []);

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    roleId: "",
    departmentId: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const submit = (event) => {
    event.preventDefault();
    dispatch(editUser(user.id, userData) as any);
    dispatch(fetchRoles() as any);
    dispatch(getDepartments() as any);
    dispatch(getUsers() as any);
    closeModal();
  };

  const handleEditEmployee = (e) => {
    e.preventDefault();
    submit(e);
  };

  console.log(userData.departmentId, "All my departments");
  return (
    <form className="flex flex-col items-start" onSubmit={handleEditEmployee}>
      <Input
        type="text"
        name="name"
        label="Fullname"
        placeholder="Okolongo okolongo"
        inputStyle="border border-primary rounded-[5px] h-8"
        value={userData.name}
        onChange={handleInputChange}
      />
      <Input
        type="email"
        name="email"
        label="Email"
        placeholder="okolongo@gmail.com"
        inputStyle="border border-primary rounded-[5px] h-8"
        value={userData.email}
        onChange={handleInputChange}
      />
      <SelectInput
        label="Department"
        placeholder="Department"
        name="departmentId"
        Style="border border-primary rounded-[5px]"
        Options={
          departments?.map((department) => ({
            value: department.id,
            label: department.departmentName,
          })) || []
        }
        onChange={handleInputChange}
        value={userData.departmentId}
      />
      <SelectInput
        label="Role"
        placeholder="Employee"
        name="roleId"
        Options={
          roles?.map((role) => ({
            label: role.name,
            value: role.id,
          })) || []
        }
        Style="border border-primary rounded-[5px]"
        onChange={handleInputChange}
        value={userData.roleId}
      />

      <div className="flex flex-row gap-2">
        <Button
          label="Cancel"
          width="border border-primary text-primary w-[120px] rounded-[5px]"
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

export default EditEmployeeForm;
