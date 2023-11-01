import React from "react";
import Card from "../../../components/card";
import { FaUserTie, FaUsers } from "react-icons/fa";
import Header from "../../../components/header";
import Filter from "../../../components/filter";
import EmployeesList from "./list";
import Button from "../../../components/button";
import Dialog from "../../../components/dialog";
import AddEmployeeForm from "../../admin/dashboard/addEmployee";
import Layout from "../../../layout";

const AbsencePage = () => {
  return (
    <Layout user={"Admin"} username={"Admin Okolongo"}>
      <div className="bg-background p-4">
        <Header title={"Absences requests"} />
        <div className="flex flex-row items-center justify-between">
          <div className="w-[71%] my-4">
            <Filter
              label1={"All"}
              label2={"Employees"}
              label3={"Shifts"}
              total={70}
            />
          </div>
        </div>
        <EmployeesList />
      </div>
    </Layout>
  );
};

export default AbsencePage;
