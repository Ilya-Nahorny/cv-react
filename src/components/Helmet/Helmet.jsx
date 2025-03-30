import React from "react";
import { Helmet } from "react-helmet";

const helmet = (props) => {
  const content = `Resao – Multipurpose React Template is a versatile React template crafted for a variety of use cases. 
  Tailored to seamlessly fit multi-purpose websites, the Resao React Template is adept at generating diverse landing templates, 
  serving the needs of creative agencies, and establishing a robust online presence for corporate websites`;

  return (
    <>
      <Helmet>
        <title>{props.title}</title>
        <meta name="description" content={props.desc ? props.desc : content} />
      </Helmet>
    </>
  );
};

export default helmet;
