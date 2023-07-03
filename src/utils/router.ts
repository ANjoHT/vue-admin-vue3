export const routerData = [
  {
    id: "1-1",
    path: "/index",
    name: "index",
    icon: "HomeFilled",
    meta: {
      title: "首页",
    },
    component: () => import("@/view/index.vue"),
  },
  {
    path: "/user",
    name: "user",
    id: "1-2",
    icon: "UserFilled",
    meta: {
      title: "账号管理",
    },
    children: [
      {
        path: "/userInfo",
        name: "userInfo",
        icon: "Avatar",
        id: "1-2-1",
        meta: {
          title: "个人中心",
        },
        component: () => import("@/view/user/info/index.vue"),
      },
      {
        path: "/userSet",
        name: "userSet",
        icon: "Tools",
        id: "1-2-2",
        meta: {
          title: "设置",
        },
        component: () => import("@/view/user/set/index.vue"),
      },
    ],
  },
  {
    path: "/admin",
    name: "admin",
    id: "2-2",
    meta: {
      title: "系统管理",
    },
    icon: "Monitor",
    children: [
      {
        path: "/adminInfo",
        name: "adminInfo",
        icon: "Platform",
        id: "2-2-1",
        meta: {
          title: "系统信息",
        },
        component: () => import("@/view/admin/info/index.vue"),
      },
      {
        path: "/adminSet",
        name: "adminSet",
        icon: "Tools",
        id: "2-2-2",
        meta: {
          title: "系统设置",
        },
        component: () => import("@/view/admin/set/index.vue"),
      },
    ],
  },
];
