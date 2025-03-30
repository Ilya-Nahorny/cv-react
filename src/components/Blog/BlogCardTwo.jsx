import React from "react";
import { Link } from "react-router-dom";

const BlogCardTwo = ({ item, index }) => {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg bg-white bg-transparent group dark:bg-darkBgMain">
      <div className="overflow-hidden h-[300px] relative">
        <Link to={`/blog-detail/${item.slug}`}>
          <img
            className="w-full h-full transition-transform duration-500 group-hover:scale-125 group-hover:-rotate-6 object-cover"
            src={`${item.image}`}
            alt={item.title}
          />
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </Link>
      </div>
      <div className="p-4 py-6">
        <span className="bg-[#ececec] flex max-w-max rounded-full text-sm px-3 py-1 dark:bg-darkBgChild dark:text-darkTextChild capitalize">
          {item.tags.map((tag) => tag.text).join(", ")}
          {/* {item.category} */}
        </span>
        <Link
          to={`/blog-detail/${item.slug}`}
          className="rounded-full font-semibold text-lg px-1 mt-2.5 mb-1 block truncate dark:text-darkTextMain"
        >
          {item.title}
        </Link>
        <p className="text-sm text-gray-500 line-clamp-3 leading-5 px-1 dark:text-darkTextChild">
          {item.desc}
        </p>
      </div>
    </div>
  );
};

export default BlogCardTwo;
