"use client";

import { defaultValues } from "@/app/constants";
import { useAppContext } from "@/lib/context";
import { InputNumber, Select } from "antd";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import { useState } from "react";
import PuzzleIcon from "../../public/puzzle.svg";
import SendIcon from "../../public/send.svg";
import CustomIconButton from "./CustomIconButton";
import CustomIconSwitch from "./CustomIconSwitch";
import FieldInput from "./FieldInput";
import FieldText from "./FieldText";

export default function Field({ rates }) {
  const { data, updateData } = useAppContext();
  const [hideSend, setHideSend] = useState(false);
  const [saved, setSaved] = useState(data.enabled);
  const controls = useAnimationControls();

  const handleSend = () => {
    setSaved(true);
    controls.start("animate");
  };

  const handleToggle = (enabled, step) => {
    if (step === 0) {
      setSaved(enabled);
      controls.start("animate");
    } else {
      updateData("enabled", saved);
      if (!hideSend) setHideSend(true);
      controls.set("initial");
    }
  };
  const variants = {
    initial: {
      paddingBottom: 40,
    },
    animate: {
      paddingBottom: [40, 60, 40],
      scaleY: [1, 1.2, 1],
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      animate={controls}
      variants={variants}
      initial="initial"
      onAnimationComplete={() => {
        handleToggle(null, 1);
      }}
      className="z-20 flex flex-wrap items-center justify-center px-20 pt-10 mx-auto bg-white border lg:px-4 border-t-black border-x-black rounded-t-2xl min-w-min"
    >
      <p className="flex mr-4 md:flex-wrap md:justify-center">
        <FieldText>If you earn</FieldText>
        <FieldInput
          input={
            <Select
              showSearch
              defaultValue={defaultValues.currency}
              onSelect={(value) => {
                updateData("currency", value);
              }}
              options={
                rates &&
                Object.keys(rates).map((key) => ({
                  label: key,
                  value: key,
                }))
              }
            />
          }
        >
          {data.currency}
        </FieldInput>
        <FieldInput
          input={
            <InputNumber
              defaultValue=""
              min={1}
              max={99999}
              changeOnWheel={true}
              onChange={(value) => {
                updateData("hourlyWage", value);
              }}
            />
          }
        >
          {data.hourlyWage}
        </FieldInput>
        <FieldText>per hour, work</FieldText>
        <FieldInput
          input={
            <InputNumber
              defaultValue=""
              min={1}
              max={24}
              changeOnWheel={true}
              onChange={(value) => {
                updateData("hoursPerDay", value);
              }}
            />
          }
        >
          {data.hoursPerDay} hours
        </FieldInput>
        <FieldText>per day, work</FieldText>
        <FieldInput
          input={
            <InputNumber
              defaultValue=""
              min={4}
              max={6}
              changeOnWheel={true}
              onChange={(value) => {
                updateData("daysPerWeek", value);
              }}
            />
          }
        >
          {data.daysPerWeek} days
        </FieldInput>
        <FieldText nospace>per week...</FieldText>
      </p>
      <AnimatePresence>
        {!hideSend && (
          <motion.div
            exit={{ width: 0, margin: 0, opacity: 0 }}
            className="mr-4"
          >
            <CustomIconButton
              iconSVG={SendIcon}
              onClick={() => {
                handleSend();
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <CustomIconSwitch
        onChange={(enabled) => handleToggle(enabled, 0)}
        iconSVG={PuzzleIcon}
        state={data.enabled}
      ></CustomIconSwitch>
    </motion.div>
  );
}
