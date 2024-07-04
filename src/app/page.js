import Field from "@/components/Field";
import StoreButton from "@/components/StoreButton";
import Try from "@/components/Try";
import { fetchExchangeRates } from "@/lib/api";
import DeviceRoute from "@/lib/deviceRoute";
import { AppProvider } from "../lib/context";

export default async function Home() {
  const rates = await fetchExchangeRates();

  return (
    <DeviceRoute device="desktop">
      <AppProvider>
        <main
          id="main"
          className="relative flex flex-col w-screen h-screen overflow-hidden text-left"
        >
          <h1 className="w-full pt-4 text-lg text-center opacity-20">
            TheRealCost
          </h1>
          <Try rates={rates} />
          <StoreButton>Install extension</StoreButton>
          <Field rates={rates} />
        </main>
      </AppProvider>
    </DeviceRoute>
  );
}
