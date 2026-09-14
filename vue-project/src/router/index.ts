import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    alias:'/home',
    component: () => import('../views/home.vue')
  },
  {
    path: '/inscription',
    component: () => import('../views/inscription.vue')
  },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;