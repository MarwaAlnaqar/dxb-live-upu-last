import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// export default defineConfig({
//    base: '/dxb-live-upu-last/',
//   plugins: [react()],
// })
export default defineConfig({
    base: '/dxb-live-upu-last/',
  server: {
    proxy: {
      "/api": {
        target: "https://secure.electionbuddy.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "")
      }
    }
  },
    plugins: [react()],
});