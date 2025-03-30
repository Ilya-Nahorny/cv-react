import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { NavLink } from "react-router-dom";

import { toggleMenu } from "../../../redux/toggleMenuSlice";

import Dropdown from "./Dropdown";
import menuData from "../data/menu";

const Menu = ({ isMainMenu }) => {
  const dispatch = useDispatch();
  const isExpanded = useSelector((state) => state.menu.isActive);

  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const handleMenuToggle = () => {
    dispatch(toggleMenu());
  };

  const handleDropdownToggle = (index) => {
    setOpenDropdownIndex((prevIndex) =>
      prevIndex === index ? null : index
    );
  };

  return (
    <div
      className={`shadow-lg -translate-y-10 w-full bg-white dark:bg-darkBgMain duration-300 flex items-center px-5 relative z-[38] ${
        isExpanded ? "py-4 pb-6 mt-14 rounded-lg" : "h-5"
      } rounded-br-lg rounded-bl-lg`}
    >
      {isMainMenu && (
        <div
          className={`${
            isExpanded ? "top-[99.9%]" : "top-[85%]"
          } rounded-lg bg-lightBg dark:bg-darkBgChild duration-300 flex items-center justify-center cursor-pointer w-12 h-7 text-white dark:text-darkTextMain absolute top-[85%] left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
          onClick={handleMenuToggle}
        >
          {isExpanded ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
      )}
      <div
        className={`${
          !isExpanded && "hidden"
        } flex flex-col md:flex-row md:items-center gap-4 w-full flex-wrap`}
      >
        {menuData.map((item, index) =>
          item.type === "dropdown" ? (
            <Dropdown
              key={index}
              data={item}
              isOpen={openDropdownIndex === index}
              onToggle={() => handleDropdownToggle(index)}
            />
          ) : (
            <NavLink
              key={item.label}
              to={item.link}
              className={({ isActive }) =>
                `flex items-center truncate gap-2 border px-4 py-2 rounded-md text-[14px] ${
                  isActive
                    ? "active hover:opacity-80 dark:bg-darkBgChild"
                    : "hover:bg-gray-50 dark:hover:bg-darkBgMain"
                } dark:border-darkBorder dark:text-darkTextMain`
              }
            >
              {item.icon} {item.label}
            </NavLink>
          )
        )}
      </div>
    </div>
  );
};

export default Menu;
