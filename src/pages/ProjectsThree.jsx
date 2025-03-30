// React and external libraries
import React, { useState } from "react";
import { motion } from "framer-motion";

// Components
import Helmet from "../components/Helmet/Helmet";
import PageTitle from "../components/Titles/PageTitle"; 
import ProjectCardFour from "../components/Projects/ProjectCardFour";

// Data
import helmet from "../components/Helmet/data/helmet";
import pageTitle from "../components/Titles/data/pageTitle";
import projectData from "../components/Projects/data/projectsData";

// Icons
import { FaChevronDown, FaSpinner } from "react-icons/fa";

const Projects = () => {
  const [visibleItems, setVisibleItems] = useState(4);
  const [isLoading, setIsLoading] = useState(false);
  const itemsPerLoad = 2;

  const loadMoreItems = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleItems(prevVisibleItems => prevVisibleItems + itemsPerLoad);
      setIsLoading(false);
    }, 1000);
  };

  // Animation container for staggering child animations
  const container = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Animation for individual items (project cards)
  const item = {
    hidden: { y: 20, opacity: 0 }, // Initial hidden state
    visible: {
      y: 0,
      opacity: 1, // Animate to visible state
    },
  };

  return (
    <>
      {/* Helmet component to set the page title and meta description */}
      <Helmet title={helmet.projects.title} desc={helmet.projects.desc} />

      {/* Motion wrapper for animations */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      
        {/* Page title for the second section */}
        <PageTitle
          title={pageTitle.projects3.title}
          desc={pageTitle.projects3.desc}
        />

        {/* Third grid of project cards (ProjectCardFour) */}
        <div className="">
          <motion.div
            key={`projectThree-${visibleItems}`}
            variants={container}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 gap-4 mb-10"
          >
            {projectData.items.slice(0, visibleItems).map((project, index) => (
              <motion.div variants={item} key={index}>
                <ProjectCardFour key={index} item={project} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {visibleItems < projectData.items.length && (
          <div className="flex justify-center mt-12 mb-8">
            <motion.button
              onClick={loadMoreItems}
              className="px-6 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 dark:bg-darkBgMain dark:border-darkBorder dark:text-darkTextMain"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isLoading}
            >
              {isLoading ? (
                <FaSpinner className="animate-spin h-3 w-3 text-gray-700" />
              ) : (
                <span className="flex items-center text-sm">
                  Show More
                  <FaChevronDown className="ml-2" />
                </span>
              )}
            </motion.button>
          </div>
        )}
      </motion.div>
    </>
  );
};

export default Projects;
