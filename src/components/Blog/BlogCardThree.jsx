import React from "react";
import { CiCalendar } from "react-icons/ci";
import { Link } from "react-router-dom";

const BlogCardThree = ({ item }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl dark:bg-darkBgMain">
      <div className="bg-white dark:bg-darkBgMain px-4 py-2">
        <Link to={`/blog-detail/${item.slug}`}>
          <h2 className="text-lg font-semibold duration-300 dark:text-darkTextMain truncate">
            {item.title}
          </h2>
        </Link>
      </div>

      <div className="w-full h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-6">
        <p className="text-gray-600 mb-4 line-clamp-3 dark:text-darkTextChild">
          {item.desc}
        </p>
      </div>

      <div className="px-6 pb-6 flex flex-col sm:flex-row justify-between items-center">
        <Link
          to={`/blog-detail/${item.slug}`}
          className="text-gray-600 dark:text-darkTextMain hover:text-primary-dark transition-colors duration-300 font-semibold flex items-center mb-2 sm:mb-0 border-b border-gray-300 dark:border-darkBorder"
        >
          Read More 
        </Link>
        <div className="flex items-center text-gray-500 dark:text-darkTextChild">
        <CiCalendar/> 
          <span className="text-sm ">
            {item.date}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogCardThree;
