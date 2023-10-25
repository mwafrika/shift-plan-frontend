import React from 'react'
import Layout from '../../../components/layout';
import { Mail } from 'heroicons-react';
import { FaUser, FaCity } from "react-icons/fa"
import { BsFillTelephoneFill, BsLink45Deg } from "react-icons/bs"
import { MdLocationCity } from "react-icons/md"
import Button from '../../../components/button';
import Dialog from '../../../components/dialog';
import EditEmployeeForm from '../../admin/dashboard/editEmployee';

const SettingPage = () => {

    const [showForm, setShowForm] = React.useState(false);

    return (
        <Layout user="Manager" username="Manager Okolongo">
            {showForm && (
            <Dialog title="Edit manager" width="w-[30%]">
              <EditEmployeeForm />
            </Dialog>
           )}
            <div className='flex justify-between p-4 gap-[2rem] bg-background h-[90vh]'>
                <div className='flex flex-col items-center gap-8 w-[30%]'>
                    <div className='flex flex-col items-center bg-secondary/5 rounded-md p-6 w-[100%] h-[30%]'>
                        <div className='bg-white p-2 rounded-full'>
                            <FaUser className='text-primary text-[2rem]' />
                        </div>
                        <h1>Manager Okolongo</h1>
                    </div>
                </div>
                <div  className='bg-secondary/5 rounded-md w-[70%] p-6'>
                    <div className="flex flex-row items-center justify-between w-[100%]">
                      <h1 className=' text-secondary text-lg font-bold'>PROFILE</h1>
                      <Button 
                        label="Edit"
                        width="w-[100px] h-[25px] bg-secondary text-white rounded-[5px] mr-1"
                        onClick={() => {
                            setShowForm(true)
                          }}
                        />
                    </div>

                    <div className='flex flex-col gap-4 mt-[4rem]'>
                        <div className='flex gap-6 '>
                            <Mail size={24} className='text-secondary ' />
                            <div className='flex flex-col gap-1'>
                                <p >Email</p>
                                <p className='text-secondary'>managerokolongo@gmail.com</p>
                            </div>
                        </div>

                        <div className='flex  gap-6'>
                            <BsFillTelephoneFill size={24} className=' text-secondary ' />
                            <div className='flex flex-col gap-1'>
                                <p >Telephone</p>
                                <p className='text-secondary'>+250 791434194</p>
                            </div>
                        </div>

                        <div className='flex  gap-6'>
                            <FaCity size={24} className=' text-secondary ' />
                            <div className='flex flex-col gap-1'>
                                <p >City & Street</p>
                                <p className='text-secondary'>Kigali, Kimihurura</p>
                            </div>
                        </div>

                        <div className='flex  gap-6'>
                            <MdLocationCity size={24} className=' text-secondary ' />
                            <div className='flex flex-col gap-1'>
                                <p >Country & Province</p>
                                <p className='text-secondary'>Rwanda, Kigali</p>
                            </div>
                        </div>
                    </div>
                </div>
              
            </div>
        </Layout>
    )
}

export default SettingPage;