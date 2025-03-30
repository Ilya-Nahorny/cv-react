import React from "react";
import { Link } from "react-router-dom";
import { FiGithub } from "react-icons/fi";
import { IoIosLink } from "react-icons/io";

const ProjectCard = ({ item, key }) => {
  return (
    <div
      key={key}
      className="shadow rounded-2xl overflow-hidden w-full border border-gray-200 dark:border-darkBorder"
    >
      <div className="">
        <Link to={`/project-detail-two/${item.slug}`}>
          <div className="w-full h-[276px]">
            <img
              src={item.imageTabMenu}
              className="w-full h-[276px] object-cover md:object-cover"
              alt={item.title}
            />
          </div>
        </Link>
      </div>
      <div className="p-4 flex flex-col h-[176px]">
        <Link
          to={`/project-detail-two/${item.slug}`}
          className="text-lg font-semibold mb-2 dark:text-darkTextMain"
        >
          {item.title}
        </Link>
        <p className="text-gray-500 text-sm dark:text-darkTextChild line-clamp-2">
          {item.descTabMenu}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <div className="flex flex-wrap gap-2 ">
            {item.tags.map((item, index) => {
              return (
                <span
                  key={index}
                  className="bg-[#ececec] text-[#333333] border  font-semibold rounded-xl text-[12px] px-3 py-0.5 capitalize dark:border-darkBorder dark:bg-darkBgChild dark:text-darkTextMain"
                >
                  {item}
                </span>
              );
            })}
          </div>
          <div className="inline-flex gap-2">
            <Link
              to={item.githubUrl}
              className="rounded hover:bg-gray-50 border p-2 cursor-pointer dark:border-darkBorder dark:text-darkTextMain dark:hover:bg-darkBgChild"
            >
              <FiGithub />
            </Link>
            <Link
              to={item.url}
              className="rounded hover:bg-gray-50 border p-2 cursor-pointer dark:border-darkBorder dark:text-darkTextMain dark:hover:bg-darkBgChild"
            >
              <IoIosLink />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
