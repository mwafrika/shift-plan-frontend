import React from "react";
import { UserCircle, Bell } from "heroicons-react";

const Topbar = ({ user, name }) => {
  return (
    <nav className="bg-background h-[8%] border-[1px] border-secondary/40 py-2 px-6">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center justify-center gap-2">
          <UserCircle size={36} className="cursor-pointer text-primary" />
          <div className="gap-1">
            <h4 className="text-[12px] text-primary font-bold font-sans">
              {user}
            </h4>
            <p className="text-[10px] text-primary">{name}</p>
          </div>
        </div>

        <div>
          <Bell width={24} className="cursor-pointer text-primary" />
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
