import { useAnimate } from "framer-motion";

export function useAnimations(
  start,
  setStart,
  isFirstEnable,
  setIsFirstEnable,
  setShowNewPrice
) {
  const [pulseScope, animatePulse] = useAnimate();
  const [underlineScope, animateUnderline] = useAnimate();
  const [containerScope, animateContainer] = useAnimate();
  const [tooltipScope, animateTooltip] = useAnimate();

  const runAnimations = async (enabled) => {
    if (!start) {
      setStart(true);
      animateContainer(
        containerScope.current,
        { y: 0, opacity: 1 },
        { duration: 1.2, type: "spring" }
      );
      return;
    }
    if (enabled) {
      if (isFirstEnable) {
        await animatePulse(
          pulseScope.current,
          {
            opacity: [0, 1, 0],
            scale: [50, 1, 40],
            display: "none",
          },
          { duration: 1.5 }
        );
      }

      await Promise.all([
        animateUnderline(
          underlineScope.current,
          { width: "100%" },
          { duration: 0.4 }
        ),
        setShowNewPrice(true),
      ]);

      if (isFirstEnable) {
        animateContainer(
          containerScope.current,
          { paddingRight: 100 },
          { duration: 0.5 }
        );
        animateTooltip(tooltipScope.current, { opacity: 1 }, { duration: 0.5 });
        setIsFirstEnable(false);
      }
    } else {
      animateUnderline(underlineScope.current, { width: 0 }, { duration: 0.4 });
      setShowNewPrice(false);
    }
  };

  return {
    pulseScope,
    underlineScope,
    containerScope,
    tooltipScope,
    runAnimations,
  };
}
