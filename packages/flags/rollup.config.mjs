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
      },
    ],
    plugins: [
      postcss({
        plugins: [],
        minimize: true,
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
      },
    ],
    plugins: [
      postcss({
        plugins: [],
        minimize: true,
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
];
