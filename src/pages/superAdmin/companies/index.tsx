import React, { useEffect, useState } from 'react';
import Layout from '../../../components/layout';
import { FaUser } from 'react-icons/fa';
import Filter from '../../../components/filter';
import Pagination from '../../../components/pagination';
import CompanyList from './CompanyList';

const CompaniesPage = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [deleted, setDeleted] = useState(false)

  const toggleInformation = () => {
    setIsOpened(!isOpened);
  };
  const toggleDelete = () => {
    setDeleted(true)
  };

  const popUpDelete =()=> (
    <div className='fixed top-0 left-0 w-screen h-screen bg-primary/50 flex items-center justify-center z-10'>
        <div className='bg-white w-1/3 h-2/5 rounded-md'> 
            <div className='text-right p-3'>
                <button
                className=' text-black text-lg font-bold'
                onClick={()=>setDeleted(false)}
                >
                X
                </button>
            </div>
            <div className='text-center'>
                <p className='font-bold p-4'>Delete Company?</p>
                <p className='text-sm'>Are you sure you want to delete ABC GROUP ? </p>
                <p className='text-sm'>this action can’t be undone</p>
            </div>
            <div className='flex item-center justify-center gap-4 mt-10'>
                <button 
                    className='px-5 bg-secondary text-white rounded-md'
                    onClick={()=>setDeleted(false)}
                >
                    Cancel
                </button>
                <button className='px-5 bg-[#E50303] text-white rounded-md'>
                    Delete
                </button>
            </div>
        </div>
    </div>
  );

  const popUps = () => (
    <div className='fixed top-0 left-0 w-screen h-screen bg-primary/50 flex justify-center items-center z-10'>
        <div className='bg-white w-[50%] h-[80%] rounded-md'>
            <div className='text-right p-3'>
                <button
                className=' text-black text-lg font-bold '
                onClick={toggleInformation}
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
                    <button className='px-4 bg-[#E50303] text-white rounded-md'>
                    Deny
                    </button>
                </div>
            </div>
        
        </div>
    </div>
  );
  return (
    <Layout user="Super Admin" username="Real Okolongo">
      {isOpened && popUps()}
      {deleted && popUpDelete()}
      <div className='mt-10'>
      <div className='mb-4'>
        <Filter label1={"All"} label2={"Approved"} label3={"pending"}  total={0} />
      </div>
      <div>
        <CompanyList toggleInformation={toggleInformation} toggleDelete={toggleDelete}/>
      </div>
      
      <div className='fixed bottom-0 right-[20rem]'>
        <Pagination
          pagesCount={10}
          currentPage={1}
          onPageChange={() => {}}
        />
      </div>
      </div>
    </Layout>
  );
};

export default CompaniesPage;
