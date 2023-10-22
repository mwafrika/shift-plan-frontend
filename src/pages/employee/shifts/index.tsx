import React,{useState} from 'react'
import Layout from '../../../components/layout';
import Button from '../../../components/button';
import { requestForm } from '../forms/AbsenceRequest';


const ShiftPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleFormPop =()=>{
        setIsOpen(!isOpen);
    }
    return (
        <Layout>
            {isOpen && requestForm({handleClose: toggleFormPop})}
            <div className='flex items-center justify-end'>
                <h1 className=' bg-primary text-white px-36 py-2'>10th October</h1>
            </div>
            <div className='flex flex-col justify-start ml-20'>
                <Button width='ml-0 flex bg-secondary text-white px-4 py-2 rounded-md'
                    type='click'
                    label='Request absence'
                    onClick={toggleFormPop}
                />
            </div>
            <div className='mt-2'>
            <table className='ml-20'>
                    <thead>
                        <tr className='bg-primary text-white'>
                            <th className='px-3 py-2'>Weeks</th>
                            <th className='px-3 py-2'>Mon</th>
                            <th className='px-3 py-2'>Tue</th>
                            <th className='px-3 py-2'>Wed</th>
                            <th className='px-3 py-2'>Thur</th>
                            <th className='px-3 py-2'>Fri</th>
                            <th className='px-3 py-2'>Sat</th>
                            <th className='px-3 py-2'>Sun</th>
                        </tr>
                    </thead>
                    <tbody className='text-sm'>
                        <tr>
                            <td className='px-3 py-2'>Week 1</td>
                            <td className='px-3 py-2'>
                                <p>Oct 2,2023</p>
                                <p>8:00am - 5:00pm</p>
                            </td>
                            <td className='px-3 py-2'>
                                <p>Oct 2,2023</p>
                                <p>8:00am - 5:00pm</p>
                            </td>
                            <td className='px-3 py-2'>
                                <p>Oct 2,2023</p>
                                <p>8:00am - 5:00pm</p>
                            </td>
                            <td className='px-3 py-2'>
                                <p>Oct 2,2023</p>
                                <p>8:00am - 5:00pm</p>
                            </td>
                            <td className='px-3 py-2'>
                                <p>Oct 2,2023</p>
                                <p>8:00am - 5:00pm</p>
                            </td>
                            <td className='px-3 py-2'>
                                <p>Oct 2,2023</p>
                                <p>8:00am - 5:00pm</p>
                            </td>      
                            <td className='px-3 py-2'>
                                <p>Oct 2,2023</p>
                                <p>8:00am - 5:00pm</p>
                            </td>                   
                        </tr>
                    
                        <tr>
                            <td className='px-3 py-2'>Week 2</td>
                            <td className='px-3 py-2'>
                                <p>Oct 2,2023</p>
                                <p>8:00am - 5:00pm</p>
                            </td>
                            <td className='px-3 py-2'>
                                <p>Oct 2,2023</p>
                                <p>8:00am - 5:00pm</p>
                            </td>
                            <td className='px-3 py-2'>
                                <p>Oct 2,2023</p>
                                <p>8:00am - 5:00pm</p>
                            </td>
                            <td className='px-3 py-2'>
                                <p>Oct 2,2023</p>
                                <p>8:00am - 5:00pm</p>
                            </td>
                            <td className='px-3 py-2'>
                                <p>Oct 2,2023</p>
                                <p>8:00am - 5:00pm</p>
                            </td>
                            <td className='px-3 py-2'>
                                <p>Oct 2,2023</p>
                                <p>8:00am - 5:00pm</p>
                            </td>      
                            <td className='px-3 py-2'>
                                <p>Oct 2,2023</p>
                                <p>8:00am - 5:00pm</p>
                            </td> 
                        </tr>
                    </tbody>
                </table>
            </div>
        </Layout>
    );
};

export default ShiftPage;