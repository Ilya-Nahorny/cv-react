// React and external libraries
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaMoon, FaSun, FaShoppingCart, FaGlobe, FaLinkedinIn, FaCodepen } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";

// Redux actions
import { themeChange } from "../../redux/darkModeSlice";

// Data
import { supportedLngs } from "../../i18n";
import stories from "./storiesData/stories";
 
// Components
import Menu from "../Menu/MenuThree/Menu";
import Stories from "react-insta-stories";
import { IoIosClose } from "react-icons/io";
import { TypeAnimation } from "react-type-animation";

// User Profile Component
const UserProfileFour = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const themeStatus = useSelector((state) => state.theme.theme);
  const { items } = useSelector((state) => state.cart);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  // States to manage Story modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dimensions, setDimensions] = useState({
    width: "500px",
    height: "800px",
  });

  // Toggle theme between dark and light modes
  const toggleTheme = () => dispatch(themeChange());

  // Change language and close language menu
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsLanguageMenuOpen(false);
  };

  // Adjust modal size based on window size
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

  // Close modal when all stories end
  const handleStoryEnd = () => {
    setIsModalOpen(false);
  };

  const social = [
    {
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/",
      hover: true,
    },
    {
      icon: <FiGithub />,
      url: "https://github.com/",
      hover: true,
    },
    {
      icon: <FaCodepen />,
      url: "https://codepen.io/",
      hover: true,
    },
  ];

  return (
    <>
      <div
        className={`shadow-lg ${themeStatus === "dark"
          ? "bg-darkBgMain"
          : "bg-gradient-to-b from-indigo-100 to-white"
          } mb-10 rounded-lg`}
      >
        <div className="p-12">
          <div className="ml-auto flex justify-end space-x-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-1.5 rounded-full text-gray-600 dark:text-darkTextMain hover:bg-gray-200 dark:hover:bg-darkBgChild transition-colors duration-200"
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
                className="p-1.5 rounded-full text-gray-600 dark:text-darkTextMain hover:bg-gray-200 dark:hover:bg-darkBgChild transition-colors duration-200"
              >
                <FaGlobe size={14} />
              </button>
              {isLanguageMenuOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-darkBgMain rounded-md shadow-lg overflow-hidden z-10">
                  {supportedLngs.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => changeLanguage(lang)}
                      className="block w-full text-left px-3 py-1.5 text-xs text-gray-700 dark:text-darkTextChild hover:bg-gray-100 dark:hover:bg-darkBgChild"
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
              <Link
                to="/cart"
                className="p-1.5 rounded-full text-gray-600 dark:text-darkTextMain hover:bg-gray-200 dark:hover:bg-darkBgChild transition-colors duration-200 flex items-center justify-center"
              >
                <FaShoppingCart size={14} />
                {items.length > 0 && (
                  <span className="absolute -top-1 -right-1 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full">
                    {items.length}
                  </span>
                )}
              </Link>
            </motion.div>
          </div>
          <div
            className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-xl cursor-pointer relative flex items-center justify-center gradient p-2"
            onClick={() => setIsModalOpen(true)} // Open Story modal
          >
            <img
              className="w-full h-full object-cover rounded-full"
              src="/images/profile/240x240.svg"
              alt="Isabella Penelope"
            />

          </div>

          <div className="mt-8 text-center">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-darkTextWhite">
              Isabella Penelope
            </h1>
            <p className="mt-2 text-xl text-lightBg dark:text-darkTextMain">
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
            </p>

            <p className="mt-4 text-gray-600 dark:text-darkTextChild max-w-2xl mx-auto">
              {t("desc")}
            </p>

            <div className="mt-6 flex justify-center space-x-6">
              {social.map((item, index) => (
                <a
                  href={item.url}
                  key={index}
                  className="text-gray-400 hover:text-indigo-500 dark:hover:text-darkHref transition-colors duration-300 text-2xl"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

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

        <Menu />
      </div>
    </>
  );
};

export default UserProfileFour;
