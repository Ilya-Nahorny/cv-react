// React and external libraries
import React from "react";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Components
import Helmet from "../components/Helmet/Helmet";
import AboutCard from "../components/About/AboutCard";
import SkillsCard from "../components/About/SkillsCard";
import EducationCard from "../components/About/EducationCard";
import ExperienceCard from "../components/About/ExperienceCard";
import CertificationsCard from "../components/About/CertificationsCard";
import TestimonialsCard from "../components/About/TestimonialsCard";
import AboutTitle from "../components/About/AboutTitle";

// Data
import helmetData from "../components/Helmet/data/helmet";
import education from "../components/About/data/education";
import experience from "../components/About/data/experience";
import certifications from "../components/About/data/certifications";
import skills from "../components/About/data/skills";
import testimonials from "../components/About/data/testimonials";
import aboutData from "../components/About/data/about";

const About = () => {
  return (
    <>
      {/* Helmet component to set the page title and meta description */}
      <Helmet title={helmetData.cv.title} desc={helmetData.cv.desc} />
      
      {/* Motion wrapper for animations */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        {/* About section card */}
        <AboutCard />

        <div className="mt-4 py-6 px-0">
          {/* Title for the skills section */}
          <AboutTitle image={aboutData[0].image} text={aboutData[0].text} />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {/* Mapping through skills data and rendering SkillsCard components */}
            {skills &&
              skills.map((item, index) => {
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 0.5 }}
                  >
                    <SkillsCard item={item} />
                  </motion.div>
                );
              })}
          </div>
        </div>

        <div className="mt-4 py-6 px-0">
          {/* Title for the experience section */}
          <AboutTitle image={aboutData[1].image} text={aboutData[1].text} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Mapping through experience data and rendering ExperienceCard components */}
            {experience &&
              experience.map((item, index) => {
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 0.5 }}
                  >
                    <ExperienceCard item={item} />
                  </motion.div>
                );
              })}
          </div>
        </div>

        <div className="mt-4 py-6 px-0">
          {/* Title for the education section */}
          <AboutTitle image={aboutData[2].image} text={aboutData[2].text} />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Mapping through education data and rendering EducationCard components */}
            {education &&
              education.map((item, index) => {
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 0.5 }}
                  >
                    <EducationCard item={item} />
                  </motion.div>
                );
              })}
          </div>
        </div>

        <div className="mt-4 py-6 px-0">
          {/* Title for the certifications section */}
          <AboutTitle image={aboutData[3].image} text={aboutData[3].text} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Mapping through certifications data and rendering CertificationsCard components */}
            {certifications &&
              certifications.map((item, index) => {
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 0.5 }}
                  >
                    <CertificationsCard item={item} />
                  </motion.div>
                );
              })}
          </div>
        </div>

        <div className="mt-4 px-0">
          {/* Title for the testimonials section */}
          <AboutTitle image={aboutData[4].image} text={aboutData[4].text} />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Mapping through testimonials data and rendering TestimonialsCard components */}
            {testimonials &&
              testimonials.map((item, index) => {
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 0.5 }}
                  >
                    <TestimonialsCard item={item} />
                  </motion.div>
                );
              })}
          </div>
        </div>

        <div className="mb-10"></div> {/* Empty space at the bottom */}
      </motion.div>
    </>
  );
};

export default About;
