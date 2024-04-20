import Link from "next/link";
import {
  ALargeSmall,
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  NotebookText,
  Package,
  Package2,
  Search,
  ShieldQuestion,
  ShoppingCart,
  Sun,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Fr } from "@next-languages/flags";
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
import { ScrollArea } from "@/components/ui/scroll-area";
import { Header } from "@/components/header";

// https://www.iban.com/country-codes
// https://bytedev.medium.com/iso-data-code-standards-useful-to-software-developers-b14889f08c83

export default function Dashboard() {
  const sideBarNav = [
    {
      title: "Introduction",
      icon: ALargeSmall,
      items: [
        {
          title: "What is next flags?",
          href: "#",
        },
        {
          title: "Compatibility",
          href: "#",
        },
      ],
    },
    {
      title: "Basics",
      icon: NotebookText,
      items: [
        {
          title: "Size",
          href: "#",
        },
        {
          title: "Border radius",
          href: "#",
        },
        {
          title: "Shadow",
          href: "#",
        },
        {
          title: "Gradient",
          href: "#",
        },
        {
          title: "Circular",
          href: "#",
        },
      ],
    },
    {
      title: "Advanced",
      icon: ShieldQuestion,
      items: [
        {
          title: "Circle focus modification",
          href: "#",
        },
      ],
    },
  ];

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-backgroundSecondary md:block">
        <div className="flex h-full max-h-screen flex-col">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Fr size="4xs" gradient="real-linear" borderRadius="default" />
              <span className="">Next Flags</span>
            </Link>
          </div>
          <aside className="top-14 z-30 h-[calc(100vh-6rem)] lg:h-[calc(100vh-60px)] w-full shrink-0">
            <ScrollArea className="h-full *:*:h-full">
              <div className="h-full flex flex-col">
                <div className="flex-1 pt-2 lg:pt-4">
                  <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                    {sideBarNav.map((nav, index) => (
                      <>
                        <div
                          key={nav.title}
                          className="flex items-center gap-3 px-3 py-2 transition-all text-primary text-base"
                        >
                          <nav.icon className="h-4 w-4" />
                          {nav.title}
                        </div>

                        {nav.items.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                          >
                            {item.title}
                          </Link>
                        ))}
                        <Separator
                          className={`my-3${index === sideBarNav.length - 1 ? " hidden" : ""}`}
                        />
                      </>
                    ))}
                  </nav>
                </div>
                <div className="mt-auto p-4">
                  <Card x-chunk="dashboard-02-chunk-0">
                    <CardHeader className="p-2 pt-0 md:p-4">
                      <CardDescription>
                        Start an issue, make a pull request, or suggest a
                        feature
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                      <Button size="sm" className="w-full">
                        Github
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </ScrollArea>
          </aside>
        </div>
      </div>

      <div className="flex flex-col">
        <Header>
          <nav className="grid gap-2 text-lg font-medium">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Package2 className="h-6 w-6" />
              <span className="sr-only">Next Flags</span>
            </Link>
            {sideBarNav.map((nav, index) => (
              <>
                <div
                  key={nav.title}
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-primary text-lg"
                >
                  <nav.icon className="h-4 w-4" />
                  {nav.title}
                </div>
                {nav.items.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-0 text-muted-foreground hover:text-foreground text-base"
                  >
                    {item.title}
                  </Link>
                ))}
              </>
            ))}
          </nav>
        </Header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6"></main>
      </div>
    </div>
  );
}
