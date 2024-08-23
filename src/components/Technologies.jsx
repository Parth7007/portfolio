import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiTensorflow } from "react-icons/si";
import { SiPytorch } from "react-icons/si";
import { FaPhp } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiPowerbi } from "react-icons/si";
import { SiTableau } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Technologies = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers only once when the element comes into view
    threshold: 0.1, // Adjust this value to trigger the animation earlier or later
  });

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl sm:text-5xl lg:text-6xl">
        Technologies
      </h1>
      <div
        ref={ref}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center"
      >
        {[
          { Icon: RiReactjsLine, color: "text-cyan-400" },
          { Icon: DiMongodb, color: "text-green-400" },
          { Icon: SiExpress, color: "text-purple-400" },
          { Icon: FaNodeJs, color: "text-green-400" },
          { Icon: SiTensorflow, color: "text-orange-400" },
          { Icon: SiPytorch, color: "text-red-400" },
          { Icon: FaPhp, color: "text-blue-400" },
          { Icon: SiMysql, color: "text-aqua-400" },
          { Icon: SiPowerbi, color: "text-yellow-400" },
          { Icon: SiTableau, color: "text-blue-400" },
          { Icon: FaGitAlt, color: "text-red-400" },
        ].map(({ Icon, color }, index) => (
          <motion.div
            key={index}
            className="rounded-2xl border-4 border-neutral-800 p-4"
            variants={iconVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Icon className={`text-6xl sm:text-7xl ${color}`} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
