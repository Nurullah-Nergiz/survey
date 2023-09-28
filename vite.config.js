import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
   resolve: {
      alias: {
         // eslint-disable-next-line no-undef
         "@": path.resolve(__dirname, "./src"),
         // eslint-disable-next-line no-undef
         "@assets": path.resolve(__dirname, "./src/assets"),
         // eslint-disable-next-line no-undef
         "@components": path.resolve(__dirname, "./src/components"),
      },
   },
   plugins: [react()],
});
