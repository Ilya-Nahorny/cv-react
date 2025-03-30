import React from "react";
import { FaReact } from "react-icons/fa";
import { HiLink } from "react-icons/hi";
import { 
  IoLogoGithub, 
  IoLogoPython,
  IoLogoNodejs,
} from "react-icons/io5";

const projectsData = {
  header: {
    title: "My Projects",
    desc: "Projects I developed in different languages",
  },
  activeButton: "react",
  type: "projects",
  buttons: [
    {
      name: "React",
      tag: "react",
      desc: "Projects developed using React",
      icon: <FaReact size={"20px"} />,
    },
    {
      name: "Node.js",
      tag: "nodejs",
      desc: "Projects developed using Node.js",
      icon: <IoLogoNodejs size={"20px"} />,
    },
    {
      name: "Python",
      tag: "python",
      desc: "Projects developed using Python",
      icon: <IoLogoPython size={"20px"} />,
    },
  ],
  items: [
    {
      id: 1,
      imageTabMenu: "/images/projects/1024x768.webp",
      imageDetailsPage: "/images/projects/1024x768.webp",
      title: "Professional Creative Theme",
      slug: "professional-creative-theme",
      descTabMenu:
        "A comprehensive, fully responsive React project developed using React and Tailwind CSS.",
      content: `
        <p class="text-gray-500 mt-6 mb-6 leading-7 dark:text-darkTextChild">
          In summary, the future of web development is exciting and full of opportunities. By staying abreast of emerging technologies and trends, developers can build innovative applications that meet the evolving needs of users and leverage the latest advancements in the field.
        </p>
        <ol class="space-y-4 text-gray-500 list-decimal list-inside dark:text-darkTextChild my-6">
          <li>JavaScript frameworks are essential for modern web development.
            <ul class="ps-5 mt-2 space-y-2 list-disc list-inside">
              <li>React</li>
              <li>Angular</li>
              <li>Vue.js</li>
            </ul>
          </li>
          <li>Serverless architectures offer many benefits, such as:
            <ul class="ps-5 mt-2 space-y-2 list-disc list-inside">
              <li>Reduced server management</li>
              <li>Scalability</li>
              <li>Cost efficiency</li>
            </ul>
          </li>
        </ol>
      `,
      tags: ["react", "tailwindcss"],
      date: "2024",
      url: "https://www.example.com/",
      githubUrl: "https://github.com/",
      tagsHead: "Technologies",
      technologiesTags: [
        {
          image: "/images/projects/tags/24x24.webp",
        },
        {
          image: "/images/projects/tags/24x24.webp",
        },
        {
          image: "/images/projects/tags/24x24.webp",
        },
      ],
      additionalImages: [
        "/images/projects/1024x768.webp",
        "/images/projects/1024x768.webp",
        "/images/projects/1024x768.webp",
        "/images/projects/1024x768.webp",
        "/images/projects/1024x768.webp",
      ],
      featuresList: [
        "Responsive Design",
        "Optimized Performance",
        "Customizable Components",
        "Modern UI/UX",
        "Accessibility Features",
      ],
      linkHead: "Links",
      links: [
        {
          icon: <HiLink />,
          linkTitle: "templatemonster",
          link: "#",
        },
        {
          icon: <IoLogoGithub />,
          linkTitle: "GitHub",
          link: "https://github.com/",
        },
      ],
    },
    {
      id: 2,
      imageTabMenu: "/images/projects/1024x768.webp",
      imageDetailsPage: "/images/projects/1024x768.webp",
      title: "E-commerce Website with React",
      slug: "e-commerce-website-with-react",
      descTabMenu:
        "A fully functional e-commerce website built with React and optimized for user experience.",
      content: `
        <p class="text-gray-500 mt-6 mb-6 leading-7 dark:text-darkTextChild">
          In summary, the future of web development is exciting and full of opportunities. By staying abreast of emerging technologies and trends, developers can build innovative applications that meet the evolving needs of users and leverage the latest advancements in the field.
        </p>
        <ol class="space-y-4 text-gray-500 list-decimal list-inside dark:text-darkTextChild my-6">
          <li>JavaScript frameworks are essential for modern web development.
            <ul class="ps-5 mt-2 space-y-2 list-disc list-inside">
              <li>React</li>
              <li>Angular</li>
              <li>Vue.js</li>
            </ul>
          </li>
          <li>Serverless architectures offer many benefits, such as:
            <ul class="ps-5 mt-2 space-y-2 list-disc list-inside">
              <li>Reduced server management</li>
              <li>Scalability</li>
              <li>Cost efficiency</li>
            </ul>
          </li>
        </ol>
      `,
      tags: ["python", "ecommerce"],
      date: "2023",
      url: "https://www.example.com/",
      githubUrl: "https://github.com/",
      tagsHead: "Technologies",
      technologiesTags: [
        {
          image: "/images/projects/tags/24x24.webp",
        },
        {
          image: "/images/projects/tags/24x24.webp",
        },
        {
          image: "/images/projects/tags/24x24.webp",
        },
      ],
      additionalImages: [
        "/images/projects/1024x768.webp",
        "/images/projects/1024x768.webp",
        "/images/projects/1024x768.webp",
        "/images/projects/1024x768.webp",
        "/images/projects/1024x768.webp",
      ],
      featuresList: [
        "Responsive Design",
        "Optimized Performance",
        "Customizable Components",
        "Modern UI/UX",
        "Accessibility Features",
      ],
      linkHead: "Links",
      links: [
        {
          icon: <HiLink />,
          linkTitle: "Website",
          link: "https://www.example.com/",
        },
        {
          icon: <IoLogoGithub />,
          linkTitle: "GitHub",
          link: "https://github.com/",
        },
      ],
    },
    {
      id: 3,
      imageTabMenu: "/images/projects/1024x768.webp",
      imageDetailsPage: "/images/projects/1024x768.webp",
      title: "Modern Portfolio Website",
      slug: "modern-portfolio-website",
      descTabMenu:
        "A sleek and minimalist portfolio website designed to showcase your skills and projects.",
      content: `
        <p class="text-gray-500 mt-6 mb-6 leading-7 dark:text-darkTextChild">
          In summary, the future of web development is exciting and full of opportunities. By staying abreast of emerging technologies and trends, developers can build innovative applications that meet the evolving needs of users and leverage the latest advancements in the field.
        </p>
        <ol class="space-y-4 text-gray-500 list-decimal list-inside dark:text-darkTextChild my-6">
          <li>JavaScript frameworks are essential for modern web development.
            <ul class="ps-5 mt-2 space-y-2 list-disc list-inside">
              <li>React</li>
              <li>Angular</li>
              <li>Vue.js</li>
            </ul>
          </li>
          <li>Serverless architectures offer many benefits, such as:
            <ul class="ps-5 mt-2 space-y-2 list-disc list-inside">
              <li>Reduced server management</li>
              <li>Scalability</li>
              <li>Cost efficiency</li>
            </ul>
          </li>
        </ol>
      `,
      tags: ["nodejs", "portfolio"],
      date: "2024",
      url: "https://www.example.com/",
      githubUrl: "https://github.com/",
      tagsHead: "Technologies",
      technologiesTags: [
        {
          image: "/images/projects/tags/24x24.webp",
        },
        {
          image: "/images/projects/tags/24x24.webp",
        },
        {
          image: "/images/projects/tags/24x24.webp",
        },
      ],
      additionalImages: [
        "/images/projects/1024x768.webp",
        "/images/projects/1024x768.webp",
        "/images/projects/1024x768.webp",
        "/images/projects/1024x768.webp",
        "/images/projects/1024x768.webp",
      ],
      featuresList: [
        "Responsive Design",
        "Optimized Performance",
        "Customizable Components",
        "Modern UI/UX",
        "Accessibility Features",
      ],
      linkHead: "Links",
      links: [
        {
          icon: <HiLink />,
          linkTitle: "Website",
          link: "https://www.example.com/",
        },
        {
          icon: <IoLogoGithub />,
          linkTitle: "GitHub",
          link: "https://github.com/",
        },
      ],
    },
    {
      id: 4,
      imageTabMenu: "/images/projects/1024x768.webp",
      imageDetailsPage: "/images/projects/1024x768.webp",
      title: "Interactive Learning Platform",
      slug: "interactive-learning-platform",
      descTabMenu:
        "An engaging learning platform designed to enhance student engagement and personalized learning.",
      content: `
        <p class="text-gray-500 mt-6 mb-6 leading-7 dark:text-darkTextChild">
          In summary, the future of web development is exciting and full of opportunities. By staying abreast of emerging technologies and trends, developers can build innovative applications that meet the evolving needs of users and leverage the latest advancements in the field.
        </p>
        <ol class="space-y-4 text-gray-500 list-decimal list-inside dark:text-darkTextChild my-6">
          <li>JavaScript frameworks are essential for modern web development.
            <ul class="ps-5 mt-2 space-y-2 list-disc list-inside">
              <li>React</li>
              <li>Angular</li>
              <li>Vue.js</li>
            </ul>
          </li>
          <li>Serverless architectures offer many benefits, such as:
            <ul class="ps-5 mt-2 space-y-2 list-disc list-inside">
              <li>Reduced server management</li>
              <li>Scalability</li>
              <li>Cost efficiency</li>
            </ul>
          </li>
        </ol>
      `,
      tags: ["react", "education"],
      date: "2023",
      url: "https://www.example.com/",
      githubUrl: "https://github.com/",
      tagsHead: "Technologies",
      technologiesTags: [
        {
          image: "/images/projects/tags/24x24.webp",
        },
        {
          image: "/images/projects/tags/24x24.webp",
        },
        {
          image: "/images/projects/tags/24x24.webp",
        },
      ],
      additionalImages: [
        "/images/projects/1024x768.webp",
        "/images/projects/1024x768.webp",
        "/images/projects/1024x768.webp",
        "/images/projects/1024x768.webp",
        "/images/projects/1024x768.webp",
      ],
      featuresList: [
        "Responsive Design",
        "Optimized Performance",
        "Customizable Components",
        "Modern UI/UX",
        "Accessibility Features",
      ],
      linkHead: "Links",
      links: [
        {
          icon: <HiLink />,
          linkTitle: "Website",
          link: "https://www.example.com/",
        },
        {
          icon: <IoLogoGithub />,
          linkTitle: "GitHub",
          link: "https://github.com/",
        },
      ],
    },
    {
      id: 5,
      imageTabMenu: "/images/projects/1024x768.webp",
      imageDetailsPage: "/images/projects/1024x768.webp",
      title: "Social Media App with React",
      slug: "social-media-app-with-react",
      descTabMenu:
        "A social media platform built with React for connecting and sharing content.",
      content: `
        <p class="text-gray-500 mt-6 mb-6 leading-7 dark:text-darkTextChild">
          In summary, the future of web development is exciting and full of opportunities. By staying abreast of emerging technologies and trends, developers can build innovative applications that meet the evolving needs of users and leverage the latest advancements in the field.
        </p>
        <ol class="space-y-4 text-gray-500 list-decimal list-inside dark:text-darkTextChild my-6">
          <li>JavaScript frameworks are essential for modern web development.
            <ul class="ps-5 mt-2 space-y-2 list-disc list-inside">
              <li>React</li>
              <li>Angular</li>
              <li>Vue.js</li>
            </ul>
          </li>
          <li>Serverless architectures offer many benefits, such as:
            <ul class="ps-5 mt-2 space-y-2 list-disc list-inside">
              <li>Reduced server management</li>
              <li>Scalability</li>
              <li>Cost efficiency</li>
            </ul>
          </li>
        </ol>
      `,
      tags: ["react", "social media"],
      date: "2024",
      url: "https://www.example.com/",
      githubUrl: "https://github.com/",
      tagsHead: "Technologies",
      technologiesTags: [
        {
          image: "/images/projects/tags/24x24.webp",
        },
        {
          image: "/images/projects/tags/24x24.webp",
        },
        {
          image: "/images/projects/tags/24x24.webp",
        },
      ],
      additionalImages: [
        "/images/projects/1024x768.webp",
        "/images/projects/1024x768.webp",
        "/images/projects/1024x768.webp",
        "/images/projects/1024x768.webp",
        "/images/projects/1024x768.webpg",
      ],
      featuresList: [
        "Responsive Design",
        "Optimized Performance",
        "Customizable Components",
        "Modern UI/UX",
        "Accessibility Features",
      ],
      linkHead: "Links",
      links: [
        {
          icon: <HiLink />,
          linkTitle: "Website",
          link: "https://www.example.com/",
        },
        {
          icon: <IoLogoGithub />,
          linkTitle: "GitHub",
          link: "https://github.com/",
        },
      ],
    },
    {
      id: 6,
      imageTabMenu: "/images/projects/1024x768.webp",
      imageDetailsPage: "/images/projects/1024x768.webp",
      title: "Music Streaming App",
      slug: "music-streaming-app",
      descTabMenu:
        "A music streaming app built with React, offering a vast library of songs and personalized playlists.",
      content: `
        <p class="text-gray-500 mt-6 mb-6 leading-7 dark:text-darkTextChild">
          In summary, the future of web development is exciting and full of opportunities. By staying abreast of emerging technologies and trends, developers can build innovative applications that meet the evolving needs of users and leverage the latest advancements in the field.
        </p>
        <ol class="space-y-4 text-gray-500 list-decimal list-inside dark:text-darkTextChild my-6">
          <li>JavaScript frameworks are essential for modern web development.
            <ul class="ps-5 mt-2 space-y-2 list-disc list-inside">
              <li>React</li>
              <li>Angular</li>
              <li>Vue.js</li>
            </ul>
          </li>
          <li>Serverless architectures offer many benefits, such as:
            <ul class="ps-5 mt-2 space-y-2 list-disc list-inside">
              <li>Reduced server management</li>
              <li>Scalability</li>
              <li>Cost efficiency</li>
            </ul>
          </li>
        </ol>
      `,
      tags: ["nodejs", "music streaming"],
      date: "2023",
      url: "https://www.example.com/",
      githubUrl: "https://github.com/",
      tagsHead: "Technologies",
      technologiesTags: [
        {
          image: "/images/projects/tags/24x24.webp",
        },
        {
          image: "/images/projects/tags/24x24.webp",
        },
        {
          image: "/images/projects/tags/24x24.webp",
        },
      ],
      additionalImages: [
        "/images/projects/1024x768.webp",
        "/images/projects/1024x768.webp",
        "/images/projects/1024x768.webp",
        "/images/projects/1024x768.webpg",
        "/images/projects/1024x768.webpg",
      ],
      featuresList: [
        "Responsive Design",
        "Optimized Performance",
        "Customizable Components",
        "Modern UI/UX",
        "Accessibility Features",
      ],
      linkHead: "Links",
      links: [
        {
          icon: <HiLink />,
          linkTitle: "Website",
          link: "https://www.example.com/",
        },
        {
          icon: <IoLogoGithub />,
          linkTitle: "GitHub",
          link: "https://github.com/",
        },
      ],
    },
    {
      id: 7,
      imageTabMenu: "/images/projects/1024x768.webp",
      imageDetailsPage: "/images/projects/1024x768.webp",
      title: "Travel Booking Platform",
      slug: "travel-booking-platform",
      descTabMenu:
        "A travel booking platform built with React, simplifying the process of planning and booking trips.",
      content: `
        <p class="text-gray-500 mt-6 mb-6 leading-7 dark:text-darkTextChild">
          In summary, the future of web development is exciting and full of opportunities. By staying abreast of emerging technologies and trends, developers can build innovative applications that meet the evolving needs of users and leverage the latest advancements in the field.
        </p>
        <ol class="space-y-4 text-gray-500 list-decimal list-inside dark:text-darkTextChild my-6">
          <li>JavaScript frameworks are essential for modern web development.
            <ul class="ps-5 mt-2 space-y-2 list-disc list-inside">
              <li>React</li>
              <li>Angular</li>
              <li>Vue.js</li>
            </ul>
          </li>
          <li>Serverless architectures offer many benefits, such as:
            <ul class="ps-5 mt-2 space-y-2 list-disc list-inside">
              <li>Reduced server management</li>
              <li>Scalability</li>
              <li>Cost efficiency</li>
            </ul>
          </li>
        </ol>
      `,
      tags: ["react", "travel booking"],
      date: "2024",
      url: "https://www.example.com/",
      githubUrl: "https://github.com/",
      tagsHead: "Technologies",
      technologiesTags: [
        {
          image: "/images/projects/tags/24x24.webp",
        },
        {
          image: "/images/projects/tags/24x24.webp",
        },
        {
          image: "/images/projects/tags/24x24.webp",
        },
      ],
      additionalImages: [
        "/images/projects/1024x768.webp",
        "/images/projects/1024x768.webp",
        "/images/projects/1024x768.webpg",
        "/images/projects/1024x768.webpg",
        "/images/projects/1024x768.webpg",
      ],
      featuresList: [
        "Responsive Design",
        "Optimized Performance",
        "Customizable Components",
        "Modern UI/UX",
        "Accessibility Features",
      ],
      linkHead: "Links",
      links: [
        {
          icon: <HiLink />,
          linkTitle: "Website",
          link: "https://www.example.com/",
        },
        {
          icon: <IoLogoGithub />,
          linkTitle: "GitHub",
          link: "https://github.com/",
        },
      ],
    },
    {
      id: 8,
      imageTabMenu: "/images/projects/1024x768.webp",
      imageDetailsPage: "/images/projects/1024x768.webp",
      title: "Food Delivery App with React",
      slug: "food-delivery-app-with-react",
      descTabMenu:
        "A food delivery app built with React, connecting users with local restaurants and food delivery services.",
      content: `
        <p class="text-gray-500 mt-6 mb-6 leading-7 dark:text-darkTextChild">
          In summary, the future of web development is exciting and full of opportunities. By staying abreast of emerging technologies and trends, developers can build innovative applications that meet the evolving needs of users and leverage the latest advancements in the field.
        </p>
        <ol class="space-y-4 text-gray-500 list-decimal list-inside dark:text-darkTextChild my-6">
          <li>JavaScript frameworks are essential for modern web development.
            <ul class="ps-5 mt-2 space-y-2 list-disc list-inside">
              <li>React</li>
              <li>Angular</li>
              <li>Vue.js</li>
            </ul>
          </li>
          <li>Serverless architectures offer many benefits, such as:
            <ul class="ps-5 mt-2 space-y-2 list-disc list-inside">
              <li>Reduced server management</li>
              <li>Scalability</li>
              <li>Cost efficiency</li>
            </ul>
          </li>
        </ol>
      `,
      tags: ["python", "food delivery"],
      date: "2023",
      url: "https://www.example.com/",
      githubUrl: "https://github.com/",
      tagsHead: "Technologies",
      technologiesTags: [
        {
          image: "/images/projects/tags/24x24.webp",
        },
        {
          image: "/images/projects/tags/24x24.webp",
        },
        {
          image: "/images/projects/tags/24x24.webp",
        },
      ],
      additionalImages: [
        "/images/projects/1024x768.webp",
        "/images/projects/1024x768.webp",
        "/images/projects/1024x768.webp",
        "/images/projects/1024x768.webp",
        "/images/projects/1024x768.webp",
      ],
      featuresList: [
        "Responsive Design",
        "Optimized Performance",
        "Customizable Components",
        "Modern UI/UX",
        "Accessibility Features",
      ],
      linkHead: "Links",
      links: [
        {
          icon: <HiLink />,
          linkTitle: "Website",
          link: "https://www.example.com/",
        },
        {
          icon: <IoLogoGithub />,
          linkTitle: "GitHub",
          link: "https://github.com/",
        },
      ],
    },
    {
      id: 9,
      imageTabMenu: "/images/projects/1024x768.webp",
      imageDetailsPage: "/images/projects/1024x768.webp",
      title: "Real Estate Listing Website",
      slug: "real-estate-listing-website",
      descTabMenu:
        "A real estate listing website built with React, showcasing properties and connecting buyers and sellers.",
      content: `
        <p class="text-gray-500 mt-6 mb-6 leading-7 dark:text-darkTextChild">
          In summary, the future of web development is exciting and full of opportunities. By staying abreast of emerging technologies and trends, developers can build innovative applications that meet the evolving needs of users and leverage the latest advancements in the field.
        </p>
        <ol class="space-y-4 text-gray-500 list-decimal list-inside dark:text-darkTextChild my-6">
          <li>JavaScript frameworks are essential for modern web development.
            <ul class="ps-5 mt-2 space-y-2 list-disc list-inside">
              <li>React</li>
              <li>Angular</li>
              <li>Vue.js</li>
            </ul>
          </li>
          <li>Serverless architectures offer many benefits, such as:
            <ul class="ps-5 mt-2 space-y-2 list-disc list-inside">
              <li>Reduced server management</li>
              <li>Scalability</li>
              <li>Cost efficiency</li>
            </ul>
          </li>
        </ol>
      `,
      tags: ["nodejs", "real estate"],
      date: "2024",
      url: "https://www.example.com/",
      githubUrl: "https://github.com/",
      tagsHead: "Technologies",
      technologiesTags: [
        {
          image: "/images/projects/tags/24x24.webp",
        },
        {
          image: "/images/projects/tags/24x24.webp",
        },
        {
          image: "/images/projects/tags/24x24.webp",
        },
      ],
      additionalImages: [
        "/images/projects/1024x768.webp",
        "/images/projects/1024x768.webp",
        "/images/projects/1024x768.webp",
        "/images/projects/1024x768.webp",
        "/images/projects/1024x768.webp",
      ],
      featuresList: [
        "Responsive Design",
        "Optimized Performance",
        "Customizable Components",
        "Modern UI/UX",
        "Accessibility Features",
      ],
      linkHead: "Links",
      links: [
        {
          icon: <HiLink />,
          linkTitle: "Website",
          link: "https://www.example.com/",
        },
        {
          icon: <IoLogoGithub />,
          linkTitle: "GitHub",
          link: "https://github.com/",
        },
      ],
    },
    {
      id: 10,
      imageTabMenu: "/images/projects/1024x768.webp",
      imageDetailsPage: "/images/projects/1024x768.webp",
      title: "Event Management Platform",
      slug: "event-management-platform",
      descTabMenu:
        "An event management platform built with React for organizing and managing events.",
      content: `
        <p class="text-gray-500 mt-6 mb-6 leading-7 dark:text-darkTextChild">
          In summary, the future of web development is exciting and full of opportunities. By staying abreast of emerging technologies and trends, developers can build innovative applications that meet the evolving needs of users and leverage the latest advancements in the field.
        </p>
        <ol class="space-y-4 text-gray-500 list-decimal list-inside dark:text-darkTextChild my-6">
          <li>JavaScript frameworks are essential for modern web development.
            <ul class="ps-5 mt-2 space-y-2 list-disc list-inside">
              <li>React</li>
              <li>Angular</li>
              <li>Vue.js</li>
            </ul>
          </li>
          <li>Serverless architectures offer many benefits, such as:
            <ul class="ps-5 mt-2 space-y-2 list-disc list-inside">
              <li>Reduced server management</li>
              <li>Scalability</li>
              <li>Cost efficiency</li>
            </ul>
          </li>
        </ol>
      `,
      tags: ["react", "event management"],
      date: "2023",
      url: "https://www.example.com/",
      githubUrl: "https://github.com/",
      tagsHead: "Technologies",
      technologiesTags: [
        {
          image: "/images/projects/tags/24x24.webp",
        },
        {
          image: "/images/projects/tags/24x24.webp",
        },
        {
          image: "/images/projects/tags/24x24.webp",
        },
      ],
      additionalImages: [
        "/images/projects/1024x768.webp",
        "/images/projects/1024x768.webp",
        "/images/projects/1024x768.webp",
        "/images/projects/1024x768.webp",
        "/images/projects/1024x768.webp",
      ],
      featuresList: [
        "Responsive Design",
        "Optimized Performance",
        "Customizable Components",
        "Modern UI/UX",
        "Accessibility Features",
      ],
      linkHead: "Links",
      links: [
        {
          icon: <HiLink />,
          linkTitle: "Website",
          link: "https://www.example.com/",
        },
        {
          icon: <IoLogoGithub />,
          linkTitle: "GitHub",
          link: "https://github.com/",
        },
      ],
    },
    {
      id: 11,
      imageTabMenu: "/images/projects/1024x768.webp",
      imageDetailsPage: "/images/projects/1024x768.webp",
      title: "Online Course Platform",
      slug: "online-course-platform",
      descTabMenu:
        "An online course platform built with React, offering a wide range of courses and learning materials.",
      content: `
        <p class="text-gray-500 mt-6 mb-6 leading-7 dark:text-darkTextChild">
          In summary, the future of web development is exciting and full of opportunities. By staying abreast of emerging technologies and trends, developers can build innovative applications that meet the evolving needs of users and leverage the latest advancements in the field.
        </p>
        <ol class="space-y-4 text-gray-500 list-decimal list-inside dark:text-darkTextChild my-6">
          <li>JavaScript frameworks are essential for modern web development.
            <ul class="ps-5 mt-2 space-y-2 list-disc list-inside">
              <li>React</li>
              <li>Angular</li>
              <li>Vue.js</li>
            </ul>
          </li>
          <li>Serverless architectures offer many benefits, such as:
            <ul class="ps-5 mt-2 space-y-2 list-disc list-inside">
              <li>Reduced server management</li>
              <li>Scalability</li>
              <li>Cost efficiency</li>
            </ul>
          </li>
        </ol>
      `,
      tags: ["python", "online course"],
      date: "2024",
      url: "https://www.example.com/",
      githubUrl: "https://github.com/",
      tagsHead: "Technologies",
      technologiesTags: [
        {
          image: "/images/projects/tags/24x24.webp",
        },
        {
          image: "/images/projects/tags/24x24.webp",
        },
        {
          image: "/images/projects/tags/24x24.webp",
        },
      ],
      additionalImages: [
        "/images/projects/1024x768.webp",
        "/images/projects/1024x768.webp",
        "/images/projects/1024x768.webp",
        "/images/projects/1024x768.webp",
        "/images/projects/1024x768.webp",
      ],
      featuresList: [
        "Responsive Design",
        "Optimized Performance",
        "Customizable Components",
        "Modern UI/UX",
        "Accessibility Features",
      ],
      linkHead: "Links",
      links: [
        {
          icon: <HiLink />,
          linkTitle: "Website",
          link: "https://www.example.com/",
        },
        {
          icon: <IoLogoGithub />,
          linkTitle: "GitHub",
          link: "https://github.com/",
        },
      ],
    },
    {
      id: 12,
      imageTabMenu: "/images/projects/1024x768.webp",
      imageDetailsPage: "/images/projects/1024x768.webp",
      title: "Job Listing Website",
      slug: "job-listing-website",
      descTabMenu:
        "A job listing website built with React, connecting job seekers with employers.",
      content: `
        <p class="text-gray-500 mt-6 mb-6 leading-7 dark:text-darkTextChild">
          In summary, the future of web development is exciting and full of opportunities. By staying abreast of emerging technologies and trends, developers can build innovative applications that meet the evolving needs of users and leverage the latest advancements in the field.
        </p>
        <ol class="space-y-4 text-gray-500 list-decimal list-inside dark:text-darkTextChild my-6">
          <li>JavaScript frameworks are essential for modern web development.
            <ul class="ps-5 mt-2 space-y-2 list-disc list-inside">
              <li>React</li>
              <li>Angular</li>
              <li>Vue.js</li>
            </ul>
          </li>
          <li>Serverless architectures offer many benefits, such as:
            <ul class="ps-5 mt-2 space-y-2 list-disc list-inside">
              <li>Reduced server management</li>
              <li>Scalability</li>
              <li>Cost efficiency</li>
            </ul>
          </li>
        </ol>
      `,
      tags: ["nodejs", "job listing"],
      date: "2023",
      url: "https://www.example.com/",
      githubUrl: "https://github.com/",
      tagsHead: "Technologies",
      technologiesTags: [
        {
          image: "/images/projects/tags/24x24.webp",
        },
        {
          image: "/images/projects/tags/24x24.webp",
        },
        {
          image: "/images/projects/tags/24x24.webp",
        },
      ],
      additionalImages: [
        "/images/projects/1024x768.webp",
        "/images/projects/1024x768.webp",
        "/images/projects/1024x768.webp",
        "/images/projects/1024x768.webp",
        "/images/projects/1024x768.webp",
      ],
      featuresList: [
        "Responsive Design",
        "Optimized Performance",
        "Customizable Components",
        "Modern UI/UX",
        "Accessibility Features",
      ],
      linkHead: "Links",
      links: [
        {
          icon: <HiLink />,
          linkTitle: "Website",
          link: "https://www.example.com/",
        },
        {
          icon: <IoLogoGithub />,
          linkTitle: "GitHub",
          link: "https://github.com/",
        },
      ],
    },
    {
      id: 13,
      imageTabMenu: "/images/projects/1024x768.webp",
      imageDetailsPage: "/images/projects/1024x768.webp",
      title: "Online Marketplace",
      slug: "online-marketplace",
      descTabMenu:
        "An online marketplace built with React, connecting buyers and sellers for various products and services.",
      content: `
        <p class="text-gray-500 mt-6 mb-6 leading-7 dark:text-darkTextChild">
          In summary, the future of web development is exciting and full of opportunities. By staying abreast of emerging technologies and trends, developers can build innovative applications that meet the evolving needs of users and leverage the latest advancements in the field.
        </p>
        <ol class="space-y-4 text-gray-500 list-decimal list-inside dark:text-darkTextChild my-6">
          <li>JavaScript frameworks are essential for modern web development.
            <ul class="ps-5 mt-2 space-y-2 list-disc list-inside">
              <li>React</li>
              <li>Angular</li>
              <li>Vue.js</li>
            </ul>
          </li>
          <li>Serverless architectures offer many benefits, such as:
            <ul class="ps-5 mt-2 space-y-2 list-disc list-inside">
              <li>Reduced server management</li>
              <li>Scalability</li>
              <li>Cost efficiency</li>
            </ul>
          </li>
        </ol>
      `,
      tags: ["react", "marketplace"],
      date: "2024",
      url: "https://www.example.com/",
      githubUrl: "https://github.com/",
      tagsHead: "Technologies",
      technologiesTags: [
        {
          image: "/images/projects/tags/24x24.webp",
        },
        {
          image: "/images/projects/tags/24x24.webp",
        },
        {
          image: "/images/projects/tags/24x24.webp",
        },
      ],
      additionalImages: [
        "/images/projects/1024x768.webp",
        "/images/projects/1024x768.webp",
        "/images/projects/1024x768.webp",
        "/images/projects/1024x768.webp",
        "/images/projects/1024x768.webp",
      ],
      featuresList: [
        "Responsive Design",
        "Optimized Performance",
        "Customizable Components",
        "Modern UI/UX",
        "Accessibility Features",
      ],
      linkHead: "Links",
      links: [
        {
          icon: <HiLink />,
          linkTitle: "Website",
          link: "https://www.example.com/",
        },
        {
          icon: <IoLogoGithub />,
          linkTitle: "GitHub",
          link: "https://github.com/",
        },
      ],
    },
    {
      id: 14,
      imageTabMenu: "/images/projects/1024x768.webp",
      imageDetailsPage: "/images/projects/1024x768.webp",
      title: "Blog Website with React",
      slug: "blog-website-with-react",
      descTabMenu:
        "A blog website built with React for sharing articles, news, and other content.",
      content: `
        <p class="text-gray-500 mt-6 mb-6 leading-7 dark:text-darkTextChild">
          In summary, the future of web development is exciting and full of opportunities. By staying abreast of emerging technologies and trends, developers can build innovative applications that meet the evolving needs of users and leverage the latest advancements in the field.
        </p>
        <ol class="space-y-4 text-gray-500 list-decimal list-inside dark:text-darkTextChild my-6">
          <li>JavaScript frameworks are essential for modern web development.
            <ul class="ps-5 mt-2 space-y-2 list-disc list-inside">
              <li>React</li>
              <li>Angular</li>
              <li>Vue.js</li>
            </ul>
          </li>
          <li>Serverless architectures offer many benefits, such as:
            <ul class="ps-5 mt-2 space-y-2 list-disc list-inside">
              <li>Reduced server management</li>
              <li>Scalability</li>
              <li>Cost efficiency</li>
            </ul>
          </li>
        </ol>
      `,
      tags: ["python", "blog"],
      date: "2023",
      url: "https://www.example.com/",
      githubUrl: "https://github.com/",
      tagsHead: "Technologies",
      technologiesTags: [
        {
          image: "/images/projects/tags/24x24.webp",
        },
        {
          image: "/images/projects/tags/24x24.webp",
        },
        {
          image: "/images/projects/tags/24x24.webp",
        },
      ],
      additionalImages: [
        "/images/projects/1024x768.webp",
        "/images/projects/1024x768.webp",
        "/images/projects/1024x768.webp",
        "/images/projects/1024x768.webp",
        "/images/projects/1024x768.webp",
      ],
      featuresList: [
        "Responsive Design",
        "Optimized Performance",
        "Customizable Components",
        "Modern UI/UX",
        "Accessibility Features",
      ],
      linkHead: "Links",
      links: [
        {
          icon: <HiLink />,
          linkTitle: "Website",
          link: "https://www.example.com/",
        },
        {
          icon: <IoLogoGithub />,
          linkTitle: "GitHub",
          link: "https://github.com/",
        },
      ],
    },
    {
      id: 15,
      imageTabMenu: "/images/projects/1024x768.webp",
      imageDetailsPage: "/images/projects/1024x768.webp",
      title: "Fitness Tracker App",
      slug: "fitness-tracker-app",
      descTabMenu:
        "A fitness tracker app built with React, helping users monitor their workouts, track progress, and achieve fitness goals.",
      content: `
        <p class="text-gray-500 mt-6 mb-6 leading-7 dark:text-darkTextChild">
          In summary, the future of web development is exciting and full of opportunities. By staying abreast of emerging technologies and trends, developers can build innovative applications that meet the evolving needs of users and leverage the latest advancements in the field.
        </p>
        <ol class="space-y-4 text-gray-500 list-decimal list-inside dark:text-darkTextChild my-6">
          <li>JavaScript frameworks are essential for modern web development.
            <ul class="ps-5 mt-2 space-y-2 list-disc list-inside">
              <li>React</li>
              <li>Angular</li>
              <li>Vue.js</li>
            </ul>
          </li>
          <li>Serverless architectures offer many benefits, such as:
            <ul class="ps-5 mt-2 space-y-2 list-disc list-inside">
              <li>Reduced server management</li>
              <li>Scalability</li>
              <li>Cost efficiency</li>
            </ul>
          </li>
        </ol>
      `,
      tags: ["nodejs", "fitness tracker"],
      date: "2023",
      url: "https://www.example.com/",
      githubUrl: "https://github.com/",
      tagsHead: "Technologies",
      technologiesTags: [
        {
          image: "/images/projects/tags/24x24.webp",
        },
        {
          image: "/images/projects/tags/24x24.webp",
        },
        {
          image: "/images/projects/tags/24x24.webp",
        },
      ],
      additionalImages: [
        "/images/projects/1024x768.webp",
        "/images/projects/1024x768.webp",
        "/images/projects/1024x768.webp",
        "/images/projects/1024x768.webp",
        "/images/projects/1024x768.webp",
      ],
      featuresList: [
        "Responsive Design",
        "Optimized Performance",
        "Customizable Components",
        "Modern UI/UX",
        "Accessibility Features",
      ],
      linkHead: "Links",
      links: [
        {
          icon: <HiLink />,
          linkTitle: "Website",
          link: "https://www.example.com/",
        },
        {
          icon: <IoLogoGithub />,
          linkTitle: "GitHub",
          link: "https://github.com/",
        },
      ],
    },
  ],
};

export default projectsData;