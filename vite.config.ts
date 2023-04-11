import { defineConfig } from "vite";
import { svelte, vitePreprocess } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/svelte-calculator/",
  plugins: [svelte({ preprocess: vitePreprocess() })],
  server: { port: 8000 },
  build: {
    outDir: "./docs",
  },
});
