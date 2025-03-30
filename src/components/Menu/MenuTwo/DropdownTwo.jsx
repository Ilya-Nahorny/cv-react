import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const DropdownTwo = ({ data, isOpen, onToggle }) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onToggle(false); // Menü dışına tıklanınca kapat
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
    <div ref={dropdownRef} className="relative inline-block">
      <button
        onClick={onToggle}
        className={`flex items-center gap-2 px-4 py-2 rounded-full text-[14px] font-medium transition-all duration-200 ${
          isOpen
            ? "bg-gray-100 text-lightHref dark:bg-darkBgChild dark:text-darkTextWhite shadow-md"
            : "text-lightTextMain dark:text-darkTextMain hover:bg-lightBgChild dark:hover:bg-darkBgMain"
        }`}
      >
        {data.icon}
        {data.label}
        <IoIosArrowDown
          className={`ml-1 transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute left-0 md:right-0 mt-2 bg-gray-100 dark:bg-darkBgChild rounded-lg shadow-lg z-50 min-w-full md:min-w-max overflow-hidden">
          {data.items.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="flex items-center gap-2 px-4 py-2 text-sm text-lightTextMain dark:text-darkTextMain hover:bg-gray-300 dark:hover:bg-darkBgMain transition-colors duration-200"
              onClick={onToggle}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownTwo;