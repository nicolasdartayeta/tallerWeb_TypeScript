import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
      interval: 1000, // i resolved with this
    },
    host: true,
    port: 3001
  },
  preview: {
    host: true,
    port: 3001
  } 
})
