import Link from "next/link";
import { Menu, Search, Sun } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Fr, Flag, countryCodeList } from "@next-languages/flags";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { Bird, Rabbit, Turtle, MessageCircleQuestion } from "lucide-react";
import { Slider } from "@/components/ui/slider";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Suspense } from "react";
import { Customizer } from "@/components/customizer";
import { FlagsBlock } from "@/components/flags-block";

// https://www.iban.com/country-codes
// https://bytedev.medium.com/iso-data-code-standards-useful-to-software-developers-b14889f08c83

export async function generateStaticParams() {
  return [];
}

export default function Dashboard() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-backgroundSecondary md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Flag
                countryCode="FR"
                size="4xs"
                gradient="real-linear"
                borderRadius="default"
              />
              <span className="">Next Flags</span>
            </Link>
          </div>
          <div className="flex-1 pt-2 lg:pt-4">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <Customizer />
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-backgroundSecondary px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col pt-12">
              <Customizer />
            </SheetContent>
          </Sheet>
          <div className="flex-1"></div>
          <nav className="flex flex-row h-full items-center space-x-4">
            <div className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 mr-4">
              <Link
                href="/"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Flags
              </Link>
              <Link
                href="/guide"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Guide
              </Link>
            </div>
            <Separator orientation="vertical" className="h-6" />
            <Link href={""} target="_blank" rel="noreferrer">
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-9 px-0"
                )}
              >
                <GitHubLogoIcon className="h-5 w-5" />
              </div>
            </Link>
            <Link href={""} target="_blank" rel="noreferrer">
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-9 px-0"
                )}
              >
                <TwitterLogoIcon className="h-5 w-5" />
              </div>
            </Link>
            <Separator orientation="vertical" className="h-6" />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="w-9 px-0">
                  <Sun className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Light</DropdownMenuItem>
                <DropdownMenuItem>Dark</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>System</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex items-center w-full">
            <form className="w-full">
              <div className="relative w-full">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search flags..."
                  className="w-full appearance-none bg-background pl-8 shadow-none"
                />
              </div>
            </form>
          </div>

          <div className="flex flex-1  justify-center rounded-lg border border-dashed shadow-sm p-4">
            <FlagsBlock />
            {/* <div className="w-full">
              <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
                <FlagBlock countryCode={"FR"} />
              </div>
            </div> */}
          </div>
        </main>
      </div>
    </div>
  );
}

function FlagBlock({ countryCode }: { countryCode: string }) {
  return (
    <div className="flex flex-col h-full w-full items-center space-y-2">
      <Flag
        countryCode={countryCode}
        gradient="real-linear"
        borderRadius="xl"
        shadow="lg"
        size="lg"
        className="border"
      />
      <div className="w-full flex-col items-center">
        <div className="text-sm uppercase text-center">UNITED STATES</div>
        <div className="flex flex-row w-full justify-around items-center text-xs">
          <div>EN</div>
          <Separator orientation="vertical" className="h-3" />
          <div>US</div>
          <Separator orientation="vertical" className="h-3" />
          <MessageCircleQuestion strokeWidth={1} className="h-3 w-3" />
        </div>
      </div>
    </div>
  );
}
