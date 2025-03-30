import React from "react";

const ContactCard = ({ item, index }) => {
  return (
    <div
      key={index}
      className="bg-gray-50 p-4 rounded-lg flex items-center dark:bg-darkBgChild"
    >
      <span className="text-gray-500 mr-4 text-2xl dark:text-darkTextMain">
        {item.icon}
      </span>
      <div>
        <h4 className="text-lg font-semibold text-black dark:text-darkTextMain">
          {item.title}
        </h4>
        <p className="text-sm text-gray-500 dark:text-darkTextChild">
          {item.desc}
        </p>
      </div>
    </div> 
  );
};

export default ContactCard;
