export const routerData = [
  {
    id: "1-1",
    path: "/index",
    name: "index",
    icon: "HomeFilled",
    meta: {
      title: "首页",
    },
    url: "/index",
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
        path: "/userList",
        name: "userList",
        icon: "Avatar",
        id: "1-2-1",
        meta: {
          title: "用户列表",
        },
        url: "user/list",
      },
      {
        path: "/userSet",
        name: "userSet",
        icon: "Tools",
        id: "1-2-2",
        meta: {
          title: "设置",
        },
        url: "user/set",
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
        url: "admin/info",
      },
      {
        path: "/adminSet",
        name: "adminSet",
        icon: "Tools",
        id: "2-2-2",
        meta: {
          title: "系统设置",
        },
        url: "admin/set",
      },
    ],
  },
  {
    path: "/sku",
    name: "sku",
    id: "3-2",
    meta: {
      title: "仓库管理",
    },
    icon: "ShoppingTrolley",
    children: [
      {
        path: "/skuList",
        name: "skuList",
        icon: "goods",
        id: "3-2-1",
        meta: {
          title: "货物管理",
        },
        url: "sku/skuList",
      },
      {
        path: "/manage",
        name: "manage",
        icon: "goods",
        id: "3-2-2",
        meta: {
          title: "库存管理",
        },
        url: "sku/manage",
      },
    ],
  }
 
];
