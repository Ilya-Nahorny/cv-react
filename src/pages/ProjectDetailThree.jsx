// React and external libraries
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox"; // Lightbox for image gallery
import "yet-another-react-lightbox/styles.css"; // Lightbox styles
import Zoom from "yet-another-react-lightbox/plugins/zoom"; // Lightbox zoom plugin
import Slider from "react-slick"; // Slider component for image gallery
import "slick-carousel/slick/slick.css"; // Slider styles
import "slick-carousel/slick/slick-theme.css"; // Slider theme styles
import parse from "html-react-parser"; // HTML parser for rendering content
import { IoMdCheckmark } from "react-icons/io"; // Checkmark icon

// Components
import Helmet from "../components/Helmet/Helmet"; // For managing document head
import projectsData from "../components/Projects/data/projectsData"; // Project data

const ProjectDetailThree = () => {
  const { slug } = useParams(); // Get the project slug from the URL
  const project = projectsData.items.find((item) => item.slug === slug); // Find the project by its slug

  const [open, setOpen] = useState(false); // State to control Lightbox visibility
  const [initialIndex, setInitialIndex] = useState(0); // State to track the initial image index for Lightbox

  // If project is not found, display an error message
  if (!project) {
    return <div>Error: Project not found</div>;
  }

  const additionalImages = project.additionalImages || []; // Get additional images if available

  // Handle image click to open Lightbox
  const handleImageClick = (index) => {
    setInitialIndex(index);
    setOpen(true);
  };

  const images = [
    { src: project.imageDetailsPage }, // Main image
    ...additionalImages.map((src) => ({ src })), // Additional images
  ];

  return (
    <>
      {/* Helmet component to set the page title and meta description */}
      <Helmet title={project.title} desc={project.descTabMenu} />

      {/* Motion wrapper for animations */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="rounded-lg"
      >
        <div className="bg-white dark:bg-darkBgMain p-6 rounded-lg shadow-lg mb-10">
          {/* Title and Visual Area */}
          <div className="relative mb-10">
            <img
              src={project.imageDetailsPage}
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              alt={project.title}
              onClick={() => handleImageClick(0)} // Open Lightbox on image click
            />
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 text-white text-4xl font-bold rounded-b-lg"
            >
              {project.title}
            </motion.h1>
          </div>

          {/* Description Section */}
          <div className="mb-8">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-lg text-gray-600 dark:text-darkTextChild leading-relaxed"
            >
              {project.descTabMenu}
            </motion.p>
          </div>

          {/* Technologies and Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Key Features */}
            <div>
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl font-semibold mb-4 text-gray-600 dark:text-darkTextChild"
              >
                Key Features
              </motion.h2>
              <ul className="space-y-2 text-gray-600 dark:text-darkTextChild">
                {project.featuresList.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="flex items-center"
                  >
                    <IoMdCheckmark className="text-gray-600 dark:text-darkTextChild mr-2" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Technologies Used */}
            <div>
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl font-semibold mb-4 text-gray-600 dark:text-darkTextChild"
              >
                Technologies Used
              </motion.h2>
              <div className="flex flex-wrap gap-3">
                {project.technologiesTags.map((item, index) => (
                  <motion.span
                    key={index}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="inline-flex items-center bg-gray-200 dark:bg-darkBgChild text-gray-800 dark:text-darkTextMain rounded-lg px-3 py-2 text-sm shadow-sm"
                  >
                    <img src={item.image} alt="" className="w-6 h-6" />
                  </motion.span>
                ))}
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="mb-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="prose dark:prose-dark max-w-none"
            >
              {parse(project.content)} {/* Parse and display project content */}
            </motion.div>
          </div>

          {/* Gallery Section */}
          {additionalImages.length > 0 && (
            <div className="mb-8">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl font-semibold mb-4 text-gray-600 dark:text-darkTextChild"
              >
                Gallery
              </motion.h2>
              <Slider
                arrows={false}
                dots={false}
                infinite={false}
                slidesToShow={4}
                slidesToScroll={1}
                responsive={[{
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  },
                }]}
              >
                {additionalImages.map((image, index) => (
                  <motion.img
                    key={index}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    src={image}
                    className="w-[150px] h-[150px] object-cover cursor-pointer rounded-lg shadow-md"
                    alt={`${project.title} - Additional Image ${index + 1}`}
                    onClick={() => handleImageClick(index + 1)} // Open Lightbox on gallery image click
                  />
                ))}
              </Slider>
            </div>
          )}
        </div>

        {/* Lightbox for images */}
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          plugins={[Zoom]}
          slides={images}
          index={initialIndex}
        />
      </motion.div>
    </>
  );
};

export default ProjectDetailThree;