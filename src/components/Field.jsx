"use client";

import { defaultValues, tourSteps } from "@/app/constants";
import { useAppContext } from "@/lib/context";
import { InputNumber, Select, Tour } from "antd";
import { useRef } from "react";
import PuzzleIcon from "../../public/puzzle.svg";
import CustomIconSwitch from "./CustomIconSwitch";
import FieldInput from "./FieldInput";
import FieldText from "./FieldText";

export default function Field({ rates }) {
  const { data, updateData } = useAppContext();
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const handleToggle = (enabled) => {
    updateData("enabled", enabled);
  };

  return (
    <div className="z-20 flex flex-wrap items-center justify-center px-20 py-10 mx-auto bg-white shadow-2xl lg:px-4 rounded-t-2xl min-w-min">
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
    </div>
  );
}
