import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import HomePage from '../views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //LOGIN
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    //HOMEPAGE
    {
      path: '/homepage',
      name: 'homepage',
      component: HomePage
    },
    //PAGINAS DE LISTADOS
    {
      path: '/borrowpage',
      name: 'borrowpage',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/BorrowPage.vue')
    },
    {
      path: '/bookpage',
      name: 'bookpage',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/BookPage.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Profile.vue')
    },
    //PAGINAS DE CREACION Y UPDATE
    {
      path: '/createborrowpage',
      name: 'createborrowpage',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CreateBorrowPage.vue')
    },
    {
      path: '/createbookpage',
      name: 'createbookpage',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CreateBookPage.vue')
    },
    {
      path: '/updateborrowpage',
      name: 'updateborrowpage',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/UpdateBorrowPage.vue')
    },
    {
      path: '/updatebookpage',
      name: 'updatebookpage',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/UpdateBookPage.vue')
    },
    {
      path: '/updateprofile',
      name: 'updateprofile',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/UpdateProfile.vue')
    },
  ]
})

export default router
