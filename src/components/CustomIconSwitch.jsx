"use client";

import { Popover } from "antd";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function CustomIconSwitch({
  children,
  iconSVG,
  onChange,
  state = false,
  cooldown = 0,
}) {
  const [isActive, setIsActive] = useState(state);
  const [popoverVisible, setPopoverVisible] = useState(false);
  const lastClickTime = useRef(0);

  const handleClick = () => {
    const currentTime = Date.now();
    if (currentTime - lastClickTime.current >= cooldown * 1000) {
      setIsActive(!isActive);
      onChange(!isActive);
      lastClickTime.current = currentTime;
    } else {
      setPopoverVisible(true);
      setTimeout(() => setPopoverVisible(false), 1000); // Hide popover after 1 second
    }
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
    <Popover content="Cooldown..." open={popoverVisible} trigger="click">
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
        >
          <Image src={iconSVG} width="20" height="20" alt="icon_switch" />
        </motion.span>
        {children}
      </motion.div>
    </Popover>
  );
}
