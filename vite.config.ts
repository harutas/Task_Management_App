import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vuetify({ styles: 'sass' })],
  base: './',
  build: {
    outDir: resolve(__dirname, 'docs'),
    assetsDir: './',
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
