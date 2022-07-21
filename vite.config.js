import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    // 是否自动打开浏览器
    open: true,
    // 服务器主机名，如果允许外部访问，可设置为"0.0.0.0"
    host: '127.0.0.1',
    // 服务器端口号
    port: 56438,
    // 设为 true ,若端口已被占用则会直接退出，而不是尝试下一个可用端口
    strictPort: false,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 两种方式都可以
        additionalData: '@import "@/styles/_var.scss";'
        // additionalData: '@use "@/styles/_var.scss" as *;'
      }
    }
  },
})
