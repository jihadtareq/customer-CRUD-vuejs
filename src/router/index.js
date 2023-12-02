import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/customers',
      name: 'customers',
      component: () => import('../views/customers/CustomerIndex.vue')
    },
    {
      path: '/customers/create',
      name: 'customerCreate',
      component: () => import('../views/customers/CustomerCreate.vue')
    },
    {
      path: '/customers/:id/edit',
      name: 'customerEdit',
      component: () => import('../views/customers/CustomerEdit.vue'),
      props:true,
    },
    {
      path: '/customers/:id/show',
      name: 'customerShow',
      component: () => import('../views/customers/CustomerShow.vue')
    }
  ]
})

export default router
