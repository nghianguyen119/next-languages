import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import "../../index.css";
import { cn } from "../../utils/utils";

export const flagVariants = cva("", {
  variants: {
    size: {
      none: "",
      "5xs": "w-4",
      "4xs": "w-6",
      "3xs": "w-9",
      "2xs": "w-12",
      xs: "w-16",
      sm: "w-24",
      md: "w-32",
      lg: "w-48",
      xl: "w-64",
      "2xl": "w-96",
      "3xl": "w-[32rem]",
      "4xl": "w-[40rem]",
      "5xl": "w-[48rem]",
      full: "w-full",
    },
    shadow: {
      none: "",
      sm: "shadow-sm",
      default: "shadow",
      md: "shadow-md",
      lg: "shadow-lg",
      xl: "shadow-xl",
      "2xl": "shadow-2xl",
    },
    borderRadius: {
      none: "",
      sm: "rouded-sm overflow-hidden",
      default: "rounded overflow-hidden",
      md: "rounded-md overflow-hidden",
      lg: "rounded-lg overflow-hidden",
      xl: "rounded-xl overflow-hidden",
      "2xl": "rounded-2xl overflow-hidden",
      "3xl": "rounded-3xl overflow-hidden",
      "4xl": "rounded-[2rem] overflow-hidden",
      "5xl": "rounded-[3rem] overflow-hidden",
      "6xl": "rounded-[4rem] overflow-hidden",
      "7xl": "rounded-[6rem] overflow-hidden",
      circular: "rounded-full overflow-hidden",
    },
    gradient: {
      none: "",
      "real-linear":
        "relative before:w-full before:h-full before:absolute before:block before:mix-blend-overlay before:box-border before:bg-gradient-real-linear",
      "top-down":
        "relative before:w-full before:h-full before:absolute before:block before:mix-blend-overlay before:box-border before:bg-gradient-top-down",
      "real-circular":
        "relative before:w-full before:h-full before:absolute before:block before:mix-blend-overlay before:box-border before:bg-gradient-real-circular",
      one: "relative before:w-full before:h-full before:absolute before:block before:mix-blend-overlay before:box-border before:bg-gradient-blue-purple",
      two: "relative before:w-full before:h-full before:absolute before:block before:mix-blend-overlay before:box-border before:bg-gradient-red-yellow",
      tree: "relative before:w-full before:h-full before:absolute before:block before:mix-blend-overlay before:box-border before:bg-gradient-green-blue",
      four: "relative before:w-full before:h-full before:absolute before:block before:mix-blend-overlay before:box-border before:bg-gradient-dark-light",
    },
    border: {
      none: "",
      "1": "border",
      "2": "border-2",
      "3": "border-3",
      "4": "border-4",
      "5": "border-5",
    },
  },
  defaultVariants: {
    size: "md",
    shadow: "none",
    gradient: "none",
    border: "none",
    borderRadius: "none",
  },
});

export interface FlagStylerProps extends VariantProps<typeof flagVariants> {
  children: React.ReactNode;
  className?: string;
}

export function FlagStyler({
  children,
  className,
  size,
  shadow,
  gradient,
  border,
  borderRadius,
}: FlagStylerProps): JSX.Element {
  return (
    <div
      className={cn(
        flagVariants({
          size,
          shadow,
          gradient,
          border,
          borderRadius,
          className,
        })
      )}
    >
      {children}
    </div>
  );
}
