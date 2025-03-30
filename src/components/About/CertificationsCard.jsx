import React from "react";
import Button from "../FormComponents/Button";
import { FaExternalLinkAlt } from "react-icons/fa";

const CertificationsCard = ({ item }) => {
  return (
    <div className="shadow-lg bg-white p-4 rounded-lg flex gap-4 border border-gray-200 h-full dark:bg-darkBgMain dark:border-darkBorder">
      <div className="h-12 min-w-12">
        <img src={item.image} alt="" className="w-full h-full rounded-lg" />
      </div>
      <div className="flex flex-col gap-2">
        <div>
          <h3 className="font-semibold dark:text-darkTextMain">{item.title}</h3>
          <span className="text-sm text-gray-400 dark:text-darkTextChild">
            {item.company}
          </span>
        </div>
        <p className="text-sm leading-6 text-gray-700 dark:text-darkTextChild">
          {item.desc}
        </p>
        {item.isUrl && (
          <Button url={item.url} className={"max-w-max mt-auto"}>
            <FaExternalLinkAlt /> Show Certificate
          </Button>
        )}
      </div>
    </div>
  );
};

export default CertificationsCard;
