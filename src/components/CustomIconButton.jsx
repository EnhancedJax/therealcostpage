"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CustomIconButton({ iconSVG, onClick, ...props }) {
  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.1,
      },
    },
    tap: {
      scale: 0.9,
    },
  };

  return (
    <motion.button
      className="p-1.5 text-sm font-normal text-center bg-black rounded-full"
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
      onClick={onClick}
      {...props}
    >
      {iconSVG && (
        <Image
          src={iconSVG}
          width="20"
          height="20"
          alt="icon"
          className="pointer-events-none"
        />
      )}
    </motion.button>
  );
}
