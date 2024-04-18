export function constructComponentName(alpha2: string) {
  const componentName = alpha2
    .toLowerCase()
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
  return componentName;
}

export function constructNamedExportComponentName(
  style: string,
  alpha2: string
) {
  let styleName;
  if (style === "default") {
    styleName = "";
  } else {
    styleName = style
      .toLowerCase()
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("");
  }
  return `${styleName}${constructComponentName(alpha2)}`;
}
