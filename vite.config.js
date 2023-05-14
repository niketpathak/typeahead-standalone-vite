import { resolve, dirname } from "path";
import { defineConfig } from "vite";

const __dirname = dirname(__filename);

export default defineConfig({
  build: {
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      name: "typeahead_vite",
      formats: ["es", "umd"],
      fileName: (format) => `typeahead_vite.${format}.js`,
    },
    minify: false,
    watch: {
      exclude: 'node_modules/**',
      include: 'src/**',
    },
  },
});
