import React from 'react';
import { NavDropDownData } from '../constants/index';

const NavDropDownMenu = () => {
  return (
    <div className="bg-white border rounded-2xl py-2 px-5 absolute top-14 right-0 w-full max-sm:w-[200px] ">
      {NavDropDownData.map((item, index) => (
        <div key={index} className="">
          <div className="my-5 flex space-x-3 items-center cursor-pointer  hover:text-blue-500 ">
            {item.icon && <item.icon className="w-5 h-5 text-gray-200  " />}
            <span className="text-gray-500 hover:text-blue-500 text-sm font-medium">
              {item.heading}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NavDropDownMenu;
