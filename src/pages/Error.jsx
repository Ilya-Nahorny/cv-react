// React and external libraries
import React from "react";
import { motion } from "framer-motion";
import { SlGhost } from "react-icons/sl";
import { IoHome } from "react-icons/io5";

// Components
import Button from "../components/FormComponents/Button";
import Helmet from "../components/Helmet/Helmet";

// Data
import helmet from "../components/Helmet/data/helmet";

const Error = () => {
  const currentUrl = window.location.href; // Get the current URL

  return (
    <>
      {/* Helmet component to set the page title and meta description */}
      <Helmet title={helmet.error.title} desc={helmet.error.desc} />

      {/* Motion wrapper for animations */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-white rounded-lg py-6 mb-10 dark:bg-darkBgMain"
      >
        <div className="flex flex-col items-center px-6 text-center">
          {/* Display 404 message with ghost icon */}
          <span className="flex items-center text-[128px] text-gray-900 dark:text-darkTextMain">
            4<SlGhost size={100} />4
          </span>
          <p className="text-3xl text-gray-900 dark:text-darkTextMain">
            <span>Oops...</span> It looks like you're lost!
          </p>

          {/* Display current URL that could not be found */}
          <p className="text-lg text-gray-900 py-8 dark:text-darkTextMain">
            Sorry, the page{" "}
            <code className="text-xs md:text-sm bg-gray-200 px-2 py-1 rounded-lg text-gray-900 font-medium">
              {currentUrl}
            </code>{" "}
            could not be found.
          </p>

          {/* Button to navigate back to the homepage */}
          <Button url="/">
            <IoHome /> Go Home
          </Button>
        </div>
      </motion.div>
    </>
  );
};

export default Error; 