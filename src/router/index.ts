import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import {projectAuth} from "@/firebase/config";

// Auth guard

const requireAuth = (to: string, from: string, next: Function) => {
    const user = projectAuth.currentUser;

    if (!user) {
        next({name: 'home'})
    } else {
        next();
    }

}

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/chatroom',
            name: 'chatroom',
            beforeEnter: requireAuth,
            component: () => import('../views/Chatroom.vue')
        }
    ]
})

export default router
