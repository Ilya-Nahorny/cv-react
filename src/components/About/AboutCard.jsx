// React and external libraries
import React from "react";

// Components
import Heading from "../Titles/Heading";
import Description from "../Titles/Description";

const AboutCard = () => {
  return (
    <div className="p-12 py-12 bg-white shadow rounded-lg flex flex-col md:grid md:grid-cols-3 md:items-center dark:bg-darkBgMain shadow-lg">
      <div className="order-1 md:order-none md:col-span-2">
        <Heading className="capitalize mb-2">
          Lorem ipsum, dolor sit amet consectetur
        </Heading>
        <Description className="leading-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas rem
          odit repudiandae tempore cupiditate omnis tenetur quos ipsa,
          perspiciatis, nam, consectetur odio eaque dolores error unde
          accusantium blanditiis suscipit ea?
        </Description>
      </div>
      <div className="order-0 md:order-none inline-flex justify-center mb-6 md:mb-0">
        <img src="/images/about/240x160.webp" alt="" className="w-[240px] h-[160px]" />
      </div>
    </div>
  );
};

export default AboutCard;
