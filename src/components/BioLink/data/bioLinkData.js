import React from "react";
import { FaTwitch, FaTwitter, FaInstagram, FaYoutube, FaFacebook, FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";

const bioLinkData = {
  profileImage: "/images/profile/240x240.svg",
  name: "Isabella Penelope",
  description:
    "Hey there! I'm a passionate gamer, streamer and content creator. Join me for epic gameplay, fun chats, and an amazing community! Whether we're diving into the latest releases or enjoying some classic favorites, there's always something exciting happening here",
  links: [
    {
      url: "https://twitch.tv/example",
      icon: <FaTwitch size={20} />,
      color: "bg-[#9146FF]",
      title: "twitch.tv/example",
      description: "Join me for epic gameplay",
    },
    {
      url: "https://twitter.com/example",
      icon: <FaTwitter size={20} />,
      color: "bg-[#1DA1F2]",
      title: "twitter.com/example",
      description: "Follow me for updates and more",
    },
    {
      url: "https://instagram.com/example",
      icon: <FaInstagram size={20} />,
      color: "bg-[#E1306C]",
      title: "instagram.com/example",
      description: "Check out my latest photos",
    },
    {
      url: "https://youtube.com/example",
      icon: <FaYoutube size={20} />,
      color: "bg-[#FF0000]",
      title: "youtube.com/example",
      description: "Watch my latest videos and streams",
    },
    {
      url: "https://facebook.com/example",
      icon: <FaFacebook size={20} />,
      color: "bg-[#4267B2]",
      title: "facebook.com/example",
      description: "Like my page for updates",
    },
    {
      url: "https://linkedin.com/in/example",
      icon: <FaLinkedin size={20} />,
      color: "bg-[#0077B5]",
      title: "linkedin.com/in/example",
      description: "Connect with me professionally",
    },
    {
      url: "https://github.com/example",
      icon: <FaGithub size={20} />,
      color: "bg-[#333]",
      title: "github.com/example",
      description: "Check out my projects and repositories",
    },
    {
      url: "https://discord.gg/example",
      icon: <FaDiscord size={20} />,
      color: "bg-[#5865F2]",
      title: "discord.gg/example",
      description: "Join my Discord community",
    },
  ],
};

export default bioLinkData;
