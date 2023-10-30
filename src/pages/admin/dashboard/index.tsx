import React, { useEffect } from "react";
import Card from "../../../components/card";
import { FaUserTie, FaUsers } from "react-icons/fa";
import Header from "../../../components/header";
import Filter from "../../../components/filter";
import EmployeesList from "./list";
import Button from "../../../components/button";
import Dialog from "../../../components/dialog";
import AddEmployeeForm from "./addEmployee";
import Layout from "../../../layout";
import { getUsers } from "../../../redux/actions/users";
import { useDispatch, useSelector } from "react-redux";
import FilterSection from "../../../components/filter/filter";
import { getDepartments } from "../../../redux/actions/department";

const AdminDashboard = () => {
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
          <AddEmployeeForm showForm={showForm} setShowForm={setShowForm} />
        </Dialog>
      )}
      <div className="bg-background p-4">
        <Header title={"Managers/Employees"} />
        <div className="flex flex-row items-center gap-8">
          <Card
            title={"Managers"}
            total={countManagers}
            icon={<FaUserTie size={20} />}
          />
          <Card
            title={"Employees"}
            total={countEmployees}
            icon={<FaUsers size={20} />}
          />
        </div>
        <div className="w-1/3">
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
              label="Add Employee"
              width="bg-secondary text-white py-2 px-8 shadow-lg m-2"
              onClick={() => {
                setShowForm(true);
              }}
            />
          </div>
        </div>
        <EmployeesList />
      </div>
    </Layout>
  );
};

export default AdminDashboard;
