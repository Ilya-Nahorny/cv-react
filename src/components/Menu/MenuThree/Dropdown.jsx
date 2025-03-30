import React, { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

const Dropdown = ({ data, isOpen, onToggle, isMobile }) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onToggle(false); // Menü dışına tıklanırsa kapat
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onToggle]);

  return (
    <div
      ref={dropdownRef}
      className={`relative ${isMobile ? 'w-full' : 'inline-block'}  `}
    >
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-all duration-300
        dark:text-darkTextMain dark:hover:bg-darkBgChild"
      >
        <span className="flex items-center lowercase">
          {data.label}
        </span>
        <FiChevronDown
          className={`ml-2 transition-transform duration-300 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`${
              isMobile ? "w-full mt-2" : "absolute left-0 mt-1"
            } bg-white dark:bg-gray-800 rounded-lg shadow-lg z-[38] overflow-hidden border border-gray-200 dark:border-gray-700 whitespace-nowrap`}
          >
            {data.items.map((item, index) => (
              <NavLink
                key={index}
                to={item.link}
                className={({ isActive }) =>
                  `flex items-center w-full px-4 py-3 text-sm lowercase ${
                    isActive
                      ? "dark:bg-darkBgChild dark:text-darkTextWhite text-gray-700"
                      : "text-gray-700 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-darkBgChild dark:hover:text-white"
                  } transition-colors duration-200`
                }
                onClick={() => isMobile && onToggle()}
              >
                {item.icon && <span className="mr-3">{item.icon}</span>}
                {item.label}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;