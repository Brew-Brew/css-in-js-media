import { getBabelOutputPlugin } from '@rollup/plugin-babel';
import minify from 'rollup-plugin-babel-minify';

const config = {
  input: './cssinjs-inlclude-media.js',
  output: [
    {
      file: 'dist/index.js',
      format: 'esm',
      name: 'css-in-js-media',
    },
  ],
  plugins: [
    getBabelOutputPlugin({ presets: [['@babel/env', { modules: 'umd' }]] }),
    minify(),
  ],
};

export default config;
