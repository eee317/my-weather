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
                path:'/weatherTable',
                name: 'WeatherTable',
                component: () => import('@/views/WeatherTable.vue'),
            },
            {
                path:'/earthquake/:EarthquakeNo',
                name: 'Earthquake',
                component: () => import('@/views/EarthquakePage.vue'),
            },
            {
                path:'/questionnaire',
                name: 'Questionnaire',
                component: () => import('@/views/Questionnaire.vue'),
            },
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