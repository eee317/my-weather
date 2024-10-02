import { createRouter, createWebHashHistory } from 'vue-router';
const routes = [
    {
        path: '/',
        name: 'Layout',
        component: () => import('@/views/layout/Layout.vue'),
        children:[
            {
                path:'/',
                name: 'Index',
                component: () => import('@/views/Index.vue'),
            },
            {
                path:'/WeatherTable',
                name: 'WeatherTable',
                component: () => import('@/views/WeatherTable.vue'),
            },
            {
                path:'/Earthquake/:EarthquakeNo',
                name: 'Earthquake',
                component: () => import('@/views/EarthquakePage.vue'),
            }
        ],
    }
];
const router = createRouter({
    history: createWebHashHistory(),
    linkActiveClass: 'active',
    routes,
    scrollBehavior() {
        return { top: 0, behavior: 'smooth' };
    },
});

export default router;