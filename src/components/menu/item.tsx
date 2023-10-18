import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {
  index: number;
  value: string;
  link: string;
  icon: React.ReactNode;
  active: boolean;
  path: string;
};

const Item: React.FC<Props> = (menu: Props) => {
  const navigate = useNavigate();

  return (
    <div>
      <li key={menu.index} >
        <span
          className="text-primary-400 sm:text-blue p-3 cursor-pointer"
          onClick={() => {
            navigate(menu.link);
          }}
        >
          {menu.icon}
        </span>
        <div
          className={`flex-grow ${
            menu.active ? 'bg-primary-300 sm:bg-blue sm:bg-opacity-50' : ''
          } rounded-[15px] cursor-pointer`}
        >
          <div
            className="p-3 flex flex-row justify-between text-primary-900 sm:text-blue sm:font-bold font-[16px] ml-1 active"
            onClick={() => {
              navigate(menu.link);
            }}
          >
            <div>{menu.value}</div>
          </div>
        </div>
      </li>
    </div>
  );
};

export default Item;