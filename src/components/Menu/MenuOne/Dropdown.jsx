import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ data, isOpen, onToggle }) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onToggle(false); // Menü dışına tıklanırsa menüyü kapat
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
        className="flex items-center w-full truncate gap-2 border border-gray-300 px-4 py-2 rounded-md hover:opacity-80 text-[14px] text-gray-700 dark:border-darkBorder dark:text-darkTextMain"
      >
        <div className="flex items-center gap-2">
          {data.icon} {data.label}
        </div>
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
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-full md:w-60 bg-white border border-gray-300 dark:bg-darkBgChild dark:border-darkBorder rounded-md shadow-lg max-h-[180px] overflow-y-auto z-50">
          <ul className="py-1">
            {data.items.map((item, index) => (
              <li key={index} onClick={onToggle}>
                <Link
                  to={item.link}
                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:bg-darkBgChild dark:text-darkTextMain dark:hover:bg-darkBgMain"
                >
                  <span className="text-lg">{item.icon}</span>{" "}
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;