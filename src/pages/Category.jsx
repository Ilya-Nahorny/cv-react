// React and external libraries
import React, { useState } from "react";
import { motion } from "framer-motion";

// Components
import Helmet from "../components/Helmet/Helmet";
import PageTitle from "../components/Titles/PageTitle";
import BlogCardOne from "../components/Blog/BlogCardOne";
import BlogCardTwo from "../components/Blog/BlogCardTwo";
import Pagination from "../components/Pagination/Pagination";

// Data
import helmet from "../components/Helmet/data/helmet";
import pageTitle from "../components/Titles/data/pageTitle";
import blogData from "../components/Blog/data/blog";
import { useParams } from "react-router-dom";

const Category = () => {
  const { category } = useParams(); // Extract category parameter from the URL

  // Filter blog data based on the selected category
  const categoryData = blogData.filter((item) => item.category === category);

  const [currentPage, setCurrentPage] = useState(1); // State to manage the current page
  const itemsPerPage = 4; // Number of items per page
  const totalPages = Math.ceil(categoryData.length / itemsPerPage); // Calculate the total number of pages

  // Handle page change in pagination
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Get the items for the current page based on pagination
  const currentItems = categoryData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Animation container to stagger child animations
  const container = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Animation for individual items (blog posts)
  const item = {
    hidden: { y: 20, opacity: 0 }, // Initial hidden state
    visible: {
      y: 0,
      opacity: 1, // Visible state after animation
    },
  };

  return (
    <>
      {/* Helmet component to set the page title and meta description */}
      <Helmet title={"Category : " + category} desc={helmet.category.desc} />
      
      {/* Motion wrapper for animations */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        
        {/* Page title for the category */}
        <PageTitle
          title={category + " " + pageTitle.category.title}
          desc={pageTitle.category.desc}
        />

        {/* First grid of blog cards (BlogCardTwo) */}
        <motion.div
          key={`categoryThree-${currentPage}`}
          variants={container} // Animation container
          initial="hidden" // Initial hidden state for grid items
          animate="visible" // Animate to visible state
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10"
        >
          {currentItems &&
            currentItems.map((post, index) => {
              return (
                <motion.div variants={item} key={index}>
                  <BlogCardTwo item={post} key={index} /> {/* Render BlogCardTwo */}
                </motion.div>
              );
            })}
        </motion.div>

        {/* Repeat PageTitle for the second section */}
        <PageTitle
          title={category + " " + pageTitle.category.title}
          desc={pageTitle.category.desc}
        />

        {/* Second grid of blog cards (BlogCardOne) */}
        <motion.div
          key={`categoryOne-${currentPage}`}
          variants={container} // Animation container
          initial="hidden" // Initial hidden state for grid items
          animate="visible" // Animate to visible state
          className="grid grid-cols-1 gap-4"
        >
          {currentItems &&
            currentItems.map((post, index) => {
              return (
                <motion.div variants={item} key={index}>
                  <BlogCardOne item={post} key={index} /> {/* Render BlogCardOne */}
                </motion.div>
              );
            })}
        </motion.div>

        {/* Pagination component */}
        <Pagination
          currentPage={currentPage} // Current page number
          totalPages={totalPages} // Total number of pages
          onPageChange={handlePageChange} // Function to handle page change
        />
      </motion.div>
    </>
  );
};

export default Category;