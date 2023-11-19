import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 2000,
    proxy: {
      "/api": {
        target: "https://mern-auth-api-bkrg.onrender.com/",
        changeOrigin: true,
      },
    },
  },
});
