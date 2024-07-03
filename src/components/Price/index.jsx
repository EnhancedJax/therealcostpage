"use client";

import { useAppContext } from "@/lib/context";
import { Flex, Popover } from "antd";
import { useEffect, useState } from "react";
import SmartInfo from "../imported/SmartInfo";
import { ContentContainer, ContextHeader, Header } from "./styles";

export default function Price({
  amount,
  nomargin,
  props,
  format = { fixed: 0, unit: false },
}) {
  const { data } = useAppContext();
  const [values, setValues] = useState({});
  const [price, setPrice] = useState("");

  useEffect(() => {
    const hoursPerDay = data.hoursPerDay;
    const daysPerWeek = data.daysPerWeek;
    /* -------------- Calcs ------------- */
    const hours = Number(amount) / data.hourlyWage;
    const rdays = Number(hours / hoursPerDay);
    const days = parseFloat((hours / hoursPerDay).toFixed(2));
    const timeInDays = Number(hours / 24);
    const percentOfDay = ((hours / hoursPerDay) * 100).toFixed(0);
    const percentOfWeek = (rdays / daysPerWeek) * 100;
    const months = parseFloat((rdays / (daysPerWeek * 4)).toFixed(2)); // months needed including only work days
    const percentOfYear = (months / 12) * 100;
    const timeInMonths = parseFloat((timeInDays / 30).toFixed(2)); // months needed by time needed
    const percentOfTimeInYears = (timeInMonths / 12) * 100;

    setValues({
      hoursPerDay,
      daysPerWeek,

      hours,
      days,
      percentOfDay,
      percentOfWeek,

      months,
      percentOfYear,
      timeInMonths,
      percentOfTimeInYears,
    });
  }, [data?.hoursPerDay, data?.daysPerWeek, data?.hourlyWage, amount]);

  useEffect(() => {
    setPrice(
      format.unit
        ? (amount / 1000).toFixed(format.fixed).toLocaleString() + "k"
        : amount.toFixed(format.fixed).toLocaleString()
    );
  }, [amount, data?.currency]);

  return (
    <Popover
      content={
        values?.hours &&
        data.enabled && (
          <ContentContainer>
            <Flex gap="0" vertical justify="center">
              <ContextHeader>{`The real cost of $${price} is`}</ContextHeader>
              <Header>{values.hours.toFixed(2)} hours</Header>
              <SmartInfo values={values} />
            </Flex>
          </ContentContainer>
        )
      }
    >
      <span
        className={`font-bold ${
          nomargin ? "" : "mr-7"
        } text-primary supershadow highlighted-money`}
        {...props}
      >
        {data.enabled ? `${values.hours.toFixed(2)} hours` : `$${price}`}
      </span>
    </Popover>
  );
}
