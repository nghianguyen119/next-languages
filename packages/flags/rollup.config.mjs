import { readFileSync } from "fs";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import url from "@rollup/plugin-url";
import external from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import typescriptEngine from "typescript";

const packageJson = JSON.parse(readFileSync("./package.json"));

export default {
  input: "./src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: false,
      exports: "named",
      name: packageJson.name,
    },
    {
      file: packageJson.module,
      format: "es",
      exports: "named",
      sourcemap: false,
    },
  ],
  plugins: [
    external({ includeDependencies: true }),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.json",
      typescript: typescriptEngine,
      sourceMap: false,
      exclude: [
        "coverage",
        ".storybook",
        "storybook-static",
        "config",
        "dist",
        "node_modules/**",
        "*.cjs",
        "*.mjs",
        "**/__snapshots__/*",
        "**/__tests__",
        "**/*.test.js+(|x)",
        "**/*.test.ts+(|x)",
        "**/*.mdx",
        "**/*.story.ts+(|x)",
        "**/*.story.js+(|x)",
        "**/*.stories.ts+(|x)",
        "**/*.stories.js+(|x)",
        "setupTests.ts",
        "vitest.config.ts",
      ],
    }),
    url(),
    terser(),
  ],
};
