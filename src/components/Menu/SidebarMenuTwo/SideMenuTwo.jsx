import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { toggleSideMenu } from "../../../redux/toggleMenuSlice";
import menuData from "../data/menu";
import SideMenuDropdownTwo from "./SideMenuDropdownTwo";

const useIsSmallScreen = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 640);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isSmallScreen;
};

const SideMenuTwo = () => {
  const dispatch = useDispatch();
  const isExpanded = useSelector((state) => state.menu.isSideMenuActive);

  const isSmallScreen = useIsSmallScreen();
  const [isMenuOpen, setIsMenuOpen] = useState(isExpanded);

  useEffect(() => {
    setIsMenuOpen(isExpanded);
  }, [isExpanded]);

  const handleMenuToggle = () => {
    if (isSmallScreen) {
      setIsMenuOpen(!isMenuOpen);
    } else {
      dispatch(toggleSideMenu());
    }
  };

  return (
    <>
      {/* Overlay for small screens when the menu is open */}
      {isSmallScreen && isMenuOpen && (
        <div
          className="fixed inset-0 z-[39] bg-black opacity-50"
          onClick={handleMenuToggle}
        ></div>
      )}

      {/* Toggle Button */}
      <button
        className="fixed top-4 left-1 z-50 p-2 border border-gray-400 dark:border-gray-400 rounded-full bg-gray-300 dark:bg-darkBgChild text-gray-600 dark:text-darkTextChild hover:bg-gray-200 dark:hover:bg-darkBgMain transition-colors"
        onClick={handleMenuToggle}
        aria-label={isMenuOpen ? "Collapse menu" : "Expand menu"}
      >
        {isMenuOpen ? (
          <IoIosArrowBack size={20} />
        ) : (
          <IoIosArrowForward size={20} />
        )}
      </button>

      {/* Sidebar */}
      <motion.div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg border-r border-gray-200 dark:bg-darkBgMain dark:border-darkBorder z-40 overflow-hidden flex flex-col`}
        initial={{ width: isMenuOpen ? (isSmallScreen ? "0" : "3rem") : "0" }}
        animate={{
          width: isMenuOpen
            ? isSmallScreen
              ? "16rem"
              : "12rem"
            : isSmallScreen
            ? "0"
            : "3rem",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {/* Adjusted top margin to prevent overlap with toggle button */}
        <nav className="flex-grow flex flex-col space-y-2 p-2 mt-16">
          <AnimatePresence>
            {menuData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.type === "dropdown" ? (
                  <SideMenuDropdownTwo
                    data={item}
                    isExpanded={isMenuOpen}
                    isSmallScreen={isSmallScreen}
                    handleMenuToggle={handleMenuToggle}
                    className="w-full"
                  />
                ) : (
                  <NavLink
                    to={item.link}
                    className={({ isActive }) =>
                      `flex items-center p-2 rounded-lg text-sm ${
                        isActive
                          ? "bg-gray-100 text-gray-700 dark:bg-darkBgChild dark:text-darkTextWhite"
                          : "text-gray-700 hover:bg-gray-100 dark:text-darkTextChild dark:hover:bg-darkBgChild"
                      } transition-colors`
                    }
                  >
                    <span className="mr-3">{item.icon}</span>
                    <AnimatePresence>
                      {isMenuOpen && (
                        <motion.span
                          initial={{ opacity: 0, width: 0 }}
                          animate={{ opacity: 1, width: "auto" }}
                          exit={{ opacity: 0, width: 0 }}
                          className="whitespace-nowrap overflow-hidden"
                        >
                          {item.label}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </NavLink>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </nav>
      </motion.div>
    </>
  );
};

export default SideMenuTwo;
