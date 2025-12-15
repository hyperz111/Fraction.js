import { defineConfig } from 'rollup';
import terser from '@rollup/plugin-terser';
import copy from 'rollup-plugin-copy';
import pkg from './package.json' with { type: 'json' };

const now = new Date();
const banner = `
/**
 * @license ${pkg.name} v${pkg.version} ${date.toLocaleDateString('en')}
 * https://raw.org/article/rational-numbers-in-javascript/
 *
 * Copyright (c) ${date.getFullYear()}, ${pkg.author.name} (${pkg.author.url})
 * Licensed under the ${pkg.license} license.
 **/
`.trim();

export default defineConfig({
  input: './src/index.js',
  output: [
    {
      file: './dist/index.cjs',
      format: 'cjs',
      banner,
    },
    {
      file: './dist/index.mjs',
      format: 'es',
      banner,
    },
  ],
  plugins: [
    terser({
      compress: false,
      format: {
        ecma: 2020,
      },
      maxWorkers: 1,
    }),
    copy({
      targets: [
        {
          src: './src/index.d.ts',
          dest: './dist/',
        },
      ],
    }),
  ],
});
