import React from "react"
import Pagination from "../../../components/pagination"
import Checkbox from "../../../components/checkbox";
import { RiEditBoxFill, RiDeleteBin2Fill } from "react-icons/ri"
import Delete from "../../../components/delete";
import Dialog from "../../../components/dialog";
import EditDepartmentForm from "./editDepartment";

const departments = [
  {
    id: 1,
    name: "Technology",
    manager: "Okolongo",
    employees: 30,    
  },
  {
    id: 2,
    name: "Finance",
    manager: "Okolongo",
    employees: 30,   
  },
  {
    id: 3,
    name: "Accounting",
    manager: "Okolongo",
    employees: 10,
    
  },
  {
    id: 4,
    name: "HR",
    manager: "Okolongo",
    employees: 4,
    
  },
  {
    id: 5,
    name: "Cleaning",
    manager: "Okolongo",
    employees: 8,
    
  }
]

const DepartmentList = () => {

  const [showForm, setShowForm] = React.useState(false);

    return (
        <div className="flex flex-col items-center justify-center mt-4">
          {showForm && (
            <Dialog title="Edit department" width="w-[30%]">
              <EditDepartmentForm />
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
              Employees
            </th>
            <th className="text-[14px] text-blue font-semibold text-left pl-5 py-2 bg-primary-200">
              Action
            </th>
            </tr>
        </thead>

        <tbody>
        {departments.map((emp) => (
    <tr key={emp.id} className="bg-white">
      <td className="font-semibold text-[14px] text-left pl-5 py-2 overflow-x-hidden">
        <Checkbox name={emp.name} />
      </td>
      <td className="font-semibold text-[14px] text-left pl-5 py-2 overflow-x-hidden">
        {emp.name}
      </td>
      <td className="font-semibold text-[14px] text-left pl-5 py-2 overflow-x-hidden">
        {emp.manager}
      </td>
      <td className="font-normal text-[14px] text-left pl-5 py-2 overflow-x-hidden">
        {emp.employees}
      </td>
      <td className="font-normal text-[14px] text-left pl-5 py-2 flex flex-row items-center">
        <RiEditBoxFill
          fontSize={16}
          height={16}
          style={{ marginRight: 15, cursor: 'pointer' }}
          className="text-secondary"
          onClick={() => {
            setShowForm(true)
          }}
        />
        <Delete 
        title="Delete department"
        description="Are you sure you want to delete this department ?"
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

export default DepartmentList;