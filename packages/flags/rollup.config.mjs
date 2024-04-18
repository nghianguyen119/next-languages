import { readFileSync } from "fs";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import url from "@rollup/plugin-url";
import external from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import typescriptEngine from "typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";

// const packageJson = JSON.parse(readFileSync("./package.json"));

export default [
  {
    input: "./src/index.ts",
    output: [
      {
        dir: "dist/esm",
        format: "es",
        exports: "named",
        sourcemap: false,
        preserveModules: true,
        preserveModulesRoot: "src", // LEARN: preserve the directory structure, without creating packages/flags/src/flags
      },
    ],
    plugins: [
      postcss({
        config: {
          path: "./postcss.config.cjs",
        },
        minimize: true,
        extract: "style.css",
        modules: false, // LEARN: set to true will create the css with random name while the css in the component is original name?
      }),
      external({ includeDependencies: true }),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        typescript: typescriptEngine,
        sourceMap: false,
        declaration: true,
        declarationDir: "dist/esm/types",
        outDir: "dist/esm/types",
        exclude: ["config", "dist", "node_modules/**", "*.cjs", "*.mjs"],
      }),
      url(),
      terser(),
    ],
  },
  {
    input: "./src/index.ts",
    output: [
      {
        dir: "dist/cjs",
        format: "cjs",
        exports: "named",
        sourcemap: false,
        preserveModules: true,
        preserveModulesRoot: "src",
      },
    ],
    plugins: [
      postcss({
        plugins: [],
        minimize: true,
        extract: "style.css",
        modules: true,
      }),
      external({ includeDependencies: true }),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        typescript: typescriptEngine,
        sourceMap: false,
        declaration: true,
        declarationDir: "dist/cjs/types",
        outDir: "dist/cjs/types",
        exclude: ["config", "dist", "node_modules/**", "*.cjs", "*.mjs"],
      }),
      url(),
      terser(),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    external: [/\.(sc|sa|c)ss$/],
    plugins: [dts()],
  },
];
