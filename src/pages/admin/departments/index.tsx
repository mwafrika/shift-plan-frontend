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
import { getDepartments } from "../../../redux/actions/department";
import { getUsers } from "../../../redux/actions/users";

const DepartmentPage = () => {
  const [showForm, setShowForm] = React.useState(false);
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  const { departments } = useSelector((state) => state.departments);
  useEffect(() => {
    dispatch(getUsers() as any);
    dispatch(getDepartments() as any);
  }, []);

  const countManagers = users.filter(
    (user) => user?.role?.name === "manager",
  ).length;

  const countEmployees = users.filter(
    (user) => user?.role?.name === "employee",
  ).length;

  // filter where the user is not super admin or admin
  const countAllUsers = users.filter(
    (user) => user?.role?.name !== "superAdmin" && user?.role?.name !== "admin",
  ).length;

  // filter only departments of the current company
  const companyDepartments = departments?.length;

  console.log(countManagers, "countManagers");

  return (
    <Layout user={"Admin"} username={"Admin Okolongo"}>
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
          <FilterSection />
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
        <DepartmentList />
      </div>
    </Layout>
  );
};

export default DepartmentPage;
