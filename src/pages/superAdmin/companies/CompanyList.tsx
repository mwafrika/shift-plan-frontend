import React from 'react'
import { Check, Eye, Trash } from 'heroicons-react';


function CompanyList({toggleInformation, toggleDelete}) {
  return (
    <div>
        <table className='border-collapse p-4 w-full'>
        <thead className='bg-secondary text-white'>
          <tr>
            <th className='px-4 py-2'>
              <input
                type='checkbox'
                placeholder='Search'
              />
            </th>
            <th className='px-4 py-2'> Company Name</th>
            <th className='px-4 py-2'>Company Email</th>
            <th className='px-4 py-2'>Start Date</th>
            <th className='px-4 py-2'>Status</th>
            <th className='px-4 py-2'>Dashboard</th>
            <th className='flex gap-2 px-4 py-2'>
              <p>Action</p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className=''>
            <td className='px-4 py-2'>
              <input
                type='checkbox'
              />
            </td>
            <td className='px-4 py-2'>ABC Group</td>
            <td className='px-4 py-2'>abc@gmail.com</td>
            <td className='px-4 py-2'>11/10/2023</td>
            <td className='px-4 py-2 text-[#06AD35]'>approve</td>
            <td className='px-1 py-2 bg-secondary text-white rounded-md '>
                <div className='flex item-center justify-center gap-2'>
                    <p>Dashboard</p>
                    <Check />
                </div>
            </td>
            <td className='flex gap-5 px-4 py-2'>
              <Eye
                className='text-secondary'
                onClick={toggleInformation}
              />
              <Trash 
              onClick={toggleDelete}
              className='text-[#FF3C5F]' />
            </td>
          </tr>
          <tr className=''>
            <td className='px-4 py-2'>
              <input
                type='checkbox'
              />
            </td>
            <td className='px-4 py-2'> Company Name</td>
            <td className='px-4 py-2'>Company Email</td>
            <td className='px-4 py-2'>Start Date</td>
            <td className='px-4 py-2 text-[#FFB946]'>pending</td>
            <td className='px-1 py-2 bg-secondary text-white rounded-md '>
                <div className='flex item-center justify-center gap-2'>
                    <p>Dashboard</p>
                    <Check />
                </div>
            </td>
            <td className='px-4 py-2'>
              {' '}
              <div className='flex gap-5'>
                <Eye className='text-secondary' />
                <Trash className='text-[#FF3C5F]' />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CompanyList