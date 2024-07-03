"use client";

import { defaultValues } from "@/app/constants";
import { useAppContext } from "@/lib/context";
import { InputNumber, Select } from "antd";
import { AnimatePresence, motion } from "framer-motion";
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

  return (
    <div className="flex flex-wrap items-center justify-center px-20 py-10 mx-auto bg-white border lg:px-4 border-t-black border-x-black rounded-t-2xl min-w-min">
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
                updateData("enabled", true);
                setHideSend(true);
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <CustomIconSwitch
        onChange={() => updateData("enabled", !data.enabled)}
        iconSVG={PuzzleIcon}
        state={data.enabled}
      />
    </div>
  );
}
