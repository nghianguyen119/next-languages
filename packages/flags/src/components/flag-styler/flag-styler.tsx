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
      "6xl": "next-languages--size-6xl",
    },
    dropShadow: {
      none: "",
      sm: "shadow-sm",
      md: "shadow-md",
      lg: "shadow-lg",
      xl: "shadow-xl",
      "2xl": "shadow-2xl",
      "3xl": "shadow-3xl",
      "4xl": "shadow-4xl",
      "5xl": "shadow-5xl",
      "6xl": "shadow-6xl",
    },
    gradient: {
      none: "",
      "top-down": "gradient-primary",
      "real-linear": "gradient-secondary",
      "real-circular": "gradient-accent",
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
    dropShadow: "none",
    gradient: "none",
    border: "none",
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
  dropShadow,
  gradient,
  border,
}: FlagStylerProps): JSX.Element {
  return (
    <div
      className={flagVariants({
        size,
        dropShadow,
        gradient,
        border,
        className,
      })}
    >
      {children}
    </div>
  );
}
