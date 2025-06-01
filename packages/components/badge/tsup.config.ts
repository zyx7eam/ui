import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts', 'src/badge.tsx'],
  format: ['esm', 'cjs'],
  dts: true,
  external: ['react'],
  sourcemap: true,
  clean: true,
});
