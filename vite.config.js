import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    include: ['flowbite'],
  },
  build: {
    commonjsOptions: {
      include: [/flowbite/, /node_modules/],
    },
  },
})