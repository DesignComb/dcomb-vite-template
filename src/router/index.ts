import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHistory } from 'vue-router'
const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name:"Home",
        component: () => import("../views/home/index.vue"),
    },
    {
        path: "/about",
        name:"About",
        component: () => import("../views/about/index.vue"),
    },
    {
        path: "/404",
        name: "ErrorPage",
        component: () => import("../views/errorPages/index.vue"),
    },
]

// createRouter
const router = createRouter({
    history: createWebHistory(),
    routes //Router List
})
export default router