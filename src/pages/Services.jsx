// React and external libraries
import React, { useState } from "react";
import { motion } from "framer-motion";

// Components
import Helmet from "../components/Helmet/Helmet";
import ServicesCardOne from "../components/Services/ServicesCardOne";
import ServicesCardTwo from "../components/Services/ServicesCardTwo";

// Data
import helmet from "../components/Helmet/data/helmet";
import services from "../components/Services/data/services";

// Icons
import { FaChevronDown, FaSpinner } from "react-icons/fa";

const Services = () => {
  const [visibleItems, setVisibleItems] = useState(6);
  const [isLoading, setIsLoading] = useState(false);
  const itemsPerLoad = 3;

  const loadMoreItems = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleItems(prevVisibleItems => prevVisibleItems + itemsPerLoad);
      setIsLoading(false);
    }, 1000);
  };

  // Animation container to stagger child animations
  const container = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Animation for individual items (service cards)
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
      <Helmet title={helmet.services.title} desc={helmet.services.desc} />

      {/* Motion wrapper for animations */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        
        {/* Services introduction card */}
        <ServicesCardOne />

        {/* Grid of service cards (ServicesCardTwo) */}
        <motion.div
          variants={container} // Animation container
          initial="hidden" // Initial hidden state for grid items
          animate="visible" // Animate to visible state
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8"
        >
          {services.slice(0, visibleItems).map((service, index) => ( 
            <motion.div variants={item} key={index}>
              <ServicesCardTwo key={index} service={service} /> {/* Render ServicesCardTwo */}
            </motion.div>
          ))}
        </motion.div>

        {visibleItems < services.length && (
          <div className="flex justify-center mt-12 mb-8">
            <motion.button
              onClick={loadMoreItems}
              className="px-6 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 dark:bg-darkBgChild dark:text-darkTextMain dark:hover:bg-darkBgMain"
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

export default Services;