import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const accountRoutes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/account/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/account/Register.vue"),
  },
];

const authRoutes: Array<RouteRecordRaw> = [
  {
    path: "/404",
    name: "404",
    component: () => import("../views/account/Login.vue"),
  },
];

// export const indexRoutes: Array<RouteRecordRaw> = [
//   {
//     path: "/",
//     name: "Index",
//     component: () => import("../views/index/index.vue"),
//     meta: {
//       icon: "SmileOutlined",
//       title: "首页",
//     },
//   },
// ];

const routes: Array<RouteRecordRaw> = [
  ...accountRoutes,
  ...authRoutes,
  // ...indexRoutes,
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
