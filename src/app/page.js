import Field from "@/components/Field";
import Header from "@/components/Header";
import { fetchExchangeRates } from "@/lib/api";

export default async function Home() {
  const rates = await fetchExchangeRates();

  return (
    <main
      id="main"
      className="relative flex flex-col w-screen h-screen overflow-hidden font-thin leading-tight tracking-tighter text-left"
    >
      <Header />
      {/* <MainText rates={rates} /> */}
      <Field rates={rates} />
    </main>
  );
}
