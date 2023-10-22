import React from "react";
import EditForm from "./EditForm";

export const editSettings = ({handleClose}) => {
    return (
        <>
        <div className='fixed top-0 left-0 w-screen h-screen bg-primary/50 flex items-center justify-center'>
            <div className='bg-white w-1/3 h-auto p-3 rounded-md'>
            <div className='flex  justify-between items-center pb-3'>
            <p className='font-bold'>Edit Employee</p>
                <button
                    className=' text-black text-lg font-bold'
                    onClick={handleClose}
                >
                X
                </button>
            </div>
                <EditForm closeBtn={handleClose}/>
            </div>
        </div>
        </>
    )
}