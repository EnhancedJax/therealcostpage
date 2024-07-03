"use client";

import { useAppContext } from "@/lib/context";
import { useEffect, useRef, useState } from "react";

const AutoResizeText = ({
  children,
  initialFontSize = 16,
  minFontSize = 8,
  padding = 0,
}) => {
  const containerRef = useRef(null);
  const [fontSize, setFontSize] = useState(initialFontSize);
  const { data } = useAppContext();

  const resizeText = () => {
    const container = containerRef.current;
    if (!container) return;

    let currentFontSize = initialFontSize;
    container.style.fontSize = `${currentFontSize}px`;

    while (
      (container.scrollHeight > container.clientHeight ||
        container.scrollWidth > container.clientWidth) &&
      currentFontSize > minFontSize
    ) {
      currentFontSize--;
      container.style.fontSize = `${currentFontSize}px`;
    }

    setFontSize(currentFontSize);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeText);
    resizeText();

    return () => {
      window.removeEventListener("resize", resizeText);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => resizeText(), 100);
  }, [data?.currency, data?.enabled]);

  return (
    <div
      ref={containerRef}
      style={{
        fontSize: `${fontSize}px`,
        width: "100%",
        flexGrow: 1,
        overflow: "hidden",
        padding: padding,
      }}
    >
      {children}
    </div>
  );
};

export default AutoResizeText;
