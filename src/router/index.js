import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/article-view/:id',
        name: 'article-view',
        component: () => import(/* webpackChunkName: "createArticle" */ '../views/CreateArticle.vue')
    },
    {
        path: '/library',
        name: 'library',
        component: () => import(/* webpackChunkName: "library" */ '../views/Library.vue')
    },
    {
        path: '/folder',
        name: 'folder',
        component: () => import(/* webpackChunkName: "folder" */ '../views/Folder.vue')
    },
    {
        path: '/themes',
        name: 'themes',
        component: () => import(/* webpackChunkName: "themes" */ '../views/Themes.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
