"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const DeviceRoute = ({ device = "desktop", children }) => {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const checkMobile = () => {
      const userAgent = window.navigator.userAgent;
      const mobileRegex =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      return mobileRegex.test(userAgent);
    };

    setIsMobile(checkMobile());
  }, []);

  useEffect(() => {
    if (isClient) {
      const result = device === "desktop" ? isMobile : !isMobile;
      if (result) {
        if (device === "mobile") router.push("/");
        else router.push("/mobile");
      }
    }
  }, [isClient, isMobile, device, router]);

  if (!isClient) return null;

  const result = device === "desktop" ? isMobile : !isMobile;
  return result ? null : children;
};

export default DeviceRoute;
