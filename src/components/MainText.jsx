"use client";

import { useAppContext } from "@/lib/context";
import { motion } from "framer-motion";
import AutoResizeText from "./AutoResizeText";
import Price from "./Price";

export default function MainText() {
  const { data } = useAppContext();

  const str = [
    "What is the real cost of your new phone, which costs",
    <Price key="price1" price="999" nomargin />,
    "? TheRealCost is a Chrome extension that converts prices like",
    <Price key="price2" price="32.89" />,
    "or",
    <Price key="price3" price="4.1k" />,
    "on websites to hours of work needed to affor them. Try it out now!",
  ];

  const wordVariants = {
    hover: {
      translateY: -5,
      scale: 1.1,
      transition: { duration: 0.1 },
    },
    tap: {
      scale: 0.9,
    },
    drag: {
      rotate: 5,
    },
  };

  const array = str.map((str, index) => {
    if (typeof str === "string") {
      return str.split(" ").map((word, index) => (
        <motion.div
          key={index}
          variants={wordVariants}
          whileHover="hover"
          whileTap="tap"
          drag
          whileDrag="drag"
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          className={`inline-block mr-7`}
        >
          {word}
        </motion.div>
      ));
    } else {
      return str;
    }
  });

  return (
    <AutoResizeText initialFontSize="100" padding="0px 60px 30px 60px">
      {array}
    </AutoResizeText>
  );
}
