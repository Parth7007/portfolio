import React from "react";
import logo from "../assets/parthlogo.png";
import styles from "./Navbar.module.css";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex flex-col sm:flex-row items-center justify-between py-6 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-shrink-0 items-center">
        <a href="#">
          <img className={`gap-3 ${styles.logo}`} src={logo} alt="Logo" />
        </a>
      </div>
      
      <div className="mt-4 sm:mt-0 flex items-center justify-center">
        <a
          href="/path-to-your-resume.pdf"
          download
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-200"
        >
          Download Resume
        </a>
      </div>

      <div className="mt-4 sm:mt-0 flex items-center justify-center gap-4 sm:gap-8 text-2xl sm:text-3xl">
        <a
          href="https://www.linkedin.com/in/parth-kadoo-7117b425a/"
          className="hover:text-blue-600 transition-colors duration-200"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Parth7007"
          className="hover:text-gray-800 transition-colors duration-200"
        >
          <FaGithub />
        </a>
        <a
          href="https://x.com/ParthKadoo45"
          className="hover:text-blue-400 transition-colors duration-200"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com/parth_kadoo007/"
          className="hover:text-pink-600 transition-colors duration-200"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
