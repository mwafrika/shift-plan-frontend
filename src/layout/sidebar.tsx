import React from "react";
import { Home, Cog, OfficeBuilding } from "heroicons-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className="h-screen bg-primary">
      <img src="/whiteLogo.png" alt="Logo" />
      <div className="flex flex-col justify-between h-[88%] px-4 py-6">
        <div className="flex flex-col gap-6 text-white/90 font-sans bg-secondary/20 p-4 rounded-lg">
          <Link to={"/"} className="flex flex-row items-center gap-2">
            <Home width={20} />
            <p>Home</p>
          </Link>
          <Link to={"/companies"} className="flex flex-row items-center gap-2">
            <OfficeBuilding width={22} />
            <p>Companies</p>
          </Link>
          <Link
            to={"/departments"}
            className="flex flex-row items-center gap-2"
          >
            <OfficeBuilding width={22} />
            <p>Departments</p>
          </Link>
          <Link to={"/shifts"} className="flex flex-row items-center gap-2">
            <OfficeBuilding width={22} />
            <p>Shifts</p>
          </Link>
          <Link to={"/absences"} className="flex flex-row items-center gap-2">
            <OfficeBuilding width={22} />
            <p>Absences</p>
          </Link>
          <Link to={"/settings"} className="flex flex-row items-center gap-2">
            <Cog width={20} />
            <p>Settings</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
