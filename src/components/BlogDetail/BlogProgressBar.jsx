import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const BlogProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;
    const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;
    setScrollProgress(scrollPercent);
  };
 
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div 
      style={{
        height: "6px",
        width: "100%",
        backgroundColor: "var(--light-color)",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
      }}
      className="dark:!bg-darkBgChild"
      animate={{ width: `${scrollProgress}%` }}
      transition={{ duration: 0.2 }}
    />
  );
};

export default BlogProgressBar;
