import React, {useState} from 'react';
import {FaUser} from 'react-icons/fa';
// import { User } from 'heroicons-react';


function ShowCompanyInfo() {
    const [isOpened, setIsOpened] = useState(false);
  
    const toggleInformation = () => {
      setIsOpened(!isOpened);
    };

  return (
    <div>
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
    </div>
    
  )
}

export default ShowCompanyInfo