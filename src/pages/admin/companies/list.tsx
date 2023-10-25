import React from "react"
import Pagination from "../../../components/pagination"
import Checkbox from "../../../components/checkbox";
import { RiEditBoxFill } from "react-icons/ri"
import Delete from "../../../components/delete";
import Dialog from "../../../components/dialog";
import EditCompanyForm from "./editCompany";

const departments = [
  {
    id: 1,
    name: "Code of Africa",
    email: "coa@gmail.com",
    start_date: "01/12/2023",
    status: "Approve"    
  },
  {
    id: 2,
    name: "Code of Africa",
    email: "coa@gmail.com",
    start_date: "01/12/2023",
    status: "Approve"    
  },
  {
    id: 3,
    name: "Code of Africa",
    email: "coa@gmail.com",
    start_date: "01/12/2023",
    status: "Approve"     
  },
  {
    id: 4,
    name: "Code of Africa",
    email: "coa@gmail.com",
    start_date: "01/12/2023",
    status: "Approve"    
  },
  {
    id: 5,
    name: "Code of Africa",
    email: "coa@gmail.com",
    start_date: "01/12/2023",
    status: "Approve"   
  }
]

const CompanyList = () => {

  const [showForm, setShowForm] = React.useState(false);

    return (
        <div className="flex flex-col items-center justify-center mt-4">
          {showForm && (
            <Dialog title="Edit company" width="w-[30%]">
              <EditCompanyForm />
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
              Email
            </th>
            <th className="text-[14px] text-blue font-semibold text-left pl-5 py-2 bg-primary-200 w-[20%]">
              Start date
            </th>
            <th className="text-[14px] text-blue font-semibold text-left pl-5 py-2 bg-primary-200 w-[15%]">
              Status
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
        {emp.email}
      </td>
      <td className="font-normal text-[14px] text-left pl-5 py-2 overflow-x-hidden">
        {emp.start_date}
      </td>
      <td className="font-normal text-[14px] text-left pl-5 py-2 overflow-x-hidden">
        {emp.status}
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
        title="Delete your company"
        description="Are you sure you want to remove your company from the platform ?"
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

export default CompanyList;