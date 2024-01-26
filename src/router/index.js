import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: () => import('../views/HomeView.vue'),
      meta: {
        title: 'HomeView'
      },
      children: [
        {
          path: ':modal'
        }
      ]
    }
  ]
})

export default router
