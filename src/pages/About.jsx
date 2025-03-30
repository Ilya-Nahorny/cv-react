// React and external libraries
import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from "framer-motion";
import { FaCoffee, FaBookReader, FaPlane, FaGuitar } from 'react-icons/fa';

// Components
import Helmet from "../components/Helmet/Helmet"; // For managing document head
import Heading from "../components/Titles/Heading"; // For heading titles
import Description from "../components/Titles/Description"; // For descriptions

const About = () => {
  const darkMode = useSelector((state) => state.theme.theme === "dark"); // Get current theme from Redux

  return (
    <>
      <Helmet title="About Me | Personal Portfolio" desc="Learn about my experiences, skills, and passions as a software developer." />

      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-[300px]">
        {/* Background image */}
        <div className="absolute inset-0 bg-cover bg-center rounded-t-lg" style={{ backgroundImage: 'url(/images/about/1920x1080.svg)' }}></div>

        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-50 rounded-t-lg"></div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative text-center space-y-2 text-white z-10"
        >
          <Heading>Hello, I am [Your Name]</Heading>
          <Description className="text-lg text-gray-100">
            Full-Stack Developer
          </Description>
        </motion.div>
      </section>

      {/* About Me Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`${darkMode ? 'bg-darkBgMain text-darkTextMain' : 'bg-white text-gray-900'} p-7 rounded-b-lg rounded-t-none mb-10 shadow-lg`}
      >
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col space-y-1.5 mb-8">
            <Heading>Hello, I'm [Your Name]</Heading>
            <Description>
              Passionate Full-Stack Developer
            </Description>
          </div>

          <div className="mb-12">
            <p className="mb-4 text-lg leading-relaxed">
              My passion for the world of software began with my desire to solve problems and create innovative ideas. I have been working in this field for [X] years, learning something new and improving myself every day.
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              While specializing in modern web technologies, I also work on projects in mobile application development and artificial intelligence. My goal is to use the power of technology to create user-friendly and efficient solutions that make people's lives easier.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">My Hobbies and Interests</h2>
            <ul className="list-none space-y-4">
              <li className="flex items-center">
                <FaBookReader className="mr-3 text-xl text-blue-500" />
                <span>Reading: Science fiction and philosophical works are my favorites</span>
              </li>
              <li className="flex items-center">
                <FaPlane className="mr-3 text-xl text-green-500" />
                <span>Traveling: I love discovering new cultures and experiencing different cuisines</span>
              </li>
              <li className="flex items-center">
                <FaGuitar className="mr-3 text-xl text-red-500" />
                <span>Music: I am learning to play the guitar and enjoy listening to indie rock</span>
              </li>
              <li className="flex items-center">
                <FaCoffee className="mr-3 text-xl text-yellow-600" />
                <span>Coffee: Exploring different brewing methods and coffee varieties is a passion of mine</span>
              </li>
            </ul>
          </div>

          <Heading>Achievements and Awards</Heading>
          <ul className="mt-4 space-y-4">
            <li className="flex items-center">
              <div className={`w-2 h-2 rounded-full mr-2 ${darkMode ? 'bg-green-400' : 'bg-green-600'}`}></div>
              <p><strong>Best Developer Award</strong> - ABC Hackathon (2021)</p>
            </li>
            <li className="flex items-center">
              <div className={`w-2 h-2 rounded-full mr-2 ${darkMode ? 'bg-green-400' : 'bg-green-600'}`}></div>
              <p><strong>Startup Project of the Year</strong> - XYZ Startup Competition (2020)</p>
            </li>
          </ul>

          <div className="mt-12">
            <Heading>Contact</Heading>
            <p className="mt-4 text-lg leading-relaxed">
              If you have any questions or collaboration offers, feel free to contact me. I will get back to you as soon as possible! You can reach me at <a href="example@mail.com" className="text-blue-500 hover:underline">example@mail.com</a>.
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default About;