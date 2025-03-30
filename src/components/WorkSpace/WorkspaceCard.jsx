import React from "react";
import { Link } from "react-router-dom";

const WorkspaceCard = ({ item, key }) => {
  return (
    <div className="inline-block border hover:border-gray-200 bg-gray-200/35 rounded-lg w-full dark:bg-darkBgMain dark:border-darkBorder">
      <Link to={item.link} key={key}>
        <div className="flex items-center justify-center w-full h-56 group">
          <img
            src={item.imageUrl}
            alt={item.name}
            className="group-hover:p-2 duration-500 h-36"
          />
        </div>
      </Link>

      <div className="p-4 py-4 bg-gray-100 border flex items-center justify-between rounded-b-lg dark:bg-darkBgChild dark:border-darkBorder">
        <Link
          to={item.link}
          className="text-sm text-gray-700 font-semibold pr-4 truncate dark:text-darkTextMain"
        >
          {item.name}
        </Link>
        <p className="text-sm text-gray-500 dark:text-darkTextMain">
          {item.price}
        </p> 
      </div>
    </div>
  );
};

export default WorkspaceCard;
