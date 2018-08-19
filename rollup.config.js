import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import eslint from 'rollup-plugin-eslint';
import builtins from 'rollup-plugin-node-builtins';
import {terser} from 'rollup-plugin-terser';


export default {
  input: './lib/enjoi.js',
  output: {
    name: 'Enjoi',
    file: 'dist/enjoi.min.js',
    format: 'iife'
  },
  plugins: [
    eslint({
      fix: true
    }),
    nodeResolve({
      main: false,
      browser: true,
      preferBuiltins: true
    }),
    commonjs(),
    builtins(),
    babel({
      exclude: 'node_modules/**',
      babelrc: false,
      presets: [
        [
          "env",
          {
            modules: false
          }
        ]
      ],
      plugins: [
        "external-helpers"
      ]
    }),
    terser()
  ]
};
