import React from "react";

const AboutTitle = ({ image, text }) => {
  return (
    <h2 className="shadow-lg text-2xl font-bold mb-4 flex items-center gap-2 bg-white p-2 pr-4 rounded-lg max-w-max border border-gray-200 dark:bg-darkBgMain dark:text-darkTextMain dark:border-darkBorder">
      {" "}
      <img src={image} alt={text} className="w-8 h-8" /> {text}
    </h2>
  );
};

export default AboutTitle;
