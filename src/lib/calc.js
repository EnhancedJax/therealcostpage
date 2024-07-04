export function calculate(amount, hourlyWage, hoursPerDay, daysPerWeek) {
  /* -------------- Calcs ------------- */
  const hours = Number(amount) / hourlyWage;
  const rdays = Number(hours / hoursPerDay);
  const days = parseFloat((hours / hoursPerDay).toFixed(2));
  const timeInDays = Number(hours / 24);
  const percentOfDay = ((hours / hoursPerDay) * 100).toFixed(0);
  const percentOfWeek = (rdays / daysPerWeek) * 100;
  const months = parseFloat((rdays / (daysPerWeek * 4)).toFixed(2)); // months needed including only work days
  const percentOfYear = (months / 12) * 100;
  const timeInMonths = parseFloat((timeInDays / 30).toFixed(2)); // months needed by time needed
  const percentOfTimeInYears = (timeInMonths / 12) * 100;

  return {
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
  };
}
