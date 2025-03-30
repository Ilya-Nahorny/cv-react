import React from "react";

const ExperienceCard = ({ item }) => {
  return (
    <div className="shadow-lg bg-white p-4 rounded-lg border border-gray-200 flex gap-4 h-full dark:bg-darkBgMain dark:border-darkBorder">
      <div className="h-12 min-w-12">
        <img src={item.image} alt="" className="w-full h-full rounded-lg" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <div>
            <h3 className="font-bold dark:text-darkTextMain">{item.title}</h3>
            <span className="text-sm font-semibold text-slate-600 dark:text-gray-500">
              {item.company}
            </span>
          </div>
          <span className="text-sm text-gray-400 dark:text-gray-500">
            {item.date}
          </span>
        </div>
        <p className="text-sm text-gray-600 leading-6 dark:text-darkTextChild">
          {item.desc}
        </p>
      </div>
    </div>
  );
};

export default ExperienceCard;
