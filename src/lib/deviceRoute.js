"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const DeviceRoute = ({ device = "desktop", children }) => {
  const router = useRouter();
  const checkMobile = () => {
    const userAgent = window.navigator.userAgent;
    const mobileRegex =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return mobileRegex.test(userAgent);
  };

  const result = device === "desktop" ? checkMobile() : !checkMobile();

  useEffect(() => {
    if (result) {
      if (device === "mobile") router.push("/");
      else router.push("/mobile");
    }
  }, [result, router]);

  return result ? null : children;
};

export default DeviceRoute;
