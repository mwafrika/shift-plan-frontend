import React, { useState } from "react";
import Layout from "../../../layout";
import Filter from "../../../components/filter";
import CompanyList from "./list";

const CompaniesPage = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [deleted, setDeleted] = useState(false);

  const toggleInformation = () => {
    setIsOpened(!isOpened);
  };
  const toggleDelete = () => {
    setDeleted(true);
  };

  const popUpDelete = () => (
    <div className="fixed top-0 left-0 w-screen h-screen bg-primary/50 flex items-center justify-center z-10">
      <div className="bg-white w-1/3 h-2/5 rounded-md">
        <div className="text-right p-3">
          <button
            className=" text-black text-lg font-bold"
            onClick={() => setDeleted(false)}
          >
            X
          </button>
        </div>
        <div className="text-center">
          <p className="font-bold p-4">Delete Company?</p>
          <p className="text-sm">
            Are you sure you want to delete ABC GROUP ?{" "}
          </p>
          <p className="text-sm">this action can’t be undone</p>
        </div>
        <div className="flex item-center justify-center gap-4 mt-10">
          <button
            className="px-5 bg-secondary text-white rounded-md"
            onClick={() => setDeleted(false)}
          >
            Cancel
          </button>
          <button className="px-5 bg-[#E50303] text-white rounded-md">
            Delete
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <Layout user="Super Admin" username="Real Okolongo">
      <div className="bg-background">
        <div className="p-4">
          <Filter
            label1={"All"}
            label2={"Approved"}
            label3={"pending"}
            total={0}
          />
        </div>
        <div>
          <CompanyList />
        </div>
      </div>
    </Layout>
  );
};

export default CompaniesPage;
