/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import * as path from "path";
import * as fs from "fs";
import * as cheerio from "cheerio";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const svgDir = path.join(__dirname, "../assets/flags");

fs.readdir(svgDir, (err, files) => {
  if (err) {
    console.error(`Error reading directory ${svgDir}: `, err);

    return;
  }

  files.forEach((file) => {
    if (path.extname(file) === ".svg") {
      const filePath = path.join(svgDir, file);
      fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
          console.error(`Error reading file ${filePath}: `, err);

          return;
        }

        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        const $ = cheerio.load(data, {
          xmlMode: true,
        });

        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        const svgElement = $("svg");
        const height = svgElement.attr("height");
        const width = svgElement.attr("width");
        svgElement.attr("width", "100%");
        svgElement.attr("height", "100%");
        if (!isNaN(Number(height)) && !isNaN(Number(width))) {
          svgElement.attr("viewBox", `0 0 ${width} ${height}`);
        }

        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        fs.writeFile(filePath, $.html(), "utf8", (err) => {
          if (err) {
            console.error(`Error writing file: ${filePath}`, err);
          }
        });
      });
    }
  });
});
