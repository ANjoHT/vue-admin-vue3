// 引入路由
import { createRouter, createWebHistory } from "vue-router";
// 路由数据
let routes = [
  // 默认路由:进入项目 默认进入 /index 页面
  {
    path: "/",
    redirect: "/index",
  },
  {
    path: "/index",
    name: "index",
    // 使用import可以路由懒加载，如果不使用，太多组件一起加载会造成白屏
    component: () => import("@/view/index.vue"),
  },
];
// 路由
const router = createRouter({
  history: createWebHistory(),
  routes,
});
// 导出
export default router;
