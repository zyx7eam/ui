import { defineConfig } from 'tsup';

export default defineConfig({
  clean: true,
  target: 'es2019',
  format: ['cjs', 'esm'],
  banner: { js: '"use client";' },
  entry: ['src/index.ts'],
  treeshake: true,
  sourcemap: 'inline',
  minify: true,
  dts: true,
  splitting: false,
  external: ['react'],
  injectStyle: false,
});
