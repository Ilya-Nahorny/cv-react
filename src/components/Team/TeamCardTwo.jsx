import React from "react";
import { Link } from "react-router-dom";

const TeamCardTwo = ({ item, index }) => {
  return (
    <div key={index} className="bg-white rounded-lg group dark:bg-darkBgMain">
      <div className="flex flex-col md:flex-row p-6 items-center md:text-start">
        <img
          className="w-32 h-32 rounded-full border-2 border-gray-400 p-1"
          src={item.image}
        />
        <div className="ml-4 text-center md:text-start">
          <h2 className="text-gray-900 font-bold text-xl mb-1 dark:text-darkTextMain">
            {item.name}
          </h2>
          <p className="text-gray-600 text-sm mb-2 dark:text-darkTextChild">
            {item.job}
          </p>
          <p className="text-gray-700 text-sm dark:text-darkTextChild">
            {item.desc}
          </p>
          <div className="flex justify-center md:justify-start mt-4 gap-1.5">
            {item.social.map((item, index) => {
              return (
                <Link
                  to={`${item.url}`}
                  key={index}
                  className="w-8 h-8 border border-gray-300 rounded-md bg-gray-100 hover:bg-gray-50 text-lg text-gray-400 flex items-center justify-center dark:bg-darkBgChild dark:border-darkBorder dark:text-darkTextMain dark:hover:bg-darkBgMain"
                >
                  {item.icon}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCardTwo;
