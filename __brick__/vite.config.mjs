import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      name: 'index',
      entry: [resolve(__dirname, "src/index.ts")],
      formats: ["es", "cjs", "iife", "umd"],
      tsconfigPath: 'tsconfig.build.json',
      treeshake: true,
    },
    tsconfigPath: 'tsconfig.build.json',
    emptyOutDir: true,
    minify: true,
    manifest: true,
    sourcemap: true,
    outDir: 'dist',
    ssrEmitAssets: true,
    write: true,
    reportCompressedSize: true,
    cssMinify: false,
    ssr: true,
    ssrManifest: true,
    assetsDir: "src/assets",
    chunkSizeWarningLimit: 500,
    commonjsOptions: {
      sourceMap: true,
      strictRequires: true,
    },
    rollupOptions: {
      treeshake: true,
    }
  },
  plugins: [
    dts({
      include: ["src/"],
      tsconfigPath: 'tsconfig.build.json',
    }),
  ],
});
