import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const SideMenuDropdownTwo = ({
  data,
  className,
  isExpanded,
  handleMenuToggle,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isExpanded) {
      setIsOpen(false);
    }
  }, [isExpanded]);

  const handleDropdownToggle = () => {
    if (!isExpanded) {
      handleMenuToggle();
    }
    setIsOpen(!isOpen);
  };

  return (
    <div className={`relative${className}`}>
      <button
        onClick={handleDropdownToggle}
        className={`flex items-center w-full p-2 rounded-lg text-sm ${
          isOpen
            ? "bg-gray-100 text-gray-700 dark:bg-darkBgChild dark:text-darkTextWhite"
            : "text-gray-700 hover:bg-gray-100 dark:text-darkTextChild dark:hover:bg-darkBgMain"
        } transition-colors`}
      >
        <span className="mr-3">{data.icon}</span>
        <AnimatePresence>
          {isExpanded && (
            <motion.span
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              className="whitespace-nowrap overflow-hidden"
            >
              {data.label}
            </motion.span>
          )}
        </AnimatePresence>
        {isExpanded && (
          <svg
            className={`w-4 h-4 transform transition-transform ml-auto ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <ul className="pl-2 mt-2">
              {data.items.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <NavLink
                    to={item.link}
                    className={({ isActive }) =>
                      `flex items-center p-2 rounded-lg text-sm  ${
                        isActive
                          ? "bg-gray-100 text-gray-700 dark:bg-darkBgChild dark:text-darkTextWhite"
                          : "text-gray-700 hover:bg-gray-100 dark:text-darkTextChild dark:hover:bg-darkBgMain"
                      } transition-colors`
                    }
                  >
                    <span className="mr-2 w-5 h-5 flex items-center justify-center">{item.icon}</span>
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.span
                          initial={{ opacity: 0, width: 0 }}
                          animate={{ opacity: 1, width: "auto" }}
                          exit={{ opacity: 0, width: 0 }}
                          className="whitespace-nowrap overflow-hidden"
                        >
                          {item.label}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SideMenuDropdownTwo;