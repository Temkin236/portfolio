import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import fs from "fs";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    react(),
    tailwindcss(),
    {
      name: "copy-404-html",
      closeBundle() {
        const distDir = path.resolve(import.meta.dirname, "./dist");
        const indexPath = path.resolve(distDir, "index.html");
        const notFoundPath = path.resolve(distDir, "404.html");
        if (fs.existsSync(indexPath)) {
          fs.copyFileSync(indexPath, notFoundPath);
        }
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:8000",
        changeOrigin: true,
      },
    },
  },
  build: {
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react") || id.includes("react-dom") || id.includes("react-router-dom")) {
              return "vendor";
            }
            if (id.includes("framer-motion") || id.includes("canvas-confetti")) {
              return "animations";
            }
            if (id.includes("lucide-react")) {
              return "icons";
            }
          }
        }
      }
    }
  }
});
