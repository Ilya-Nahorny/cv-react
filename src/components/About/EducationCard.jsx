import React from "react";

const EducationCard = ({ item }) => {
  return (
    <div className="shadow-lg bg-white p-4 rounded-lg drop-shadow-sm flex flex-col gap-2 border border-gray-200 h-full dark:bg-darkBgMain dark:border-darkBorder">
      <div className="w-10 h-10 mb-1">
        <img
          className="w-full h-full rounded-lg"
          src={item.image}
          alt={item.department}
        />
      </div>
      <span className="text-sm text-gray-400 dark:text-darkTextChild">
        {item.date}
      </span>
      <h3 className="font-semibold dark:text-darkTextMain">
        {item.department}
      </h3>
      <p className="text-sm text-gray-400 mt-auto dark:text-darkTextChild">
        {item.school}
      </p>
    </div>
  );
};

export default EducationCard;
