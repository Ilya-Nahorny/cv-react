// React and external libraries
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Components
import ProjectCard from "../Projects/ProjectCard";
import WorkspaceCard from "../WorkSpace/WorkspaceCard";
import Heading from "../Titles/Heading";
import Description from "../Titles/Description";

const TabMenuTwo = ({ json }) => {
  const [activeButton, setActiveButton] = useState(json.activeButton);

  const activeChangeButton = (name) => {
    setActiveButton(name);
  };

  const counterCategory = (name) => {
    return json.items.filter((item) => item.tags.includes(name)).length;
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-50 dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden mb-10"
    >
      <div className="p-8">
        <div className="mb-8 text-center">
          <Heading className="text-3xl font-bold mb-3 text-gray-800 dark:text-gray-200">{json.header.title}</Heading>
          <Description className="text-gray-600 dark:text-gray-400 text-lg">{json.header.desc}</Description>
        </div>
        <div className="flex  justify-center mb-8">
          <div className="inline-flex justify-center flex-wrap gap-2 bg-transparent md:bg-white md:dark:bg-gray-700 rounded-full p-3 md:shadow-inner">
            {json.buttons.map((item, index) => (
              <button
                onClick={() => activeChangeButton(item.tag)}
                className={`py-2 px-4 text-sm font-medium rounded-full transition-all duration-300 flex items-center gap-2
                  ${
                    activeButton === item.tag
                      ? "bg-lightBg dark:bg-gray-600 text-white dark:text-gray-200 shadow-md"
                      : "text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600"
                  }`}
                key={index}
              >
                {item.icon} {item.name} 
                <span className="ml-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-0.5 rounded-full text-xs">
                  {counterCategory(item.tag)}
                </span>
              </button>
            ))}
          </div>
        </div>

        <Description className="mb-8 text-center text-gray-600 dark:text-gray-400 text-lg">
          {json.buttons.find(item => item.tag === activeButton)?.desc}
        </Description>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeButton}
            variants={container}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          >
            {json.items
              .filter((project) => project.tags.includes(activeButton))
              .map((itemData, index) => (
                <motion.div variants={item} key={index} className="transform hover:scale-105 transition-transform duration-300">
                  {json.type === "projects" ? (
                    <ProjectCard item={itemData} />
                  ) : json.type === "workspace" ? (
                    <WorkspaceCard item={itemData} />
                  ) : null}
                </motion.div>
              ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default TabMenuTwo;