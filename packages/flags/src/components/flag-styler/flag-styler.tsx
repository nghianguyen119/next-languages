import * as React from "react";
import "./style.css";
import { cva, type VariantProps } from "class-variance-authority";

export const flagVariants = cva("", {
  variants: {
    size: {
      none: "",
      "5xs": "next-languages--size-5xs",
      "4xs": "next-languages--size-4xs",
      "3xs": "next-languages--size-3xs",
      "2xs": "next-languages--size-2xs",
      xs: "next-languages--size-xs",
      sm: "next-languages--size-sm",
      md: "next-languages--size-md",
      lg: "next-languages--size-lg",
      xl: "next-languages--size-xl",
      "2xl": "next-languages--size-2xl",
      "3xl": "next-languages--size-3xl",
      "4xl": "next-languages--size-4xl",
      "5xl": "next-languages--size-5xl",
      full: "next-languages--size-full",
    },
    shadow: {
      none: "",
      sm: "next-languages--shadow-sm",
      default: "next-languages--shadow-default",
      md: "next-languages--shadow-md",
      lg: "next-languages--shadow-lg",
      xl: "next-languages--shadow-xl",
      "2xl": "next-languages--shadow-2xl",
    },
    borderRadius: {
      none: "",
      sm: "next-languages--border-radius-sm",
      default: "next-languages--border-radius-default",
      md: "next-languages--border-radius-md",
      lg: "next-languages--border-radius-lg",
      xl: "next-languages--border-radius-xl",
      "2xl": "next-languages--border-radius-2xl",
      "3xl": "next-languages--border-radius-3xl",
      "4xl": "next-languages--border-radius-4xl",
      "5xl": "next-languages--border-radius-5xl",
      "6xl": "next-languages--border-radius-6xl",
      "7xl": "next-languages--border-radius-7xl",
      full: "next-languages--border-radius-full",
    },
    gradient: {
      none: "",
      "top-down": "next-languages--gradient next-languages--gradient-top-down",
      "real-linear":
        "next-languages--gradient next-languages--gradient-real-linear",
      "real-circular":
        "next-languages--gradient next-languages--gradient-real-circular",
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
    size: "none",
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
      className={flagVariants({
        size,
        shadow,
        gradient,
        border,
        borderRadius,
        className,
      })}
    >
      {children}
    </div>
  );
}
