import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import { readFileSync } from "fs";
import dts from "rollup-plugin-dts";
import alias from "@rollup/plugin-alias";
import path from "path";
import { fileURLToPath } from "url"; // ✅ Fix for __dirname in ESM

const __dirname = path.dirname(fileURLToPath(import.meta.url)); // ✅ Get __dirname in ES module
const pkg = JSON.parse(readFileSync(new URL("./package.json", import.meta.url), "utf-8"));

const external = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
  "ky",
  "react",
  "react-native",
  "react-native-reanimated",
  "expo",
  "@react-native-community/datetimepicker",
];

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/index.cjs.js",
        format: "cjs",
        sourcemap: true,
      },
      {
        file: "dist/index.esm.js",
        format: "esm",
        sourcemap: true,
      },
    ],
    external,
    plugins: [
      alias({
        entries: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
      }),
      resolve({
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
      }),
      commonjs({
        transformMixedEsModules: true,
        requireReturnsDefault: "auto",
        include: /node_modules/,
      }),
      typescript(),
      json(),
    ],
  },
  {
    input: "src/index.ts",
    output: { file: "dist/index.d.ts", format: "es" },
    plugins: [dts], // ✅ Use dts() instead of dts
  },
];