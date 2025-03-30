// React and external libraries
import React from "react";
import { motion } from "framer-motion";

// Components
import Helmet from "../components/Helmet/Helmet";
import PageTitle from "../components/Titles/PageTitle";
import TeamCardTwo from "../components/Team/TeamCardTwo";
import TeamCard from "../components/Team/TeamCard";

// Data
import helmet from "../components/Helmet/data/helmet";
import pageTitle from "../components/Titles/data/pageTitle";
import team from "../components/Team/data/team";

const Team = () => {
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
      <Helmet title={helmet.team.title} desc={helmet.team.desc} />

      {/* Motion wrapper for animations */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        {/* Page title for the first team section */}
        <PageTitle title={pageTitle.team1.title} desc={pageTitle.team1.desc} />

        {/* First grid of team cards (TeamCard) */}
        <motion.div
          variants={container} // Animation container
          initial="hidden" // Initial hidden state for grid items
          animate="visible" // Animate to visible state
          className="grid gap-8 grid-cols-1 lg:grid-cols-2 mb-10"
        >
          {team &&
            team.map((team, index) => (
              <motion.div variants={item} key={index}>
                <TeamCard item={team} key={index} /> {/* Render TeamCard */}
              </motion.div>
            ))}
        </motion.div>

        {/* Page title for the second team section */}
        <PageTitle title={pageTitle.team2.title} desc={pageTitle.team2.desc} />

        {/* Second grid of team cards (TeamCardTwo) */}
        <motion.div
          variants={container} // Animation container
          initial="hidden" // Initial hidden state for grid items
          animate="visible" // Animate to visible state
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-10"
        >
          {team &&
            team.map((team, index) => (
              <motion.div variants={item} key={index}>
                <TeamCardTwo item={team} key={index} /> {/* Render TeamCardTwo */}
              </motion.div>
            ))}
        </motion.div>
      </motion.div>
    </>
  );
};

export default Team;