import * as React from "react";
import type { SVGProps } from "react";
import { FlagStyler, flagVariants } from "../flag-styler";
import { type VariantProps } from "class-variance-authority";

interface FlagProps
  extends VariantProps<typeof flagVariants>,
    SVGProps<SVGSVGElement> {
  className?: string;
}

const SvgFr = ({
  className,
  size,
  dropShadow,
  gradient,
  border,
  ...props
}: FlagProps) => (
  <FlagStyler
    className={className}
    size={size}
    dropShadow={dropShadow}
    gradient={gradient}
  >
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 32 24"
    >
      <mask
        id="FR_svg__a"
        width={32}
        height={24}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
      >
        <path fill="#fff" d="M0 0h32v24H0z" />
      </mask>
      <g fillRule="evenodd" clipRule="evenodd" mask="url(#FR_svg__a)">
        <path fill="#F50100" d="M22 0h10v24H22z" />
        <path fill="#2E42A5" d="M0 0h12v24H0z" />
        <path fill="#F7FCFF" d="M10 0h12v24H10z" />
      </g>
    </svg>
  </FlagStyler>
);
export default SvgFr;
