import React from "react";
import { RiPhoneLine, RiMailLine, RiMapPinLine } from "react-icons/ri";

const contact = [
  {
    icon: <RiPhoneLine />, 
    title: "Phone",
    desc: "+123 456 7890",
  },
  {
    icon: <RiMailLine />,
    title: "Email",
    desc: "info@example.com",
  },
  {
    icon: <RiMapPinLine />,
    title: "Address",
    desc: "123 Main Street, City",
  },
];

export default contact;
