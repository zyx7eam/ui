import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts', 'src/avatar.tsx'],
  format: ['esm', 'cjs'],
  dts: true,
  external: ['react'],
  sourcemap: true,
  clean: true,
  banner: {
    js: '"use client";',
  },
});
