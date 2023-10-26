import React from "react";
import Layout from "../../../layout";
import { Bell, Mail, CheckCircle } from "heroicons-react";
import { FaUser, FaUserTie, FaUsers } from "react-icons/fa";

const SettingPage = () => {
  return (
    <Layout user="Super Admin" username="Real Okolongo">
      <div className="flex justify-between p-4 gap-[2rem] bg-background h-[90vh]">
        <div className="flex flex-col items-center gap-[3rem] w-[30%]">
          <div className="flex flex-col items-center bg-secondary/5 rounded-md p-6">
            <div className="bg-white p-2 rounded-full">
              <FaUser className="text-primary text-[2rem]" />
            </div>
            <h1>Admin Okolongo</h1>
          </div>
          <div className="flex flex-col gap-[1rem] bg-secondary/5 rounded-md p-6">
            <p>Companies</p>
            <div className="flex items-center gap-4">
              <Bell />
              <p className="bg-[#FFB946] text-white px-[2.5rem] rounded-md ">
                5
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[1rem] bg-secondary/5 rounded-md p-6">
            <p>Users</p>
            <div className="flex items-center item-center gap-4">
              <FaUsers className="text-primary" />
              <p className="bg-[#FFB946] text-white px-[2.5rem] rounded-md  ">
                5
              </p>
            </div>
          </div>
        </div>
        <div className="bg-secondary/5 rounded-md w-[70%] p-6">
          <h1 className=" text-secondary text-lg font-bold">PROFILE</h1>

          <div className="flex flex-col gap-6 mt-[4rem]">
            <div className="flex gap-6 ">
              <Mail className="text-secondary " />
              <div className="flex flex-col gap-2">
                <p>Email</p>
                <p className="text-secondary">adminokolongo@gmail.com</p>
              </div>
            </div>

            <div className="flex  gap-6">
              <CheckCircle className=" text-secondary " />
              <div className="flex flex-col gap-2">
                <p>Role</p>
                <p className="text-secondary">SuperAdmin</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SettingPage;
