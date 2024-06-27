import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import svgr from "vite-plugin-svgr";
import { imagetools } from "vite-imagetools";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    imagetools(),
    svgr({
      include: "**/*.svg?react",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@constants": path.resolve(__dirname, "./src/constants"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@libs": path.resolve(__dirname, "./src/libs"),
      "@routes": path.resolve(__dirname, "./src/routes"),
      "@sections": path.resolve(__dirname, "./src/sections"),
      "@store": path.resolve(__dirname, "./src/store"),
      "@types": path.resolve(__dirname, "./src/types"),
    },
  },
});
