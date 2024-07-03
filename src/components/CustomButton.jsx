"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CustomButton({ children, iconSVG }) {
  const buttonVariants = {
    initial: {
      scale: 1,
      y: 0,
    },
    hover: {
      scale: 1.05,
      y: [0, -8, 0],
      transition: {
        scale: {
          duration: 0.1,
        },
        y: {
          duration: 0.5,
          repeat: Infinity,
          ease: "easeInOut",
        },
      },
    },
    tap: {
      scale: 0.9,
    },
  };

  return (
    <motion.button
      className="flex gap-3 px-10 py-3 text-sm font-normal text-center text-white rounded-full bg-action"
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
      initial="initial"
    >
      {iconSVG && <Image src={iconSVG} width="20" height="20" alt="icon" />}
      {children}
    </motion.button>
  );
}
