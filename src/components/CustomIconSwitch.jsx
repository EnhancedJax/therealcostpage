"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function CustomIconSwitch({
  children,
  iconSVG,
  onChange,
  state = false,
}) {
  const [isActive, setIsActive] = useState(state);

  const handleClick = () => {
    setIsActive(!isActive);
    onChange(!isActive);
  };

  useEffect(() => {
    if (state !== isActive) setIsActive(state);
  }, [state]);

  const variants = {
    active: { rotateY: 180, transition: { duration: 0.2 } },
    inactive: { rotateY: 0, transition: { duration: 0.2 } },
    onTap: { scale: 0.9 },
  };

  return (
    <motion.div
      className={`flex items-center justify-center p-1.5 border-2 border-black rounded-full cursor-pointer relative`}
      onClick={handleClick}
      variants={variants}
      animate={isActive ? "active" : "inactive"}
      whileTap="onTap"
      style={{
        backgroundColor: isActive ? "black" : "white",
        perspective: "1000px",
      }}
    >
      <motion.span
        variants={variants}
        animate={isActive ? "active" : "inactive"}
        style={{
          filter: isActive ? "invert(1)" : "none",
        }}
        className="pointer-events-none"
      >
        <Image src={iconSVG} width="20" height="20" alt="icon" />
      </motion.span>
      {children}
    </motion.div>
  );
}
