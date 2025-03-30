import React from "react";
import { Link } from "react-router-dom";

const ProjectCardThree = ({ item, index }) => {
  return (
    <div
      className="shadow-lg rounded-lg overflow-hidden bg-white dark:bg-darkBgMain dark:border-darkBorder"
      key={index}
    >
      <Link to={`/project-detail-two/${item.slug}`}>
        <div className="overflow-hidden w-full h-[365px]">
          <img
            className="hover:scale-125 hover:-rotate-6 duration-500 w-full h-full"
            src={item.imageTabMenu}
            alt={item.title}
          />
        </div>
      </Link>
      <div className="flex items-center p-4 py-6 bg-white dark:bg-darkBgMain">
        <div className="flex flex-col pr-10">
          <Link
            to={`/project-detail-two/${item.slug}`}
            className="text-lg font-semibold truncate line-clamp-1 mb-1 dark:text-darkTextMain"
          >
            {item.title}
          </Link>
          <span className="text-gray-500 text-sm line-clamp-1 dark:text-darkTextChild">
            {item.descTabMenu}
          </span>
        </div>
        <div
          className={`ml-auto text-sm font-semibold bg-[#ececec] dark:bg-darkBgChild dark:text-darkTextMain dark:border dark:border-darkBorder text-gray-800 py-2 px-5 rounded-full ${
            item.date ? "" : "px-8"
          }`}
        >
          {item.date ? new Date(item.date).getFullYear() : "-"}
        </div>
      </div>
    </div>
  );
};

export default ProjectCardThree;
