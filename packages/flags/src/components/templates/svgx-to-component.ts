export function svgxToComponent(svgx: string, fileName: string) {
  const componentName = fileName;

  const viewBoxRegex = /viewBox="([^"]*)"/;
  const match = svgx.match(viewBoxRegex);
  if (match) {
    const currentViewbox = match[1];
    const [minX, minY, width, height] = currentViewbox
      .trim()
      .split(" ")
      .map(Number);
    const offset = (width - height) / 2;
    const circularViewbox = `${minX + offset} ${minY} ${height} ${height}`;
    const newViewBox = `viewBox={borderRadius === "circular" ? "${circularViewbox}" : "${currentViewbox}"}`;
    svgx = svgx.replace(viewBoxRegex, newViewBox);
  }

  return `
import * as React from "react";
import type { SVGProps } from "react";
import { FlagStyler, flagVariants } from "../../flag-styler";
import { type VariantProps } from "class-variance-authority";

interface FlagProps
    extends SVGProps<SVGSVGElement>,
    VariantProps<typeof flagVariants> {
    className?: string;
}

const ${componentName} = ({
    className,
    size,
    shadow,
    gradient,
    border,
    borderRadius,
    ...props
}: FlagProps) => (
    <FlagStyler
    className={className}
    size={size}
    shadow={shadow}
    gradient={gradient}
    border={border}
    borderRadius={borderRadius}
    >
    ${svgx}
    </FlagStyler>
);

export default ${componentName};
`;
}
