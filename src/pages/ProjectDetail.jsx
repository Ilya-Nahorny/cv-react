// React and external libraries
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import parse from "html-react-parser";

// Components
import Helmet from "../components/Helmet/Helmet";
import Heading from "../components/Titles/Heading";
import Button from "../components/FormComponents/Button";

// Data
import projectsData from "../components/Projects/data/projectsData";

// Pages
import Error from "../pages/Error";

const ProjectDetail = () => {
  const { slug } = useParams(); // Get the project slug from the URL

  const project = projectsData.items.find((item) => item.slug === slug); // Find the project by its slug

  const [open, setOpen] = useState(false); // State to control Lightbox visibility
  const [initialIndex, setInitialIndex] = useState(0); // State to track the initial image index for Lightbox

  // If project is not found, show Error page
  if (!project) {
    return <Error />;
  }

  const additionalImages = project.additionalImages || []; // Get additional images, if any

  // Handle image click to open Lightbox
  const handleImageClick = (index) => {
    setInitialIndex(index);
    setOpen(true);
  };

  const images = [
    { src: project.imageDetailsPage }, // Main project image
    ...additionalImages.map((src) => ({ src })), // Additional images
  ];

  let settingsSkills = {
    dots: false,
    arrows: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <>
      {/* Helmet component to set the page title and meta description */}
      <Helmet title={project.title} desc={project.descTabMenu} />

      {/* Motion wrapper for animations */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-white p-8 px-5 grid grid-cols-1 lg:grid-cols-2 gap-6 rounded-lg md:h-auto overflow-hidden shadow-lg mb-10 dark:bg-darkBgMain"
      >
        {/* Image and Lightbox section */}
        <div className="mb-2 md:mb-0">
          <Lightbox
            open={open}
            close={() => setOpen(false)}
            plugins={[Zoom]} // Zoom plugin for Lightbox
            slides={images} // Images for Lightbox
            index={initialIndex} // Initial image index for Lightbox
          />
          <img
            src={project.imageDetailsPage}
            className="h-[285px] md:h-[550px] rounded-lg border border-gray-200 object-cover cursor-pointer"
            style={{ width: "calc(100% - 12px)" }}
            alt={project.title}
            onClick={() => handleImageClick(0)} // Open Lightbox on image click
          />
          
          {/* Display additional images if available */}
          {additionalImages.length > 0 && (
            <div className="mt-3">
              <Slider {...settingsSkills}>
                {additionalImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    className="w-full h-[160px] object-cover cursor-pointer rounded-lg border border-gray-200"
                    alt={`${project.title} - Additional Image ${index + 1}`}
                    onClick={() => handleImageClick(index + 1)} // Open Lightbox on additional image click
                  />
                ))}
              </Slider>
            </div>
          )}
        </div>

        {/* Project details and links section */}
        <div className="space-y-6">
          <div>
            <Heading className="mb-2">{project.title}</Heading>
            <div className="lg:max-h-[310px] overflow-y-auto">
              <div>{parse(project.content)}</div> {/* Parse and display project content */}
            </div>
          </div>

          {/* Technologies used in the project */}
          <div>
            <Heading level={4} className="mb-2">
              {project.tagsHead}
            </Heading>

            <div className="flex flex-wrap items-center gap-3">
              {project.technologiesTags.map((item, index) => (
                <span
                  key={index}
                  className="text-xl font-medium bg-white border border-gray-200 shadow-sm text-white rounded flex justify-center items-center dark:bg-darkBgChild dark:text-darkTextMain w-12 h-12 dark:border-darkBorder"
                >
                  <img src={item.image} alt="" className=" w-6 h-6" />
                </span>
              ))}
            </div>
          </div>

          {/* Links related to the project */}
          <div>
            <Heading level={4} className="mb-2">
              {project.linkHead}
            </Heading>
            <div className="flex items-center gap-3 flex-wrap">
              {project.links.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Button url={`${item.link}`}>
                    {item.icon}
                    {item.linkTitle}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ProjectDetail;