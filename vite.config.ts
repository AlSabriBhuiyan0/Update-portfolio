import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Base path: Use root for custom domain, or '/system-focus/' for GitHub Pages subdirectory
  base: '/',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Spline/Three runtime is ~4.6 MB and cannot be split; suppress warning for that chunk
    chunkSizeWarningLimit: 5000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-dom') || id.includes('react-router')) {
              return 'react-vendor';
            }
            if (id.includes('@radix-ui')) {
              return 'radix-ui';
            }
            if (id.includes('framer-motion') || id.includes('/motion/')) {
              return 'motion';
            }
            if (id.includes('lucide-react')) {
              return 'lucide';
            }
            if (id.includes('recharts')) {
              return 'recharts';
            }
            if (id.includes('three') || id.includes('@splinetool')) {
              return 'three-spline';
            }
            if (id.includes('@tanstack/react-query')) {
              return 'query';
            }
            return 'vendor';
          }
        },
      },
    },
  },
}));
