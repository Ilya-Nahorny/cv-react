// React and external libraries
import React from "react";
import { BsEyeFill } from "react-icons/bs";
import { Link } from "react-router-dom";

// Components
import Button from "../FormComponents/Button";

const BlogCardOne = ({ item, index }) => {
  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-2 bg-white rounded-lg shadow-lg overflow-hidden dark:bg-darkBgMain"
      key={index}
    >
      <div className="w-full overflow-hidden">
        <Link to={`/blog-detail/${item.slug}`}>
          <img
            src={`${item.image}`}
            className="w-full h-[365px] object-cover duration-500 hover:scale-125 hover:-rotate-6"
            alt={item.title}
          />
        </Link>
      </div>
      <div className="p-6 flex flex-col justify-center">
        <Link to={`/blog-detail/${item.slug}`}>
          <h2 className="mb-2 text-2xl line-clamp-1 dark:text-darkTextMain">
            {item.title}
          </h2>
        </Link>
        <p className="text-sm text-gray-500 line-clamp-4 leading-5 dark:text-darkTextChild">
          {item.desc}
        </p>
        <Button url={`/blog-detail/${item.slug}`} className="mt-4 max-w-max">
          <BsEyeFill /> Read More
        </Button>
      </div>
    </div>
  );
};

export default BlogCardOne;
