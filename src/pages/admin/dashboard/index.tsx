import React from "react";
import Layout from "../../../components/layout";
import Card from "../../../components/card";
import {FaUserTie, FaUsers} from "react-icons/fa"
import Header from "../../../components/header";
import Filter from "../../../components/filter";
import Pagination from "../../../components/pagination";
import EmployeesList from "./list";

const AdminDashboard = () => {
  return (
    <Layout>
      <div className="bg-background h-[89%] p-4">
        <Header title={"Managers/Employees"} />
        <div className="flex flex-row items-center gap-8">
          <Card title={"Managers"} total={"100"} icon={<FaUserTie size={20}/>} />
          <Card title={"Employees"} total={"30"} icon={<FaUsers size={20}/>} />
        </div>
        <Filter label1={"All"} label2={"Managers"} label3={"Employees"} total={0} />
        <EmployeesList />
      </div>
    </Layout>
  );
};

export default AdminDashboard;
