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

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(ElementPlus, { locale: zhCn }).use(router).mount("#app");
