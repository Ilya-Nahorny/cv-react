import React from "react";

const PageTitle = ({ title, desc }) => {
  return (
    <div className="text-center bg-white rounded-lg shadow-lg py-6 mb-6 px-10 dark:bg-darkBgMain">
      <h1 className={`${desc && "mb-4"} text-3xl font-extrabold text-gray-700 dark:text-white`}>
        {title}
      </h1>

      {desc && (
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
          {desc}
        </p>
      )}
    </div>
  );
};

export default PageTitle; 