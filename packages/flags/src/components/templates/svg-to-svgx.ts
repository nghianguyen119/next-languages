import { Config } from "@svgr/core";

const svgToSvgx: Config["template"] = ({ jsx }, { tpl }) => {
  return tpl`${jsx}`;
};

export { svgToSvgx };
