"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CustomButton({
  children,
  iconSVG,
  onClick = () => {},
}) {
  const buttonVariants = {
    initial: {
      scale: 1,
      y: 0,
    },
    hover: {
      scale: 1.05,
      y: -8,
      transition: {
        duration: 0.2,
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
      onClick={onClick}
    >
      {iconSVG && <Image src={iconSVG} width="20" height="20" alt="icon" />}
      {children}
    </motion.button>
  );
}
