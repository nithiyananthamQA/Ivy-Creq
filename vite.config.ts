import { defineConfig } from 'vite'
import path from 'path'
import fs from 'fs'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

const figmaAssetResolver = {
  name: 'figma-asset-resolver',
  resolveId(source: string) {
    if (source.startsWith('figma:asset/')) {
      const filename = source.replace('figma:asset/', '');
      // Prefer WebP over PNG for much smaller file sizes
      const webpFile = filename.replace(/\.png$/, '.webp');
      const webpPath = path.resolve(__dirname, `./src/assets/${webpFile}`);
      if (fs.existsSync(webpPath)) {
        return webpPath;
      }
      return path.resolve(__dirname, `./src/assets/${filename}`);
    }
    return null;
  },
};

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    figmaAssetResolver,
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],

  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-router': ['react-router'],
          'vendor-slider': ['react-slick'],
          'vendor-icons': ['lucide-react'],
        },
      },
    },
  },
})
