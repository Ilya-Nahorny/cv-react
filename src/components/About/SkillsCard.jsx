import React from "react";

const SkillsCard = ({ item }) => {
  return (
    <div className="shadow-lg bg-white p-4 rounded-lg border border-gray-200 flex items-center justify-center gap-2 dark:bg-darkBgMain dark:border-darkBorder">
      <img src={item.image} alt="" className="w-12 h-12 rounded-lg" />
    </div>
  );
};

export default SkillsCard;
