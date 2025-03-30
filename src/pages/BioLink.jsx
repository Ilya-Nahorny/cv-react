import React from "react";
import { motion } from "framer-motion";
import BioLinkCard from "../components/BioLink/BioLinkCard";
import { Link } from "react-router-dom";

// Data
import bioLinkData from "../components/BioLink/data/bioLinkData";
import helmet from "../components/Helmet/data/helmet";
import { Helmet } from "react-helmet";

const BioLink = () => {
  return (
    <>
      {/* Helmet component to set the page title and meta description */}
      <Helmet title={helmet.biolink.title} desc={helmet.biolink.desc} />
      
      {/* Motion wrapper for animations */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="p-12 pb-8 flex flex-col bg-white dark:bg-darkBgMain rounded-lg md:rounded-3xl shadow items-center gap-4 mb-10"
      >
        <div>
          {/* Profile image */}
          <img
            src={bioLinkData.profileImage}
            alt={bioLinkData.name}
            className="rounded-full h-32 w-32 object-cover"
          />
        </div>

        {/* User name */}
        <h3 className="text-3xl font-bold dark:text-darkTextMain text-center">
          {bioLinkData.name}
        </h3>

        {/* User description */}
        <p className="text-gray-500 dark:text-darkTextChild text-center lg:px-36">
          {bioLinkData.description}
        </p>

        {/* Bio link cards */}
        <div className="mt-4 flex flex-col gap-5 w-full">
          {bioLinkData.links &&
            bioLinkData.links.map((item, index) => (
              <BioLinkCard key={index} item={item} />
            ))}
        </div>

        {/* Link to go back to homepage */}
        <Link
          to="/"
          className="mt-4 px-6 py-2 rounded-lg text-center transition-colors duration-300
            bg-slate-700 text-white hover:bg-slate-600 dark:bg-darkBgChild dark:text-darkTextMain dark:hover:bg-darkBgMain dark:border dark:border-darkBorder"
        >
          Go to homepage
        </Link>
      </motion.div>
    </>
  );
};

export default BioLink;