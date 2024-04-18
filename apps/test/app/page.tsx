import {
  Us,
  Fr,
  Vn,
  Flag,
  countryCodeList,
  DuolingoUs,
  DuolingoFr,
} from "@next-languages/flags";
import Vnm from "@next-languages/flags/Vn.js";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full items-center justify-around flex-wrap">
      <DuolingoUs size="lg" borderRadius="4xl" />
      <DuolingoFr size="sm" borderRadius="lg" />
      <Us size="xl" borderRadius="lg" gradient="top-top" />
      <Fr size="lg" borderRadius="2xl" gradient="real-linear" />
      <Vn size="md" borderRadius="circular" gradient="real-linear" />
      <Us size="sm" borderRadius="circular" gradient="real-linear" />
      <Vn size="xs" borderRadius="circular" gradient="real-linear" />
      <Flag countryCode="FK" borderRadius="xl" />
      <Vnm size="sm" borderRadius="xl" />
      <Us size="xl" borderRadius="lg" gradient="real-linear" />
      <Fr size="lg" borderRadius="2xl" gradient="real-linear" />
      <Vn size="md" borderRadius="circular" gradient="real-linear" />
      <Us size="sm" borderRadius="circular" gradient="real-linear" />
      <Vn size="xs" borderRadius="circular" gradient="real-linear" />
      <Flag countryCode="FK" borderRadius="xl" />
      <Vnm size="sm" borderRadius="xl" />
      <Us size="xl" borderRadius="lg" gradient="real-linear" />
      <Fr size="lg" borderRadius="2xl" gradient="real-linear" />
      <Vn size="md" borderRadius="circular" gradient="real-linear" />
      <Us size="sm" borderRadius="circular" gradient="real-linear" />
      <Vn size="xs" borderRadius="circular" gradient="real-linear" />
      <Vnm size="sm" borderRadius="xl" />
      {countryCodeList.map((country: any) => (
        <Flag
          gradient="real-linear"
          size="xl"
          borderRadius="xl"
          countryCode={country.alpha3 || ""}
          key={country.alpha2}
        />
      ))}
    </div>
  );
}
