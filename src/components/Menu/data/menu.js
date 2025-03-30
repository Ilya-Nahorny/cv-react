import {
  IoMdHome,
  IoMdCall,
  IoMdInformationCircle,
  IoMdPaper,
  IoMdHammer,
  IoMdBriefcase,
  IoMdConstruct,
  IoMdCart,
  IoMdPeople,
  IoMdListBox,
} from "react-icons/io";

import { BiSolidError } from "react-icons/bi";
import { RiPagesLine } from "react-icons/ri";
import { LuComputer } from "react-icons/lu";
import { GrContactInfo } from "react-icons/gr";
import { SiReaddotcv } from "react-icons/si";

const menuData = [
  { label: "Home", icon: <IoMdHome />, link: "/" },
  { label: "About", icon: <IoMdInformationCircle />, link: "/about" }, 
  { label: "CV", icon: <SiReaddotcv />, link: "/cv" }, 
  {
    label: "Projects",
    icon: <IoMdHammer />,
    type: "dropdown",
    items: [
      { label: "Projects Card One", icon: <IoMdPaper />, link: "/projects" },
      { label: "Projects Card Two", icon: <IoMdPaper />, link: "/projects-card-two" },
      { label: "Projects Card Three", icon: <IoMdPaper />, link: "/projects-card-three" },
      {
        label: "Project Detail One",
        icon: <RiPagesLine />,
        link: "/project-detail/professional-creative-theme",
      },{
        label: "Project Detail Two",
        icon: <RiPagesLine />,
        link: "/project-detail-two/professional-creative-theme",
      },{
        label: "Project Detail Three",
        icon: <RiPagesLine />,
        link: "/project-detail-three/professional-creative-theme",
      },
    ],
  },
  {
    label: "Blog",
    icon: <IoMdPaper />,
    type: "dropdown",
    items: [
      { label: "Blog Card 1", icon: <IoMdPaper />, link: "/blog" },
      { label: "Blog Card 2", icon: <IoMdPaper />, link: "/blog-two" },
      { label: "Blog Card 3", icon: <IoMdPaper />, link: "/blog-three" },
      {
        label: "Blog Detail",
        icon: <RiPagesLine />,
        link: "/blog-detail/the-future-of-web-development",
      },
    ],
  },
  { label: "Workspace", icon: <IoMdConstruct />, link: "/workspace" }, 
  {
    label: "Services",
    icon: <IoMdBriefcase />,
    type: "dropdown",
    items: [
      { label: "Services", icon: <IoMdPaper />, link: "/services" },
      {
        label: "Service Detail",
        icon: <RiPagesLine />,
        link: "/service-detail/seo-services",
      },
    ],
  },
  { label: "Bio", icon: <GrContactInfo />, link: "/bio" },
  { label: "My Setup", icon: <LuComputer />, link: "/setup" },
  { label: "Team", icon: <IoMdPeople />, link: "/team" },
  { label: "Stack", icon: <IoMdListBox />, link: "/stack" }, 
  {
    label: "Cart",
    icon: <IoMdCart />,
    type: "dropdown",
    items: [
      { label: "Cart", icon: <IoMdCart />, link: "/cart" },
      {
        label: "Checkout",
        icon: <RiPagesLine />,
        link: "/checkout",
      },
    ],
  },
  { label: "Pricing", icon: <IoMdCart />, link: "/service-detail/seo-services#pricingTable" }, 
  { label: "Error", icon: <BiSolidError />, link: "/error" },  
  {
    label: "Contact",
    icon: <IoMdCall />,
    type: "dropdown",
    items: [
      { label: "Contact One", icon: <RiPagesLine />, link: "/contact" },
      {
        label: "Contact Two",
        icon: <RiPagesLine />,
        link: "/contact/two",
      },
    ],
  },
];

export default menuData;
