"use client";

import { WEBSTORE_LINK } from "@/app/constants";
import StoreIcon from "../../public/store.svg";
import CustomButton from "./CustomButton";

export default function StoreButton({ children }) {
  return (
    <div className="flex items-center justify-center gap-4 py-6">
      <CustomButton
        iconSVG={StoreIcon}
        onClick={() => {
          window.open(WEBSTORE_LINK, "_blank");
        }}
      >
        {children}
      </CustomButton>
    </div>
  );
}
