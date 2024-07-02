import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'franciscoborn.github.io/coderhouse-react/',
  plugins: [react()],
})
