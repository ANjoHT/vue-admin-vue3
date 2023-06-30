// 引入路由
import { createRouter, createWebHistory } from "vue-router";
import layout from "@/layout/index.vue";
// 路由数据
let routes = [
  // 默认路由:进入项目 默认进入 /index 页面
  {
    path: "/",
    redirect: "/index",
  },
  {
    path: "/index",
    component: layout,
    children: [
      {
        path: "/index",
        name: "index",
        component: () => import("@/view/index.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    hidden: true,
    component: () => import("@/view/login.vue"),
  },
];
// 路由
const router = createRouter({
  history: createWebHistory(),
  routes,
});
// 导出
export default router;
