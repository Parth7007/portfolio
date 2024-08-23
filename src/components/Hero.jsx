import React from "react";
import styles from "./Hero.module.css";
import { HERO_CONTENT } from "../constants";
import profilepic from "../assets/images.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:pb-8">
      <div className="flex flex-wrap">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 px-4 lg:px-8">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0 }}
              className="pb-8 text-4xl sm:text-5xl lg:text-7xl font-thin tracking-tight mt-8 lg:mt-16"
            >
              Parth Kadoo
            </motion.h1>
            <motion.span
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text text-2xl sm:text-3xl lg:text-4xl font-thin tracking-tight text-transparent"
            >
              AI Engineer and Data Scientist
            </motion.span>
            <motion.span
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text text-2xl sm:text-3xl lg:text-4xl font-thin tracking-tight text-transparent mt-2"
            >
              MERN Stack Developer
            </motion.span>
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="my-2 max-w-xl py-6 font-light tracking-tight text-sm sm:text-base lg:text-lg"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 px-4 lg:px-8 mt-8 lg:mt-0">
          <div className="flex justify-center lg:justify-end">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className={styles.parth}
              src={profilepic}
              alt="profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
