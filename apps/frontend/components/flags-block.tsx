import { countryCodeList, Flag, Vi, IFlagEntry } from "@next-languages/flags";
import { useSearchParams } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { MessageCircleQuestion } from "lucide-react";
import { Suspense } from "react";

export function FlagsBlock() {
  return (
    <div className="w-full">
      <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
        <Suspense fallback={<div>...</div>}>
          {countryCodeList.map((countryCode) => (
            <FlagBlock countryCode={countryCode} />
          ))}
        </Suspense>
      </div>
    </div>
  );
}

function FlagBlock({ countryCode }: { countryCode: IFlagEntry }) {
  return (
    <div className="flex flex-col h-full w-full items-center space-y-2">
      <Flag
        countryCode={countryCode.alpha2}
        gradient="real-linear"
        borderRadius="xl"
        shadow="lg"
        size={"lg"}
        className="border"
      />

      <div className="w-full flex-col items-center">
        <div className="text-sm uppercase text-center">
          {countryCode.countryName}
        </div>
        <div className="flex flex-row w-full justify-around items-center text-xs">
          <div>{countryCode.alpha2}</div>
          <Separator orientation="vertical" className="h-3" />
          <div>{countryCode.alpha3}</div>
          <Separator orientation="vertical" className="h-3" />
          <MessageCircleQuestion strokeWidth={1} className="h-3 w-3" />
        </div>
      </div>
    </div>
  );
}
