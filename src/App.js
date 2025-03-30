// React and external libraries
import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import { IoIosColorPalette } from "react-icons/io";

// Styles
import "./App.css";

// Redux slices
import { getLocaleStorageTheme } from "./redux/darkModeSlice";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import CV from "./pages/CV";
import Blog from "./pages/Blog"; 
import BlogDetail from "./pages/BlogDetail";
import Contact from "./pages/Contact";
import ProjectDetail from "./pages/ProjectDetail";
import Team from "./pages/Team";
import Workspace from "./pages/Workspace";
import Error from "./pages/Error";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import ProjectsTwo from "./pages/ProjectsTwo";
import ProjectsThree from "./pages/ProjectsThree";
import ServiceDetail from "./pages/ServiceDetail";
import Cart from "./pages/Cart";
import Stack from "./pages/Stack";
import MySetup from "./pages/MySetup";
import ProjectDetailTwo from "./pages/ProjectDetailTwo";

// Components
import UserProfile from "./components/UserProfile/UserProfile";
import UserProfileTwo from "./components/UserProfile/UserProfileTwo";
import UserProfileThree from "./components/UserProfile/UserProfileThree";
import UserProfileFour from "./components/UserProfile/UserProfileFour";
import ScrollToTopButton from "./components/ScrollToTop/ScrollToTopButton";
import CookieBar from "./components/CookieBar/CookieBar";
import Category from "./pages/Category";
import BioLink from "./pages/BioLink";
import Checkout from "./pages/Checkout";
import ProjectDetailThree from "./pages/ProjectDetailThree";
import ContactTwo from "./pages/ContactTwo";
import FooterTwo from "./components/Footer/FooterTwo";
import SideMenuTwo from "./components/Menu/SidebarMenuTwo/SideMenuTwo";
import SideMenu from "./components/Menu/SidebarMenuOne/SideMenu";
import BlogTwo from "./pages/BlogTwo";
import BlogThree from "./pages/BlogThree";

const App = () => {
  const dispatch = useDispatch(); // Hook to dispatch Redux actions
  const location = useLocation(); // Hook to get the current location in the app
  const darkMode = useSelector((state) => state.theme); // Get the current theme from Redux

  useEffect(() => {
    dispatch(getLocaleStorageTheme()); // Get and apply theme from local storage on initial load
  }, []);

  const [color, setColor] = useState("#569CD2"); // State to manage color palette

  useEffect(() => {
    document.documentElement.style.setProperty("--light-color", color); // Apply selected color globally
  }, [color]);

  // Handle color change when user selects a color from the palette
  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  // Check if the current page is the Bio page
  const isBioPage = location.pathname === "/bio"; 

  return (
    <div className="container mx-auto mt-8">
      {/* Toaster for notifications */}
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: darkMode.theme === "dark" ? "#1f2937" : "#fff", // Change based on theme
            color: darkMode.theme === "dark" ? "#d1d5db" : "#111827",
          },
        }}
      />

      {/* Render the following components only if the current page is not the Bio page */}
      {!isBioPage && (
        <>
          <CookieBar />
          <ScrollToTopButton height={300} />
        
          <SideMenuTwo/>
          <UserProfileThree/> 

          {/* Color palette selector */}
          <button className="fixed top-16 right-0 bg-white w-12 h-12 overflow-hidden rounded-l-lg text-gray-700 shadow hover:bg-gray-50 cursor-pointer border border-gray-300 dark:bg-darkBgMain dark:border-darkBorder dark:text-darkTextMain flex justify-center items-center z-50">
            <IoIosColorPalette />
            <input
              className="absolute top-0 left-0 opacity-0 w-full h-full border-none bg-transparent appearance-none cursor-pointer"
              type="color"
              onChange={handleColorChange} // Handle color change
            />
          </button>
        </>
      )}

      {/* Define app routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-two" element={<BlogTwo />} />
        <Route path="/blog-three" element={<BlogThree />} />
        <Route path="/category/:category" element={<Category />} />
        <Route path="/blog-detail/:slug" element={<BlogDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/two" element={<ContactTwo />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service-detail/:slug" element={<ServiceDetail />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects-card-two" element={<ProjectsTwo />} />
        <Route path="/projects-card-three" element={<ProjectsThree />} />
        <Route path="/project-detail/:slug" element={<ProjectDetail />} />
        <Route path="/project-detail-two/:slug" element={<ProjectDetailTwo />} />
        <Route path="/project-detail-three/:slug" element={<ProjectDetailThree />} />
        <Route path="/team" element={<Team />} />
        <Route path="/workspace" element={<Workspace />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/stack" element={<Stack />} />
        <Route path="/setup" element={<MySetup />} />
        <Route path="/bio" element={<BioLink />} />
        <Route path="*" element={<Error />} />
      </Routes>

      {/* Footer component, visible on all pages except the Bio page */}
      {!isBioPage && <FooterTwo />}
    </div>
  );
};

export default App;