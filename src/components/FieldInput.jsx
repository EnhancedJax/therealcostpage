"use client";
import { Popover } from "antd";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function FieldInput({ children, nospace, input }) {
  const [width, setWidth] = useState(0);
  const [popOverVisible, setPopOverVisible] = useState(false);
  const spanRef = useRef(null);
  const controls = useAnimationControls();

  useEffect(() => {
    if (spanRef.current) {
      setWidth(spanRef.current.offsetWidth);
    }
  }, []);

  const variants = {
    initial: {
      scale: 1,
      width: "auto",
    },
    hover: {
      scale: 1.4,
      width: width * 2,
      transition: { duration: 0.1 },
    },
  };

  const handleOpenChange = (open) => {
    if (!open) {
      controls.start("initial");
      setPopOverVisible(false);
    } else {
      setPopOverVisible(true);
    }
  };

  return (
    <Popover content={input} onOpenChange={handleOpenChange}>
      <motion.span
        ref={spanRef}
        className={`inline-block ${
          nospace ? "" : "mr-1"
        } underline font-normal cursor-pointer text-center origin-center text-nowrap`}
        variants={variants}
        onHoverStart={() => controls.start("hover")}
        onHoverEnd={() => {
          if (!popOverVisible) controls.start("initial");
        }}
        animate={controls}
      >
        {children}
      </motion.span>
    </Popover>
  );
}
