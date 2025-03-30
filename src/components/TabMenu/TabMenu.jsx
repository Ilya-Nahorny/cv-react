// React and external libraries
import React, { useState } from "react";
import { motion } from "framer-motion";

// Components
import ProjectCard from "../Projects/ProjectCard";
import WorkspaceCard from "../WorkSpace/WorkspaceCard";
import Heading from "../Titles/Heading";
import Description from "../Titles/Description";

const TabMenu = ({ json }) => {
  const [activeButton, setActiveButton] = useState(json.activeButton);

  const activeChangeButton = (name) => {
    setActiveButton(name);
  };

  const counterCategory = (name) => {
    const categoryLength = json.items.filter((item) =>
      item.tags.includes(name)
    );
    return categoryLength.length;
  };

  const container = {
    visible: {
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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="shadow-lg bg-white dark:bg-darkBgMain py-5 px-5 rounded-lg mb-10"
    >
      <div>
        <div className="mb-6">
          <Heading className="mb-2">{json.header.title}</Heading>
          <Description>{json.header.desc}</Description>
        </div>
        <div className="mb-6 gap-4 flex uppercase flex-col sm:flex-row">
          {json.buttons.map((item, index) => (
            <button
              onClick={() => activeChangeButton(item.tag)}
              className={`py-2 px-3 text-sm shadow rounded-xl flex items-center gap-2 dark:text-darkTextMain dark:border dark:border-darkBorder ${
                activeButton === item.tag
                  ? "active hover:opacity-80 dark:bg-darkBgChild"
                  : "hover:bg-gray-50 dark:hover:bg-darkBgMain"
              }`}
              key={index}
            >
              {item.icon} {item.name} ({counterCategory(item.tag)})
            </button>
          ))}
        </div>

        <Description className="mb-8">
          {json.buttons.map((item, index) =>
            activeButton === item.tag ? (
              <span key={index}>{item.desc}</span>
            ) : null
          )}
        </Description>

        <motion.div
          key={activeButton}
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid w-full md:grid-cols-2 lg:grid-cols-3 gap-3 gap-y-6 grid-cols-1 items-stretch"
        >
          {json.items
            .filter((project) => project.tags.includes(activeButton))
            .map((itemData, index) => {
              if (json.type === "projects") {
                return (
                  <motion.div variants={item} key={index}>
                    <ProjectCard item={itemData} />
                  </motion.div>
                );
              } else if (json.type === "workspace") {
                return (
                  <motion.div variants={item} key={index}>
                    <WorkspaceCard item={itemData} />
                  </motion.div>
                );
              } else {
                return null;
              }
            })}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TabMenu;
