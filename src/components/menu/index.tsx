import React from 'react';
import { useLocation } from 'react-router-dom';
import MenuItem from './item';
import { menusAdmin } from '../../routes/admin.routes';
import { menusSuperAdmin } from '../../routes/superAdmin.routes';
import { menusManager } from '../../routes/manager.routes';
import { menusEmployee } from '../../routes/employee.routes';

const Menu = () => {
  const location = useLocation();
  const path = location.pathname;
  let userRole = 'superAdmin';
  let menu;
  switch (userRole) {
    case 'superAdmin':
      menu = menusSuperAdmin;
      break;
    case 'admin':
      menu = menusAdmin;
      break;
    case 'manager':
      menu = menusManager;
      break;
    case 'employee':
      menu = menusEmployee;
      break;
    default:
      menu = [];
  }

  return (
    <aside
      className="sm:shadow-md overflow-y-scroll w-full  lg:mr-10 md:my-10 md:mr-5 tablet:mx-4 rounded-[15px] h-5/6 z-30 transition-transform ease-linear delay-300 sm:fixed sm:bg-white sm:bg-opacity-99 mt-[-15px] sm:w-[100%]"
    >
      <ul className="list-reset pr-0 py-6 pt-10">
        {menu.map((menu: any, index: number) => {
          return (
            <MenuItem
              {...menu}
              index={index}
              active={
                menu.link === path
                  ? true
                  : false
              }
              path={path}
              key={index}
            />
          );
        })}
      </ul>
    </aside>
  );
};

export default Menu;