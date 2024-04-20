import React, { SVGProps, lazy } from "react";
import { VariantProps } from "class-variance-authority";
import { flagVariants } from "../flag-styler";
import { countryCodeList } from "../../utils/country-code-list";
import { constructComponentName } from "../../utils/name-constructor";

interface FlagProps
  extends SVGProps<SVGSVGElement>,
    VariantProps<typeof flagVariants> {
  className?: string;
  countryCode: string;
}

export default function Flag({ countryCode, ...props }: FlagProps) {
  const country = countryCodeList.find(
    (country) =>
      country.alpha2 === countryCode.toUpperCase() ||
      country.alpha3 == countryCode.toUpperCase() ||
      country.numeric == countryCode.toUpperCase()
  );
  if (!country) {
    return null;
  }

  const componentName = constructComponentName(country.alpha2);

  const ImportedFlag = lazy(() => import(`../flags/default/${componentName}`));
  return <ImportedFlag {...props} />;
}
