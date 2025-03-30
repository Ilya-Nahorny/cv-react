// React and external libraries
import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom"; // Import useLocation
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import parse from "html-react-parser";

// Components
import PricingCardOne from "../components/Services/PricingCardOne";
import FaqsCard from "../components/Services/FaqsCard";
import PageTitle from "../components/Titles/PageTitle";

// Data
import services from "../components/Services/data/services";

// Pages
import Error from "./Error";

const ServiceDetail = () => {
  const { slug } = useParams(); // Get the service slug from the URL
  const location = useLocation(); // Use useLocation to access the current URL

  const servicesData = services.find((item) => item.slug === slug); // Find the service by its slug

  const [lightboxOpen, setLightboxOpen] = useState(false); // State to control Lightbox visibility
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // State to track the initial image index for Lightbox

  // Handle image click to open Lightbox
  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  // Scroll to the element specified by the URL hash
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100); 
      }
    }
  }, [location.hash]);

  // If service data is not found, show an error page
  if (!servicesData) {
    return <Error />;
  }

  // Transform function to handle rendering of images in service content
  const transform = (node) => {
    if (node.type === "tag" && node.name === "img") {
      const index = images.findIndex((img) => img === node.attribs.src); // Find the image index for Lightbox
      return (
        <img
          src={node.attribs.src}
          alt={node.attribs.alt || ""}
          className="w-full md:h-[500px] object-cover cursor-pointer rounded-lg"
          onClick={() => handleImageClick(index)} // Open Lightbox on image click
        />
      );
    }
  };

  // Extract images from service content
  const extractImages = (htmlContent) => {
    const images = [];
    parse(htmlContent, {
      replace: (node) => {
        if (node.type === "tag" && node.name === "img") {
          if (!images.includes(node.attribs.src)) {
            images.push(node.attribs.src); // Add image source if not already included
          }
        }
      },
    });
    return images;
  };

  const images = extractImages(servicesData.content); // Extract images from service content

  return (
    <>
      {/* Helmet component to set the page title and meta description */}
      <Helmet title={servicesData.name} desc={servicesData.summary} />

      {/* Motion wrapper for animations */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        {/* Service header with background image */}
        <div className="relative min-h-96 rounded-t-lg flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center rounded-t-lg"
            style={{ backgroundImage: `url(${servicesData.image})` }}
          ></div>
          <div className="absolute inset-0 bg-black bg-opacity-60 rounded-t-lg"></div>
          <div className="relative mx-auto max-w-3xl space-y-4 text-center p-4 rounded-lg">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
              {servicesData.name}
            </h2>
          </div>
        </div>

        {/* Service content */}
        <div className="bg-white p-4 px-4 md:px-28 rounded-b-lg mb-10 dark:bg-darkBgMain">
          {parse(servicesData.content, { replace: transform })} {/* Parse and display service content */}
        </div>

        {/* Pricing table if available */}
        <div id="pricingTable">
          <PageTitle title="Pricing Plan" desc="All plans and %30 discount" />
        </div>
        {servicesData.isPricing && (
          <PricingCardOne servicesData={servicesData} />
        )}

        {/* FAQ section if available */}
        {servicesData.isFaqs && <FaqsCard faqsList={servicesData.faqs} />}

        <div className="mb-10"></div>
      </motion.div>

      {/* Lightbox for images */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        plugins={[Zoom]} // Zoom plugin for Lightbox
        slides={images.map((src) => ({ src }))}
        index={currentImageIndex}
      />
    </>
  );
};

export default ServiceDetail;