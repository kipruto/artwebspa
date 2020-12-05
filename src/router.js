import Vue from 'vue';
import VueRouter from 'vue-router';
import Portfolio from './views/Portfolio'
import Gallery from './views/Gallery'
import Login from './views/Login'
import Register from './views/Register'
import Home from './views/Homepage'

Vue.use(VueRouter);

const router = new VueRouter({
    name: 'VueRouter',
    routes: [
        {
            name: 'home',
            path: '/',
            component: Home,
        },
        {
            name: 'portfolio',
            path: '/portfolio',
            component: Portfolio
        },
        {
            name: 'gallery',
            path:'/gallery',
            component: Gallery
        },
        {
            name: 'register',
            path: '/register',
            component: Register
        },
        {
            name: 'login',
            path: '/login',
            component: Login
        }
    ]
});

export default router;