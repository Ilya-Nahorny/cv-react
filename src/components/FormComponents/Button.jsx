import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, className, url, target = "_self" }) => {
  return (
    <Link
      to={url}
      className={`inline-flex items-center justify-center gap-2 border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50 dark:text-darkTextMain dark:hover:bg-darkBgChild dark:border-darkBorder text-[14px] text-gray-700 ${className}`}
    >
      {children}
    </Link>
  );
};

export default Button;
 