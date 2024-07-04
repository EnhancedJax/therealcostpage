"use client";

import { calculate } from "@/lib/calc";
import { useAppContext } from "@/lib/context";
import { Flex, Popover, Skeleton, Space } from "antd";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import Logo from "../../../public/icon.svg";
import LeftArrow from "../../../public/left.svg";
import Phone from "../../../public/phone.png";
import SkeletonBrowser from "../imported/SkeletonBrowser";
import SmartInfo from "../imported/SmartInfo";
import { animateHours, animatePrice } from "./animations";
import {
  BrowserViewContainer,
  ContextHeader,
  ExtensionTip,
  Header,
  LargePrice,
  PopoverContentContainer,
  PopoverPositioner,
  PulseCircle,
  TipText,
  Underline,
} from "./styles";
import { useAnimations } from "./useAnimations";

export default function Try({ rates }) {
  const { data } = useAppContext();
  const [showNewPrice, setShowNewPrice] = useState(false);
  const [values, setValues] = useState({});
  const [amount, setAmount] = useState(0);
  const [isFirstEnable, setIsFirstEnable] = useState(true);

  const {
    pulseScope,
    underlineScope,
    containerScope,
    tooltipScope,
    runAnimations,
  } = useAnimations(isFirstEnable, setIsFirstEnable, setShowNewPrice);

  useEffect(() => {
    const amountNum = (999 * rates[data.currency]).toFixed(0);
    setAmount(amountNum);
    setValues(
      calculate(amountNum, data.hourlyWage, data.hoursPerDay, data.daysPerWeek)
    );
  }, [
    data.hoursPerDay,
    data.daysPerWeek,
    data.hourlyWage,
    data.currency,
    amount,
  ]);

  useEffect(() => {
    runAnimations(data.enabled);
  }, [data.enabled]);

  return (
    <motion.div
      ref={containerScope}
      className="flex flex-col items-center justify-center flex-grow w-full pt-10"
      initial={{ paddingRight: 0, y: 500, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        y: { duration: 1.2, type: "spring" },
      }}
    >
      <motion.div
        style={{
          width: "640px",
          height: "480px",
        }}
        drag
        dragConstraints={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
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
                alt="Phone"
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
                    <motion.p key="price" {...animatePrice}>
                      {data.currency} {amount}
                    </motion.p>
                  ) : (
                    <motion.p key="hours" {...animateHours}>
                      {values.hours.toFixed(0)} hours
                    </motion.p>
                  )}
                </AnimatePresence>
                <Popover
                  content={
                    values?.hours && (
                      <PopoverContentContainer>
                        <Flex gap="0" vertical justify="center">
                          <ContextHeader>{`The real cost of ${data.currency} ${amount} is`}</ContextHeader>
                          <Header>{values?.hours?.toFixed(2)} hours</Header>
                          <SmartInfo values={values} />
                        </Flex>
                      </PopoverContentContainer>
                    )
                  }
                  open={showNewPrice}
                  placement="bottom"
                >
                  <PopoverPositioner />
                </Popover>
                <Underline ref={underlineScope} />
                <ExtensionTip
                  ref={tooltipScope}
                  initial={{ opacity: 0 }}
                  style={{
                    top: "-32px",
                    right: "0px",
                    transform: "translateX(100%)",
                  }}
                >
                  <Image
                    src={LeftArrow}
                    width="112"
                    height="11"
                    alt="leftarrow"
                  />
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
            alt="Extension Logo"
          />
          <PulseCircle ref={pulseScope} />
        </SkeletonBrowser>
      </motion.div>
    </motion.div>
  );
}
