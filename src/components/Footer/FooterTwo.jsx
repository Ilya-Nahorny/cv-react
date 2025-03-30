import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const FooterTwo = () => {
  return (
    <footer className="bg-white rounded-lg shadow-lg py-6 mb-10 dark:bg-darkBgMain">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Brand and Description */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Your Brand</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-md text-sm">
              Pioneering innovative solutions for a brighter future. We excel in cutting-edge technology and design.
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6 mt-6 md:mt-0">
            {[
              { icon: FaGithub, link: "#" },
              { icon: FaLinkedin, link: "#" },
              { icon: FaTwitter, link: "#" },
              { icon: FaInstagram, link: "#" },
              { icon: FaYoutube, link: "#" },
            ].map((item, index) => (
              <Link key={index} to={item.link} rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300">
                <item.icon className="h-6 w-6" />
              </Link>
            ))}
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} Your Brand. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterTwo;