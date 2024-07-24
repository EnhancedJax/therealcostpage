const defaultValues = {
  currency: "USD",
  hourlyWage: 30,
  hoursPerDay: 8,
  daysPerWeek: 5,
  enabled: false,
  tourFinished: true,
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
    description: "This is the switch to the extension! Turn it on to start it!",
    target: () => ref2.current,
  },
];

const WEBSTORE_LINK =
  "https://chromewebstore.google.com/detail/the-real-cost/aigjgdabjgnoelaapnkhlemoemkfajeb";

export { WEBSTORE_LINK, defaultPrices, defaultValues, tourSteps };
