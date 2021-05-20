import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "rollup-plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import image from '@rollup/plugin-image';
import json from '@rollup/plugin-json';

import pkg from "./package.json";

const config = {
  name: "ComponentLibrary",
  extensions: [".ts", ".tsx"],
};

export default {
  input: "src/index.tsx",
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: 'inline',
    },
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: 'inline',
    }
  ],
  external: [
    'algoliasearch/lite', 
    'object-assign',
    'polished', 
    'react-instantsearch-dom', 
    'react-player/lazy', 
  ],
  plugins: [
    // Automatically add peerDependencies to the `external` config
    // https://rollupjs.org/guide/en/#external
    peerDepsExternal(),

    resolve({ extensions: config.extensions }),

    commonjs({
      ignoreGlobal: true,
      include: /\/node_modules\//,
      namedExports: {
        react: Object.keys(require('react')),
        'react-is': Object.keys(require('react-is')),
      },
    }),

    typescript(),

    babel({
      extensions: config.extensions,
      include: ["src/**/*"],
      exclude: "node_modules/**",
    }),
    
    image(),
    json(),
  ],
};
