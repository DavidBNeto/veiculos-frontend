/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
    host: true,
    strictPort: true,
    port: 8080,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./tests/setup.ts"],
    coverage: {
      provider: "c8",
      include: ["src/**/*"],
      exclude: [
        "src/components/**/types.ts",
        "src/pages/**/types.ts",
        "src/globals.d.ts",
        "src/vite-env.d.ts",
        "src/assets/**/*",
        "src/index.tsx",
      ],
      reporter: ["text", "json", "html"],
      all: true,
      lines: 79,
      functions: 79,
      branches: 79,
      statements: 79,
    },
  },
})
