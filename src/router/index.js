import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Diu from "../views/Diu.vue";
import PregradoDiurnoCarreras from "../views/pregrado-diurno/Carreras.vue";

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
        {
            path: '/pregrado-diurno/carreras',
            name: 'pregrado-diurno-carreras',
            component: PregradoDiurnoCarreras
        }
    ]
})

export default router;