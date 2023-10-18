import React from 'react'
import Menu from '../menu';
import { Logout } from 'heroicons-react';
import { Router } from 'react-router-dom';

const Sidebar = () => {

    const logout = () => {
        return (
            <h2>You've been logged out</h2>
        )
    }
  return (
    <nav className="md:h-full z-50 sm:mt-[20px] mb-10 bg-primary-200 sm:bg-white flex flex-row h-[48px]">
      <div className="bg-primary-900 sm:bg-white w-[50px]"></div>
      <div className="flex-grow ml-[-50px] pr-4">
        {/* <Menu /> */}
      </div>

      <div className="flex md:hidden flex-row justify-between">
          <Logout
            width={25}
            className="cursor-pointer mr-5 mt-[-20px] text-primary-900"
            onClick={() => logout()}
          />
        </div>
    </nav>
  );
};

export default Sidebar;