// 引入路由
import { createRouter, createWebHistory } from "vue-router";
import layout from "@/layout/index.vue";
import { routerData } from "@/utils/router.ts";
import pinia from "@/store/store";
import { useStore } from "@/store/index.ts";

const store = useStore(pinia);
store.addRouter(routerData);
// 路由数据
let routes = [
  /**
   * redirect 默认路由:进入项目 默认进入 /index 页面
   * hidden 是否在路由栏显示
   * meta : {
      noCache: true                   // 如果设置为true，则不会被 <keep-alive> 缓存(默认 false)
      title: 'title'                  // 设置该路由在侧边栏和面包屑中展示的名字
      icon: 'svg-name'                // 设置该路由的图标，对应路径src/assets/icons/svg
      breadcrumb: false               // 如果设置为false，则不会在breadcrumb面包屑中显示
      activeMenu: '/system/user'      // 当路由设置了该属性，则会高亮相对应的侧边栏。
    }
   */
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/index",
    id: "1",
    component: layout,
    children: [...store.route],
  },
  {
    id: "2",
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
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next();
  } else {
    const token = localStorage.getItem('token');
    if (!token) {
      next('/login');
    } else {
      next();
    }
  }
});

// 导出
export default router;
