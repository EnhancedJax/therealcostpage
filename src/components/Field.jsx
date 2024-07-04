"use client";

import { defaultValues, tourSteps } from "@/app/constants";
import { useAppContext } from "@/lib/context";
import { InputNumber, Select, Tour } from "antd";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import BottomRightArrow from "../../public/bottomright.svg";
import PuzzleIcon from "../../public/puzzle.svg";
import CustomIconSwitch from "./CustomIconSwitch";
import FieldInput from "./FieldInput";
import FieldText from "./FieldText";

export default function Field({ rates }) {
  const { data, updateData } = useAppContext();
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const [isFirstEnable, setIsFirstEnable] = useState(true);

  const handleToggle = (enabled) => {
    updateData("enabled", enabled);
  };

  const animateTooltip = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5 },
  };

  useEffect(() => {
    if (data.enabled)
      if (isFirstEnable) setTimeout(() => setIsFirstEnable(false), 1900);
  }, [data.enabled]);

  return (
    <div className="relative z-20 flex flex-wrap items-center justify-center px-20 py-10 mx-auto bg-white shadow-2xl lg:px-4 rounded-t-2xl min-w-min">
      <p ref={ref1} className="flex mr-4 md:flex-wrap md:justify-center">
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
                if (value > 0) updateData("hourlyWage", value);
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
                if (value > 0) updateData("hoursPerDay", value);
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
                if (value > 3 && value < 7) updateData("daysPerWeek", value);
              }}
            />
          }
        >
          {data.daysPerWeek} days
        </FieldInput>
        <FieldText nospace>per week...</FieldText>
      </p>
      <div ref={ref2}>
        <CustomIconSwitch
          onChange={(enabled) => handleToggle(enabled)}
          iconSVG={PuzzleIcon}
          state={data.enabled}
          cooldown={1}
        />
      </div>
      <Tour
        open={!data.tourFinished}
        onClose={() => updateData("tourFinished", true)}
        steps={tourSteps(ref1, ref2)}
      />

      <motion.div
        className="absolute flex items-center w-max"
        variants={animateTooltip}
        initial="initial"
        animate={isFirstEnable ? "initial" : "animate"}
        style={{
          top: "-15px",
          left: "30%",
          transform: "translate(-100%, -100%)",
        }}
      >
        <p className="inline-block m-2 text-sm font-light text-right color-[#666] max-w-[300px] leading-5">
          The above demo will reflect the inserted values! Try changing them!
        </p>
        <Image src={BottomRightArrow} width="112" height="11" alt="leftarrow" />
      </motion.div>
    </div>
  );
}
