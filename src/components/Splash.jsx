"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import Logo from "../../public/icon.svg";

const Splash = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (!showSplash) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-neutral-100"
    >
      <motion.div
        initial={{ scale: 1, y: 0 }}
        animate={{ scale: 0, y: -50 }}
        transition={{ delay: 0.5, duration: 0.8, ease: "easeIn" }}
      >
        <Image src={Logo} alt="Logo" width={100} height={100} />
      </motion.div>
    </motion.div>
  );
};

export default Splash;
