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
import { ReactNode } from "react";

export function Header({ children }: { children: React.ReactNode }) {
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-backgroundSecondary px-4 lg:h-[60px] lg:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col">
          {children}
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
  );
}
