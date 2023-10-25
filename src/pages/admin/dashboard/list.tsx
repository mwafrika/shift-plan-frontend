import React from "react"
import Pagination from "../../../components/pagination"
import Checkbox from "../../../components/checkbox";
import { RiEditBoxFill } from "react-icons/ri"
import Delete from "../../../components/delete";
import Dialog from "../../../components/dialog";
import EditEmployeeForm from "./editEmployee";

const employees = [
  {
    id: 1,
    fullname: "Okolongo",
    email: "okolongo@gmail.com",
    department: "Gynecology",
    role: "Manager"
  },
  {
    id: 2,
    fullname: "Okolongo",
    email: "okolongo@gmail.com",
    department: "Gynecology",
    role: "Manager"
  },
  {
    id: 3,
    fullname: "Okolongo",
    email: "okolongo@gmail.com",
    department: "Gynecology",
    role: "Manager"
  },
  {
    id: 4,
    fullname: "Okolongo",
    email: "okolongo@gmail.com",
    department: "Gynecology",
    role: "Manager"
  },
  {
    id: 5,
    fullname: "Okolongo",
    email: "okolongo@gmail.com",
    department: "Gynecology",
    role: "Manager"
  }
]

const EmployeesList = () => {

  const [showForm, setShowForm] = React.useState(false);

    return (
        <div className="flex flex-col items-center justify-center mt-4">
          {showForm && (
            <Dialog title="Edit employee" width="w-[30%]">
              <EditEmployeeForm />
            </Dialog>
           )}
            <table className="table p-5 overflow-auto md:overflow-visible md:table-fixed md:w-full sm:hidden">
        <thead className="mx-5 text-white bg-secondary w-full">
          <tr className="w-full">
          <th className="font-semibold text-left pl-5 py-2 bg-primary-200 w-[5%]">
              <Checkbox name={""} />
            </th>
            <th className=" text-[14px] text-blue font-semibold text-left pl-5 py-2 bg-primary-200 w-[25%]">
              Fullname
            </th>
            <th className=" text-[14px] text-blue font-semibold text-left pl-5 py-2 bg-primary-200 w-[25%]">
              Email address
            </th>
            <th className="text-[14px] text-blue font-semibold text-left pl-5 py-2 bg-primary-200 w-[25%]">
              Department
            </th>
            <th className="text-[14px] text-blue font-semibold text-left pl-5 py-2 bg-primary-200">
              Role
            </th>
            <th className="text-[14px] text-blue font-semibold text-left pl-5 py-2 bg-primary-200">
              Action
            </th>
            </tr>
        </thead>

        <tbody>
        {employees.map((emp) => (
    <tr key={emp.id} className="bg-white">
      <td className="font-semibold text-[14px] text-left pl-5 py-2 overflow-x-hidden">
        <Checkbox name={emp.fullname} />
      </td>
      <td className="font-semibold text-[14px] text-left pl-5 py-2 overflow-x-hidden">
        {emp.fullname}
      </td>
      <td className="font-semibold text-[14px] text-left pl-5 py-2 overflow-x-hidden">
        {emp.email}
      </td>
      <td className="font-normal text-[14px] text-left pl-5 py-2 overflow-x-hidden">
        {emp.department}
      </td>
      <td className="font-normal text-[14px] text-left text-secondary pl-5 py-2 overflow-x-hidden">
        {emp.role}
      </td>
      <td className="font-normal text-[14px] text-left pl-5 py-2 flex flex-row items-center">
        <RiEditBoxFill
          fontSize={16}
          height={16}
          style={{ marginRight: 15, cursor: 'pointer' }}
          className="text-secondary"
          onClick={() => {
            setShowForm(true);
          }}
        />
        <Delete 
        title="Delete Employee"
        description="Are you sure you want to delete this employee ?"
        id={""} 
        />
      </td>
    </tr>
  ))}
        </tbody>
      </table>
      <Pagination pagesCount={6} currentPage={0} onPageChange={undefined} />
        </div>
    )
}

export default EmployeesList;