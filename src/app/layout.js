import { Kumbh_Sans } from "next/font/google";
import "./globals.css";

const family = Kumbh_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "The Real Cost",
  description:
    "A Chrome extension that converts prices on websites to hours of work needed to afford them.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={family.className}>
        {/* <Splash /> */}
        {children}
      </body>
    </html>
  );
}
