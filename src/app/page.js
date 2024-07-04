import Field from "@/components/Field";
import Header from "@/components/Header";
import Try from "@/components/Try";
import { fetchExchangeRates } from "@/lib/api";

export default async function Home() {
  const rates = await fetchExchangeRates();

  return (
    <main
      id="main"
      className="relative flex flex-col w-screen h-screen overflow-hidden text-left"
    >
      <Try rates={rates} />
      <Header />
      <Field rates={rates} />
    </main>
  );
}
