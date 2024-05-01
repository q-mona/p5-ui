import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
    { path: '/', component: () => import('../views/intro.vue') },
    { path: '/intro', component: () => import('../views/intro.vue') },
    { path: '/setup', component: () => import('../views/setup.vue') },
    { path: '/title', component: () => import('../views/title.vue') },
    { path: '/text', component: () => import('../views/text.vue') },
    { path: '/button', component: () => import('../views/button.vue') },
    // { path: '/input', component: () => import('../views/input.vue') },
    { path: '/switch', component: () => import('../views/switch.vue') },
    { path: '/slider', component: () => import('../views/slider.vue') },
    { path: '/message', component: () => import('../views/message.vue') },
    { path: '/noti', component: () => import('../views/notification.vue') },
    { path: '/backtop', component: () => import('../views/backtop.vue') },
    { path: '/divider', component: () => import('../views/divider.vue') },
    { path: '/css', component: () => import('../views/css.vue') },
    { path: '/icon', component: () => import('../views/icon.vue') },
    { path: '/upload', component: () => import('../views/upload.vue') },
    { path: '/crowd', component: () => import('../views/crowd.vue') }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})


export default router
