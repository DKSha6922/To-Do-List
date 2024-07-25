import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: '/To-Do-List/',
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, "index.html"),
        },
      },
    },
});
