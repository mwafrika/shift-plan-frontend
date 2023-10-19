import React from 'react'
import { UserCircle, Bell } from 'heroicons-react';


const Topbar = () => {
  return (
    <nav className="bg-background h-[60px] border-[1px] border-secondary/40 py-2 px-6">
          <div className='flex flex-row justify-between items-center'>
            <div className='flex flex-row items-center justify-center gap-2'>
               <UserCircle size={36} className="cursor-pointer text-primary"/>
                <div className="gap-1">
                  <h4 className="text-[14px] text-primary font-bold font-sans">Real Okolongo</h4>
                  <p className="text-[11px] text-primary">Super admin</p>
                </div>
            </div>

      <div>
          <Bell
            width={25}
            className="cursor-pointer text-primary"
          />
        </div>
          </div>
    </nav>
  );
};

export default Topbar;