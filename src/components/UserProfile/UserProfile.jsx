// React and external libraries
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import "flag-icons/css/flag-icons.min.css";
import { TypeAnimation } from "react-type-animation";
import Stories from "react-insta-stories";
import { HiOutlineLocationMarker } from "react-icons/hi";
import {  MdOutlinePhoneAndroid,  MdDarkMode,  MdOutlineDarkMode } from "react-icons/md";
import { FaLinkedinIn, FaCodepen, FaDownload } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { IoIosClose } from "react-icons/io";
import { BiBasket } from "react-icons/bi";
 
// Components
import Button from "../FormComponents/Button";
import Menu from "../Menu/MenuOne/Menu";

// Redux actions
import { themeChange } from "../../redux/darkModeSlice";

// Data
import stories from "./storiesData/stories";

// i18n
import { supportedLngs } from "../../i18n";

const UserProfile = ({ isMainMenu }) => {
  const { t, i18n } = useTranslation();
  const currentlanguage = i18n.language;
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLanguageChange = async (language) => {
    await i18n.changeLanguage(language);
    setIsOpen(false);
  };

  const social = [
    {
      icon: <HiOutlineLocationMarker />,
      text: "San Francisco, CA",
      url: "#",
      hover: false,
    },
    {
      icon: <MdOutlinePhoneAndroid />,
      text: "+123 4567 9890",
      url: "tel:+5555555555",
      hover: true,
    },
    {
      icon: <FaLinkedinIn />,
      text: "penelopeis",
      url: "https://www.linkedin.com/",
      hover: true,
    },
    {
      icon: <FiGithub />,
      text: "penelopeis",
      url: "https://github.com/",
      hover: true,
    },
    {
      icon: <FaCodepen />,
      text: "is.penelope",
      url: "https://codepen.io/",
      hover: true,
    },
  ];

  const dispatch = useDispatch();
  let themeStatus = useSelector((state) => state.theme.theme);

  const handleClick = () => {
    dispatch(themeChange());
  };

  const [dimensions, setDimensions] = useState({
    width: "500px",
    height: "800px",
  });

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

  const handleStoryEnd = () => {
    setIsModalOpen(false);
  };

  const { items } = useSelector((state) => state.cart);

  return (
    <>
      <div className="bg-white dark:bg-darkBgMain flex flex-col lg:flex-row items-center py-10 px-5 rounded-lg mb-5 relative shadow-lg">
        <div className="mb-10 sm:mb-0 sm:absolute top-10 right-5 flex items-center gap-2">
          <button
            onClick={() => handleClick()}
            className="inline-flex items-center justify-center rounded-md border w-[50px] h-[35px] border-gray-300 shadow-sm bg-white text-gray-700 hover:bg-gray-50 focus:outline-none dark:bg-darkBgChild dark:text-darkTextMain dark:border-darkBorder"
          >
            {themeStatus === "dark" ? (
              <MdDarkMode size={22} />
            ) : (
              <MdOutlineDarkMode size={22} />
            )}
          </button>

          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-md border w-[50px] h-[35px] border-gray-300 shadow-sm bg-white text-gray-700 hover:bg-gray-50 focus:outline-none dark:bg-darkBgChild dark:text-darkTextMain dark:border-darkBorder"
              aria-expanded={isOpen}
            >
              <span className={`fi fi-${currentlanguage}`}></span>
            </button>
            {isOpen && (
              <div
                className="origin-top-right absolute left-0 mt-2 max-w-max rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10 dark:bg-darkBgChild dark:text-darkTextWhite overflow-hidden dark:border dark:border-darkBorder"
                role="menu"
                aria-orientation="vertical"
              >
                <div className="grid grid-cols-1" role="none">
                  {supportedLngs.map((language, index) => (
                    <button
                      key={index}
                      onClick={() => handleLanguageChange(language)}
                      className={`${currentlanguage === language
                        ? "bg-gray-100 dark:bg-darkBgMain  text-gray-900"
                        : "text-gray-700"
                        }  px-4 py-3 text-sm text-start items-center inline-flex hover:bg-gray-100 dark:hover:bg-darkBgMain ${index % 2 === 0 ? "rounded-r" : "rounded-l"
                        }`}
                      role="menuitem"
                    >
                      <span className={`fi fi-${language}`}></span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="relative inline-block">
            <Link
              to="/cart"
              className="inline-flex items-center justify-center rounded-md border w-[50px] h-[35px] border-gray-300 shadow-sm bg-white text-gray-700 hover:bg-gray-50 focus:outline-none dark:bg-darkBgChild dark:text-darkTextMain dark:border-darkBorder"
            >
              <BiBasket size={22} />
            </Link>
            {items.length > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-lightBg dark:bg-darkBgMain dark:border dark:border-darkBorder rounded-full transform translate-x-1/2 -translate-y-1/2">
                {items.length}
              </span>
            )}
          </div>
        </div>
        <div
          className="w-[240px]  md:w-[351px] flex justify-center lg:mb-0 mb-8 cursor-pointer mx-12"
          onClick={() => setIsModalOpen(true)}
        >
          <div className="relative inline-block p-[10px] bg-transparent gradient w-[240px] h-[240px]">
            <img 
              src="/images/profile/240x240.svg"
              alt="avatar"
              className="rounded-full object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold dark:text-darkTextMain">
              Isabella Penelope
            </h2>

            <span className="text-lightBg font-medium dark:text-darkTextMain">
              <TypeAnimation
                sequence={[
                  "I am Frontend Developer",
                  500,
                  "I am JavaScript Expert",
                  500,
                  "I am React Developer",
                  500,
                  "I specialize in C#",
                  500,
                ]}
                repeat={Infinity}
              />

            </span>
          </div>
          <span className="text-sm text-gray-500 dark:text-darkTextChild">
            {
              t("desc")
            }
          </span>
          <div className="flex flex-col md:flex-row gap-4 mb-2">
            {social.map((item, index) => (
              <Link
                to={item.url}
                key={index}
                className={`flex items-center gap-2 text-sm text-gray-500 dark:text-darkTextMain ${item.hover ? "hover:underline" : "cursor-default"
                  }`}
              >
                {item.icon}
                {item.text}
              </Link>
            ))}
          </div>
          <div>
            <Button url="/path/cv.pdf">
              <FaDownload /> {t("cv_download")}
            </Button> 
          </div>
        </div> 

        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
              className="absolute inset-0 bg-black bg-opacity-75"
              onClick={() => setIsModalOpen(false)}
            ></div>
            <div
              className={`relative ${dimensions.width} ${dimensions.height}`}
            >
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
      </div>
      <Menu isMainMenu={true} />
    </>
  );
};

export default UserProfile;
