import minify from "rollup-plugin-babel-minify";

const config = {
  input: "./cssinjs-inlclude-media.js",
  output: [
    {
      file: "dist/index.js",
      format: "umd",
      name: "css-in-js-media"
    }
  ],
  plugins: [minify()]
};

export default config;
