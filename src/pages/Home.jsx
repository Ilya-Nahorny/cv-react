// React and external libraries
import React from "react";

// Components 
import Helmet from "../components/Helmet/Helmet";

// Data
import projectsData from "../components/Projects/data/projectsData";
import helmet from "../components/Helmet/data/helmet";
import TabMenuTwo from "../components/TabMenu/TabMenuTwo";
import ServicesCardOne from "../components/Services/ServicesCardOne";
import TeamCard from "../components/Team/TeamCard";

import { motion } from "framer-motion";

import team from "../components/Team/data/team";
import Contact from "./Contact";
import PageTitle from "../components/Titles/PageTitle";


import pageTitle from "../components/Titles/data/pageTitle";


const Home = () => {

  // Animation container to stagger child animations
  const container = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Animation for individual team items
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
      <Helmet title={helmet.home.title} desc={helmet.home.desc} />

      <ServicesCardOne />

      {/* TabMenu component for displaying projects in a tabbed layout */}
      <TabMenuTwo json={projectsData} />


      {/* Page title for the first section */}
      <PageTitle
        title={pageTitle.team.title}
        desc={pageTitle.team.desc}
      />
      {/* Second grid of team cards (TeamCardTwo) */}
      <motion.div
        variants={container} // Animation container
        initial="hidden" // Initial hidden state for grid items
        animate="visible" // Animate to visible state
        className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-10 bg-white dark:bg-darkBgMain p-4 rounded-lg"
      >
        {team &&
          team.map((team, index) => (
            <motion.div variants={item} key={index}>
              <TeamCard item={team} key={index} /> {/* Render TeamCardTwo */}
            </motion.div>
          ))}
      </motion.div>


      <Contact />

    </>
  );
};

export default Home;