// React and external libraries
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Lightbox from "yet-another-react-lightbox"; // Lightbox for image gallery
import "yet-another-react-lightbox/styles.css"; // Lightbox styles
import Zoom from "yet-another-react-lightbox/plugins/zoom"; // Lightbox zoom plugin
import "slick-carousel/slick/slick.css"; // Slider styles
import "slick-carousel/slick/slick-theme.css"; // Slider theme styles
import parse from "html-react-parser"; // HTML parser for rendering content
import { IoMdCheckmark } from "react-icons/io"; // Checkmark icon
import { FaExternalLinkAlt, FaGithub, FaYoutube } from "react-icons/fa"; // External link icons
import { AiFillStar } from "react-icons/ai"; // Star icon

// Components
import Helmet from "../components/Helmet/Helmet"; // For managing document head
import projectsData from "../components/Projects/data/projectsData"; // Project data

const ProjectDetailTwo = () => {
  const { slug } = useParams(); // Get the project slug from the URL
  const [project, setProject] = useState(null); // State to store project data
  const [open, setOpen] = useState(false); // State to control Lightbox visibility
  const [initialIndex, setInitialIndex] = useState(0); // State to track the initial image index for Lightbox

  useEffect(() => {
    const foundProject = projectsData.items.find((item) => item.slug === slug); // Find project by slug
    setProject(foundProject); // Set project state
  }, [slug]);

  // If project is not found, display an error message
  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <Link to="/projects" className="text-blue-500 hover:underline">
          Return to Projects
        </Link>
      </div>
    );
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
      <Helmet title={project.title} desc={project.descTabMenu} /> {/* Helmet for SEO */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="my-6"
      > 

        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden mb-10">
          <div className="relative h-[60vh]">
            <img
              src={project.imageDetailsPage}
              alt={project.title}
              className="w-full h-full object-cover"
              onClick={() => handleImageClick(0)} // Open Lightbox on main image click
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <h1 className="text-5xl font-bold text-white mb-4 shadow-text">{project.title}</h1>
              <p className="text-2xl text-gray-200 shadow-text">{project.descTabMenu}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 p-8">
            <div className="lg:col-span-2 space-y-12">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Project Overview</h2>
                <div className="text-gray-700 dark:text-gray-300">
                  {parse(project.content)} {/* Parse and display project content */}
                </div>
              </section>

              <section className="border-t border-gray-300 pt-4">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Key Features</h2>
                <ul className="space-y-2">
                  {project.featuresList.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="text-gray-700 dark:text-gray-400 text-base flex items-center"
                    >
                      <IoMdCheckmark className="mr-2" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </section>

              {additionalImages.length > 0 && (
                <section>
                  <h2 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-white border-b-2 border-gray-200 pb-2">Project Gallery</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                    <AnimatePresence>
                      {additionalImages.map((image, index) => (
                        <motion.img
                          key={index}
                          src={image}
                          alt={`${project.title} - Image ${index + 1}`}
                          className="w-full h-48 object-cover rounded-lg cursor-pointer shadow-md"
                          onClick={() => handleImageClick(index + 1)} // Open Lightbox on gallery image click
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                        />
                      ))}
                    </AnimatePresence>
                  </div>
                </section>
              )}
            </div>

            <div className="space-y-6">
              <section className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-100 dark:border-gray-700">
                <h2 className="text-lg font-medium mb-3 text-gray-800 dark:text-white">Project Overview</h2>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 dark:text-gray-400">Duration</span>
                    <span className="text-gray-700 dark:text-gray-200">6 months</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 dark:text-gray-400">Team Size</span>
                    <span className="text-gray-700 dark:text-gray-200">5 members</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 dark:text-gray-400">Client Satisfaction</span>
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <AiFillStar key={star} className="text-yellow-400 w-3 h-3" />
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 dark:text-gray-400">Budget</span>
                    <span className="text-gray-700 dark:text-gray-200">$50,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 dark:text-gray-400">Status</span>
                    <span className="text-green-500">Completed</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 dark:text-gray-400">Last Updated</span>
                    <span className="text-gray-700 dark:text-gray-200">2 weeks ago</span>
                  </div>
                </div>
              </section>

              <section className="mb-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Technologies</h3>
                <div className="flex flex-wrap">
                  {project.technologiesTags.map((tech, index) => (
                    <motion.span
                      key={index}
                      className="inline-flex items-center px-2 py-1 font-medium"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <img src={tech.image} alt={tech.name} className="w-6 h-6 " />
                      {tech.name}
                    </motion.span>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Links</h3>
                <div className="space-y-2">
                  {project.links.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.link}
                      rel="noopener noreferrer"
                      className="flex items-center px-3 py-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-white text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300 border border-gray-200 dark:border-gray-700"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.icon}
                      <span className="ml-2">{link.linkTitle}</span>
                      <FaExternalLinkAlt className="ml-auto text-xs" />
                    </motion.a>
                  ))}
                  <motion.a
                    href="#"
                    rel="noopener noreferrer"
                    className="flex items-center px-3 py-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-white text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300 border border-gray-200 dark:border-gray-700"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaGithub className="mr-2 text-sm" />
                    <span>Source Code</span>
                    <FaExternalLinkAlt className="ml-auto text-xs" />
                  </motion.a>
                  <motion.a
                    href="#"
                    rel="noopener noreferrer"
                    className="flex items-center px-3 py-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-white text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300 border border-gray-200 dark:border-gray-700"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaYoutube className="mr-2 text-sm" />
                    <span>Demo Video</span>
                    <FaExternalLinkAlt className="ml-auto text-xs" />
                  </motion.a>
                </div>
              </section>
            </div>
          </div>

          {/* Lightbox for images */}
          <Lightbox
            open={open}
            close={() => setOpen(false)}
            plugins={[Zoom]}
            slides={images}
            index={initialIndex}
          />
        </div>
      </motion.div>
    </>
  );
};

export default ProjectDetailTwo;