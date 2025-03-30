// React and external libraries
import React from "react";
import { useForm } from "react-hook-form"; 
import { motion } from "framer-motion";  
import { RiMailSendLine } from "react-icons/ri";  

// Components
import Helmet from "../components/Helmet/Helmet";  
import ContactCard from "../components/Contact/ContactCard";  
import Input from "../components/FormComponents/Input";  
import Textarea from "../components/FormComponents/Textarea"; 
import ContactButton from "../components/FormComponents/ContactButton";  
import Heading from "../components/Titles/Heading";   
import Description from "../components/Titles/Description";  

// Data
import contactData from "../components/Contact/data/contact"; // Data for the contact cards
import helmet from "../components/Helmet/data/helmet"; // Meta data for the page

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm(); // React Hook Form setup

  // Handle form submission
  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    reset(); // Reset the form after submission
  };

  return (
    <>
      {/* Helmet component to set the page title and meta description */}
      <Helmet title={helmet.contact.title} desc={helmet.contact.desc} />

      {/* Motion wrapper for animations */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-white p-7 rounded-lg mb-10 dark:bg-darkBgMain"
      >
        {/* Google Maps embed */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193596.0092634673!2d-74.14448391105442!3d40.697370926032114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20Amerika%20Birle%C5%9Fik%20Devletleri!5e0!3m2!1str!2str!4v1722713316023!5m2!1str!2str"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full mb-6 rounded-lg h-44"
        ></iframe>

        {/* Section heading and description */}
        <div className="flex flex-col space-y-1.5 ">
          <Heading>Get in Touch</Heading>
          <Description>
            Fill out the form below and we'll get back to you as soon as
            possible.
          </Description>
        </div>

        {/* Contact cards for various contact methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          {contactData &&
            contactData.map((item, index) => (
              <ContactCard key={index} item={item} />
            ))}
        </div>

        {/* Contact form */}
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-4">
            <Input
              label="First Name"
              placeholder="Enter your first name"
              name="firstName"
              register={register("firstName", {
                required: "First name is required.",
              })}
              error={errors.firstName}
            />
            <Input
              label="Last Name"
              placeholder="Enter your last name"
              name="lastName"
              register={register("lastName", {
                required: "Last name is required.",
              })}
              error={errors.lastName}
            />
          </div>
          <Input
            label="Email"
            placeholder="Enter your email"
            name="email"
            register={register("email", {
              required: "Email is required.",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Email is invalid.",
              },
            })}
            error={errors.email}
          />
          <Textarea
            label="Message"
            placeholder="Enter your message"
            name="message"
            register={register("message", { required: "Message is required." })}
            error={errors.message}
          />
          
          {/* Submit button */}
          <ContactButton type="submit">
            <RiMailSendLine /> <span className="text-sm">Send</span>
          </ContactButton>
        </form>
      </motion.div>
    </>
  );
};

export default Contact;