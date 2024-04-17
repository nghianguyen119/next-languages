import { FlagpackUs, FlagpackFr, FlagpackVn } from "@next-languages/flags";
import Ab from "@next-languages/flags/Vi.js";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full items-center  justify-around">
      <FlagpackUs size="xl" borderRadius="lg" gradient="real-linear" />
      <FlagpackFr size="lg" borderRadius="2xl" gradient="real-linear" />
      <FlagpackVn size="md" borderRadius="circular" gradient="real-linear" />
      <FlagpackUs size="sm" borderRadius="circular" gradient="real-linear" />
      <FlagpackVn size="xs" borderRadius="circular" gradient="real-linear" />
      <Ab size="xl" borderRadius="lg" gradient="real-circular" />
    </div>
  );
}
