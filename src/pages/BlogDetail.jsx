import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FaRegUserCircle, FaRegCalendarAlt } from "react-icons/fa";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import parse from "html-react-parser";

// Components
import Helmet from "../components/Helmet/Helmet";
import CommentForm from "../components/BlogDetail/CommentForm";
import CommentsList from "../components/BlogDetail/CommentList";
import BlogProgressBar from "../components/BlogDetail/BlogProgressBar"; 

// Data
import blogData from "../components/Blog/data/blog";

// Pages
import Error from "./Error";

const BlogDetail = () => {
  const { slug } = useParams(); // Extract the slug parameter from the URL

  const blogs = blogData.find((item) => item.slug === slug); // Find the blog by its slug

  const [lightboxOpen, setLightboxOpen] = useState(false); // State for controlling the lightbox
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // State to track the current image index in the lightbox

  // Handle image click to open lightbox and set the current image index
  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  // Function to handle comment submission
  const onCommentSubmit = (newComment) => {
    console.log(newComment);
  };

  // If no blog is found, return an error page
  if (!blogs) {
    return <Error />;
  }

  // Transform function to handle the rendering of images in blog content
  const transform = (node) => {
    if (node.type === "tag" && node.name === "img") {
      const index = images.findIndex((img) => img === node.attribs.src); // Find the index of the clicked image
      return (
        <img
          src={node.attribs.src}
          alt={node.attribs.alt || ""}
          className="w-full md:h-[500px] object-cover cursor-pointer rounded-lg"
          onClick={() => handleImageClick(index)} // Open lightbox when image is clicked
        />
      );
    }
  };

  // Extract all image URLs from the blog content
  const extractImages = (htmlContent) => {
    const images = [];
    parse(htmlContent, {
      replace: (node) => {
        if (node.type === "tag" && node.name === "img") {
          if (!images.includes(node.attribs.src)) {
            images.push(node.attribs.src); // Add the image source if it doesn't already exist in the array
          }
        }
      },
    });
    return images;
  };

  // Extract the images from the blog content
  const images = extractImages(blogs.content);

  return (
    <>
      {/* Helmet component to set the page title and meta description */}
      <Helmet title={blogs.title} desc={blogs.desc} />

      {/* Blog progress bar */}
      <BlogProgressBar /> 

      {/* Motion wrapper for animations */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-6 px-0"
      >
        <div className="bg-white rounded-lg shadow-lg dark:bg-darkBgMain">
          
          {/* Blog header section */}
          <div className="relative min-h-96 py-12 rounded-t-lg flex items-center justify-center">
            <div
              className="absolute inset-0 bg-cover bg-center rounded-t-lg"
              style={{ backgroundImage: `url(${blogs.image})` }}
            ></div>

            <div className="absolute inset-0 bg-black bg-opacity-60 rounded-t-lg"></div>

            <div className="relative mx-auto max-w-3xl space-y-6 text-center p-4 rounded-lg">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white dark:text-darkTextMain">
                {blogs.title}
              </h2>

              {/* Author and date section */}
              <div className="text-gray-300 flex gap-2 justify-center items-center text-sm dark:text-darkTextChild">
                <div className="flex items-center gap-2">
                  <FaRegUserCircle />
                  {blogs.author}
                </div>
                {" - "}
                <div className="flex items-center gap-2">
                  <FaRegCalendarAlt />
                  {blogs.date}
                </div>
              </div>
            </div>
          </div>

          {/* Blog content */}
          <div className="bg-white p-4 px-4 md:px-28 rounded-lg border-b rounded-b-none dark:bg-darkBgMain dark:border-darkBorder">
            <div>{parse(blogs.content, { replace: transform })}</div>
            
            {/* Blog tags */}
            <div className="my-4">
              {blogs.tags && blogs.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {blogs.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm dark:bg-darkBgChild dark:text-darkTextMain"
                    >
                      {tag.text}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Comments section */}
          <CommentsList comments={blogs.comments} />
          <CommentForm onCommentSubmit={onCommentSubmit} />
        </div>
      </motion.div>

      {/* Lightbox for images */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        plugins={[Zoom]}
        slides={images.map((src) => ({ src }))}
        index={currentImageIndex}
      />
    </>
  );
};

export default BlogDetail;