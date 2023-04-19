import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server:{
    open:true,
    host:'0.0.0.0',
    // 是否开启https
    https:false,
    proxy:{
      '/api':{
        target:'https://yhf.kgcure.com/prod-api',
        changeOrigin:true,
        // 路径重写，不重写也能调通，但是后端会报错404
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
