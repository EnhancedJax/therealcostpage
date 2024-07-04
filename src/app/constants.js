const defaultValues = {
  currency: "USD",
  hourlyWage: 30,
  hoursPerDay: 8,
  daysPerWeek: 5,
  enabled: false,
  tourFinished: false,
};

const defaultPrices = [999, 1500, 32.89, 4100];

const tourSteps = (ref1, ref2) => [
  {
    title: "Welcome to TheRealCost!",
    description:
      "TheRealCost is a Chrome extension that converts prices on websites to hours of work needed to afford them. Here you can set your hourly wage and work schedule.",
    target: () => ref1.current,
  },
  {
    title: "TheRealCost toggle",
    description: "Use the switch to the extension!",
    target: () => ref2.current,
  },
];

const WEBSTORE_LINK = "https://chrome.google.com/webstore/detail";

export { WEBSTORE_LINK, defaultPrices, defaultValues, tourSteps };
