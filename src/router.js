import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('./components/Home.vue')

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                requiresAuth: true,
                title: 'Home',
            },
        },
    ]
})

export default router

