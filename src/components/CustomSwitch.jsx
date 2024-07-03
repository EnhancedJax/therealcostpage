// unused

"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomSwitch({
  labelOff = "off",
  labelOn = "on",
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
      className="flex items-center justify-center h-8 px-6 border-2 border-black rounded-full cursor-pointer"
      onClick={handleClick}
      variants={variants}
      animate={isActive ? "active" : "inactive"}
      whileTap="onTap"
      style={{
        backgroundColor: isActive ? "black" : "white",
        color: isActive ? "white" : "black",
        perspective: "1000px",
      }}
    >
      <motion.span
        variants={variants}
        animate={isActive ? "active" : "inactive"}
        className="backface-hidden"
      >
        {isActive ? labelOn : labelOff}
      </motion.span>
    </motion.div>
  );
}
