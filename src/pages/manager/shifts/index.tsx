import React from "react";
import Button from "../../../components/button";
import ShiftList from "./list";
import Layout from "../../../layout";
import AddEmployeeForm from "./addShift";
import Dialog from "../../../components/dialog";
const ShiftPage = () => {
  const [showForm, setShowForm] = React.useState(false);

  const handleClick = () => {
    setShowForm(!showForm);
  };

  return (
    <Layout user={"Manager"} username={"Manager Okolongo"}>
      <div className="flex items-center justify-end bg-background">
        <h1 className=" bg-primary text-white px-36 py-2">Week-1/October</h1>
      </div>
      <div className="bg-background p-4">
        <div className="flex flex-row justify-between items-center my-4">
          {showForm && (
            <Dialog
              title="Create new shift"
              width="w-[30%]"
              onClose={handleClick}
            >
              <AddEmployeeForm handleClose={handleClick}/>
            </Dialog>
          )}

          <Button
            width="bg-secondary text-white px-8 py-2 rounded-[5px] ml-1"
            type="click"
            label="Create new shift"
            onClick={handleClick}
          />
          <Button
            width="bg-secondary text-white px-8 py-2 rounded-[5px] mr-1"
            type="click"
            label="Generate report"
          />
        </div>

        <ShiftList />
      </div>
    </Layout>
  );
};
export default ShiftPage;
