// React and external libraries
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiLinkedin, FiCodepen, FiMoon, FiSun, FiTwitter, FiTerminal, FiCoffee, FiCode, FiPackage, FiServer, FiAward, FiGlobe, FiShoppingCart } from "react-icons/fi";
import { SiReact, SiNodedotjs, SiTypescript, SiAmazonaws, SiDocker, SiKubernetes, SiGraphql, SiMongodb, SiRedux } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";

// Redux actions
import { themeChange } from "../../redux/darkModeSlice";
 
// Data
import { supportedLngs } from "../../i18n";

// Components
import Menu from "../Menu/MenuOne/Menu";

// User Profile Component
const UserProfileThree = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const themeStatus = useSelector((state) => state.theme.theme);
  const { items } = useSelector((state) => state.cart);
  const [activeTab, setActiveTab] = useState("about");
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  // Full code text for display in the terminal section
  const fullText = "const dev = {  name: 'John Doe',  role: 'Full Stack Developer', skills: ['React', 'Node.js', 'TypeScript'],  coffee: () => 'Always brewing'};";

  // Toggle between light and dark theme
  const toggleTheme = () => dispatch(themeChange());

  // Change language function
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsLanguageMenuOpen(false);
  };

  // Content for each tab in the profile
  const tabContent = {
    about: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{t("about")}</h2>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          {t("desc")}
        </p>
        <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
          <FiCoffee />
          <span>{t("underDesc")}</span>
        </div>
      </motion.div>
    ),
    skills: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Tech Stack</h2>
        <div className="grid grid-cols-3 gap-4">
          {[
            { Icon: SiReact, name: "React" },
            { Icon: SiNodedotjs, name: "Node.js" },
            { Icon: SiTypescript, name: "TypeScript" },
            { Icon: SiAmazonaws, name: "AWS" },
            { Icon: SiDocker, name: "Docker" },
            { Icon: SiKubernetes, name: "Kubernetes" },
            { Icon: SiGraphql, name: "GraphQL" },
            { Icon: SiMongodb, name: "MongoDB" },
            { Icon: SiRedux, name: "Redux" }
          ].map(({ Icon, name }) => (
            <motion.div
              key={name}
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 p-3 rounded-lg"
            >
              <Icon size={24} className="text-gray-600 dark:text-gray-300" />
              <span className="text-sm text-gray-600 dark:text-gray-300">{name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    ),
    projects: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Featured Projects</h2>
        <div className="space-y-4">
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">AI-Powered Code Assistant</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {t("A VS Code extension leveraging GPT-4 for intelligent code suggestions and refactoring tips.")}
            </p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">Decentralized Task Manager</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {t("Blockchain-based task management ensuring transparency and immutability of project milestones.")}
            </p>
          </div>
        </div>
      </motion.div>
    )
  };

  return (
    <>
      {/* Main profile container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
      >
        <div className="flex flex-col md:flex-row h-full">
          {/* Left column */}
          <div className="md:w-1/3 bg-gray-100 dark:bg-gray-900 p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <div className="w-48 h-48 mx-auto mb-6 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700 rounded-lg animate-pulse"></div>
                <img
                  src="/images/profile/me2.png"
                  alt="Ilya Nahorny"
                  className="absolute inset-2 w-44 h-44 object-cover shadow-lg border-4 border-white dark:border-gray-800 rounded-lg"
                />
                <div className="absolute -bottom-2 -right-2 bg-gray-300 dark:bg-gray-700 rounded-lg p-3 shadow-lg">
                  <FiCode size={24} className="text-gray-800 dark:text-white" />
                </div>
              </div>
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2 text-center">{t("name")}</h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 font-medium mb-4 text-center">{t("position")}</p>
              <div className="flex justify-center space-x-4 mb-6">
                {[
                  { Icon: FiGithub, href: "https://github.com/" },
                  { Icon: FiLinkedin, href: "https://linkedin.com/" },
                  { Icon: FiCodepen, href: "https://codepen.io/" },
                  { Icon: FiTwitter, href: "https://twitter.com/" }
                ].map(({ Icon, href }, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.1, y: -5 }}
                    href={href}
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
                  >
                    <Icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>
            <div className="relative z-10">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 font-mono text-sm text-gray-600 dark:text-gray-300 border border-gray-300 dark:border-gray-700 shadow-lg">
                <div className="flex items-center mb-2">
                  <FiAward className="mr-2 text-yellow-400" />
                  <span className="text-gray-800 dark:text-white font-semibold">Achievements</span>
                </div>
                <ul className="list-none space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full mr-2"></span>
                    Top Contributor 2023
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full mr-2"></span>
                    Open Source Champion
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full mr-2"></span>
                    Hackathon Winner
                  </li>
                </ul>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent dark:from-gray-800 dark:to-transparent opacity-50"></div>
          </div>

          {/* Right column */}
          <div className="md:w-2/3 p-8 bg-white dark:bg-gray-800 flex flex-col">
            <div className="flex justify-between items-center mb-8">
              <div className="flex space-x-4">
                {[
                  { name: "about", icon: FiCode },
                  { name: "skills", icon: FiPackage },
                  { name: "projects", icon: FiServer }
                ].map(({ name, icon: Icon }) => (
                  <motion.button
                    key={name}
                    onClick={() => setActiveTab(name)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 flex items-center space-x-2 ${activeTab === name
                      ? "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                      }`}
                  >
                    <Icon size={16} />
                    <span>{name.charAt(0).toUpperCase() + name.slice(1)}</span>
                  </motion.button>
                ))}
              </div>
              <div className="flex items-center space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleTheme}
                  className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white shadow-md hover:shadow-lg transition-all duration-300"
                >
                  {themeStatus === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
                </motion.button>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  <button
                    onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                    className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <FiGlobe size={20} />
                  </button>
                  <AnimatePresence>
                    {isLanguageMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden z-10 border border-gray-200 dark:border-gray-700"
                      >
                        {supportedLngs.map((lang) => (
                          <button
                            key={lang}
                            onClick={() => changeLanguage(lang)}
                            className="block w-full text-left px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                          >
                            <span className={`fi fi-${lang} mr-2`}></span>
                            {lang.toUpperCase()}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  <Link to="/cart" className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                    <FiShoppingCart size={20} />
                    {items.length > 0 && (
                      <span className="absolute -top-1 -right-1 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-600 rounded-full border-2 border-white dark:border-gray-800">
                        {items.length}
                      </span>
                    )}
                  </Link>
                </motion.div>
              </div>
            </div>
            <AnimatePresence mode="wait">
              {tabContent[activeTab]}
            </AnimatePresence>
            <div className="mt-auto my-4">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 font-mono text-sm text-gray-600 dark:text-gray-300 border border-gray-300 dark:border-gray-700 shadow-lg">
                <div className="flex items-center mb-2">
                  <FiTerminal className="mr-2 text-gray-600 dark:text-gray-300" />
                  <span className="text-gray-800 dark:text-white font-semibold">Terminal</span>
                </div>
                <TypeAnimation
                  sequence={[fullText]}
                  wrapper="div"
                  cursor={true}
                  repeat={1}
                  style={{ whiteSpace: 'pre-line' }}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Menu Component */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <Menu activeTab={activeTab} setActiveTab={setActiveTab} />
      </motion.div>
    </>
  );
};

export default UserProfileThree;
