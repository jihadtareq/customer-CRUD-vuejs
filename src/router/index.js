import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'customers',
      component: () => import('../components/customers/CustomerIndex.vue')
    },
    {
      path: '/customers/create',
      name: 'customerCreate',
      component: () => import('../components/customers/CustomerCreate.vue')
    },
    {
      path: '/customers/:id/edit',
      name: 'customerEdit',
      component: () => import('../components/customers/CustomerEdit.vue'),
      props:true,
    },
    {
      path: '/customers/:id/show',
      name: 'customerShow',
      component: () => import('../components/customers/CustomerShow.vue')
    }
  ]
})

export default router
