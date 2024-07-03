"use client";

import { defaultPrices } from "@/app/constants";
import { useAppContext } from "@/lib/context";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import AutoResizeText from "./AutoResizeText";
import Price from "./Price/index.jsx";

export default function MainText({ rates }) {
  const [prices, setPrices] = useState(defaultPrices);
  const { data } = useAppContext();

  useEffect(() => {
    const currency = data.currency;
    if (!rates || !currency) return;
    setPrices(
      defaultPrices.map((price) => {
        return price * rates[currency];
      })
    );
  }, [data?.currency]);

  const str = [
    "What is the real cost of your new phone, which costs",
    <Price key="price1" amount={prices[0]} nomargin />,
    "? Or your new",
    <Price key="price4" amount={prices[1]} />,
    "laptop? TheRealCost is a Chrome extension that converts prices like",
    <Price
      key="price2"
      amount={prices[2]}
      format={{ fixed: 2, unit: false }}
    />,
    "or",
    <Price key="price3" amount={prices[3]} format={{ fixed: 1, unit: true }} />,
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
