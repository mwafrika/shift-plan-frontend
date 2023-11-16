import React, { useEffect, useState } from "react";
import Pagination from "../../../components/pagination";
import Checkbox from "../../../components/checkbox";
import { RiEditBoxFill, RiDeleteBin2Fill } from "react-icons/ri";
import Delete from "../../../components/delete";
import Dialog from "../../../components/dialog";
import EditDepartmentForm from "./editDepartment";
import { useDispatch, useSelector } from "react-redux";
import {
  getDepartments,
  getDepartment,
  deleteDepartment,
  getDepartmentEmployees,
} from "../../../redux/actions/department";
import { getUsers } from "../../../redux/actions/users";
import { getItemsForCurrentPage } from "../../../utils/pagination";

const DepartmentList = ({ dataToDisplay }) => {
  const dispatch = useDispatch();
  const { departments } = useSelector((state) => state.departments);
  const [currentPage, setCurrentPage] = useState(0);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const itemsPerPage = 8;
  const departmentData = getItemsForCurrentPage(
    dataToDisplay,
    currentPage,
    itemsPerPage,
  );

  const handlePageChange = (selectedItem) => {
    setCurrentPage(selectedItem.selected);
  };

  const handleEdit = (id) => {
    dispatch(getDepartment(id) as any);
    dispatch(getUsers() as any);
    dispatch(getDepartmentEmployees(id) as any);
    setShowEdit(!showEdit);
  };

  const handleDelete = (id) => {
    dispatch(deleteDepartment(id) as any);
    dispatch(getDepartments() as any);
    setShowDelete(!showDelete);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-4">
      {showEdit && (
        <Dialog
          title="Edit department"
          width="w-[30%]"
          onClose={() => {
            setShowEdit(!showEdit);
          }}
        >
          <EditDepartmentForm
            handleClose={() => {
              setShowEdit(!showEdit);
            }}
          />
        </Dialog>
      )}
      <table className="table p-5 overflow-auto md:overflow-visible md:table-fixed md:w-full sm:hidden">
        <thead className="mx-5 text-white bg-secondary w-full">
          <tr className="w-full">
            <th className="font-semibold text-left pl-5 py-2 bg-primary-200 w-[5%]">
              <Checkbox name={""} />
            </th>
            <th className=" text-[14px] text-blue font-semibold text-left pl-5 py-2 bg-primary-200 w-[25%]">
              name
            </th>
            <th className=" text-[14px] text-blue font-semibold text-left pl-5 py-2 bg-primary-200 w-[25%]">
              Manager
            </th>
            <th className="text-[14px] text-blue font-semibold text-left pl-5 py-2 bg-primary-200 w-[25%]">
              Description
            </th>
            <th className="text-[14px] text-blue font-semibold text-left pl-5 py-2 bg-primary-200">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {departmentData.map((department) => (
            <tr key={department.id} className="bg-white">
              <td className="font-semibold text-[14px] text-left pl-5 py-2 overflow-x-hidden">
                <Checkbox name={department.departmentName} />
              </td>
              <td className="font-semibold text-[14px] text-left pl-5 py-2 overflow-x-hidden">
                {department.departmentName}
              </td>
              <td className="font-semibold text-[14px] text-left pl-5 py-2 overflow-x-hidden">
                {department.departmentManager}
              </td>
              <td className="font-normal text-[14px] text-left pl-5 py-2 overflow-x-hidden">
                {department.departmentDescription}
              </td>
              <td className="font-normal text-[14px] text-left pl-5 py-2 flex flex-row items-center">
                <RiEditBoxFill
                  fontSize={16}
                  height={16}
                  style={{ marginRight: 15, cursor: "pointer" }}
                  className="text-secondary"
                  onClick={() => handleEdit(department.id)}
                />
                <Delete
                  title="Delete department"
                  description="Are you sure you want to delete this department ?"
                  id={department.id}
                  onClick={() => handleDelete(department.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        pagesCount={Math.ceil(dataToDisplay.length / itemsPerPage)}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default DepartmentList;
