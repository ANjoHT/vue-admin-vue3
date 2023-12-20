import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
// 引入 router
import router from "./router/index.ts";
// 引用element-plu
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
// 注册 所有的 el 图标
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
// 引入pinia
import pinia from "@/store/store.ts";
// pinia持久化插件
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
// 引入svg
import "virtual:svg-icons-register";
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

function useTable (app: any) {
  app.use(VXETable)
}

pinia.use(piniaPluginPersistedstate);
app.use(router).use(pinia).use(ElementPlus, { locale: zhCn }).use(ElementPlus).use(useTable).mount("#app");
