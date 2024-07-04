import StoreButton from "@/components/StoreButton";
import DeviceRoute from "@/lib/deviceRoute";
import Image from "next/image";
import Logo from "../../../public/icon.svg";

export default async function Mobile() {
  return (
    <DeviceRoute device="mobile">
      <main
        id="main"
        className="relative flex flex-col items-center justify-center w-screen h-screen p-8 overflow-hidden text-center"
      >
        <Image src={Logo} alt="Logo" width={100} height={100} />

        <h1 className="w-full pt-4 text-lg text-center">The Real Cost</h1>
        <p>
          A Chrome extension that converts prices on websites to hours of work
          needed to afford them.
        </p>

        <StoreButton>View on Chrome Web Store</StoreButton>
      </main>
    </DeviceRoute>
  );
}
