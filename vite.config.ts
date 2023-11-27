import { defineConfig } from "vite";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), "src/assets/img/svg")],
      symbolId: "icon-[name]",
    }),
  ],
  resolve: {
    // Vite路径别名配置
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: "0.0.0.0",
    port: 8080, // 端口号
    open: true, // 是否自动打开浏览器
    proxy:{
      '/api':{
        target:'http://localhost:8888',
        changeOrigin:true,
        rewrite:(path) => path.replace(/^\/api/,'')
      }
    }
  },
  base: "./",
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
