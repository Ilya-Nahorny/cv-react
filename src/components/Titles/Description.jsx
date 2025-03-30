import React from "react";

const Description = ({
  children,
  color = "500",
  fontSize = "sm",
  className = "",
}) => {
  const baseStyle = `text-gray-${color} text-${fontSize}`;

  return (
    <p className={`${baseStyle} ${className} dark:text-darkTextChild`}>
      {children}
    </p>
  );
};

export default Description;
