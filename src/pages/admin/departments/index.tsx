import React, { useEffect } from "react";
import Header from "../../../components/header";
import Filter from "../../../components/filter";
import Button from "../../../components/button";
import Dialog from "../../../components/dialog";
import AddDepartmentForm from "./addDepartment";
import Layout from "../../../layout";
import { FaUserTie, FaUsers } from "react-icons/fa";
import Card from "../../../components/card";
import FilterSection from "../../../components/filter/filter";
import DepartmentList from "./list";
import { useDispatch, useSelector } from "react-redux";
import {
  getDepartments,
  searchDepartments,
} from "../../../redux/actions/department";
import { getUsers } from "../../../redux/actions/users";
import { getUserProfile } from "../../../redux/actions/setting";

const DepartmentPage = () => {
  const [showForm, setShowForm] = React.useState(false);
  const [searchInput, setSearchInput] = React.useState("");
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  const { departments, filteredDepartments } = useSelector(
    (state) => state.departments,
  );
  const currentUser = useSelector((state) => state.setting.user);

  useEffect(() => {
    dispatch(getUsers() as any);
    dispatch(getDepartments() as any);
  }, [searchInput]);

  useEffect(() => {
    dispatch(getUserProfile() as any);
  }, []);

  const handleSearchInputChange = (event) => {
    const searchInput = event.target.value;
    setSearchInput(searchInput);
    dispatch(searchDepartments(searchInput));
  };

  const countManagers = users.filter(
    (user) => user?.role?.name === "manager",
  ).length;

  const countEmployees = users.filter(
    (user) => user?.role?.name === "employee",
  ).length;

  const countAllUsers = users.filter(
    (user) => user?.role?.name !== "superAdmin" && user?.role?.name !== "admin",
  ).length;

  const companyDepartments = departments?.length;
  const dataToDisplay = searchInput ? filteredDepartments : departments;

  return (
    <Layout
      user={currentUser?.role?.name?.toUpperCase()}
      username={currentUser?.name}
    >
      {showForm && (
        <Dialog
          title="Create employee"
          width="w-[30%]"
          onClose={() => {
            setShowForm(!showForm);
          }}
        >
          <AddDepartmentForm showForm={showForm} setShowForm={setShowForm} />
        </Dialog>
      )}
      <div className="bg-background p-4">
        <Header title={"Departments"} />

        <div className="w-1/3 mt-10">
          <FilterSection handleSearchInputChange={handleSearchInputChange} />
        </div>

        <div className="flex flex-col items-center justify-start w-full">
          <div className=" flex justify-between items-center w-full">
            <div className="flex gap-x-4 justify-between">
              <Filter label1={"All"} total={countAllUsers} />
              <Filter label2={"Managers"} total={countManagers} />
              <Filter label3={"Employees"} total={countEmployees} />
              <Filter label4={"Department"} total={companyDepartments} />
            </div>

            <Button
              label="Add Department"
              width="bg-secondary text-white py-2 px-8 shadow-lg m-2"
              onClick={() => {
                setShowForm(true);
              }}
            />
          </div>
        </div>
        <DepartmentList dataToDisplay={dataToDisplay} />
      </div>
    </Layout>
  );
};

export default DepartmentPage;
