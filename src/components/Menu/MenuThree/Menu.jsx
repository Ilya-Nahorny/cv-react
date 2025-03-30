import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { Link } from "react-router-dom";
import Dropdown from "../MenuThree/Dropdown"; 
import menuData from "../data/menu";

const ModernMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleDropdownToggle = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <nav className={`border-t border-gray-200 dark:bg-darkBgMain dark:border-gray-700 rounded-b-lg md:py-4 z-[38]`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="hidden md:block">
            <div className="ml-10 flex items-center justify-start flex-wrap">
              {menuData.map((item, index) => (
                item.type === "dropdown" ? (
                  <Dropdown
                    key={index}
                    data={item}
                    isOpen={openDropdown === index}
                    onToggle={() => handleDropdownToggle(index)}
                    isMobile={false}
                  />
                ) : (
                  <Link
                    key={index}
                    to={item.link}
                    className="text-gray-600 dark:text-darkTextMain hover:bg-gray-100 dark:hover:text-darkTextMain dark:hover:bg-darkBgChild px-3 py-2 rounded-md text-sm font-medium lowercase"
                  >
                    {item.label}
                  </Link>
                )
              ))}
            </div>
          </div>
          <div className="w-full md:hidden">
            <button
              onClick={toggleMenu}
              className="w-full flex items-center justify-center h-16 rounded-b-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <motion.div
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? <FiChevronUp size={24} /> : <FiChevronDown size={24} />}
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuData.map((item, index) => (
              item.type === "dropdown" ? (
                <Dropdown
                  key={index}
                  data={item}
                  isOpen={openDropdown === index}
                  onToggle={() => handleDropdownToggle(index)}
                  isMobile={true}
                />
              ) : (
                <Link
                  key={index}
                  to={item.link}
                  className="text-gray-600 dark:text-darkTextWhite hover:bg-gray-100 dark:hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium lowercase"
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default ModernMenu;
