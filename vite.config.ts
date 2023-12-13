import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import unoCss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    unoCss({
      configFile: './uno.config.ts'
    })
  ],
})
