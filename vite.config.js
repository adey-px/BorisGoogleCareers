import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/

//
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  test: {
    globals: true,
    setupFiles: ['./tests/setup.js']
  },
});

//NB:
/* 
  - Add 'test: {}' section to make vue-test-utils 
    watch all project files
  - Install eslint-plugin-vitest-globals 
  
  - Only add setupFiles for vitest
*/
