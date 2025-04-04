import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  assetsInclude: ["**/*.node"],
  plugins: [react()],
  server: {
    open: true,
  },
  resolve: {
    alias: {
      "@": path.resolve("./src"),
    },
  },
});
