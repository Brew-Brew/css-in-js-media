import { getBabelOutputPlugin } from "@rollup/plugin-babel";
import minify from "rollup-plugin-babel-minify";
import typescript from "rollup-plugin-typescript2";

const config = {
  input: "./cssinjs-inlclude-media.ts",
  output: [
    {
      file: "dist/index.js",
      format: "esm",
      name: "css-in-js-media",
    },
  ],
  plugins: [
    typescript({
      typescript: require("typescript"),
    }),
    getBabelOutputPlugin({ presets: [["@babel/env", { modules: "umd" }]] }),
    minify(),
  ],
};

export default config;
