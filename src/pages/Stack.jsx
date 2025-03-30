// React and external libraries
import React from "react";
import helmet from "../components/Helmet/data/helmet";
import Helmet from "../components/Helmet/Helmet";
import { motion } from "framer-motion";
import StackCard from "../components/Stack/StackCard";
import stackData from "../components/Stack/data/stack";
import Heading from "../components/Titles/Heading";
import Description from "../components/Titles/Description";

const Stack = () => {
  // Animation container to stagger child animations
  const container = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Animation for individual stack items
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
      <Helmet title={helmet.stack.title} desc={helmet.stack.desc} />

      {/* Motion wrapper for animations */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-white p-7 rounded-lg mb-10 dark:bg-darkBgMain"
      >
        {/* Section heading and description */}
        <div className="flex flex-col space-y-1.5 mb-5">
          <Heading>Stack</Heading>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            veniam quos cumque.
          </Description>
        </div>

        {/* Grid of stack cards */}
        <motion.div
          variants={container} // Animation container
          initial="hidden" // Initial hidden state for grid items
          animate="visible" // Animate to visible state
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {stackData &&
            stackData.map((stackItem, index) => {
              return (
                <motion.div variants={item} key={index}>
                  <StackCard item={stackItem} /> {/* Render StackCard for each stack item */}
                </motion.div>
              );
            })}
        </motion.div>
      </motion.div>
    </>
  );
};

export default Stack;