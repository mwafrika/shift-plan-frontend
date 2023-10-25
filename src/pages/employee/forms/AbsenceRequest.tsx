import React from 'react';
import AbsenceForm from './AbsenceForm';


export const requestForm = ({handleClose}) => {

  return (
    <>
    <div className="fixed top-0 left-0 bg-primary/50 h-full w-full flex justify-center items-center">
      <div className="bg-white rounded-md w-1/3 h-auto p-6">
        <div className='flex items-center justify-between font-bold'>
          <p>Request for absence</p>
          <button
          onClick={handleClose}
            className=' text-black text-lg'
          >
            X
          </button>
        </div>
        <div>
         <AbsenceForm />
        </div>
      </div>
    </div>
    </>
    
  )
}