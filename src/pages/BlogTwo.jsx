// React and external libraries
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

// Components
import Helmet from "../components/Helmet/Helmet"; // For managing document head
import PageTitle from "../components/Titles/PageTitle"; // For page titles
import BlogCardOne from "../components/Blog/BlogCardOne"; // Blog card component
import Input from "../components/FormComponents/Input"; // Input field component

// Data
import helmet from "../components/Helmet/data/helmet"; // Helmet data for SEO
import pageTitle from "../components/Titles/data/pageTitle"; // Page title data
import blogData from "../components/Blog/data/blog"; // Blog data

// Icons
import { FaChevronDown, FaClock, FaSpinner, FaTag } from "react-icons/fa"; // Icons for the blog

const BlogTwo = () => {
  const [visibleItems, setVisibleItems] = useState(3); // Number of visible blog items
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const itemsPerLoad = 3; // Items to load on button click
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm(); // Form handling with react-hook-form

  const loadMoreItems = () => {
    setIsLoading(true); // Set loading state
    setTimeout(() => {
      setVisibleItems((prevVisibleItems) => prevVisibleItems + itemsPerLoad); // Increase visible items
      setIsLoading(false); // Reset loading state
    }, 1000);
  };

  // Get recent posts (last 3)
  const recentPosts = blogData.slice(0, 3); // Slice for recent posts

  // Get unique categories
  const categories = [...new Set(blogData.map((post) => post.category))]; // Unique categories

  const onSubmit = (data) => {
    console.log("Search query:", data.search); // Log search query
    reset(); // Reset form
  };

  return (
    <>
      <Helmet title={helmet.blog.title} desc={helmet.blog.desc} /> {/* Set SEO for page */}

      <div className="flex flex-col lg:flex-row">
        {/* Main content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }} // Fade in animation
          className="w-full lg:w-3/4 pr-0 lg:pr-8"
        > 
          <PageTitle title={pageTitle.blog2.title} desc={pageTitle.blog2.desc} /> {/* Page title */}

          {/* Second grid of blog cards */}
          <motion.div
            key={`blogOne-${visibleItems}`}
            className="grid grid-cols-1 md:grid-cols-1 gap-6 mb-12"
          >
            {blogData.slice(0, visibleItems).map((post, index) => (
              <motion.div key={index}>
                <BlogCardOne item={post} /> {/* Render blog card */}
              </motion.div>
            ))}
          </motion.div>

          {/* Load More button */}
          {visibleItems < blogData.length && (
            <div className="flex justify-center mt-12 mb-8">
              <motion.button
                onClick={loadMoreItems}
                className="px-6 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 dark:bg-darkBgChild dark:border-darkBorder dark:text-darkTextMain dark:hover:bg-darkBgMain"
                whileHover={{ scale: 1.05 }} // Button hover effect
                whileTap={{ scale: 0.95 }} // Button tap effect
                disabled={isLoading}
              >
                {isLoading ? (
                  <FaSpinner className="animate-spin h-3 w-3 text-gray-700" />
                ) : (
                  <span className="flex items-center text-sm">
                    Load More
                    <FaChevronDown className="ml-2" />
                  </span>
                )}
              </motion.button>
            </div>
          )}
        </motion.div>

        {/* Sidebar */}
        <motion.div
          className="w-full lg:w-1/4 mt-12 lg:mt-0"
          style={{ position: "sticky", top: "2rem", height: "fit-content" }} // Sticky sidebar
        >
          <div className="bg-white dark:bg-darkBgMain p-6 rounded-lg shadow-sm mb-4">
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-2 text-gray-700 dark:text-darkTextMain">
                Search
              </h3>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col sm:flex-row items-center"
              >
                <div className="w-full sm:w-64 mr-2 mb-2 sm:mb-0">
                  <Input
                    placeholder="Search posts..."
                    name="search"
                    register={register("search", {
                      required: "Search query is required.", // Error message
                    })}
                    error={errors.search}
                  />
                </div>
              </form>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4 text-gray-700 dark:text-darkTextMain">
                Recent Posts
              </h3>
              <div className="space-y-4">
                {recentPosts.map((post, index) => (
                  <Link
                    key={index}
                    to={`/blog-detail/${post.slug}`}
                    className="group"
                  >
                    <div className="flex items-center space-x-3 p-3 my-4 bg-gray-50 dark:bg-darkBgChild rounded-lg transition-all duration-300 group-hover:bg-blue-50 dark:group-hover:bg-darkBgMain">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                      <div>
                        <h4 className="text-sm font-medium text-gray-800 dark:text-darkTextMain transition-colors duration-300">
                          {post.title}
                        </h4>
                        <p className="text-xs text-gray-500 dark:text-darkTextChild mt-1 flex items-center">
                          <FaClock className="mr-1" /> {post.date}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4 text-gray-700 dark:text-darkTextMain">
                Categories
              </h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <Link
                    key={index}
                    to={`/category/${category}`}
                    className="px-3 py-1 text-sm bg-gray-100 dark:bg-darkBgChild text-gray-600 dark:text-darkTextChild rounded-full hover:bg-blue-100 dark:hover:bg-darkBgMain hover:text-blue-600 dark:hover:text-darkHref transition-all duration-300"
                  >
                    <span className="flex items-center">
                      <FaTag className="mr-1" />
                      {category}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default BlogTwo;