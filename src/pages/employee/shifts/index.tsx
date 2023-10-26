import React, { useState } from "react";
import Layout from "../../../layout";
import Button from "../../../components/button";
import { requestForm } from "../forms/AbsenceRequest";
import ShiftList from "./list";

const ShiftPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFormPop = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Layout user="Employee" username="OKolongo">
      {isOpen && requestForm({ handleClose: toggleFormPop })}
      <div className="flex items-center justify-end">
        <h1 className=" bg-primary text-white px-36 py-2">10th October</h1>
      </div>
      <div>
        <Button
          width="bg-secondary text-white px-8 py-2 rounded-[5px] ml-1"
          type="click"
          label="Request absence"
          onClick={toggleFormPop}
        />
      </div>
      <div className="mt-2">
        <ShiftList />
      </div>
    </Layout>
  );
};

export default ShiftPage;
