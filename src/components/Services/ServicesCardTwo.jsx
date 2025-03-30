// React and external libraries
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCubes } from 'react-icons/fa6';

// Components
import Button from "../FormComponents/Button";

const ServicesCardTwo = ({ service }) => {
  const { name, slug, summary, image } = service;

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-64">
        <Link to={`/service-detail/${slug}`}>
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </Link>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
          <p className="text-sm text-gray-200">{summary}</p>
        </div>
      </div>
      
      <div className="p-6">
        <ul className="space-y-3">
          {['Tailored solutions', 'Expert consultation', 'Timely delivery'].map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
              <span className="w-2 h-2 bg-gray-500 rounded-full mr-3"></span>
              {feature}
            </li>
          ))}
        </ul>  
      </div>

      <div className="px-6 pb-6 mt-auto">
        <Button url={`/service-detail/${slug}`} className="w-full">
          <FaCubes /> Service Detail
        </Button>
      </div>
    </motion.div>
  );
};

export default ServicesCardTwo;