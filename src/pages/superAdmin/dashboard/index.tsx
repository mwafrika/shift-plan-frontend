import React from 'react'
import Layout from '../../../components/layout';
import Card from '../../../components/card';
import { UserCircle, Bell } from 'heroicons-react';
import {FaBuilding, FaUserTie, FaUsers} from "react-icons/fa";
import UserChart from '../charts/userChart';



const SuperAdminDashboard = () => {
    return (
        <Layout user="Super Admin" username="Real Okolongo">
            <div className='flex justify-between p-4 gap-[2rem] bg-background h-[89vh]'>
                <div  className='w-[70%] '>
                    <div className='flex justify-around'>
                        <Card title='Companies' total='5' icon={<FaBuilding  />} />
                        <Card title='User' total='5' icon={<FaUsers />} />

                    </div>
                    <div className='relative text-sm mt-4'>
                        <div className="absolute top-1 left-[8rem] h-[230px] bg-gray-700 rounded p-1 shadow-md w-[70%]">
                            <UserChart />
                        </div>
                        <div className="absolute top-[15rem] left-[8rem] h-[230px] bg-gray-700 rounded  p-1 shadow-md w-[70%]">
                            <UserChart />
                        </div>
                    </div>
                 

                </div>
                <div className='  w-[30%] p-2 h-[100%]'>
                   <div className='flex items-center justify-start gap-2 pb-[2rem]'>
                    <Bell className='text-primary'/>
                    <h1>7 notification</h1>
                    </div> 

                    <div className='flex flex-col gap-2 overflow-y-auto h-[90%] '>
                        <div className='flex justify-between items-center gap-2 bg-white p-2 rounded-md shadow-md'>
                            <div  className='border border-secondary rounded-full p-2'>
                                <p>ABC</p>
                            </div>
                            <p>Abc group </p>

                            <button className='bg-secondary px-4 py-1 rounded-md text-white'>Detail</button>
                        </div>
                        <div className='flex justify-between items-center gap-2 bg-white p-2 rounded-md shadow-md'>
                            <div  className='border-[0.1rem] rounded-[60%] p-2'>
                                    <p>ABC</p>
                        </div>
                            <p>Abc group </p>

                            <button className='bg-secondary px-4 py-1 rounded-md text-white'>Detail</button>
                        </div>
                        <div className='flex justify-between items-center gap-2 bg-white p-2 rounded-md shadow-md'>
                            <div  className='border-[0.1rem] rounded-[60%] p-2'>
                                    <p>ABC</p>
                        </div>
                            <p>Abc group </p>

                            <button className='bg-secondary px-4 py-1 rounded-md text-white'>Detail</button>
                        </div>
                        <div className='flex justify-between items-center gap-2 bg-white p-2 rounded-md'>
                            <div  className='border-[0.1rem] rounded-[60%] p-2'>
                                    <p>ABC</p>
                        </div>
                            <p>Abc group </p>

                            <button className='bg-secondary px-4 py-1 rounded-md text-white'>Detail</button>
                        </div>
                        <div className='flex justify-between items-center gap-2 bg-white p-2 rounded-md'>
                            <div  className='border-[0.1rem] rounded-[60%] p-2'>
                                    <p>ABC</p>
                        </div>
                            <p>Abc group </p>

                            <button className='bg-secondary px-4 py-1 rounded-md text-white'>Detail</button>
                        </div>
                        <div className='flex justify-between items-center gap-2 bg-white p-2 rounded-md'>
                            <div  className='border-[0.1rem] rounded-[60%] p-2'>
                                    <p>ABC</p>
                        </div>
                            <p>Abc group </p>

                            <button className='bg-secondary px-4 py-1 rounded-md text-white'>Detail</button>
                        </div>
                        <div className='flex justify-between items-center gap-2 bg-white p-2 rounded-md'>
                            <div  className='border-[0.1rem] rounded-[60%] p-2'>
                                    <p>ABC</p>
                        </div>
                            <p>Abc group </p>

                            <button className='bg-secondary px-4 py-1 rounded-md text-white'>Detail</button>
                        </div>
                        <div className='flex justify-between items-center gap-2 bg-white p-2 rounded-md'>
                            <div  className='border-[0.1rem] rounded-[60%] p-2'>
                                    <p>ABC</p>
                        </div>
                            <p>Abc group </p>

                            <button className='bg-secondary px-4 py-1 rounded-md text-white'>Detail</button>
                        </div>
                        <div className='flex justify-between items-center gap-2 bg-white p-2 rounded-md'>
                            <div  className='border-[0.1rem] rounded-[60%] p-2'>
                                    <p>ABC</p>
                        </div>
                            <p>Abc group </p>

                            <button className='bg-secondary px-4 py-1 rounded-md text-white'>Detail</button>
                        </div>
                        <div className='flex justify-between items-center gap-2 bg-white p-2 rounded-md'>
                            <div  className='border-[0.1rem] rounded-[60%] p-2'>
                                    <p>ABC</p>
                        </div>
                            <p>Abc group </p>

                            <button className='bg-secondary px-4 py-1 rounded-md text-white'>Detail</button>
                        </div>
                        <div className='flex justify-between items-center gap-2 bg-white p-2 rounded-md'>
                            <div  className='border-[0.1rem] rounded-[60%] p-2'>
                                    <p>ABC</p>
                        </div>
                            <p>Abc group </p>

                            <button className='bg-secondary px-4 py-1 rounded-md text-white'>Detail</button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default SuperAdminDashboard;