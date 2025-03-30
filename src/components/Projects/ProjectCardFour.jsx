import React from "react";
import { FiCalendar } from "react-icons/fi";
import { Link } from "react-router-dom";

const ProjectCardFour = ({ item }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl dark:bg-darkBgMain dark:border-darkBorder">
      <div className="bg-white dark:bg-darkBgMain px-4 py-2">
        <Link to={`/project-detail/${item.slug}`}>
          <h2 className="text-lg font-semibold duration-300 dark:text-darkTextMain truncate">
            {item.title}
          </h2> 
        </Link>
      </div>
      
      <div className="w-full h-48 overflow-hidden">
        <img
          src={item.imageTabMenu}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-6 pb-0">
        <p className="text-gray-600 mb-4 line-clamp-3 dark:text-darkTextChild">
          {item.descTabMenu}
        </p>
      </div>
      
      <div className="px-6 pb-6 flex flex-col sm:flex-row justify-between items-center">
        <Link
          to={`/project-detail/${item.slug}`}
          className="transition-colors duration-300 font-semibold flex items-center text-gray-500 dark:text-darkTextChild border-b border-gray-300 dark:border-darkBorder"
        >
          View Project 
        </Link>
        <div className="flex items-center gap-1 text-gray-500 dark:text-darkTextChild">
          <FiCalendar/>
          <span className="text-sm ">
            {item.date}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardFour;


