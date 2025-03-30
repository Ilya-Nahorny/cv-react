import React from "react";

const headingStyles = {
  1: "text-4xl",
  2: "text-3xl",
  3: "text-2xl",
  4: "text-xl",
  5: "text-lg",
  6: "text-base",
};

const Heading = ({ level = 3, children, className = "" }) => {
  const Tag = `h${level}`;
  const baseStyle = "font-bold";
  const sizeStyle = headingStyles[level] || headingStyles[1];

  return (
    <Tag
      className={`${baseStyle} ${sizeStyle} ${className} dark:text-darkTextMain`}
    >
      {children}
    </Tag>
  );
};

export default Heading;
