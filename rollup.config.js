import minify from "rollup-plugin-babel-minify";

const config = {
  input: "./cssinjs-inlclude-media.js",
  output: [
    {
      file: "dist/index.js",
      format: "cjs"
    }
  ],
  plugins: [minify()]
};

export default config;
