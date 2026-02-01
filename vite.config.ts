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
    // Vendor chunk includes Three/Spline (~4.6 MB) so React-dependent libs share one React instance
    chunkSizeWarningLimit: 6000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Don't split React into a separate chunk - packages in vendor (e.g. react-hook-form,
            // next-themes, sonner) need the same React instance; splitting caused createContext undefined
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
            // Don't split three/@splinetool - @splinetool/react-spline uses React.forwardRef and
            // must share the same React instance as vendor; splitting caused forwardRef undefined
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
