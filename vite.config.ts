import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  publicDir: "Public",
  server: {
    watch: {
      // Large/locked videos in Public crash the Windows file watcher
      ignored: ["**/Public/**"],
    },
  },
});
