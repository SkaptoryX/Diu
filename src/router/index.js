import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Diu from "../views/Diu.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/diu',
            name: 'diu',
            component: Diu
        },
    ]
})

export default router;