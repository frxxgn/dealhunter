import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    // El alias "@/..." se define una sola vez en tsconfig.app.json ("paths").
    tsconfigPaths: true,
  },
})
