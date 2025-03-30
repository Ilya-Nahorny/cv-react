import React from "react";
import { HiOutlineExternalLink } from "react-icons/hi";

import { Link } from "react-router-dom";

const StackCard = ({ item }) => {
  return (
    <div className="rounded-lg py-12 px-4 bg-white border h-full shadow-sm border-gray-200 flex flex-col items-center justify-center gap-5 dark:border-darkBorder dark:bg-darkBgChild dark:text-darkTextMain">
      <img src={item.image} alt={item.urlName} className="max-h-8" />
      <span className="text-center text-gray-600 dark:text-darkTextMain">
        {item.desc}
      </span>
      <Link
        to={item.url}
        className="px-4 py-0.5 bg-gray-100 text-lightBg border rounded-md flex gap-1 items-center mt-auto dark:text-darkTextMain dark:bg-darkBgMain dark:border dark:border-darkBorder font-medium"
      >
        <HiOutlineExternalLink />
        {item.urlName}
      </Link>
    </div>
  );
};

export default StackCard;
