import { defineConfig } from "vitest/config";
import { configDefaults } from "vitest/config";
import react from "@vitejs/plugin-react-swc";

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
  },
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/Components"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@pages": path.resolve(__dirname, "src/Pages"),
      "@layouts": path.resolve(__dirname, "src/Layouts"),
    },
  },
  test: {
    environment: "jsdom",
    setupFiles: "./test/setupTests.ts",
    css: {
      include: /.+/,
    },
    server: {
      deps: {
        inline: [/node_modules\/@drskyjs\/datepicker/],
      },
    },
    coverage: {
      provider: "v8",
      exclude: [
        ...configDefaults.exclude,
        "test/**/*",
        ".eslintrc.cjs",
        "*.config.js",
        "src/vite-env.d.ts",
        "src/main.tsx",
        "src/App.tsx",
        "src/Types/**/*",
        "src/constants/**/*",
        "**/*.validators.ts",
      ],
    },
  },
});
