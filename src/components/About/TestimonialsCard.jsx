import React from "react";
import { FaStar } from "react-icons/fa";

const TestimonialsCard = ({ item }) => {
  return (
    <div className="shadow-lg bg-white p-4 rounded-lg flex flex-col gap-4 border border-gray-200 h-full dark:bg-darkBgMain dark:border-darkBorder">
      <div className="flex gap-4 items-center">
        <div className="h-12 min-w-12">
          <img src={item.image} alt="" className="w-full h-full rounded-lg" />
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <h3 className="font-semibold dark:text-darkTextMain">
              {item.name}
            </h3>
            <span className="text-sm text-gray-400 dark:text-darkTextChild">
              {item.position}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col h-full">
        <p className="text-sm leading-6 text-gray-700 mb-2 dark:text-darkTextChild">
          {item.testimonial}
        </p>
        <div className="flex gap-1 mt-auto">
          {Array.from({ length: item.star }).map((_, index) => (
            <FaStar
              key={index}
              className={`text-xl ${
                index < item.star ? "text-yellow-500" : "text-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
