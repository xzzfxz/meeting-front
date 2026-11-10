import { createRouter, createWebHashHistory, type RouteRecordRaw } from "vue-router";

import Index from "@/views/index/index.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Index,
    redirect: "/meetingReserve",
    children: [
      {
        path: "meetingReserve",
        name: "meetingReserve",
        component: () => import("@/views/meetingReserve/index.vue"),
      },
      {
        path: "myReserve",
        name: "myReserve",
        component: () => import("@/views/myReserve/index.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
