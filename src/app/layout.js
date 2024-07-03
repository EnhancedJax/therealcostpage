import { ConfigProvider } from "antd";
import { Sora } from "next/font/google";
import { AppProvider } from "../lib/context";
import { ANTTHEME } from "./constants";
import "./globals.css";

const family = Sora({ subsets: ["latin"] });

export const metadata = {
  title: "The Real Cost",
  description:
    "A Chrome extension that converts prices on websites to hours of work needed to afford them.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ConfigProvider theme={ANTTHEME}>
        <AppProvider>
          <body className={family.className}>{children}</body>
        </AppProvider>
      </ConfigProvider>
    </html>
  );
}
