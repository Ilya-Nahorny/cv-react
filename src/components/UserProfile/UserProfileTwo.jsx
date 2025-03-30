// React and external libraries
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaMoon, FaSun, FaShoppingCart, FaGlobe } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";

// Redux actions
import { themeChange } from "../../redux/darkModeSlice";

// Data
import { supportedLngs } from "../../i18n";
import stories from "./storiesData/stories";

// Components 
import MenuTwo from "../Menu/MenuTwo/MenuTwo";
import Stories from "react-insta-stories"; // Adding Stories component
import { IoIosClose } from "react-icons/io"; // Adding close icon

const UserProfileTwo = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const themeStatus = useSelector((state) => state.theme.theme);
  const { items } = useSelector((state) => state.cart);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  // State for managing Story modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dimensions, setDimensions] = useState({
    width: "500px",
    height: "800px",
  });

  // Function to toggle between dark and light theme
  const toggleTheme = () => dispatch(themeChange());

  // Function to change the language
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsLanguageMenuOpen(false);
  };

  // Adjusting modal size based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setDimensions({ width: "100%", height: "100vh" });
      } else {
        setDimensions({ width: "500px", height: "800px" });
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close modal when all stories are completed
  const handleStoryEnd = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Top bar */}
      <div className="flex items-center bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-t-lg shadow-lg">
        <div className="flex space-x-2 mr-4">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-300 font-medium py-2 md:py-0 md:flex hidden">
          Isabella Penelope - 
          <TypeAnimation
            sequence={[
              "Frontend Developer",
              1000,
              "UI/UX Enthusiast",
              1000,
              "JavaScript Expert",
              1000,
              "React Developer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>
        <div className="ml-auto flex items-center space-x-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="p-1.5 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            {themeStatus === "dark" ? <FaSun size={14} /> : <FaMoon size={14} />}
          </motion.button>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="relative"
          >
            <button
              onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
              className="p-1.5 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              <FaGlobe size={14} />
            </button>
            {isLanguageMenuOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 rounded-md shadow-lg overflow-hidden z-10">
                {supportedLngs.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => changeLanguage(lang)}
                    className="block w-full text-left px-3 py-1.5 text-xs text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <span className={`fi fi-${lang} mr-2`}></span>
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>
            )}
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="relative"
          >
            <Link to="/cart" className="p-1.5 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 flex items-center justify-center">
              <FaShoppingCart size={14} />
              {items.length > 0 && (
                <span className="absolute -top-1 -right-1 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full">
                  {items.length}
                </span>
              )}
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Profile Section */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-b-lg shadow-md mb-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <div
              className="w-48 h-48 bg-gray-200 rounded-full overflow-hidden cursor-pointer relative flex items-center justify-center gradient p-2"
              onClick={() => setIsModalOpen(true)} // Opening Story modal
            >
              <img
                src="/images/profile/240x240.svg"
                alt="Isabella Penelope"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-800 dark:text-white my-4">
                Isabella Penelope
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                Full Stack Developer | React Specialist
              </p>

              <p className="text-base text-gray-700 dark:text-gray-300 mb-6 max-w-2xl">
                {t("desc")}
              </p>

              <div className="flex justify-center space-x-4 mb-6">
                <Link
                  to="/projects"
                  className="px-6 py-2 bg-lightBg dark:bg-darkBgChild text-white rounded-md text-sm font-medium hover:opacity-70 transition-colors duration-300"
                >
                  View Portfolio
                </Link>
                <Link
                  to="/contact"
                  className="px-6 py-2 bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white rounded-md text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Story Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black bg-opacity-75"
            onClick={() => setIsModalOpen(false)}
          ></div>
          <div className={`relative ${dimensions.width} ${dimensions.height}`}>
            <div className="relative z-[52] flex items-center justify-center">
              <Stories
                stories={stories}
                defaultInterval={5000}
                width={dimensions.width}
                height={dimensions.height}
                onAllStoriesEnd={handleStoryEnd}
              />
            </div>

            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute z-[55] top-4 right-4 text-white"
            >
              <IoIosClose size={40} className="drop-shadow-lg" />
            </button>
          </div>
        </div>
      )}

      {/* Menu */}
      <div className="my-6">
        <MenuTwo />
      </div>
    </>
  );
};

export default UserProfileTwo;
