import React from "react";
import Layout from "../../../components/layout";
import Card from "../../../components/card";
import {FaUserTie, FaUsers} from "react-icons/fa"
import Header from "../../../components/header";
import Filter from "../../../components/filter";
import EmployeesList from "./list";
import Button from "../../../components/button";
import Dialog from "../../../components/dialog";
import AddEmployeeForm from "./addEmployee";

const AdminDashboard = () => {

  const [showForm, setShowForm] = React.useState(false);

  return (
    <Layout user={"Admin"} username={"Admin Okolongo"}>
      {showForm && (
        <Dialog title="Create employee" width="w-[30%]">
          <AddEmployeeForm />
        </Dialog>
      )}
      <div className="bg-background p-4">
        <Header title={"Managers/Employees"} />
        <div className="flex flex-row items-center gap-8">
          <Card title={"Managers"} total={"100"} icon={<FaUserTie size={20}/>} />
          <Card title={"Employees"} total={"30"} icon={<FaUsers size={20}/>} />
        </div>
        <div className="flex flex-row items-center justify-between">
             <div className="w-[71%]">
               <Filter label1={"All"} label2={"Managers"} label3={"Employees"} label4={"Department"} total={0} />
             </div>
             <div>
               <Button 
                  label="Add Employee" 
                  width="bg-secondary text-white py-2 px-8 shadow-lg"
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
