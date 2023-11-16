import React, { useEffect, useState } from "react";
import Input from "../../../components/input";
import Button from "../../../components/button";
import { useSelector, useDispatch } from "react-redux";
import {
  getUserProfile,
  updateUserProfile,
} from "../../../redux/actions/setting";

const EditCompanyForm = () => {
  const { setting } = useSelector((state) => ({
    setting: state?.setting?.user,
  }));

  const dispatch = useDispatch();
  const [newDepartment, setNewDepartment] = useState({
    name: "",
    email: "",
    profilePicture: "",
    roleId: null,
    departmentId: null,
    phone: "",
    country: "",
    city: "",
    address: "",
    description: "",
    companyUrl: "",
  });
  useEffect(() => {
    if (setting) {
      setNewDepartment({
        name: setting.name || "",
        email: setting.email || "",
        profilePicture: setting.profilePicture || "",
        roleId: setting.roleId || null,
        departmentId: setting.departmentId || null,
        phone: setting.phone || "",
        country: setting.country || "",
        city: setting.city || "",
        address: setting.address || "",
        description: setting.description || "",
        companyUrl: setting.companyUrl || "",
      });
    }
  }, [setting]);

  useEffect(() => {
    dispatch(getUserProfile() as any);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDepartment((prevData) => ({ ...prevData, [name]: value }));
  };

  const submit = (event) => {
    event.preventDefault();
    dispatch(updateUserProfile(newDepartment) as any);
    // handleClose();
  };

  const handleEditEmployee = (e) => {
    e.preventDefault();
    submit(e);
  };

  return (
    <form className="flex flex-col items-start" onSubmit={handleEditEmployee}>
      <Input
        type="text"
        name="name"
        placeholder="Code of Africa"
        inputStyle="border border-primary rounded-[5px] h-8 mb-2"
        onChange={handleInputChange}
        value={newDepartment.name}
      />
      <Input
        type="email"
        name="email"
        placeholder="coa@gmail.com"
        inputStyle="border border-primary rounded-[5px] h-8 mb-2"
        onChange={handleInputChange}
        value={newDepartment.email}
      />
      <Input
        type="text"
        name="companyUrl"
        placeholder="Website url"
        inputStyle="border border-primary rounded-[5px] h-8 mb-2"
        onChange={handleInputChange}
        value={newDepartment.companyUrl}
      />
      <Input
        type="text"
        name="phone"
        placeholder="+250 791434194"
        inputStyle="border border-primary rounded-[5px] h-8 mb-2"
        onChange={handleInputChange}
        value={newDepartment.phone}
      />
      <Input
        type="text"
        name="country"
        placeholder="Rwanda, Kigali"
        inputStyle="border border-primary rounded-[5px] h-8 mb-2"
        onChange={handleInputChange}
        value={newDepartment.country}
      />
      <Input
        type="text"
        name="city"
        placeholder="Kigali, Kimihurura"
        inputStyle="border border-primary rounded-[5px] h-8 mb-2"
        onChange={handleInputChange}
        value={newDepartment.city}
      />
      <Input
        type="text"
        name="description"
        placeholder="Description"
        inputStyle="border border-primary rounded-[5px] h-8"
        onChange={handleInputChange}
        value={newDepartment.description}
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

export default EditCompanyForm;
