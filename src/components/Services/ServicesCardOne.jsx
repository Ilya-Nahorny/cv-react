// React and external libraries
import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { motion } from "framer-motion";

// Components
import Heading from "../Titles/Heading";
import Description from "../Titles/Description";
import Button from "../FormComponents/Button";

const ServicesCardOne = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="px-10 py-8 bg-white shadow-xl rounded-lg mb-12 dark:bg-gradient-to-tr dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden relative"
    >
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-3/5 z-10">
          <Heading className="text-4xl font-extrabold mb-6 text-gray-800 dark:text-white">
            Revolutionize Your Digital Identity
          </Heading>
          <Description className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-8">
            Embark on a digital transformation journey with our innovative web solutions. We create immersive online experiences that not only captivate your audience but also drive tangible results. Let's collaborate to turn your vision into a digital masterpiece.
          </Description>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <Button url="/contact">
          <MdOutlineEmail /> Contact Me
        </Button>
          </div>
        </div>
        <div className="hidden md:block md:w-2/5 relative z-10 mt-8 md:mt-0">
          <motion.img 
            src="/images/about/240x160.webp" 
            alt="Web Development" 
            className="w-full h-[200px] object-contain"
            animate={{ 
              rotate: [0, 5, -5, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </div>
      </div> 
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-blue-200 rounded-full opacity-20 dark:bg-blue-700"></div>
    </motion.div>
  );
};

export default ServicesCardOne;
