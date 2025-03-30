import React from "react";

const ContactButton = ({ children, className, onClick, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex items-center max-w-max gap-2 border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50 text-[14px] text-gray-700 dark:border-darkBorder dark:text-darkTextMain dark:hover:bg-darkBgChild ${className}`}
    >
      {children}
    </button>
  );
};

export default ContactButton;
 