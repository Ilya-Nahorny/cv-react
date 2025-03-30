import React, { useState } from "react";
import { useSelector } from "react-redux"; 
import { NavLink } from "react-router-dom";

import Dropdown from "./DropdownTwo";
import menuData from "../data/menu";

const MenuTwo = () => {  
  const theme = useSelector((state) => state.theme.theme);

  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
 
  
  const handleDropdownToggle = (index) => {
    setOpenDropdownIndex((prevIndex) =>
      prevIndex === index ? null : index
    );
  };

  return (
    <div
      className={`w-full py-8 bg-white dark:bg-darkBgMain duration-300 flex items-center px-5 relative z-[38] rounded-lg shadow-lg`}
    >
      
      <div
        className="flex flex-col md:flex-row md:items-center gap-4 w-full flex-wrap justify-center"
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
                `flex items-center truncate gap-2 px-4 py-2 rounded-full text-[14px] font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-gray-100/70 dark:bg-darkBgChild text-lightHref dark:text-darkTextWhite shadow-md"
                    : "text-lightTextMain dark:text-darkTextMain hover:bg-lightBgChild dark:hover:bg-darkBgMain"
                }`
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

export default MenuTwo;
