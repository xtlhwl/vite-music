import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src') // 设置‘@’指向 'src' 目录
    }
  },
  base: './', // 打包路径
  server: {
    port: 4000, // 设置服务端口
    open: true, // 设置服务器启动时是否自动打开浏览器
    cors: true // 允许跨域

    // 设置代理
    // proxy:{
    //     '/api':{
    //         target:'http://xxx.xxx.xxx:8080',
    //         changeOrigin:true,
    //         secure:false,
    //         rewrite:(path) => path.replace('/api/','/')
    //     }
    // }
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${resolve(
            'src/common/style/variable.less'
          )}";`
        },
        javascriptEnabled: true
      }
    }
  }
})
