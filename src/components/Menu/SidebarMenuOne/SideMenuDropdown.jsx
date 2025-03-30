import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SideMenuDropdown = ({
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
    <div className={`relative ${className}`}>
      <button
        onClick={handleDropdownToggle}
        className="flex items-center justify-center w-full rounded-md hover:opacity-80 dark:text-darkTextMain text-[14px] text-gray-700 h-10 px-5"
      >
        <div className="flex items-center gap-2">
          {data.icon}
          {isExpanded && <div>{data.label}</div>}
        </div>
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

      <div
        className={`overflow-y-auto transition-all duration-300 w-full ${
          isOpen ? "max-h-60" : "max-h-0"
        }`}
      >
        <ul className="bg-gray-200 w-full">
          {data.items.map((item, index) => (
            <li key={index}>
              <Link
                to={item.link}
                className="flex items-center gap-2 px-4 py-3 text-xs text-gray-700 hover:bg-gray-300 dark:text-darkTextChild dark:bg-darkBgChild dark:hover:bg-darkBgMain"
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideMenuDropdown;