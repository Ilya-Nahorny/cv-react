import React from 'react'
import { Link } from 'react-router-dom'
import { FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='rounded-lg py-6 px-4 bg-white border shadow-lg border-gray-200 flex flex-col md:flex-row text-center md:text-start gap-4 md:gap-0 items-center justify-between dark:border-darkBorder dark:bg-darkBgChild dark:text-darkTextMain my-6'>
      <span>© {new Date().getFullYear()} Monolog Theme. All rights reserved.</span>
      <span className='flex items-center space-x-4'>
      <Link to="#">
          <FaInstagram className='text-xl text-gray-500 dark:text-darkTextMain' />
        </Link>
        <Link to="#">
          <FaTwitter className='text-xl text-gray-500 dark:text-darkTextMain' />
        </Link>
        <Link to="#">
          <FaYoutube className='text-xl text-gray-500 dark:text-darkTextMain' />
        </Link>
      </span>
    </div>
  )
}

export default Footer