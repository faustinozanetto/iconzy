import { defineConfig, Options } from 'tsup';

export default defineConfig((options: Options) => ({
  minify: true,
  dts: true,
  format: ['esm', 'cjs'],
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'],
  entry: ['src/index.ts'],
  outDir: 'dist',
  esbuildOptions: (options) => {
    // Append "use client" to the top of the react entry point
    options.banner = {
      js: '"use client";',
    };
  },
  ...options,
}));
