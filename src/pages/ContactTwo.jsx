// React and external libraries
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { RiMailSendLine, RiPhoneLine, RiMailLine, RiMapPinLine, RiQuestionLine } from "react-icons/ri"; // Icons for the contact form

// Components
import Helmet from "../components/Helmet/Helmet"; // For managing document head
import Input from "../components/FormComponents/Input"; // Input field component
import Textarea from "../components/FormComponents/Textarea"; // Textarea component
import ContactButton from "../components/FormComponents/ContactButton"; // Contact button component

// Data
import helmet from "../components/Helmet/data/helmet"; // Helmet data for SEO

const ContactTwo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [showFAQ, setShowFAQ] = useState(false);

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    reset();
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const faqItems = [
    { question: "What are your business hours?", answer: "Our business hours are Monday to Friday, 9:00 AM to 6:00 PM, and Saturday 10:00 AM to 4:00 PM. We are closed on Sundays." },
    { question: "How can I schedule a consultation?", answer: "You can schedule a consultation by filling out our contact form or calling our office directly." },
    { question: "Do you offer remote services?", answer: "Yes, we offer remote services for many of our offerings. Please contact us for more details." },
  ];

  return (
    <>
      <Helmet title={helmet.contact.title} desc={helmet.contact.desc} />
      <div className="bg-white dark:bg-darkBgMain rounded-md min-h-screen py-12 px-4 sm:px-6 lg:px-8 mb-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
              Let's Connect
            </h1>
            <p className="mt-5 max-w-xl mx-auto text-xl text-gray-600 dark:text-gray-300">
              We're here to help and answer any question you might have. We look forward to hearing from you!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transform transition duration-500 hover:shadow-xl border dark:border-darkBgChild"
            >
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Get in Touch</h2>
                <motion.form
                  variants={stagger}
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <motion.div variants={fadeInUp}>
                    <Input
                      label="Full Name"
                      name="fullName"
                      register={register("fullName", { required: "Full name is required" })}
                      error={errors.fullName}
                      placeholder="John Doe"
                    />
                  </motion.div>
                  <motion.div variants={fadeInUp}>
                    <Input
                      label="Email Address"
                      name="email"
                      register={register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /\S+@\S+\.\S+/,
                          message: "Invalid email address",
                        },
                      })}
                      error={errors.email}
                      placeholder="john@example.com"
                    />
                  </motion.div>
                  <motion.div variants={fadeInUp}>
                    <Input
                      label="Phone Number"
                      name="phone"
                      register={register("phone")}
                      placeholder="+1 (555) 123-4567"
                    />
                  </motion.div>
                  <motion.div variants={fadeInUp}>
                    <Input
                      label="Subject"
                      name="subject"
                      register={register("subject", { required: "Subject is required" })}
                      error={errors.subject}
                      placeholder="How can we help?"
                    />
                  </motion.div>
                  <motion.div variants={fadeInUp}>
                    <Textarea
                      label="Message"
                      name="message"
                      register={register("message", { required: "Message is required" })}
                      error={errors.message}
                      placeholder="Your message here..."
                    />
                  </motion.div>
                  <motion.div variants={fadeInUp}>
                    <ContactButton type="submit">
                      <RiMailSendLine className="mr-2" />
                      Send Message
                    </ContactButton>
                  </motion.div>
                </motion.form>
              </div>
            </motion.div>

            <motion.div
              initial="initial"
              animate="animate"
              variants={stagger}
              className="space-y-8"
            >
              <motion.div 
                variants={fadeInUp}
                className="bg-white dark:bg-darkBgMain border dark:border-darkBgChild rounded-lg shadow-lg p-6 transform transition duration-500 hover:shadow-xl"
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Location</h2>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304603!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1652813115725!5m2!1sen!2s"
                    className="w-full h-64"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className="bg-white dark:bg-darkBgMain rounded-lg shadow-lg border dark:border-darkBgChild p-6 transform transition duration-500 hover:shadow-xl"
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 group">
                    <RiPhoneLine className="w-6 h-6 text-blue-500 group-hover:text-blue-600 transition-colors duration-300" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Phone</p>
                      <p className="text-gray-600 dark:text-gray-300 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 group">
                    <RiMailLine className="w-6 h-6 text-blue-500 group-hover:text-blue-600 transition-colors duration-300" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Email</p>
                      <p className="text-gray-600 dark:text-gray-300 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300">contact@example.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 group">
                    <RiMapPinLine className="w-6 h-6 text-blue-500 group-hover:text-blue-600 transition-colors duration-300" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Address</p>
                      <p className="text-gray-600 dark:text-gray-300 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300">123 Main St, New York, NY 10001</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className="bg-white dark:bg-darkBgMain border dark:border-darkBgChild rounded-lg shadow-lg p-6 transform transition duration-500 hover:shadow-xl"
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Business Hours</h2>
                <div className="space-y-2">
                  <div className="flex justify-between group">
                    <span className="text-gray-600 dark:text-gray-300 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300">Monday - Friday</span>
                    <span className="font-medium text-gray-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between group">
                    <span className="text-gray-600 dark:text-gray-300 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300">Saturday</span>
                    <span className="font-medium text-gray-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between group">
                    <span className="text-gray-600 dark:text-gray-300 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300">Sunday</span>
                    <span className="font-medium text-gray-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300">Closed</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="mt-16"
          >
            <motion.button
              onClick={() => setShowFAQ(!showFAQ)}
              className="group relative w-full overflow-hidden px-6 py-3 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white font-medium text-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-blue-100 dark:bg-blue-900 rounded-full group-hover:w-full group-hover:h-full opacity-50"></span>
              <span className="relative flex items-center justify-center">
                <RiQuestionLine className="mr-2 text-2xl" />
                <span>{showFAQ ? "Hide FAQ" : "Show FAQ"}</span>
              </span>
            </motion.button>

            <AnimatePresence>
              {showFAQ && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
                >
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                      {faqItems.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="border-b border-gray-200 dark:border-gray-700 pb-4"
                        >
                          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">{item.question}</h3>
                          <p className="text-gray-600 dark:text-gray-300">{item.answer}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ContactTwo;
