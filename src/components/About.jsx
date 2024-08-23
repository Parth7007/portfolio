import styles from "./About.module.css";
import React from "react";
import aboutpic from "../assets/images.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl sm:text-5xl lg:text-6xl">
        About <span className="text-neutral-500">Me</span>
      </h1>

      <div className="flex flex-wrap lg:flex-nowrap">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <motion.img
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0 }}
              className={styles.aboutpic}
              src={aboutpic}
              alt="aboutpic"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 lg:p-8 mt-8 lg:mt-0">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center lg:justify-start"
          >
            <p id={styles.about} className="my-2 max-w-xl py-6 text-sm sm:text-base lg:text-lg">
              {ABOUT_TEXT}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
