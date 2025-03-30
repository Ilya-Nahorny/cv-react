// React and external libraries
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Redux actions
import { acceptCookie, declineCookie } from "../../redux/cookieSlice";

const CookieBar = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const accepted = useSelector((state) => state.cookie.accepted);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!accepted && localStorage.getItem("cookieAccepted") === null) {
        setOpen(true);
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [accepted]);

  const handleAccept = () => {
    dispatch(acceptCookie());
    setOpen(false);
  };

  const handleDecline = () => {
    dispatch(declineCookie());
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="max-w-max mx-auto fixed bottom-4 bg-white inset-x-5 p-5 rounded-lg drop-shadow-2xl flex gap-10 flex-wrap md:flex-nowrap text-center md:text-left items-center justify-center md:justify-between z-[60] dark:bg-darkBgMain"
        >
          <div className="w-full dark:text-darkTextMain">
            This website uses cookies to ensure{" "}
            <Link
              to="#"
              className="text-lightBg whitespace-nowrap hover:underline dark:text-darkHref"
            >
              Learn more
            </Link>{" "}
            you get the best experience on our website.
          </div>
          <div className="flex gap-4 items-center flex-shrink-0">
            <button
              onClick={handleDecline}
              className="text-lightBg focus:outline-none hover:underline dark:text-darkTextMain"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="bg-lightBg px-5 py-2 text-white rounded-md hover:opacity-80 focus:outline-none dark:bg-darkBgChild dark:text-darkTextMain"
            >
              Allow Cookies
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBar;
