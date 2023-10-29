import React, { useEffect, useState } from "react";
import Pagination from "../../../components/pagination";
import Checkbox from "../../../components/checkbox";
import { RiEditBoxFill } from "react-icons/ri";
import Delete from "../../../components/delete";
import Dialog from "../../../components/dialog";
import EditEmployeeForm from "./editEmployee";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, getUser, deleteUser } from "../../../redux/actions/users";
import { fetchRoles } from "../../../redux/actions/role";
import { togglePopup } from "../../../redux/actions/form";

const EmployeesList = () => {
  const [showDelete, setShowDelete] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const { users } = useSelector((state) => state.users);
  const [currentPage, setCurrentPage] = useState(0);
  const dispatch = useDispatch();

  // Fetch users and roles on component mount
  useEffect(() => {
    dispatch(getUsers() as any);
    dispatch(fetchRoles() as any);
  }, [dispatch]);

  const handleEdit = (id) => {
    dispatch(getUser(id) as any);
    setShowEdit(!showEdit);
  };

  const handleDelete = (id) => {
    dispatch(deleteUser(id) as any);
    dispatch(getUsers() as any);
    setShowDelete(!showDelete);
  };

  const handlePageChange = (selectedItem) => {
    setCurrentPage(selectedItem.selected);
  };

  const itemsPerPage = 10;
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
 // const usersForCurrentPage = users.slice(startIndex, endIndex);

  console.log(users, "All users", showDelete, "popup");
  return (
    <div className="flex flex-col items-center justify-center mt-4">
      {showEdit && (
        <Dialog
          title="Edit employee"
          width="w-[30%]"
          onClose={() => {
            setShowEdit(!showEdit);
          }}
        >
          <EditEmployeeForm />
        </Dialog>
      )}
      <table className="table p-5 overflow-auto md:overflow-visible md:table-fixed md:w-full sm:hidden">
        <thead className="mx-5 text-white bg-secondary w-full">
          <tr className="w-full">
            <th className="font-semibold text-left pl-5 py-2 bg-primary-200 w-[5%]">
              <Checkbox name="Select all" />
            </th>
            <th className="text-[14px] text-blue font-semibold text-left pl-5 py-2 bg-primary-200 w-[25%]">
              Name
            </th>
            <th className="text-[14px] text-blue font-semibold text-left pl-5 py-2 bg-primary-200 w-[25%]">
              Email
            </th>
            <th className="text-[14px] text-blue font-semibold text-left pl-5 py-2 bg-primary-200 w-[20%]">
              Department
            </th>
            <th className="text-[14px] text-blue font-semibold text-left pl-5 py-2 bg-primary-200 w-[15%]">
              Role
            </th>
            <th className="text-[14px] text-blue font-semibold text-left pl-5 py-2 bg-primary-200">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {users?.map((emp) => (
            <tr key={emp.id} className="bg-white">
              <td className="font-semibold text-[14px] text-left pl-5 py-2 overflow-x-hidden">
                <Checkbox name={emp.name} />
              </td>
              <td className="font-semibold text-[14px] text-left pl-5 py-2 overflow-x-hidden">
                {emp.name}
              </td>
              <td className="font-semibold text-[14px] text-left pl-5 py-2 overflow-x-hidden">
                {emp.email}
              </td>
              <td className="font-normal text-[14px] text-left pl-5 py-2 overflow-x-hidden">
                {emp?.department?.departmentName}
              </td>
              <td className="font-normal text-[14px] text-left pl-5 py-2 overflow-x-hidden">
                {emp.role ? emp.role.name : ""}
              </td>
              <td className="font-normal text-[14px] text-left pl-5 py-2 flex flex-row items-center">
                <RiEditBoxFill
                  fontSize={16}
                  height={16}
                  style={{ marginRight: 15, cursor: "pointer" }}
                  className="text-secondary"
                  onClick={() => handleEdit(emp.id)}
                />
                <Delete
                  title="Delete Employee"
                  description="Are you sure you want to delete this employee?"
                  id={emp.id}
                  onClick={() => handleDelete(emp.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        pagesCount={Math.ceil(users.length / itemsPerPage)}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default EmployeesList;
