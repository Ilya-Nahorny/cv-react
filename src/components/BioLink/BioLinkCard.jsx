import React from "react";
import { Link } from "react-router-dom";
import { GoLinkExternal } from "react-icons/go";

const BioLinkCard = ({ item }) => {
    console.log(item)
  return (
    <Link
      to={item.url} 
      className="flex flex-col md:flex-row justify-between items-center bg-slate-300/50 p-2 py-3 rounded-lg md:rounded-full w-full hover:scale-105 hover:bg-slate-300 duration-300 dark:bg-darkBgChild"
    >
      <div className={`text-white w-14 h-14 rounded-full mb-2 md:mb-0 flex justify-center items-center ${item.color}`}>
        {item.icon}
      </div>
      <div className="flex flex-col justify-center items-center text-center px-4">
        <h3 className="font-bold dark:text-darkTextMain text-sm md:text-base">
        {item.title}
        </h3>
        <span className="text-gray-500 text-xs md:text-sm dark:text-darkTextChild">
        {item.description}
        </span>
      </div>
      <GoLinkExternal size={20} className="mr-5 dark:text-darkTextChild hidden md:inline-block" />
    </Link>
  );
};

export default BioLinkCard;
