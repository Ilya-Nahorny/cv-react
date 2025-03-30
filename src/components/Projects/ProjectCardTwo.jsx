import React from "react";
import { Link } from "react-router-dom";

const ProjectCardTwo = ({ item, index }) => {
  return (
    <div
      key={index}
      className="bg-white shadow-lg rounded-lg grid grid-cols-1 lg:grid-cols-2 overflow-hidden dark:bg-darkBgMain"
    >
      <Link to={`/project-detail/${item.slug}`} className="overflow-hidden">
        <img
          src={item.imageTabMenu}
          className="w-full h-[400px] object-cover hover:scale-125 hover:-rotate-6 duration-500"
          alt={item.title}
        />
      </Link>
      <div className="p-6 flex flex-col justify-center">
        <Link
          to={`/project-detail/${item.slug}`}
          className="text-2xl font-semibold mb-3 dark:text-darkTextMain"
        >
          {item.title}
        </Link>
        <p className="text-gray-700 text-base line-clamp-2 dark:text-darkTextChild">
          {item.descTabMenu}
        </p>
      </div>
    </div>
  );
};

export default ProjectCardTwo;
