import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import analyze from 'rollup-plugin-analyzer';
import pkg from './package.json';
import compiler from '@ampproject/rollup-plugin-closure-compiler';

const isProduction = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/index.js',
  external: ['react', 'lodash-es'],
  output: {
    file: pkg.module,
    format: 'es',
    sourcemap: true,
    sourcemapExcludeSources: true,
  },
  plugins: [
    resolve(),
    babel({
      exclude: ['node_modules/**'],
    }),
    commonjs(),
    !isProduction && analyze(),
    compiler({
      formatting: 'PRETTY_PRINT',
    }),
  ],
};
