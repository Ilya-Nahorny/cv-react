// React and external libraries
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { NavLink } from "react-router-dom";

// Redux actions
import { toggleSideMenu } from "../../../redux/toggleMenuSlice";

// Components
import SideMenuDropdown from "./SideMenuDropdown";

// Data
import menuData from "../data/menu";

const SideMenu = () => {
  const dispatch = useDispatch();
  const isExpanded = useSelector((state) => state.menu.isSideMenuActive);

  const handleMenuToggle = () => {
    dispatch(toggleSideMenu());
  };

  return (
    <div
      className={`fixed top-1/2 -left-[1px] -translate-y-1/2 bg-white shadow border border-gray-300 dark:bg-darkBgMain dark:border-darkBorder z-[40] rounded-r-lg overflow-hidden flex flex-col items-center ${
        isExpanded ? "w-48" : "w-12"
      } duration-300`}
    >
      <div className="flex flex-col items-center justify-center w-full sidemenu">
        <div
          className={`cursor-pointer w-12 h-10 text-gray-700 hover:bg-gray-50 flex items-center justify-center dark:text-darkTextMain dark:hover:bg-darkBgChild ${
            isExpanded && "w-full"
          }`}
          onClick={handleMenuToggle}
        >
          {isExpanded ? (
            <IoIosArrowBack size={24} />
          ) : (
            <IoIosArrowForward size={24} />
          )}
        </div>
        {menuData.map((item, index) =>
          item.type === "dropdown" ? (
            <SideMenuDropdown
              key={index}
              data={item}
              isExpanded={isExpanded}
              handleMenuToggle={handleMenuToggle}
              className={`flex items-center justify-center w-12 ${
                isExpanded && "w-full flex-col"
              }`}
            />
          ) : (
            <NavLink
              key={index}
              to={item.link}
              className={({ isActive }) =>
                `flex items-center justify-center w-12 h-10 text-gray-700 text-sm gap-2 ${
                  isActive
                    ? "active hover:opacity-80 dark:bg-darkBgChild"
                    : "hover:bg-gray-50 dark:hover:bg-darkBgMain"
                } ${
                  isExpanded ? "w-full px-5 !justify-start" : ""
                } dark:text-darkTextMain dark:border-darkBorder`
              }
            >
              {item.icon}
              {isExpanded && <span className="truncate">{item.label}</span>}
            </NavLink>
          )
        )}
      </div>
    </div>
  );
};

export default SideMenu;
