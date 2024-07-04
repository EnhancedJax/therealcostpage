"use client";

import { calculate } from "@/lib/calc";
import { useAppContext } from "@/lib/context";
import { Skeleton, Space } from "antd";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import BottomLeftArrow from "../../../public/bottomLeft.svg";
import Logo from "../../../public/icon.svg";
import LeftArrow from "../../../public/left.svg";
import Phone from "../../../public/phone.png";
import SkeletonBrowser from "../imported/SkeletonBrowser";
import {
  BrowserViewContainer,
  ExtensionTip,
  LargePrice,
  PulseCircle,
  TipText,
  Underline,
} from "./styles";

export default function Try({ rates }) {
  const { data } = useAppContext();
  const [showNewPrice, setShowNewPrice] = useState(false);
  const [result, setResult] = useState({});
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    const amountNum = (999 * rates[data.currency]).toFixed(0);
    setAmount(amountNum);
    setResult(
      calculate(amountNum, data.hourlyWage, data.hoursPerDay, data.daysPerWeek)
    );
  }, [data?.hoursPerDay, data?.daysPerWeek, data?.hourlyWage, amount]);

  const animateTooltip = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 4,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center flex-grow w-full pt-10 -z-10"
      initial={{ paddingRight: 0, y: 500, opacity: 0 }}
      animate={{ paddingRight: 100, y: 0, opacity: 1 }}
      transition={{
        paddingRight: { delay: 4 },
        y: { duration: 1.2, type: "spring" },
      }}
    >
      <div
        style={{
          width: "640px",
          height: "480px",
        }}
      >
        <SkeletonBrowser>
          <BrowserViewContainer>
            <div className="p-5">
              <Image
                src={Phone}
                style={{ objectFit: "contain" }}
                width="212"
                height="273"
              />
            </div>
            <div className="w-full">
              <Space>
                <Skeleton.Avatar />
                <Skeleton.Input />
              </Space>
              <LargePrice>
                <AnimatePresence mode="wait">
                  {!showNewPrice ? (
                    <motion.p
                      key="price"
                      animate={{
                        x: 0,
                        scale: 1,
                        opacity: 1,
                        transformOrigin: "bottom right",
                      }}
                      exit={{ x: 5, scale: 0, opacity: 0 }}
                      transition={{ duration: 0.5, type: "spring" }}
                    >
                      {data.currency} {amount}
                    </motion.p>
                  ) : (
                    <motion.p
                      key="hours"
                      initial={{
                        x: -20,
                        scale: 0,
                        opacity: 0,
                        transformOrigin: "bottom left",
                      }}
                      animate={{ x: 0, scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, type: "spring" }}
                    >
                      {result.hours} hours
                    </motion.p>
                  )}
                </AnimatePresence>
                <Underline
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.4, delay: 3 }}
                />
                <ExtensionTip
                  variants={animateTooltip}
                  initial="hidden"
                  animate="visible"
                  style={{
                    top: "-32px",
                    right: "0px",
                    transform: "translateX(100%)",
                  }}
                >
                  <Image src={LeftArrow} width="112" height="11" />
                  <TipText>
                    Des
                    <br />
                    <br />
                    <b>Hov</b>
                  </TipText>
                </ExtensionTip>
              </LargePrice>
              <Skeleton />
            </div>
          </BrowserViewContainer>
          <Image
            src={Logo}
            width="32"
            height="32"
            className="absolute z-20 top-6 right-10"
          />
          <PulseCircle
            animate={{
              opacity: [0, 1, 0],
              scale: [50, 1, 40],
              display: "none",
            }}
            transition={{ duration: 2, delay: 1 }}
            onAnimationComplete={() => setShowNewPrice(true)}
          />
          <ExtensionTip
            variants={animateTooltip}
            initial="hidden"
            animate="visible"
            style={{
              top: "16px",
              right: "48px",
              transform: "translate(100%, -100%)",
            }}
          >
            <Image src={BottomLeftArrow} width="94" height="34" />
            <TipText>Config</TipText>
          </ExtensionTip>
        </SkeletonBrowser>
      </div>
    </motion.div>
  );
}
