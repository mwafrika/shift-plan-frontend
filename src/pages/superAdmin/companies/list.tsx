import React, {useState} from "react"
import Pagination from "../../../components/pagination"
import Checkbox from "../../../components/checkbox";
import Delete from "../../../components/delete";
import Button from "../../../components/button";
import {FaUser} from 'react-icons/fa';
// import Dialog from "../../../components/dialog";
import { Check, Eye } from 'heroicons-react';
import { companies } from "./data";

const CompanyList = () => {

  const [showForm, setShowForm] = useState(false);
//   const [isOpened, setIsOpened] = useState(false);
  
//   const toggleInformation = () => {
//     setIsOpened(!isOpened);
//   };

  const popUps = () => (
    <div className='fixed top-0 left-0 w-screen h-screen bg-primary/50 flex justify-center items-center z-10'>
        <div className='bg-white w-[50%] h-[80%] rounded-md'>
            <div className='text-right p-3'>
                <button
                className=' text-black text-lg font-bold '
                onClick={()=>setShowForm(false)}
                >
                X
                </button>
            </div>

            <div className='px-10 mt-10'>
                <div className='flex items-center justify-around gap-10'>
                    <div className='flex flex-col items-center justify-center bg-secondary/5 rounded-md p-6'>
                        <div className='bg-white p-2 rounded-full'>
                            <FaUser className='text-primary text-[2rem]' />
                        </div>
                        <h1>ABCGROUp</h1>
                    </div>

                    <div className='bg-white'>
                        <p className='font-bold mb-10'>Description</p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Impedit nulla et similique iusto sapiente eaque doloremque
                            dolores dolor mollitia amet, praesentium alias nesciunt pariatur
                            veritatis eos quia ullam eligendi. Cum labore rem earum fugit
                            delectus aliquid, recusandae illum quas repudiandae.
                        </p>
                    </div>
                </div>
                <div className='flex item-center justify-center gap-4 mt-10'>
                    <button className='px-4 bg-[#06AD35] text-white rounded-md'>
                    Approve
                    </button>
                    <button 
                    onClick={()=>setShowForm(false)}
                    className='px-4 bg-[#E50303] text-white rounded-md'>
                    Deny
                    </button>
                </div>
            </div>
        
        </div>
    </div>
  );

    return (
        <div className="flex flex-col items-center justify-center mt-4">
          {showForm && (popUps())}
            <table className="table p-5 overflow-auto md:overflow-visible md:table-fixed md:w-full sm:hidden">
        <thead className="mx-5 w-full">
          <tr className="w-screen  text-white bg-secondary">
          <th className="font-semibold text-left pl-5 py-2 bg-primary-200 w-[5%]">
              <Checkbox name={""} />
            </th>
            <th className=" text-[14px] text-blue font-semibold text-left pl-5 py-2 bg-primary-200 w-[25%]">
              Company Name
            </th>
            <th className=" text-[14px] text-blue font-semibold text-left pl-5 py-2 bg-primary-200 w-[25%]">
                Company Email
            </th>
            <th className="text-[14px] text-blue font-semibold text-left pl-5 py-2 bg-primary-200 w-[25%]">
              Start date
            </th>
            <th className="text-[14px] text-blue font-semibold text-left pl-5 py-2 bg-primary-200 w-[25%]">
              status
            </th>
            <th className="text-[14px] text-blue font-semibold text-left pl-5 py-2 bg-primary-200 w-[25%]">
              dashboard
            </th>
            <th className="text-[14px] text-blue font-semibold text-left pl-5 py-2 bg-primary-200 w-[25%]">
              Action
            </th>
            </tr>
        </thead>

        <tbody>
        {companies.map((comp) => (
    <tr key={comp.id} className="bg-white">
      <td className="font-semibold text-[14px] text-left pl-5 py-2 overflow-x-hidden">
        <Checkbox name={comp.name} />
      </td>
      <td className="font-semibold text-[14px] text-left pl-5 py-2 overflow-x-hidden">
        {comp.name}
      </td>
      <td className="font-semibold text-[14px] text-left pl-5 py-2 overflow-x-hidden">
        {comp.email}
      </td>
      <td className="font-normal text-[14px] text-left pl-5 py-2 overflow-x-hidden">
        {comp.startDate}
      </td>
      <td className={`${comp?.status === "approved" ? "bg-[#06AD35]" : "bg-[#FFB946]" }font-normal text-[14px] text-left pl-5 py-2 overflow-x-hidden `}>
        {comp.status}
      </td>
      <td className="font-normal text-[14px] text-left pl-5 py-2 overflow-x-hidden">
        <Button width="w-[100px] bg-secondary rounded-sm text-white ml-0"  label="Dashboard" />
      </td>
      <td className="font-normal text-[14px] text-left pl-5 py-4 flex flex-row items-center">
        <Eye
          fontSize={16}
          height={16}
          style={{ marginRight: 15, cursor: 'pointer' }}
          className="text-secondary"
          onClick={() => {
            setShowForm(true)
          }}
        />
        <Delete 
        title="Delete Company"
        description="Are you sure you want to delete this company ?"
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