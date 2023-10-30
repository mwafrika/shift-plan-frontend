import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  menusAdmin,
  menusEmployee,
  menusManager,
  menusSuperAdmin,
} from "../utils/menus";

const Sidebar = () => {
  const location = useLocation();
  const userInfo = JSON.parse(localStorage.getItem("user") as any)?.user;
  const [user, setUser] = useState(userInfo || {});

  console.log(userInfo, "typeof userInfo?.token", user);

  useEffect(() => {
    setUser(userInfo);
  }, []);

  const roleToLinks = {
    admin: menusAdmin,
    manager: menusManager,
    employee: menusEmployee,
    superAdmin: menusSuperAdmin,
  };

  const links = roleToLinks[user?.role?.name] || [];

  return (
    <nav className="bg-primary min-h-screen">
      <img src="/whiteLogo.png" alt="Logo" />
      <div className="flex flex-col h-full justify-between px-4 py-6">
        <div className="flex flex-col gap-6 text-white/90 font-sans bg-secondary/20 p-4 rounded-lg">
          {links.map((menuItem, index) => (
            <Link
              to={menuItem.link}
              key={index}
              className={`flex flex-row items-center gap-2 p-2 rounded-lg ${
                location.pathname === menuItem.link
                  ? "bg-secondary/30 text-white/100"
                  : ""
              }`}
            >
              {menuItem.icon}
              <p>{menuItem.value}</p>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
