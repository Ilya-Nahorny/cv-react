import React from "react";
import { Link } from "react-router-dom";

const TeamCard = ({ item, index }) => {
  return (
    <div key={index} className="bg-white rounded-lg dark:bg-darkBgMain">
      <div className="items-center sm:flex group overflow-hidden">
        <div className="overflow-hidden group-hover:opacity-80 transition-opacity">
          <img
            className="transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-in-out object-cover w-full md:w-[300px] h-[230px] rounded-lg sm:rounded-none sm:rounded-l-lg"
            src={item.image}
            alt="Team Images"
          />
        </div>
        <div className="p-5">
          <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-darkTextMain">
            {item.name}
          </h3>
          <span className="text-gray-500 dark:text-darkTextChild">
            {item.job}
          </span>
          <p className="mt-3 mb-4 font-light text-gray-500 line-clamp-2 dark:text-darkTextChild">
            {item.desc}
          </p>
          <ul className="flex space-x-4 sm:mt-0">
            {item.social.map((item, index) => (
              <li
                key={index}
                className="hover:text-gray-500 duration-500 dark:text-darkTextMain"
              >
                <Link to={`${item.url}`}>
                  {item.icon}
                </Link>
              </li>
            ))}
          </ul> 
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
