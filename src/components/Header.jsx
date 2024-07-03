import CustomButton from "@/components/CustomButton";
import Image from "next/image";
import Logo from "../../public/icon.svg";
import StoreIcon from "../../public/store.svg";

export default function Header() {
  return (
    <>
      <div className="flex items-center justify-center gap-4 py-6 md:hidden">
        <CustomButton iconSVG={StoreIcon}>Install extension</CustomButton>
      </div>
      <div className="items-center justify-center hidden gap-4 py-8 md:flex">
        <Image src={Logo} width="36" height="36" alt="logo" />
        Extension available for Chrome!
      </div>
    </>
  );
}
