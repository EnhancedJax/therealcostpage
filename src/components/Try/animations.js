export const animatePrice = {
  initial: { x: 5, scale: 0, opacity: 0, transformOrigin: "bottom right" },
  animate: { x: 0, scale: 1, opacity: 1 },
  exit: { x: 5, scale: 0, opacity: 0 },
  transition: { duration: 0.5, type: "spring" },
};

export const animateHours = {
  initial: {
    x: -20,
    scale: 0,
    opacity: 0,
    transformOrigin: "bottom left",
  },
  animate: { x: 0, scale: 1, opacity: 1 },
  exit: {
    x: -20,
    scale: 0,
    opacity: 0,
  },
  transition: { duration: 0.5, type: "spring" },
};
