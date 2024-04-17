import * as path from "path";
import * as fs from "fs";
import * as cheerio from "cheerio";
import { fileURLToPath } from "url";
import { transform } from "@svgr/core";
import { svgToSvgx as templateSvgToSvgx } from "../src/components/templates/svg-to-svgx";
import { svgxToComponent as templateSvgxToComponent } from "../src/components/templates/svgx-to-component";
import * as prettier from "prettier";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const svgDir = path.join(__dirname, "../assets");
const svgComponentsDir = path.join(__dirname, "../src/components/flags");
const styles = ["duolingostyle", "flagpack"];

async function main() {
  createPostProcessSvgDir();
  const promises = styles.map(async (style) => {
    const files = await fs.promises.readdir(path.join(svgDir, style));
    await Promise.all(
      files.map(async (file) => {
        await processAndWriteSvg(style, file);
      })
    );
  });
  await Promise.all(promises);
}

function createPostProcessSvgDir() {
  if (fs.existsSync(svgComponentsDir)) {
    fs.rmdirSync(svgComponentsDir, { recursive: true });
  }

  styles.forEach((style) => {
    const styleDir = path.join(svgComponentsDir, style);
    if (fs.existsSync(styleDir)) {
      fs.rmdirSync(styleDir, { recursive: true });
    }
    fs.mkdirSync(styleDir, { recursive: true });
    const indexFilePath = path.join(svgComponentsDir, "index.ts");
    fs.appendFile(
      indexFilePath,
      `export * from './${style}';\n`,
      "utf8",
      (err) => {
        if (err) {
          return console.error(
            `Error writing to index.ts: ${indexFilePath}`,
            err
          );
        }
      }
    );
  });
}

async function processAndWriteSvg(style: string, file: string) {
  console.log("Processing file: ", file);
  if (path.extname(file) === ".svg") {
    const filePath = path.join(svgDir, style, file);
    let svgContent = fs.readFileSync(filePath, "utf8");
    svgContent = generateViewbox(svgContent);
    let svgx = await transform(svgContent, {
      plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
      typescript: true,
      template: templateSvgToSvgx,
    });

    svgx = svgx.replace(/;$/g, "");

    let fileName = path
      .basename(file, ".svg")
      .toLowerCase()
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("");
    // only keep alphanumeric characters and format in camel case, the first letter after hyphen is capitalized
    fileName = fileName.replace(/[^a-zA-Z0-9-]/g, "");

    const tsxComponent = templateSvgxToComponent(svgx, fileName);
    const formatedTsxComponent = await prettier.format(tsxComponent, {
      semi: false,
      parser: "babel-ts",
    });

    fs.writeFile(
      path.join(svgComponentsDir, style, `${fileName}.tsx`),
      formatedTsxComponent,
      "utf8",
      (err) => {
        if (err) {
          return console.error(`Error writing file: ${filePath}`, err);
        }
        const indexFilePath = path.join(svgComponentsDir, style, "index.ts");

        fs.appendFile(
          indexFilePath,
          `export { default as ${style.charAt(0).toUpperCase() + style.slice(1)}${fileName} } from './${fileName}';\n`,
          "utf8",
          (err) => {
            if (err) {
              return console.error(
                `Error writing to index.ts: ${indexFilePath}`,
                err
              );
            }
          }
        );
      }
    );
  }
}

function generateViewbox(svgContent: string) {
  const $ = cheerio.load(svgContent, {
    xmlMode: true,
  });
  const svgElement = $("svg");
  const height = svgElement.attr("height");
  const width = svgElement.attr("width");
  svgElement.attr("width", "100%");
  svgElement.attr("height", "100%");
  if (!isNaN(Number(height)) && !isNaN(Number(width))) {
    svgElement.attr("viewBox", `0 0 ${width} ${height}`);
  }
  return $.html();
}

main();
