import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

// Definition typée du tableau de routes
const routes: RouteRecordRaw[] = [
    // Nouvelle manière avec lazy loading
    {
        path: '/',
        alias: '/home',
        component: () => import('../views/home.vue'),
    },
    {
        path: '/about',
        meta: {
            title: 'About',
        },
        component: () => import('../views/about.vue'),
    },
    {
        path: '/services',
        name: 'services',
        component: () => import('../views/services.vue'),
    },
    {
        path: '/contact',
        component: () => import('../views/contact.vue'),
    },
    {
        path: '/interpolation',
        component: () => import('../views/interpolation.vue'),
    },
    {
        path: '/userData',
        component: () => import('../views/userData.vue'),
    },
    {
        path: '/TpCount',
        component: () => import('../views/TpCount.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;