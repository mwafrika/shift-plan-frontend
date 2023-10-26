import React, { useState } from "react";
import Layout from "../../../layout";
import { FaUser } from "react-icons/fa";
import { editSettings } from "../forms/edit";
import {
  ArrowNarrowRightOutline,
  GlobeAlt,
  Mail,
  Phone,
} from "heroicons-react";

const SettingPage = () => {
  const [isOpened, setIsOpened] = useState(false);

  const handleEditForm = () => {
    setIsOpened(!isOpened);
  };

  return (
    <Layout user="EMployee" username="Okolongo">
      {isOpened && editSettings({ handleClose: handleEditForm })}

      <div className="flex justify-between p-4 gap-[2rem] bg-background h-[90vh]">
        <div className="flex flex-col items-center gap-[3rem] w-[30%]">
          <div className="flex flex-col items-center bg-secondary/5 rounded-md p-6">
            <div className="bg-secondary p-5 rounded-full">
              <FaUser className="text-white text-[5rem]" />
            </div>
            <h1>Employee Okolongo</h1>
          </div>
        </div>

        <div className="bg-secondary/5 rounded-md w-[70%] p-6">
          <div className="flex items-center gap-[20rem]">
            <h1 className=" text-secondary text-lg font-bold">PROFILE</h1>
            <button
              onClick={handleEditForm}
              className="bg-secondary text-white text-sm px-6 py-1 font-bold rounded"
            >
              Edit
            </button>
          </div>

          <div className="flex flex-col gap-6 mt-[4rem]">
            <div className="flex gap-6 ">
              <Mail className="text-secondary " />

              <div className="flex flex-col gap-2">
                <p>Email</p>
                <p className="text-secondary">adminokolongo@gmail.com</p>
              </div>
            </div>

            <div className="flex gap-6 ">
              <Phone className="text-secondary " />

              <div className="flex flex-col gap-2">
                <p>Phone</p>
                <p className="text-secondary">+2450683231</p>
              </div>
            </div>

            <div className="flex gap-6 ">
              <ArrowNarrowRightOutline className="text-secondary " />

              <div className="flex flex-col gap-2">
                <p>City & Street</p>
                <p className="text-secondary">adminokolongo@gmail.com</p>
              </div>
            </div>

            <div className="flex gap-6 ">
              <GlobeAlt className="text-secondary " />

              <div className="flex flex-col gap-2">
                <p>Country</p>
                <p className="text-secondary">Lesotho</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SettingPage;
