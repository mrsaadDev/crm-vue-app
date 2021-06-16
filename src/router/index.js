import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [

  {
    path: '/register',
    name: 'register',
    meta: {layout: 'empty'},
    component: () => import('../views/Register.vue')                                                                         
  },
  {
    path: '/login',
    name: 'login',
    meta: {layout: 'empty'},
    component: () => import('../views/Login.vue')                                                        
  },
  {
    path: '/',
    name: 'Home',
    meta: {layout: 'main'},
    component: Home
  },
 
  {
    path: '/orders',
    name: 'orders',
    meta: {layout: 'main'},
    component: () => import('../views/Orders.vue')                                                                         
  },
  {
    path: '/products',
    name: 'products',
    meta: {layout: 'main'},
    component: () => import('../views/Products.vue')                                                                   
  },
  {
    path: '/customers',
    name: 'customers',
    meta: {layout: 'main'},
    component: () => import('../views/Customers.vue')                                                                         
  },
  {
    path: '/reports',
    name: 'reports',
    meta: {layout: 'main'},
    component: () => import('../views/Reports.vue')                                                           
  },
  {
    path: '/integrations',
    name: 'integrations',
    meta: {layout: 'main'},
    component: () => import('../views/Integrations.vue')                                                                         
  },
  {
    path: '/history',
    name: 'history',
    meta: {layout: 'main'},
    component: () => import('../views/History.vue')
  },
  {
    path: '/company',
    name: 'company',
    meta: {layout: 'main'},
    component: () => import('../views/Company.vue')
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
