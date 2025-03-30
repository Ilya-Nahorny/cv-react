// React and external libraries
import React from "react"; // Main React library
import { motion } from "framer-motion"; // For animations

// Components
import Helmet from "../components/Helmet/Helmet"; // For managing document head
import helmet from "../components/Helmet/data/helmet"; // Helmet data for SEO
import Heading from "../components/Titles/Heading"; // Title component
import Description from "../components/Titles/Description"; // Description component
import MySetupCard from "../components/MySetup/MySetupCard"; // Card displaying setup details
import MySetupTable from "../components/MySetup/MySetupTable"; // Table displaying setup details

const MySetup = () => {
  return (
    <>
      {/* Helmet component to set the page title and meta description */}
      <Helmet title={helmet.mysetup.title} desc={helmet.mysetup.desc} />

      {/* Motion wrapper for animations */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-white p-7 rounded-lg mb-10 dark:bg-darkBgMain"
      >
        {/* Section heading and description */}
        <div className="flex flex-col space-y-1.5 mb-5">
          <Heading>My Setup</Heading>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            veniam quos cumque.
          </Description>
        </div>

        {/* Card displaying setup details */}
        <MySetupCard />
        <MySetupTable />
      </motion.div>
    </>
  );
};

export default MySetup;