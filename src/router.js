import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

Vue.use(Router)

const Home = () => import('./components/Home.vue')
const Login = () => import('./components/Login.vue')

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
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: {
                requiresAuth: false,
                title: 'Login'
            }
        }
    ]
})

router.beforeEach((to, from, next) => {
    
    if(!store.state.auth.token && to.matched.some(record => record.meta.requiresAuth)){
        next({
            path: '/login',
            query: {
                    redirect: to.fullPath,
            },
        })
    }else if (to.name === 'login' && store.state.auth.token) {
        next({
            path: '/',
        })
    }else{
        next()
    }
})

export default router

