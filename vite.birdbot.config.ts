import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

function birdbotDevEntry(): Plugin {
  return {
    name: "birdbot-dev-entry",
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        if (req.url === "/" || req.url === "/index.html") {
          req.url = "/birdbot.html";
        }
        next();
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), birdbotDevEntry()],
  publicDir: "Public",
  server: {
    port: 5180,
    strictPort: true,
    open: "/",
  },
  build: {
    outDir: "dist-birdbot",
    rollupOptions: {
      input: {
        birdbot: resolve(__dirname, "birdbot.html"),
      },
    },
  },
});
